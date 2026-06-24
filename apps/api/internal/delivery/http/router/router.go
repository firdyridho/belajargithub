package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tiss-or-id/api/internal/academy"
	"github.com/tiss-or-id/api/internal/analytics"
	"github.com/tiss-or-id/api/internal/audit"
	"github.com/tiss-or-id/api/internal/auth"
	"github.com/tiss-or-id/api/internal/cms"
	"github.com/tiss-or-id/api/internal/config"
	"github.com/tiss-or-id/api/internal/delivery/http/middleware"
	"github.com/tiss-or-id/api/internal/infrastructure/cache"
	"github.com/tiss-or-id/api/internal/infrastructure/database"
	"github.com/tiss-or-id/api/internal/quiz"
	"github.com/tiss-or-id/api/internal/rbac"
	"github.com/tiss-or-id/api/internal/submission"
	"github.com/tiss-or-id/api/internal/user"
)

func New(db *database.Connection, redis *cache.RedisClient, cfg *config.Config) *fiber.App {
	app := fiber.New(fiber.Config{
		AppName:      "TISS API",
		ErrorHandler: middleware.ErrorHandler,
	})

	app.Use(middleware.CORS(cfg))
	app.Use(middleware.RateLimiter(redis))
	app.Use(middleware.CSRF())

	api := app.Group("/api/v1")

	auth.RegisterRoutes(api.Group("/auth"), auth.NewHandler(auth.NewService(auth.NewRepository(db))))

	protected := api.Group("/", middleware.JWTAuth(cfg.JWT.Secret))
	user.RegisterRoutes(protected.Group("/users"), user.NewHandler(user.NewService(user.NewRepository(db))))
	rbac.RegisterRoutes(protected.Group("/rbac"), rbac.NewHandler(rbac.NewService(rbac.NewRepository(db))))
	academy.RegisterRoutes(protected.Group("/academy"), academy.NewHandler(academy.NewService(academy.NewRepository(db))))
	quiz.RegisterRoutes(protected.Group("/quizzes"), quiz.NewHandler(quiz.NewService(quiz.NewRepository(db))))
	submission.RegisterRoutes(protected.Group("/submissions"), submission.NewHandler(submission.NewService(submission.NewRepository(db))))
	cms.RegisterRoutes(protected.Group("/cms"), cms.NewHandler(cms.NewService(cms.NewRepository(db))))
	audit.RegisterRoutes(protected.Group("/audit-logs"), audit.NewHandler(audit.NewService(audit.NewRepository(db))))
	analytics.RegisterRoutes(protected.Group("/analytics"), analytics.NewHandler(analytics.NewService(analytics.NewRepository(db))))

	return app
}
