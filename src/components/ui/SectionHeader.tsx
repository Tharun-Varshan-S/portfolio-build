import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ tag, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-8", className)}>
      <div className="font-mono text-sm tracking-wider uppercase flex items-center gap-2">
        <span className="text-primary">/</span>
        <span className="text-muted">{tag}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
