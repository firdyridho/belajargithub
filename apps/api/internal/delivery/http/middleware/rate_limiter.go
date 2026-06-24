package middleware

import (
	"context"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/tiss-or-id/api/internal/infrastructure/cache"
	"github.com/tiss-or-id/api/pkg/response"
)

func RateLimiter(redis *cache.RedisClient) fiber.Handler {
	return func(c *fiber.Ctx) error {
		if redis == nil {
			return c.Next()
		}

		key := "rate_limit:" + c.IP()
		ctx := context.Background()
		count, err := redis.Increment(ctx, key, time.Minute)
		if err != nil {
			return fiber.NewError(fiber.StatusServiceUnavailable, "rate limiter unavailable")
		}

		if count > 120 {
			return c.Status(fiber.StatusTooManyRequests).JSON(response.Error("rate limit exceeded"))
		}

		return c.Next()
	}
}
