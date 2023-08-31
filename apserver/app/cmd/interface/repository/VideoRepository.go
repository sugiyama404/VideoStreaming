package repository

import (
	"app/cmd/domain/form"
	"app/cmd/domain/model"

	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

type VideoRepository struct {
	Conn *gorm.DB
}

func (m *VideoRepository) FindAll() ([]model.Video, error) {
	videos := []model.Video{}
	err := m.Conn.Find(&videos).Error
	return videos, err
}

func (m *VideoRepository) SaveByIDAndSize(id int, size int) (model.Video, error) {
	video := model.Video{UserID: id, Size: size}
	err := m.Conn.Create(&video).Error
	return video, err
}

func (m *VideoRepository) Update(form form.VideoForm) error {
	video := model.Video{}
	err := m.Conn.Model(&video).Where("uuid = UUID_TO_BIN(?)", form.UUID).Updates(model.Video{
		Title:        form.Title,
		Explain:      form.Explain,
		Tags:         form.Tags,
		Category:     form.Category,
		TbnExtension: form.TbnExtension,
		TbnOverSize:  form.TbnOverSize,
	}).Error
	return err
}

func (m *VideoRepository) FindByUUID(uuid uuid.UUID) (model.Video, error) {
	video := model.Video{}
	err := m.Conn.First(&video, "uuid = UUID_TO_BIN(?)", uuid).Error
	return video, err
}
