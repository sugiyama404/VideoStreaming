package repository

import (
	"bytes"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"
)

type S3Repository struct {
	Conn *s3.S3
}

func (s *S3Repository) UploadToS3(imageFile *os.File, keyName string) error {
	params := &s3.PutObjectInput{
		Bucket: aws.String(os.Getenv("S3_BUCKET")),
		Key:    aws.String(keyName),
		Body:   imageFile,
	}
	_, err := s.Conn.PutObject(params)
	if err != nil {
		return err
	}
	return err
}

func (s *S3Repository) DownloadToS3(keyName string) (*bytes.Buffer, error) {
	params := &s3.GetObjectInput{
		Bucket: aws.String(os.Getenv("S3_BUCKET")),
		Key:    aws.String(keyName),
	}

	image, err := s.Conn.GetObject(params)
	if err != nil {
		return nil, err
	}
	buf := new(bytes.Buffer)
	buf.ReadFrom(image.Body)
	return buf, err
}
