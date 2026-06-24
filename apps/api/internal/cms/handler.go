package cms

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
	router.Get("/articles", handler.NotImplemented)
	router.Get("/articles/:slug", handler.NotImplemented)
	router.Post("/articles", middleware.RequireRole("RED_TEAMING", "YELLOW_TEAMING", "WHITE_TEAMING"), handler.NotImplemented)
	router.Patch("/articles/:id", middleware.RequireRole("RED_TEAMING", "YELLOW_TEAMING", "WHITE_TEAMING"), handler.NotImplemented)
	router.Delete("/articles/:id", middleware.RequireRole("RED_TEAMING", "YELLOW_TEAMING", "WHITE_TEAMING"), handler.NotImplemented)
}

func (handler *Handler) NotImplemented(c *fiber.Ctx) error {
	return c.Status(fiber.StatusNotImplemented).JSON(response.Error("endpoint not implemented"))
}
