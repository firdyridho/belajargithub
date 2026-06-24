package middleware

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/csrf"
)

func CSRF() fiber.Handler {
	return csrf.New(csrf.Config{
		CookieName:     "tiss_csrf",
		CookieHTTPOnly: true,
		CookieSecure:   true,
		CookieSameSite: "None",
	})
}
