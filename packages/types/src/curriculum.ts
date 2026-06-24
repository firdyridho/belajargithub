export type BlockType = "text" | "video" | "link" | "quiz"

export interface ContentBlock {
  id: string
  type: BlockType
  title: string
  order: number
  content: string
  quizId?: string
  videoUrl?: string
  externalUrl?: string
}

export interface Week {
  id: string
  weekNumber: number
  title: string
  description: string
  blocks: ContentBlock[]
  minScoreToUnlock: number
  isLocked: boolean
}

export interface Curriculum {
  id: string
  title: string
  totalWeeks: number
  weeks: Week[]
}
