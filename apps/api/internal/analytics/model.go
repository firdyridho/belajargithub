package analytics

type Event struct {
	ID      string
	UserID  string
	Name    string
	Payload any
}
