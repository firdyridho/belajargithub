package middleware

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/tiss-or-id/api/pkg/response"
)

type Claims struct {
	UserID string   `json:"userId"`
	Roles  []string `json:"roles"`
	jwt.RegisteredClaims
}

func JWTAuth(secret string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		authHeader := c.Get("Authorization")
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
			return c.Status(fiber.StatusUnauthorized).JSON(response.Error("missing or invalid token"))
		}

		claims := &Claims{}
		token, err := jwt.ParseWithClaims(strings.TrimPrefix(authHeader, "Bearer "), claims, func(t *jwt.Token) (any, error) {
			return []byte(secret), nil
		})

		if err != nil || !token.Valid {
			return c.Status(fiber.StatusUnauthorized).JSON(response.Error("invalid token"))
		}

		c.Locals("userId", claims.UserID)
		c.Locals("roles", claims.Roles)
		return c.Next()
	}
}

func RequireRole(roles ...string) fiber.Handler {
	allowed := make(map[string]struct{}, len(roles))
	for _, role := range roles {
		allowed[role] = struct{}{}
	}

	return func(c *fiber.Ctx) error {
		userRoles, ok := c.Locals("roles").([]string)
		if !ok {
			return c.Status(fiber.StatusForbidden).JSON(response.Error("insufficient permissions"))
		}

		for _, role := range userRoles {
			if role == "WHITE_TEAMING" || role == "ELEVATED_WHITE_TEAMING" {
				return c.Next()
			}
			if _, exists := allowed[role]; exists {
				return c.Next()
			}
		}

		return c.Status(fiber.StatusForbidden).JSON(response.Error("insufficient permissions"))
	}
}
