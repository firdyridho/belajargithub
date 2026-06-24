"use client"

import { cn } from "@tiss/utils"

interface AuditLogTableProps {
  className?: string
}

export function AuditLogTable({ className }: AuditLogTableProps) {
  return <nav className={cn("audit-log-table", className)} />
}
