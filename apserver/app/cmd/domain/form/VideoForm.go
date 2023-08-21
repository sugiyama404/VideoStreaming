package form

import (
	"github.com/google/uuid"
)

type VideoForm struct {
	UUID         uuid.UUID
	UserID       int
	Title        string
	Size         int
	Explain      string
	Tags         string
	Category     string
	TbnUuid      string
	TbnExtension string
}
