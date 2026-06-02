"use client"

import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", leetcode: 20, skillrack: 40, codechef: 10 },
  { name: "Feb", leetcode: 35, skillrack: 50, codechef: 15 },
  { name: "Mar", leetcode: 40, skillrack: 60, codechef: 20 },
  { name: "Apr", leetcode: 55, skillrack: 75, codechef: 22 },
  { name: "May", leetcode: 60, skillrack: 90, codechef: 25 },
  { name: "Jun", leetcode: 70, skillrack: 110, codechef: 30 },
  { name: "Jul", leetcode: 90, skillrack: 120, codechef: 35 },
  { name: "Aug", leetcode: 75, skillrack: 100, codechef: 32 },
  { name: "Sep", leetcode: 80, skillrack: 110, codechef: 34 },
  { name: "Oct", leetcode: 95, skillrack: 125, codechef: 40 },
  { name: "Nov", leetcode: 110, skillrack: 140, codechef: 45 },
  { name: "Dec", leetcode: 120, skillrack: 150, codechef: 50 },
]

export function AnalyticsSection() {
  return (
    <section id="analytics">
      <div className="flex justify-between items-end mb-8">
        <SectionHeader
          tag="ANALYTICS.CODING"
          title="Coding Analytics"
          subtitle="Engineering throughput across competitive programming platforms."
          className="mb-0"
        />
        <div className="hidden md:block text-right">
          <p className="text-muted font-mono text-[10px] uppercase mb-1">TOTAL SOLVED</p>
          <p className="text-2xl font-bold tracking-tight">1,380+</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 flex items-center justify-between">
          <div>
            <p className="text-muted font-mono text-[10px] uppercase mb-6">LeetCode</p>
            <p className="text-4xl font-bold tracking-tight mb-2">500+</p>
            <p className="text-muted font-mono text-[10px]">max rating 1678 · rank 2313</p>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-[#3B82F6]" strokeDasharray="60, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#3B82F6]" />
          </div>
        </Card>

        <Card className="p-6 flex items-center justify-between">
          <div>
            <p className="text-muted font-mono text-[10px] uppercase mb-6">SkillRack</p>
            <p className="text-4xl font-bold tracking-tight mb-2">750+</p>
            <p className="text-muted font-mono text-[10px]">programming challenges</p>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-primary" strokeDasharray="80, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary" />
          </div>
        </Card>

        <Card className="p-6 flex items-center justify-between">
          <div>
            <p className="text-muted font-mono text-[10px] uppercase mb-6">CodeChef</p>
            <p className="text-4xl font-bold tracking-tight mb-2">130+</p>
            <p className="text-muted font-mono text-[10px]">problems solved</p>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-success" strokeDasharray="30, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-success" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-8">
          <p className="text-muted font-mono text-[10px] uppercase">Throughput - Last 12 Months</p>
          <div className="flex gap-4 font-mono text-[10px] uppercase">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> LeetCode</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> SkillRack</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success" /> CodeChef</span>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLeet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorChef" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF66" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00FF66" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#8B9BB4", fontFamily: "monospace" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#8B9BB4", fontFamily: "monospace" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#0A0E17", borderColor: "#1A2332", borderRadius: "8px", color: "#fff" }}
                itemStyle={{ fontFamily: "monospace", fontSize: "12px" }}
              />
              <Area type="monotone" dataKey="skillrack" stroke="#00E5FF" strokeWidth={2} fillOpacity={1} fill="url(#colorSkill)" />
              <Area type="monotone" dataKey="leetcode" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorLeet)" />
              <Area type="monotone" dataKey="codechef" stroke="#00FF66" strokeWidth={2} fillOpacity={1} fill="url(#colorChef)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </section>
  )
}
