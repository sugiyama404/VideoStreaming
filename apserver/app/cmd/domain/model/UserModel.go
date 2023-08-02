package model

import (
	"time"
)

type User struct {
	ID        int        `gorm:"primary_key" json:"id"`
	Name      string     `json:"name"`
	Password  string     `json:"password"`
	Email     string     `json:"email"`
	Roll      string     `json:"roll"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
}
