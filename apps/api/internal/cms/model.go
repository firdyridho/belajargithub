package cms

type Article struct {
	ID       string
	AuthorID string
	Title    string
	Slug     string
	Content  any
	Tags     []Tag
}

type Tag struct {
	ID   string
	Name string
}
