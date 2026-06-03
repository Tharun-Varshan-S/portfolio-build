import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:-translate-y-[2px] hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,229,255,0.05)] overflow-hidden group/card",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/card:animate-[shimmer_2s_infinite]" />
      {props.children}
    </div>
  )
)
Card.displayName = "Card"

export { Card }
