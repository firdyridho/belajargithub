package auth

type Session struct {
	UserID string
	Roles  []string
}
