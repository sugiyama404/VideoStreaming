package driver

import (
	pb_s3image "app/cmd/domain/pb/s3image"
	pb_s3video "app/cmd/domain/pb/s3video"
	pb_user "app/cmd/domain/pb/user"
	"app/cmd/interface/presentation"
	"log"
	"net"

	"github.com/aws/aws-sdk-go/service/s3"

	"github.com/jinzhu/gorm"
	"google.golang.org/grpc"
)

func Init(lis net.Listener, conn *gorm.DB, s3Client *s3.S3) {
	s := grpc.NewServer()
	user_server := presentation.InteractorUser(conn)
	s3image_server := presentation.InteractorS3Image(s3Client)
	s3video_server := presentation.InteractorS3Video(s3Client, conn)

	pb_user.RegisterProfileServer(s, user_server)
	pb_s3image.RegisterImagetransporterServer(s, s3image_server)
	pb_s3video.RegisterVideotransporterServer(s, s3video_server)

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
