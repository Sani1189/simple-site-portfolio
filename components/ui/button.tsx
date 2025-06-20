"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/utils/cn"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  children: ReactNode
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-lime-400 text-black hover:bg-lime-500 focus:ring-lime-400 hover:scale-105",
    secondary:
      "bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-105",
    outline: "bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:scale-105",
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
