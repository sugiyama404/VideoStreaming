package repository

import (
	"app/cmd/domain/model"

	"github.com/jinzhu/gorm"
)

type VideoRepository struct {
	Conn *gorm.DB
}

func (m *VideoRepository) SaveByID(id int) (model.Video, error) {
	video := model.Video{UserID: id}
	err := m.Conn.Create(&video).Error
	return video, err
}
