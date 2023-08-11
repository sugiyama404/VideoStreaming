package presentation

import (
	pb "app/cmd/domain/pb/s3image"
	"app/cmd/interface/repository"
	"app/cmd/usecase"
	"context"
	"os"

	"github.com/aws/aws-sdk-go/service/s3"
)

type S3ImageServer struct {
	Interactor usecase.S3UseCase
	pb.UnimplementedImagetransporterServer
}

func InteractorS3Image(conn *s3.S3) *S3ImageServer {
	return &S3ImageServer{
		Interactor: usecase.S3UseCase{
			Repository: repository.S3Repository{
				Conn: conn,
			},
		},
	}
}

func (s *S3ImageServer) ImageUpload(ctx context.Context, in *pb.ImageUpoadRequest) (*pb.Message, error) {
	f, err := os.Create("/tmp/" + in.GetName())
	if err != nil {
		return nil, err
	}
	defer f.Close()

	_, err = f.Write(in.GetImage())
	if err != nil {
		return nil, err
	}

	err = s.Interactor.ImageUpload(in.GetName(), f)
	if err != nil {
		return nil, err
	}
	os.Remove("/tmp/" + in.GetName())
	return &pb.Message{Message: "success"}, nil
}

func (s *S3ImageServer) ImageDownload(ctx context.Context, in *pb.ImageDownloadRequest) (*pb.ImageDownloadResponse, error) {
	res, err := s.Interactor.ImageDownload(in.GetName())
	if err != nil {
		return nil, err
	}
	res_c := res.Bytes()
	return &pb.ImageDownloadResponse{Image: res_c}, err
}
