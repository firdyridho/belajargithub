import type { ApiResponse } from "@tiss/types"

const ACCESS_TOKEN_COOKIE = "tiss_access_token"

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_API_URL ??
  process.env.VITE_API_URL ??
  process.env.API_BASE_URL ??
  ""

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") {
    return null
  }

  const cookie = document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${encodeURIComponent(name)}=`))

  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : null
}

const createHeaders = (token?: string): HeadersInit => {
  const accessToken = token ?? getCookie(ACCESS_TOKEN_COOKIE)

  return {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  }
}

const parseResponse = async <T>(
  res: Response,
  method: string,
  path: string,
): Promise<ApiResponse<T>> => {
  const contentType = res.headers.get("content-type") ?? ""
  const payload = contentType.includes("application/json") ? await res.json() : null

  if (!res.ok) {
    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : `${method} ${path} failed: ${res.status}`

    throw new Error(message)
  }

  return payload as ApiResponse<T>
}

export const apiClient = {
  async get<T>(path: string, token?: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${getBaseUrl()}${path}`, {
      headers: createHeaders(token),
      credentials: "include",
    })
    return parseResponse<T>(res, "GET", path)
  },

  async post<T>(path: string, body: unknown, token?: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${getBaseUrl()}${path}`, {
      method: "POST",
      headers: createHeaders(token),
      body: JSON.stringify(body),
      credentials: "include",
    })
    return parseResponse<T>(res, "POST", path)
  },

  async patch<T>(path: string, body: unknown, token?: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${getBaseUrl()}${path}`, {
      method: "PATCH",
      headers: createHeaders(token),
      body: JSON.stringify(body),
      credentials: "include",
    })
    return parseResponse<T>(res, "PATCH", path)
  },

  async delete<T>(path: string, token?: string): Promise<ApiResponse<T>> {
    const res = await fetch(`${getBaseUrl()}${path}`, {
      method: "DELETE",
      headers: createHeaders(token),
      credentials: "include",
    })
    return parseResponse<T>(res, "DELETE", path)
  },
}
