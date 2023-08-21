package usecase

import (
	"app/cmd/domain/form"
	"app/cmd/domain/model"
	"app/cmd/interface/repository"
)

type VideoUseCase struct {
	Repository repository.VideoRepository
}

func (u *VideoUseCase) CreateByIDAndSize(id int, size int) (model.Video, error) {
	return u.Repository.SaveByIDAndSize(id, size)
}

func (u *VideoUseCase) Save(form form.VideoForm) (model.Video, error) {
	return u.Repository.Update(form)
}
