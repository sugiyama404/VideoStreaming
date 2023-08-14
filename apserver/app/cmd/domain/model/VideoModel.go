package model

import (
	"time"

	"github.com/google/uuid"
)

type Video struct {
	ID        int        `gorm:"primary_key" json:"id"`
	UUID      uuid.UUID  `gorm:"type:binary(16);default:(UUID_TO_BIN(UUID()));unique" json:"uuid"`
	UserID    int        `gorm:"not null" json:"user_id"`
	FileName  string     `json:"file_name"`
	Title     string     `json:"title"`
	Size      int        `json:"size"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
}
