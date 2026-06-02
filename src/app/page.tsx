"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code2, Cpu, Database, Network, ArrowRight } from "lucide-react"
import { ActivityStreamSection } from "@/components/sections/ActivityStreamSection"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Configure Scroll-linked animations using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transformed properties for cinematic screens
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50])

  const stats1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0])
  const stats1Scale = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0.9, 1, 1.05])

  const stats2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0])
  const stats2Scale = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0.9, 1, 1.05])

  const pillarsOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0])
  const pillarsScale = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0.9, 1, 1.05])

  const missionOpacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0])
  const missionScale = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0.9, 1, 1.02])

  // Journey milestones data
  const milestones = [
    { year: "2024", phase: "DSA Foundations", icon: Code2, desc: "Mastered algorithmic complexity, advanced data structures, and foundational software engineering principles.", color: "from-border to-transparent" },
    { year: "2025", phase: "Full Stack Development", icon: Database, desc: "Architected modern web architectures, state management systems, and high-performance relational databases.", color: "from-border to-transparent" },
    { year: "2026", phase: "AI Applications", icon: Cpu, desc: "Integrated Large Language Models, engineered semantic search graphs, and automated evaluation metrics.", color: "from-border to-transparent" },
    { year: "2027", phase: "MLOps & Distributed Systems", icon: Network, desc: "Configured resilient execution containers, message broker channels, and automated deployment nodes.", color: "from-border to-transparent" },
    { year: "2028", phase: "AI Systems Engineering", icon: Cpu, desc: "Designing scalable AI backends, optimized storage clusters, and production-grade LLM workflows.", color: "from-border to-transparent" }
  ]

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-background select-none">
      
      {/* Background Aurora Mesh Glow - Reduced Intensity */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-foreground/[0.02] blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-3/4 left-1/3 w-[600px] h-[300px] rounded-full bg-secondary/[0.02] blur-[100px] pointer-events-none z-0" />

      {/* Cinematic Scrollytelling Panels Container */}
      <div className="relative z-10 w-full">
        
        {/* ==================================================== */}
        {/* SCREEN 1: Hero Opener */}
        {/* ==================================================== */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="h-screen w-full flex flex-col justify-center items-center px-6 relative"
        >
          <div className="max-w-4xl w-full text-center flex flex-col items-center gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight"
            >
              Tharun Varshan S
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl font-medium text-muted tracking-wide"
            >
              AI Systems Backend Engineer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm text-muted max-w-md leading-relaxed mt-2"
            >
              Building intelligent systems, scalable backends, and production-grade AI applications.
            </motion.p>
          </div>

          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer text-muted hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 text-muted" />
          </motion.div>
        </motion.section>

        {/* ==================================================== */}
        {/* SCREEN 2: Stat reveal - Problems solved */}
        {/* ==================================================== */}
        <motion.section 
          style={{ opacity: stats1Opacity, scale: stats1Scale }}
          className="h-screen w-full fixed inset-0 flex flex-col justify-center items-center px-6 pointer-events-none z-20"
        >
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-foreground leading-none">
              500+
            </h2>
            <p className="text-lg md:text-xl font-medium tracking-wide text-muted mt-4">
              Problems Solved
            </p>
            <p className="text-sm text-muted/80 max-w-sm mx-auto leading-relaxed mt-2">
              Demonstrated consistency across LeetCode, SkillRack, and CodeChef.
            </p>
          </div>
        </motion.section>

        {/* ==================================================== */}
        {/* SCREEN 3: Stat reveal - Systems built */}
        {/* ==================================================== */}
        <motion.section 
          style={{ opacity: stats2Opacity, scale: stats2Scale }}
          className="h-screen w-full fixed inset-0 flex flex-col justify-center items-center px-6 pointer-events-none z-20"
        >
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-foreground leading-none">
              3
            </h2>
            <p className="text-lg md:text-xl font-medium tracking-wide text-muted mt-4">
              Systems Built
            </p>
            <p className="text-sm text-muted/80 max-w-sm mx-auto leading-relaxed mt-2">
              Intelligent Interview Simulators, Error Mitigation Engines, and Resilient Networks.
            </p>
          </div>
        </motion.section>

        {/* ==================================================== */}
        {/* SCREEN 4: Pillar layout */}
        {/* ==================================================== */}
        <motion.section 
          style={{ opacity: pillarsOpacity, scale: pillarsScale }}
          className="h-screen w-full fixed inset-0 flex flex-col justify-center items-center px-6 pointer-events-none z-20"
        >
          <div className="text-center flex flex-col gap-8 max-w-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-medium text-sm tracking-wide">
              <div className="px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground flex items-center justify-center shadow-sm">AI</div>
              <div className="px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground flex items-center justify-center shadow-sm">Backend</div>
              <div className="px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground flex items-center justify-center shadow-sm">Systems</div>
              <div className="px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground flex items-center justify-center shadow-sm">Infrastructure</div>
            </div>
            <p className="text-base text-muted leading-relaxed">
              Combining algorithmic engineering with advanced infrastructure deployment to produce deterministic, enterprise-grade runtime solutions.
            </p>
          </div>
        </motion.section>

        {/* ==================================================== */}
        {/* SCREEN 5: Current Mission */}
        {/* ==================================================== */}
        <motion.section 
          style={{ opacity: missionOpacity, scale: missionScale }}
          className="h-screen w-full fixed inset-0 flex flex-col justify-center items-center px-6 pointer-events-none z-20"
        >
          <div className="text-center flex flex-col gap-6 max-w-2xl">
            <span className="text-sm font-semibold text-muted tracking-wide">Current Mission</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Building scalable AI systems and backend architectures that solve real-world problems.
            </h3>
          </div>
        </motion.section>

        {/* Height spacing buffer to accommodate the fixed items during scroll */}
        <div className="h-[450vh]" />

        {/* ==================================================== */}
        {/* SYSTEM JOURNEY: Timeline */}
        {/* ==================================================== */}
        <section className="py-32 px-6 max-w-5xl mx-auto w-full relative z-30">
          <div className="text-center flex flex-col items-center gap-4 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Engineering Evolution
            </h2>
            <p className="text-base text-muted max-w-md leading-relaxed">
              Tracing structural milestones and focus shifts across my software engineering journey.
            </p>
          </div>

          <div className="relative border-l border-border/80 pl-8 ml-4 md:ml-8 flex flex-col gap-16">
            {milestones.map((m, idx) => {
              const Icon = m.icon
              return (
                <motion.div 
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-lg bg-card border border-border text-muted group-hover:border-foreground/30 transition-all duration-300 flex items-center justify-center z-10 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Journey details Card */}
                  <div className="p-8 rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm group-hover:border-foreground/20 group-hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    
                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-foreground">{m.year}</span>
                        <span className="text-sm text-muted">·</span>
                        <h4 className="text-lg font-bold text-foreground transition-colors">{m.phase}</h4>
                      </div>
                      <p className="text-sm text-muted leading-relaxed max-w-xl">{m.desc}</p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-muted">
                      <span>Completed</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-20 flex justify-center">
            <Link 
              href="/projects" 
              className="group px-6 py-3 rounded-xl bg-foreground text-background hover:scale-[1.02] active:scale-[0.98] text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              Explore Active Systems
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ==================================================== */}
        {/* LOG STREAM: Real time logs */}
        {/* ==================================================== */}
        <section className="py-24 px-6 max-w-7xl mx-auto w-full relative z-30">
          <ActivityStreamSection />
        </section>
      </div>
    </div>
  )
}
