"use client"

import { cn } from "@tiss/utils"

interface DataTableProps {
  className?: string
}

export function DataTable({ className }: DataTableProps) {
  return <div className={cn("data-table", className)} />
}
