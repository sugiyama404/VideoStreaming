package usecase

import (
	"app/cmd/domain/model"
	"app/cmd/interface/repository"
)

type VideoUseCase struct {
	Repository repository.VideoRepository
}

func (u *VideoUseCase) CreateByID(id int) (model.Video, error) {
	return u.Repository.SaveByID(id)
}
