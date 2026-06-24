export type QuizType = "multiple_choice" | "true_false" | "short_answer"

export interface Answer {
  id: string
  text: string
  isCorrect: boolean
}

export interface Question {
  id: string
  type: QuizType
  text: string
  answers: Answer[]
  points: number
}

export interface Quiz {
  id: string
  title: string
  weekId: string
  questions: Question[]
  passingScore: number
}
