"use client"

import { type TextareaHTMLAttributes, forwardRef } from "react"
import { cn } from "@/utils/cn"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors duration-200 resize-none",
        className,
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export default Textarea
