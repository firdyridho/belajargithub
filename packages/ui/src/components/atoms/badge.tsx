"use client"

import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@tiss/utils"

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("badge", className)} {...props} />
}
