const ALLOWED_EXTENSIONS = [".pdf", ".zip", ".png", ".jpg", ".jpeg", ".md", ".txt"]

export function sanitizeFileName(name: string): string {
  return name.replace(/[^a-z0-9._-]/gi, "_").toLowerCase()
}

export function validateFileExtension(fileName: string): boolean {
  const ext = fileName.slice(fileName.lastIndexOf(".")).toLowerCase()
  return ALLOWED_EXTENSIONS.includes(ext)
}
