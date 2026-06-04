"use client"

import { motion } from "framer-motion"
import { Code2, GitBranch, Terminal, Award, ExternalLink } from "lucide-react"

export default function CodingProfilePage() {
  const platforms = [
    { 
      name: "LeetCode", 
      link: "https://leetcode.com/u/Tharun-Varshan-S/",
      icon: Code2,
      metrics: [
        { label: "Problems Solved", value: "500+" },
        { label: "Max Rating", value: "1678" },
        { label: "Best Rank", value: "2313" }
      ],
      color: "text-blue-500",
      border: "border-border hover:border-blue-500/50" 
    },
    { 
      name: "SkillRack", 
      link: "https://www.skillrack.com/faces/resume.xhtml?id=514581&key=e8dbf589589322ba028befa3711d2ea3187087f5",
      icon: Terminal,
      metrics: [
        { label: "Challenges Solved", value: "750+" }
      ],
      color: "text-green-500",
      border: "border-border hover:border-green-500/50" 
    },
    { 
      name: "CodeChef", 
      link: "https://www.codechef.com/users/tharun_varshan",
      icon: Award,
      metrics: [
        { label: "Problems Solved", value: "130+" }
      ],
      color: "text-amber-500",
      border: "border-border hover:border-amber-500/50" 
    },
    { 
      name: "GitHub", 
      link: "https://github.com/Tharun-Varshan-S",
      icon: GitBranch,
      metrics: [
        { label: "Repositories", value: "Active" },
        { label: "Contributions", value: "Consistent" }
      ],
      color: "text-foreground",
      border: "border-border hover:border-foreground/50" 
    }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Coding Profile & <br />
          <span className="text-muted">
            Telemetry
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-xl">
          Tracing quantitative output logs, algorithmic problem solving velocities, and verified contribution metrics across developer platforms.
        </p>
      </div>

      {/* Grid: Platform details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {platforms.map((p, idx) => {
          const Icon = p.icon
          return (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.name} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${p.border} bg-card flex flex-col gap-6 group transition-all duration-300 shadow-sm relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 -translate-y-2 group-hover:translate-y-0 duration-300">
                <ExternalLink className="w-5 h-5 text-muted" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl border border-border bg-background">
                  <Icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{p.name}</h3>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                {p.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-muted">{m.label}</span>
                    <span className="text-sm font-bold text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          )
        })}
      </div>

    </div>
  )
}
