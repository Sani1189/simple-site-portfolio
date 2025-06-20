"use client"

import type React from "react"

import type { ReactNode } from "react"
import { cn } from "@/utils/cn"

interface CardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Card({ children, className, style }: CardProps) {
  return (
    <div className={cn("rounded-2xl shadow-lg transition-all duration-300", className)} style={style}>
      {children}
    </div>
  )
}
