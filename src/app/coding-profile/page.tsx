"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Cpu, Terminal, Calendar, Award, ShieldAlert, Activity } from "lucide-react"

export default function CodingProfilePage() {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null)

  const platforms = [
    { name: "LeetCode", solved: "500+", rating: "1678 Rating", color: "text-foreground", border: "border-border bg-card" },
    { name: "SkillRack", solved: "750+", rating: "750+ Solved", color: "text-foreground", border: "border-border bg-card" },
    { name: "CodeChef", solved: "130+", rating: "130+ Solved", color: "text-foreground", border: "border-border bg-card" }
  ]

  // Dynamic monthly progress data over the last year
  const growthData = [
    { name: "Jun 2025", LeetCode: 210, SkillRack: 320, CodeChef: 40 },
    { name: "Aug 2025", LeetCode: 260, SkillRack: 410, CodeChef: 55 },
    { name: "Oct 2025", LeetCode: 320, SkillRack: 520, CodeChef: 75 },
    { name: "Dec 2025", LeetCode: 390, SkillRack: 600, CodeChef: 90 },
    { name: "Feb 2026", LeetCode: 440, SkillRack: 680, CodeChef: 115 },
    { name: "Apr 2026", LeetCode: 500, SkillRack: 750, CodeChef: 130 }
  ]

  // Generate 53 weeks * 7 days of realistic contribution grids (371 days)
  const heatmapWeeks = Array.from({ length: 53 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      // Simulate higher densities in the middle, lower at weekends
      const seed = Math.random()
      let count = 0
      if (seed > 0.85) count = Math.floor(Math.random() * 8) + 4
      else if (seed > 0.4) count = Math.floor(Math.random() * 4) + 1
      
      const date = new Date(2025, 5, 2 + (weekIdx * 7 + dayIdx))
      const dateString = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      
      return {
        date: dateString,
        count
      }
    })
  })

  // Heatmap block color mappings
  const getColorClass = (count: number) => {
    if (count === 0) return "bg-secondary border border-border"
    if (count <= 2) return "bg-blue-500/20 border border-blue-500/10"
    if (count <= 4) return "bg-blue-500/40 border border-blue-500/20"
    if (count <= 6) return "bg-blue-500/60 border border-blue-500/30"
    return "bg-blue-500 border border-blue-500/40"
  }

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((p) => (
          <div key={p.name} className={`p-8 rounded-2xl border ${p.border} flex flex-col gap-4 group hover:border-foreground/20 hover:shadow-md transition-all duration-300 shadow-sm`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted">{p.name}</span>
              <Award className={`w-5 h-5 ${p.color}`} />
            </div>
            <h3 className="text-4xl font-bold text-foreground leading-none tracking-tight">{p.solved}</h3>
            <p className="text-sm font-medium text-muted">{p.rating}</p>
          </div>
        ))}
      </div>

      {/* GitHub Contribution Heatmap Card */}
      <div className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col gap-8">
        
        {/* Heatmap header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted mb-1">Active Ledger</span>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Commit History</h3>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-muted">
            {hoveredDay ? (
              <span className="text-foreground font-bold">{hoveredDay.count} contributions on {hoveredDay.date}</span>
            ) : (
              <span>Hover block to check contributions</span>
            )}
            <div className="flex items-center gap-1">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded bg-secondary border border-border" />
              <div className="w-2.5 h-2.5 rounded bg-blue-500/20" />
              <div className="w-2.5 h-2.5 rounded bg-blue-500/40" />
              <div className="w-2.5 h-2.5 rounded bg-blue-500/60" />
              <div className="w-2.5 h-2.5 rounded bg-blue-500" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Heatmap Grid Wrapper */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex gap-[3px] min-w-[760px]">
            {heatmapWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {week.map((day, dIdx) => (
                  <button
                    key={dIdx}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-150 ${getColorClass(day.count)} cursor-pointer`}
                    aria-label={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Area Chart (Recharts) */}
      <div className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col gap-6">
        <div>
          <span className="text-sm font-medium text-muted">Cumulative Matrix</span>
          <h3 className="text-xl font-bold text-foreground tracking-tight">Solving Velocity Growth</h3>
        </div>

        <div className="h-[350px] w-full mt-4 text-xs font-medium">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLeet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorChef" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="var(--muted-foreground)" strokeWidth={0.5} tickLine={false} />
              <YAxis stroke="var(--muted-foreground)" strokeWidth={0.5} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--foreground)" }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--muted-foreground)" }}
              />
              <Area type="monotone" dataKey="LeetCode" stroke="#3B82F6" fillOpacity={1} fill="url(#colorLeet)" strokeWidth={1.5} />
              <Area type="monotone" dataKey="SkillRack" stroke="#10B981" fillOpacity={1} fill="url(#colorSkill)" strokeWidth={1.5} />
              <Area type="monotone" dataKey="CodeChef" stroke="#F59E0B" fillOpacity={1} fill="url(#colorChef)" strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}
