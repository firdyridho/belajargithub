package rbac

type Role struct {
	ID          string
	Name        string
	Permissions []Permission
}

type Permission struct {
	ID       string
	Action   string
	Resource string
}
