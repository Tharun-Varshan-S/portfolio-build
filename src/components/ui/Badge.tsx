import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "cyan" | "secondary"
  dot?: boolean
}

function Badge({ className, variant = "default", dot, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary/10 text-primary border-primary/20",
    outline: "border-border text-muted",
    success: "bg-success/10 text-success border-success/20",
    cyan: "border-primary/30 text-primary",
    secondary: "bg-border text-muted"
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn(
          "mr-1.5 h-1.5 w-1.5 rounded-full",
          variant === "success" ? "bg-success" : "bg-primary"
        )} />
      )}
      {children}
    </div>
  )
}

export { Badge }
