export type RbacRole =
  | "WHITE_TEAMING"
  | "RED_TEAMING"
  | "BLUE_TEAMING"
  | "YELLOW_TEAMING"
  | "NULL_TEAMING"
  | "GUEST_EXPERT"
  | "GREY_TEAMING"
  | "BLACK_TEAMING"
  | "OBSERVER"
  | "ELEVATED_WHITE_TEAMING"
  | "QUARANTINED"
  | "SYSTEM_ACCOUNT"

export type Division =
  | RbacRole
  | "white_teaming"
  | "red_teaming"
  | "blue_teaming"
  | "yellow_teaming"
  | "null_teaming"

export type Guild =
  | "purple_guild"
  | "orange_guild"
  | "green_guild"
  | "none"

export type UserRole = RbacRole | "super_admin" | "instructor" | "content_manager" | "learner"

export type Rank =
  | "VOID"
  | "CIPHER"
  | "PACKET"
  | "FORGE"
  | "BREACH"
  | "SENTINEL"
  | "void"
  | "cipher"
  | "packet"
  | "forge"
  | "breach"
  | "sentinel"

export const RBAC_ROLES = [
  "WHITE_TEAMING",
  "RED_TEAMING",
  "BLUE_TEAMING",
  "YELLOW_TEAMING",
  "NULL_TEAMING",
  "GUEST_EXPERT",
  "GREY_TEAMING",
  "BLACK_TEAMING",
  "OBSERVER",
  "ELEVATED_WHITE_TEAMING",
  "QUARANTINED",
  "SYSTEM_ACCOUNT",
] as const

export const RANKS = ["VOID", "CIPHER", "PACKET", "FORGE", "BREACH", "SENTINEL"] as const

export interface User {
  id: string
  email: string
  fullName: string
  roles: RbacRole[]
  guestExpertExpiresAt?: string | null
  studentId?: string | null
  cohortYear?: number | null
  tissGeneration?: number | null
  major?: string | null
  currentRank: Rank
  accumulatedScore: number
  completedModules: string[]
  externalFootprints?: unknown
  mfaEnabled: boolean
  reduceMotion: boolean
  labInstanceLimit: number
  ramAllocationMB: number
  deviceFingerprint?: string | null
  lastActiveAt: string
  nim?: string
  name?: string
  division?: Division
  guild?: Guild
  role?: UserRole
  rank?: Rank
  totalScore?: number
  isActive?: boolean
  createdAt: string
  updatedAt: string
}
