export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function formatRelative(date: string | Date): string {
  const rtf = new Intl.RelativeTimeFormat("id-ID", { numeric: "auto" })
  const diff = (new Date(date).getTime() - Date.now()) / 1000
  if (Math.abs(diff) < 60) return rtf.format(Math.round(diff), "second")
  if (Math.abs(diff) < 3600) return rtf.format(Math.round(diff / 60), "minute")
  if (Math.abs(diff) < 86400) return rtf.format(Math.round(diff / 3600), "hour")
  return rtf.format(Math.round(diff / 86400), "day")
}
