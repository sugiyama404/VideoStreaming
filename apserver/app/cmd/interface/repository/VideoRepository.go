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

func (m *VideoRepository) SaveByIDAndSize(id int, size int) (model.Video, error) {
	video := model.Video{UserID: id, Size: size}
	err := m.Conn.Create(&video).Error
	return video, err
}

func (m *VideoRepository) Update(form form.VideoForm) error {
	video := model.Video{UUID: form.UUID}
	err := m.Conn.Model(&video).Updates(model.Video{
		Title:        form.Title,
		Explain:      form.Explain,
		Tags:         form.Tags,
		Category:     form.Category,
		TbnExtension: form.TbnExtension,
	}).Error
	return err
}

func (m *VideoRepository) FindByUUID(uuid uuid.UUID) (model.Video, error) {
	video := model.Video{UUID: uuid}
	err := m.Conn.First(&video).Error
	return video, err
}
