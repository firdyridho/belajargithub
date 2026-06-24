"use client"

import { cn } from "@tiss/utils"

interface SearchBarProps {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  return <div className={cn("search-bar", className)} />
}
