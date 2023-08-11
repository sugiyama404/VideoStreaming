package model

import (
	"time"

	"github.com/google/uuid"
)

type Movie struct {
	ID        uuid.UUID  `gorm:"type:binary(16);default:(UUID_TO_BIN(UUID()));primary_key" json:"id"`
	Name      string     `gorm:"not null" json:"name"`
	Size      int        `json:"size"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
}
