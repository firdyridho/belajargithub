"use client"

import { cn } from "@tiss/utils"

interface ToastProps {
  className?: string
}

export function Toast({ className }: ToastProps) {
  return <div className={cn("toast", className)} />
}
