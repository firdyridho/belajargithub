"use client"

import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@tiss/utils"

export function StatusDot({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("status-dot", className)} {...props} />
}
