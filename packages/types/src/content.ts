export type PostStatus = "draft" | "scheduled" | "published" | "archived"

export interface Post {
  id: string
  title: string
  slug: string
  content: string
  tags: string[]
  status: PostStatus
  authorId: string
  publishedAt?: string
  createdAt: string
  updatedAt: string
}
