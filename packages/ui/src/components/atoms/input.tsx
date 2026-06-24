"use client"

import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@tiss/utils"

export function Input({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("input", className)} {...props} />
}
