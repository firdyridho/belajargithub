export interface ApiResponse<T = unknown> {
  data: T
  message: string
  success: boolean
}

export interface ApiError {
  code: string
  message: string
  details?: unknown
}

export interface ApiEnvelope<T = unknown> {
  data: T | null
  error: ApiError | null
  success: boolean
}

export interface PaginatedResponse<T = unknown> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
