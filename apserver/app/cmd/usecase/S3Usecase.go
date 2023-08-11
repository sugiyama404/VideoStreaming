package usecase

import (
	"app/cmd/interface/repository"
	"bytes"
	"fmt"
	"os"
)

type S3UseCase struct {
	Repository repository.S3Repository
}

func (u *S3UseCase) ImageUpload(key string, imageFile *os.File) error {
	keyName := createKeyFilePath(true, key)
	return u.Repository.UploadToS3(imageFile, keyName)
}

func (u *S3UseCase) ImageDownload(key string) (*bytes.Buffer, error) {
	keyName := createKeyFilePath(true, key)
	return u.Repository.DownloadToS3(keyName)
}

func (u *S3UseCase) VideoUpload(key string, imageFile *os.File) error {
	keyName := createKeyFilePath(false, key)
	return u.Repository.UploadToS3(imageFile, keyName)
}

func (u *S3UseCase) VideoDownload(key string) (*bytes.Buffer, error) {
	keyName := createKeyFilePath(false, key)
	fmt.Println("keyName", keyName)
	return u.Repository.DownloadToS3(keyName)
}

// private function
func createKeyFilePath(flag bool, key string) string {
	if flag {
		return os.Getenv("S3_PATH_IMG") + "/" + key
	} else {
		return os.Getenv("S3_PATH_MOVIE") + "/" + key
	}
}
