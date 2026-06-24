package audit

type AuditLog struct {
	ID       string
	UserID   string
	Action   string
	Resource string
	Metadata any
}
