package middleware

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/tiss-or-id/api/internal/config"
)

func CORS(cfg *config.Config) fiber.Handler {
	return cors.New(cors.Config{
		AllowCredentials: true,
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization, X-CSRF-Token",
		AllowMethods:     "GET,POST,PATCH,DELETE,OPTIONS",
		AllowOriginsFunc: func(origin string) bool {
			if origin == "https://tiss.or.id" || strings.HasSuffix(origin, ".tiss.or.id") {
				return strings.HasPrefix(origin, "https://")
			}

			if cfg.Server.Env == "development" {
				return strings.HasPrefix(origin, "http://localhost:")
			}

			return false
		},
	})
}
