import type { RbacRole } from "@tiss/types"

export interface JwtPayload {
  sub?: string
  email?: string
  fullName?: string
  roles?: RbacRole[]
  exp?: number
  iat?: number
  [key: string]: unknown
}

export interface TokenPair {
  accessToken: string
  refreshToken: string
}

export const AUTH_DOMAIN = ".tiss.or.id"
export const AUTH_ORIGIN = "https://auth.tiss.or.id"
export const ACCESS_TOKEN_COOKIE = "tiss_access_token"
export const REFRESH_TOKEN_COOKIE = "tiss_refresh_token"

function decodeBase64Url(value: string): string {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/")
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=")
  const binary = atob(padded)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

export function decodeJwt<T extends JwtPayload = JwtPayload>(token: string): T {
  const [, payload] = token.split(".")

  if (!payload) {
    throw new Error("Invalid JWT payload")
  }

  return JSON.parse(decodeBase64Url(payload)) as T
}

export function isJwtExpired(token: string, skewSeconds = 30): boolean {
  const payload = decodeJwt(token)

  if (!payload.exp) {
    return true
  }

  return payload.exp <= Math.floor(Date.now() / 1000) + skewSeconds
}

export function getSsoRedirectUrl(returnTo: string): string {
  const url = new URL("/login", AUTH_ORIGIN)
  url.searchParams.set("returnTo", returnTo)
  return url.toString()
}

export function redirectToSso(returnTo = globalThis.location?.href ?? "/"): never {
  globalThis.location.assign(getSsoRedirectUrl(returnTo))
  throw new Error("SSO redirect initiated")
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null
  }

  const cookie = document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${encodeURIComponent(name)}=`))

  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : null
}

export function setAuthCookies(tokens: TokenPair, maxAgeSeconds = 60 * 60 * 24 * 30): void {
  if (typeof document === "undefined") {
    return
  }

  const cookieOptions = `Domain=${AUTH_DOMAIN}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=None; Secure`
  document.cookie = `${ACCESS_TOKEN_COOKIE}=${encodeURIComponent(tokens.accessToken)}; ${cookieOptions}`
  document.cookie = `${REFRESH_TOKEN_COOKIE}=${encodeURIComponent(tokens.refreshToken)}; ${cookieOptions}`
}

export function clearAuthCookies(): void {
  if (typeof document === "undefined") {
    return
  }

  const cookieOptions = `Domain=${AUTH_DOMAIN}; Path=/; Max-Age=0; SameSite=None; Secure`
  document.cookie = `${ACCESS_TOKEN_COOKIE}=; ${cookieOptions}`
  document.cookie = `${REFRESH_TOKEN_COOKIE}=; ${cookieOptions}`
}

export function getStoredAccessToken(): string | null {
  return getCookie(ACCESS_TOKEN_COOKIE)
}

export function getStoredRefreshToken(): string | null {
  return getCookie(REFRESH_TOKEN_COOKIE)
}
