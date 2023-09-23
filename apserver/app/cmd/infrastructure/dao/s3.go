package dao

import (
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"

	"github.com/aws/aws-sdk-go/aws/awserr"
)

func InitS3() (*s3.S3, error) {
	s, err := session.NewSession()
	if err != nil {
		return nil, err
	}

	acess_key := os.Getenv("S3_ACCESS_KEY")
	secret_key := os.Getenv("S3_SECRET_KEY")
	cfg := aws.Config{
		Credentials:      credentials.NewStaticCredentials(acess_key, secret_key, ""),
		Region:           aws.String(os.Getenv("S3_REGION")),
		Endpoint:         aws.String(os.Getenv("S3_ENDPOINT")),
		S3ForcePathStyle: aws.Bool(true),
	}
	return s3.New(s, &cfg), nil
}

func NewS3Bucket(svc *s3.S3) {
	bucket := os.Getenv("S3_BUCKET")
	exists, err := existsBucket(svc, bucket)
	if err != nil {
		fmt.Printf("failed to exists bucket: %s\n", err)
	}
	if !(exists) {
		if err := createBucket(svc, bucket); err != nil {
			fmt.Printf("failed to create bucket: %s\n", err)
		}
	}
}

// private functions
func existsBucket(svc *s3.S3, bucket string) (bool, error) {
	_, err := svc.HeadBucket(&s3.HeadBucketInput{
		Bucket: aws.String(bucket),
	})
	if err != nil {
		if aerr, ok := err.(awserr.Error); ok {
			switch aerr.Code() {
			case "NotFound":
				return false, nil
			default:
				return false, err
			}
		} else {
			return false, err
		}
	}
	return true, nil
}

func createBucket(svc *s3.S3, bucket string) error {
	_, err := svc.CreateBucket(&s3.CreateBucketInput{
		Bucket: aws.String(bucket),
	})
	return err
}
