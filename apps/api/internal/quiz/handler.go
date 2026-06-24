package quiz

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tiss-or-id/api/internal/delivery/http/middleware"
	"github.com/tiss-or-id/api/pkg/response"
)

type Handler struct {
	service *Service
}

func NewHandler(service *Service) *Handler {
	return &Handler{service: service}
}

func RegisterRoutes(router fiber.Router, handler *Handler) {
	router.Get("/:id", handler.NotImplemented)
	router.Post("/", middleware.RequireRole("YELLOW_TEAMING", "WHITE_TEAMING"), handler.NotImplemented)
	router.Patch("/:id", middleware.RequireRole("YELLOW_TEAMING", "WHITE_TEAMING"), handler.NotImplemented)
}

func (handler *Handler) NotImplemented(c *fiber.Ctx) error {
	return c.Status(fiber.StatusNotImplemented).JSON(response.Error("endpoint not implemented"))
}
