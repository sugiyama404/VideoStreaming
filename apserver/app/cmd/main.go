package main

import (
	"app/cmd/driver"
	"app/cmd/infrastructure/dao"
	"log"
	"net"
)

func main() {
	conn := dao.ConnectDB()
	dao.InitDB(conn)
	lis, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s3, err := dao.InitS3()
	if err != nil {
		log.Fatalf(err.Error())
	}
	dao.NewS3Bucket(s3)
	driver.Init(lis, conn, s3)

}
