package model

import (
	"time"
)

type User struct {
	ID        int        `gorm:"primary_key" json:"id"`
	Name      string     `gorm:"not null" json:"name"`
	Password  string     `gorm:"not null" json:"password"`
	Email     string     `gorm:"unique;not null" json:"email"`
	Role      string     `gorm:"not null" json:"role"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at"`
}
