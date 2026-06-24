import type { Division, RbacRole } from "@tiss/types"
import { decodeJwt, getSsoRedirectUrl, getStoredAccessToken, type JwtPayload } from "./token"
import type { SessionUser } from "./types"

export function getClientSession(): SessionUser | null {
  const token = getStoredAccessToken()

  if (!token) {
    return null
  }

  const payload = decodeJwt<JwtPayload>(token)

  if (!payload.sub || !payload.email) {
    return null
  }

  return {
    id: payload.sub,
    name: payload.fullName ?? payload.email,
    email: payload.email,
    division: (payload.roles?.[0] ?? "NULL_TEAMING") as Division,
    guild: "none",
    role: (payload.roles?.[0] ?? "NULL_TEAMING") as RbacRole,
    rank: "VOID",
    roles: payload.roles ?? [],
  }
}

export function requireAuth(returnTo = globalThis.location?.href ?? "/"): SessionUser {
  const session = getClientSession()

  if (!session) {
    globalThis.location.assign(getSsoRedirectUrl(returnTo))
    throw new Error("Authentication required")
  }

  return session
}

export function requireRole(role: RbacRole, returnTo?: string): SessionUser {
  const session = requireAuth(returnTo)

  if (!session.roles.includes(role) && !session.roles.includes("WHITE_TEAMING")) {
    throw new Error("Insufficient permissions")
  }

  return session
}

export function requireDivision(division: Division, returnTo?: string): SessionUser {
  const session = requireAuth(returnTo)

  if (session.division !== division && !session.roles.includes("WHITE_TEAMING")) {
    throw new Error("Insufficient permissions")
  }

  return session
}
