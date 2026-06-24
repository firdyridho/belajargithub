"use client"

import { cn } from "@tiss/utils"

interface ModalProps {
  className?: string
}

export function Modal({ className }: ModalProps) {
  return <div className={cn("modal", className)} />
}
