package database

import (
	"fmt"

	"github.com/tiss-or-id/api/internal/config"
)

type Connection struct {
	DSN string
}

func Connect(cfg config.DatabaseConfig) (*Connection, error) {
	if cfg.Password == "" {
		return nil, fmt.Errorf("postgres password is required")
	}

	dsn := fmt.Sprintf(
		"postgresql://%s:%s@%s:%s/%s?sslmode=%s",
		cfg.User,
		cfg.Password,
		cfg.Host,
		cfg.Port,
		cfg.Name,
		cfg.SSLMode,
	)

	return &Connection{DSN: dsn}, nil
}
