package academy

type Course struct {
	ID      string
	Title   string
	Modules []Module
}

type Module struct {
	ID      string
	Title   string
	Lessons []Lesson
}

type Lesson struct {
	ID      string
	Title   string
	Content any
}
