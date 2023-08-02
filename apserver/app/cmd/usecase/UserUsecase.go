package usecase

import (
	"app/cmd/domain/form"
	"app/cmd/domain/model"
	"app/cmd/interface/repository"
)

type UserUseCase struct {
	Repository repository.UserRepository
}

func (u *UserUseCase) AuthUser(Email string) (model.User, error) {
	return u.Repository.FindByEmail(Email)
}

func (u *UserUseCase) GetAll() ([]model.User, error) {
	return u.Repository.FindAll()
}

func (u *UserUseCase) GetById(id int) (model.User, error) {
	return u.Repository.FindById(id)
}

func (u *UserUseCase) Create(form form.UserForm) (model.User, error) {
	return u.Repository.Save(form)
}

func (u *UserUseCase) Update(id int, form form.UserForm) (model.User, error) {
	return u.Repository.UpdateById(id, form)
}

func (u *UserUseCase) Delete(id int) error {
	return u.Repository.DeleteById(id)
}
