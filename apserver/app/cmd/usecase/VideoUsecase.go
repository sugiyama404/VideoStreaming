package usecase

import (
	"app/cmd/domain/form"
	"app/cmd/domain/model"
	"app/cmd/interface/repository"

	"github.com/google/uuid"
)

type VideoUseCase struct {
	Repository repository.VideoRepository
}

func (u *VideoUseCase) Show() ([]model.Video, error) {
	return u.Repository.FindAll()
}

func (u *VideoUseCase) ShowHome(limit int) ([]model.Video, error) {
	return u.Repository.FindAllOrderByUpdatedAtDescLimit(limit)
}

func (u *VideoUseCase) CreateByIDAndSize(id int, size int) (model.Video, error) {
	return u.Repository.SaveByIDAndSize(id, size)
}

func (u *VideoUseCase) Save(form form.VideoForm) error {
	return u.Repository.Update(form)
}

func (u *VideoUseCase) GetByUUID(uuid uuid.UUID) (model.Video, error) {
	return u.Repository.FindByUUID(uuid)
}
