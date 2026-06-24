import { AUTH_ORIGIN } from "./token"

export interface AuthConfig {
  authOrigin: string
  loginPath: string
  refreshPath: string
  logoutPath: string
}

export const authConfig: AuthConfig = {
  authOrigin: AUTH_ORIGIN,
  loginPath: "/login",
  refreshPath: "/api/v1/auth/refresh",
  logoutPath: "/api/v1/auth/logout",
}
