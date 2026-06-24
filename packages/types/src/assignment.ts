export type SubmissionStatus = "pending" | "submitted" | "graded" | "failed" | "passed"

export interface Assignment {
  id: string
  weekId: string
  userId: string
  fileUrl: string
  status: SubmissionStatus
  score?: number
  feedback?: string
  submittedAt?: string
  gradedAt?: string
}
