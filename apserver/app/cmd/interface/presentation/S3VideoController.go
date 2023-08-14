package presentation

import (
	pb "app/cmd/domain/pb/s3video"
	"app/cmd/interface/repository"
	"app/cmd/usecase"
	"context"
	"fmt"
	"io"
	"os"

	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/jinzhu/gorm"
)

type S3VideoServer struct {
	Interactor   usecase.VideoUseCase
	S3Interactor usecase.S3UseCase
	pb.UnimplementedVideotransporterServer
}

func InteractorS3Video(cs3 *s3.S3, conn *gorm.DB) *S3VideoServer {
	return &S3VideoServer{
		S3Interactor: usecase.S3UseCase{
			Repository: repository.S3Repository{
				Conn: cs3,
			},
		},
		Interactor: usecase.VideoUseCase{
			Repository: repository.VideoRepository{
				Conn: conn,
			},
		},
	}
}

func (s *S3VideoServer) VideoUpload(stream pb.Videotransporter_VideoUploadServer) error {
	fmt.Println("VideoUpload")
	userid := 0
	var imagedata []byte

	for {
		req, err := stream.Recv()
		if req.GetId() != 0 {
			userid = int(req.GetId())
		}
		if req.GetData() != nil {
			imagedata = append(imagedata, req.GetData()...)
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println(err)
			return err
		}
	}

	fmt.Println(userid)
	video, err := s.Interactor.CreateByID(userid)
	if err != nil {
		fmt.Println(err)
		return err
	}

	uuid_name := video.UUID.String()
	filename := uuid_name + ".mp4"
	fmt.Println(filename)

	f, err := os.Create("/tmp/" + filename)
	if err != nil {
		fmt.Println(err)
		return err
	}
	defer f.Close()

	err = os.WriteFile("/tmp/"+filename, imagedata, 0644)
	if err != nil {
		fmt.Println(err)
		return err
	}

	err = s.S3Interactor.VideoUpload(filename, f)
	if err != nil {
		fmt.Println(err)
		return err
	}
	os.Remove("/tmp/" + filename)
	return stream.SendAndClose(&pb.VideoUploadReplay{Newname: uuid_name})
}

func (s *S3VideoServer) VideoStreamDownload(ctx context.Context, in *pb.VideoDownloadRequest) (*pb.VideoDownloadReplay, error) {
	data, err := s.S3Interactor.VideoDownload(in.GetName())
	if err != nil {
		return nil, err
	}
	if data != nil {
		startbytes := in.GetStartbytes()
		endbytes := in.GetEndbytes()
		if startbytes > 0 {
			buf := make([]byte, startbytes)
			_, err := data.Read(buf)
			if err == io.EOF {
				return &pb.VideoDownloadReplay{Data: buf}, nil
			}
			if err != nil {
				return nil, err
			}
		}
		contentlength := endbytes - startbytes + 1
		buf := make([]byte, contentlength)
		_, err := data.Read(buf)
		if err == io.EOF {
			return &pb.VideoDownloadReplay{Data: buf}, nil
		}
		if err != nil {
			return nil, err
		}
		return &pb.VideoDownloadReplay{Data: buf}, nil
	}
	return nil, nil
}
