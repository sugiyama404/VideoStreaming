package model

import (
	"time"

	"github.com/google/uuid"
)

type Video struct {
	ID           int        `gorm:"primary_key" json:"id"`
	UUID         uuid.UUID  `gorm:"type:binary(16);default:(UUID_TO_BIN(UUID()));unique" json:"uuid"`
	UserID       int        `gorm:"not null" json:"user_id"`
	Title        string     `json:"title"`
	Size         int        `json:"size"`
	Explain      string     `json:"explain"`
	Tags         string     `json:"tags"`
	Category     string     `json:"category"`
	TbnUuid      uuid.UUID  `gorm:"type:binary(16);default:(UUID_TO_BIN(UUID()));unique" json:"tbn_uuid"`
	TbnExtension string     `json:"tbn_extension"`
	TbnOverSize  bool       `json:"tbn_over_size"`
	CreatedAt    time.Time  `json:"created_at"`
	UpdatedAt    time.Time  `json:"updated_at"`
	DeletedAt    *time.Time `json:"deleted_at"`
}
