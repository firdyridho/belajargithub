package submission

type Submission struct {
	ID      string
	UserID  string
	QuizID  string
	Answers any
	Score   int
}
