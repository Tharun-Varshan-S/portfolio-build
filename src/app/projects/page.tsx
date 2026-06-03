"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, ShieldAlert, Network, Terminal, Database, Activity } from "lucide-react"

export default function SystemsHub() {
  const systems = [
    {
      id: "interview-platform",
      title: "Interview Intelligence Platform",
      domain: "ai.interview.platform",
      desc: "Built a production-grade AI platform that automates technical candidate evaluations by parsing resumes, compiling skill matrix trees, and generating personalized question-answer structures.",
      icon: Cpu,
      color: "from-border to-transparent",
      accent: "text-blue-500",
      tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
      metrics: [
        { label: "LATENCY", value: "<2s" },
        { label: "MODEL", value: "Gemini" },
        { label: "AUTH", value: "JWT / RBAC" }
      ]
    },
    {
      id: "error-mitigation",
      title: "Intelligent Error Mitigation Engine",
      domain: "error.mitigation.engine",
      icon: ShieldAlert,
      color: "from-border to-transparent",
      accent: "text-blue-500",
      desc: "An automated data-quality machine learning processor that intercepts data streams to clean missing entries, identify outliers, and balance classes in real time.",
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      metrics: [
        { label: "DETECTION", value: "45ms" },
        { label: "ACCURACY", value: "98.2%" },
        { label: "RETRAINING", value: "Automated" }
      ]
    },
    {
      id: "lifebridge",
      title: "Organ Donation System",
      domain: "lifebridge.platform",
      icon: Network,
      color: "from-border to-transparent",
      accent: "text-blue-500",
      desc: "A distributed role-based healthcare database system designed to connect organ donors, hospital networks, and administrative coordinators securely and transparently.",
      tags: ["React 18", "Vite", "Tailwind CSS", "React Router", "Node.js"],
      metrics: [
        { label: "UPTIME", value: "99.99%" },
        { label: "ROLES", value: "3 Types" },
        { label: "SECURITY", value: "AES-256" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">

      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Production <br />
          <span className="text-muted">
            Systems Architecture
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-xl">
          A catalogue of active distributed backends, predictive machine learning processors, and system orchestration nodes mapped to production-grade targets.
        </p>
      </div>

      {/* Systems Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-12"
      >
        {systems.map((sys) => {
          const Icon = sys.icon
          return (
            <motion.div
              key={sys.id}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-500 flex flex-col lg:flex-row shadow-sm hover:shadow-md"
            >
              {/* Radial gradient background hover mesh */}
              <div className={`absolute inset-0 bg-gradient-to-r ${sys.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />

              {/* Main Content Side */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                <div className="flex flex-col gap-6">
                  {/* System Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${sys.accent}`} />
                      {sys.domain}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-success">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      Active
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {sys.title}
                  </h2>
                  <p className="text-base text-muted leading-relaxed max-w-2xl">
                    {sys.desc}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2.5 text-xs font-medium text-muted">
                    {sys.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-secondary text-secondary-foreground border border-border group-hover:border-foreground/10 transition-colors duration-300">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Explore Trigger Link */}
                <div className="mt-12 flex">
                  <Link
                    href={`/projects/${sys.id}`}
                    className="px-5 py-3 rounded-lg bg-foreground text-background hover:scale-[1.02] active:scale-[0.98] text-sm font-semibold transition-all duration-300 flex items-center gap-2 group/link shadow-sm"
                  >
                    View System
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Side Metric Panel */}
              <div className="w-full lg:w-[360px] p-8 md:p-12 bg-card/40 relative z-10 flex flex-col justify-between gap-8 border-l border-border">
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-6">Telemetry</p>
                  <div className="flex flex-col gap-6">
                    {sys.metrics.map((met, mIdx) => (
                      <div key={mIdx} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                        <span className="text-xs font-medium text-muted">{met.label}</span>
                        <span className="text-sm font-semibold text-foreground">{met.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3.5 rounded-lg bg-background border border-border shadow-sm">
                  <Activity className={`w-4 h-4 ${sys.accent}`} />
                  <span className="text-xs font-medium text-muted leading-tight">
                    System operational.
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

    </div>
  )
}
