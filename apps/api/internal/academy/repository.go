package academy

import "github.com/tiss-or-id/api/internal/infrastructure/database"

type Repository struct {
	db *database.Connection
}

func NewRepository(db *database.Connection) *Repository {
	return &Repository{db: db}
}
