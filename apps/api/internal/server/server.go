package server

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/tiss-or-id/api/internal/config"
	"github.com/tiss-or-id/api/internal/delivery/http/router"
	"github.com/tiss-or-id/api/internal/infrastructure/cache"
	"github.com/tiss-or-id/api/internal/infrastructure/database"
)

func Run() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system environment")
	}

	cfg := config.Load()

	db, err := database.Connect(cfg.Database)
	if err != nil {
		log.Fatalf("database connection failed: %v", err)
	}

	if err := database.Migrate(db); err != nil {
		log.Fatalf("database migration failed: %v", err)
	}

	redis, err := cache.Connect(cfg.Redis)
	if err != nil {
		log.Fatalf("redis connection failed: %v", err)
	}
	defer func() {
		if err := redis.Close(); err != nil {
			log.Printf("redis close failed: %v", err)
		}
	}()

	app := router.New(db, redis, cfg)

	log.Printf("TISS API listening on :%s", cfg.Server.Port)
	if err := app.Listen(":" + cfg.Server.Port); err != nil {
		log.Fatalf("server failed: %v", err)
	}
}
