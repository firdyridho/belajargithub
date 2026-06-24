package quiz

type Quiz struct {
	ID        string
	ModuleID  string
	Title     string
	Questions []Question
}

type Question struct {
	ID      string
	Prompt  string
	Answers []Answer
}

type Answer struct {
	ID        string
	Content   string
	IsCorrect bool
}
