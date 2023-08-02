package repository

import (
	"app/cmd/domain/form"
	"app/cmd/domain/model"

	"github.com/jinzhu/gorm"
)

type UserRepository struct {
	Conn *gorm.DB
}

func (r *UserRepository) FindAll() ([]model.User, error) {
	users := []model.User{}
	err := r.Conn.Find(&users).Error
	return users, err
}

func (r *UserRepository) FindById(id int) (model.User, error) {
	user := model.User{}
	err := r.Conn.Find(&user, id).Error
	return user, err
}

func (r *UserRepository) FindByEmail(email string) (model.User, error) {
	user := model.User{}
	err := r.Conn.Where("email = ?", email).First(&user).Error
	return user, err
}
func (r *UserRepository) Save(form form.UserForm) (model.User, error) {
	user := model.User{Name: form.Name, Email: form.Email,
		Password: form.Password, Roll: form.Roll}
	err := r.Conn.Create(&user).Error
	return user, err
}

func (r *UserRepository) UpdateById(id int, form form.UserForm) (model.User, error) {
	todo := model.User{ID: id}
	err := r.Conn.Model(&todo).Updates(model.User{Name: form.Name, Email: form.Email,
		Password: form.Password, Roll: form.Roll}).Error
	return todo, err
}

func (r *UserRepository) DeleteById(id int) error {
	err := r.Conn.Delete(&model.User{}, id).Error
	return err
}
