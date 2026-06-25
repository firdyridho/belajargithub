package quiz

type SendQuiz struct {
	ID        string     `json:"ID"`
	ModuleID  string     `json:"moduleID"`
	Title     string     `json:"title"`
	Questions []Question `json:"question"`
}

type SendQuestion struct {
	ID      string   `json:"ID"`
	Prompt  string   `json:"prompt"`
	Answers []Answer `json:"answer"`
}

type SendAnswer struct {
	ID      string `json:"ID"`
	Content string `json:"content"`
}

// menghilangkan data jawaban yang benar
func (self *Quiz) createSendQuiz() SendQuiz {
	var ret SendQuiz
	ret.ID = self.ID
	ret.ModuleID = self.ModuleID
	ret.Title = self.Title
	for i, v := range self.Questions {
		ret.Questions[i].ID = v.ID
		ret.Questions[i].Prompt = v.Prompt
		for ii, iv := range v.Answers {
			ret.Questions[i].Answers[ii].Content = iv.Content
			ret.Questions[i].Answers[ii].ID = iv.ID
		}
	}
	return ret
}

type UserListQuizs struct {
	Page int32 `json:"page"`
}
type UserFindQuizs struct {
	Title string `json:"title"`
}
type UserGoToQuiz struct {
	ModuleID string `json:""`
}

// asumsi pakai waktu
type UserStartQuiz struct {
	ModuleID string `json:"moduleID"`
}
type UserSendAnswerToQuestion struct {
	//asumsi pakai waktu
	Sesion string `json:"sesion"`
	//asumsi tidak pakai waktu
	ModuleID string `json:"moduleID"`
	//inti
	QuestionID string `json:"questionID"`
	AnswerID   string `json:"AnswerID"`
}
type UserEndQuiz struct {
	Sesion string
}

// dari server ke client mengirim array quiz
type ServerSendQuizs struct {
	Quizs []SendQuiz
}

// dari server ke client mengirim quiz
type ServerSendQuiz struct {
	SendQuiz SendQuiz
}

// asumsi pakai waktu
type ServerResponseToUserStartQuiz struct {
	Sesion    string `json:"sesion"`
	TimeLimit int64  `json:"timeLimit"` //waktu
}

/*
untuk akses uri tidak akan di handle. file ini di peruntukan jika akses
di dapatkan dari website sehingga body json dapat terbentuk
untuk akses dari uri misal seperti share quiz maka harus di handle oleh
front end dulu dan memparse nya ke bentuk body json
*/
