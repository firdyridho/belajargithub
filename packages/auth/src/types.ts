import type { Division, Guild, UserRole, Rank, RbacRole } from "@tiss/types"

export interface SessionUser {
  id: string
  name: string
  email: string
  division: Division
  guild: Guild
  role: UserRole
  rank: Rank
  roles: RbacRole[]
}
