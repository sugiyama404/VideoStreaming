package presentation

import (
	"app/cmd/domain/form"
	pb "app/cmd/domain/pb/s3video"
	"app/cmd/interface/repository"
	"app/cmd/usecase"
	"context"
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/google/uuid"

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
	filesize := 0
	var imagedata []byte

	for {
		req, err := stream.Recv()
		if req.GetId() != 0 {
			userid = int(req.GetId())
		}
		if req.GetSize() != 0 {
			filesize = int(req.GetSize())
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

	fmt.Println("userid: ", userid)
	fmt.Println("filesize: ", filesize)
	video, err := s.Interactor.CreateByIDAndSize(userid, filesize)
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

func (s *S3VideoServer) VideoDeteilUpload(ctx context.Context, in *pb.VideoDeteilUpoadRequest) (*pb.VideoDeteilUpoadReplay, error) {
	tags_arr := in.GetTags()
	tags := strings.Join(tags_arr, ",")
	uuid, err := uuid.Parse(in.GetVideoUuid())
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	form := form.VideoForm{
		UUID:         uuid,
		Title:        in.GetTitle(),
		Explain:      in.GetExplain(),
		Tags:         tags,
		Category:     in.GetCategory(),
		TbnExtension: in.GetExtension(),
		TbnOverSize:  in.GetOversize(),
	}

	err = s.Interactor.Save(form)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	video, err := s.Interactor.GetByUUID(uuid)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return &pb.VideoDeteilUpoadReplay{Uuid: video.TbnUuid.String()}, nil
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

func (s *S3VideoServer) VideoList(ctx context.Context, in *pb.Empty) (*pb.VideoListReplay, error) {
	videos, err := s.Interactor.Show()
	if err != nil {
		return nil, err
	}

	tasks := make([]*pb.VideoListObjects, 0)
	for _, v := range videos {
		tasks = append(tasks, &pb.VideoListObjects{
			Id:       int64(v.ID),
			Title:    v.Title,
			Category: v.Category,
			Tags:     strings.Split(v.Tags, ","),
			Explain:  v.Explain,
		})

	}
	return &pb.VideoListReplay{Videolistobject: tasks}, nil
}

func (s *S3VideoServer) VideoHomeList(ctx context.Context, in *pb.Empty) (*pb.VideoHomeListReplay, error) {
	videos, err := s.Interactor.ShowHome(6)
	if err != nil {
		return nil, err
	}

	tasks := make([]*pb.VideoHomeListObjects, 0)
	for _, v := range videos {
		tasks = append(tasks, &pb.VideoHomeListObjects{
			Uuid:    v.UUID.String(),
			Title:   v.Title,
			Explain: v.Explain,
			Imguuid: v.TbnUuid.String(),
		})
	}
	return &pb.VideoHomeListReplay{Videohomelistobjects: tasks}, nil
}
