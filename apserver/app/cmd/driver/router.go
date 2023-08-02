package driver

import (
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

	pb_user.RegisterProfileServer(s, user_server)

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
