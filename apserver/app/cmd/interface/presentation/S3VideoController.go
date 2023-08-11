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
)

type S3VideoServer struct {
	Interactor usecase.S3UseCase
	pb.UnimplementedVideotransporterServer
}

func InteractorS3Video(conn *s3.S3) *S3VideoServer {
	return &S3VideoServer{
		Interactor: usecase.S3UseCase{
			Repository: repository.S3Repository{
				Conn: conn,
			},
		},
	}
}

func (s *S3VideoServer) VideoUpload(stream pb.Videotransporter_VideoUploadServer) error {
	fmt.Println("VideoUpload")
	filename := ""
	var imagedata []byte

	for {
		req, err := stream.Recv()
		if req.GetName() != "" {
			filename = req.GetName()
		}
		if req.GetData() != nil {
			imagedata = append(imagedata, req.GetData()...)
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Println("err")
			fmt.Println(err)
			return err
		}
	}

	f, err := os.Create("/tmp/" + filename)
	if err != nil {
		return err
	}
	defer f.Close()

	err = os.WriteFile("/tmp/"+filename, imagedata, 0644)
	if err != nil {
		fmt.Println(err)
		return err
	}

	err = s.Interactor.VideoUpload(filename, f)
	if err != nil {
		fmt.Println(err)
		return err
	}
	os.Remove("/tmp/" + filename)
	return stream.SendAndClose(&pb.Message{Message: "success!!!"})
}

func (s *S3VideoServer) VideoStreamDownload(ctx context.Context, in *pb.VideoDownloadRequest) (*pb.VideoDownloadReplay, error) {
	data, err := s.Interactor.VideoDownload(in.GetName())
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
