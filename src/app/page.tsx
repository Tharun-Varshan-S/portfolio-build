"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Terminal, Download, FileText, ChevronRight } from "lucide-react"
import { ActivityStreamSection } from "@/components/sections/ActivityStreamSection"

const BOOT_SEQUENCE = [
  "Initializing tvs_os kernel v3.0.1...",
  "Cache loaded: LeetCode [500+] • CodeChef [1678]",
  "Syncing distributed backend microservices...",
  "Formulating AI decision matrices...",
  "Integration secure. Injecting graphical overlay...",
  "BOOTING SYSTEM..."
]

const CONSOLE_ITEMS = [
  "> Solved 500+ coding problems",
  "> Winner at CoderAct Hackathon",
  "> Built AI Interview Platform",
  "> Developed Error Mitigation System",
  "> Built LifeBridge",
  "> Exploring AI System Design",
  "> Learning Distributed Systems",
  "> Completed MERN Internship"
]

export default function Home() {
  const [isBooting, setIsBooting] = useState(true)
  const [bootStep, setBootStep] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [consoleIndex, setConsoleIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Boot sequence logic with typing effect
  useEffect(() => {
    const hasBooted = sessionStorage.getItem("hasBooted")
    if (hasBooted) {
      setIsBooting(false)
      return
    }

    if (bootStep >= BOOT_SEQUENCE.length) {
      setTimeout(() => {
        setIsBooting(false)
        sessionStorage.setItem("hasBooted", "true")
      }, 600)
      return
    }

    const currentLine = BOOT_SEQUENCE[bootStep]

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1)
      }, Math.random() * 30 + 10) // Fast typing effect
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setBootStep(prev => prev + 1)
        setCharIndex(0)
      }, 300) // Pause at end of line
      return () => clearTimeout(timeout)
    }
  }, [bootStep, charIndex])

  // Console rotation logic
  useEffect(() => {
    if (isBooting) return
    const interval = setInterval(() => {
      setConsoleIndex(prev => (prev + 1) % CONSOLE_ITEMS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isBooting])

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-background select-none overflow-x-hidden">

      <AnimatePresence mode="wait">
        {isBooting ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <div className="w-full max-w-2xl p-6 rounded-xl border border-border bg-card/50 backdrop-blur-md shadow-2xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-muted text-xs">tvs_os bootloader v3.0</span>
              </div>
              <div className="flex flex-col gap-2">
                {BOOT_SEQUENCE.slice(0, bootStep).map((line, i) => (
                  <div key={i} className={`flex items-center gap-2 ${i === BOOT_SEQUENCE.length - 1 ? 'text-primary font-bold mt-4' : 'text-muted-foreground'}`}>
                    <ChevronRight className="w-4 h-4" />
                    <span>{line}</span>
                  </div>
                ))}

                {bootStep < BOOT_SEQUENCE.length && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChevronRight className="w-4 h-4" />
                    <span>{BOOT_SEQUENCE[bootStep].substring(0, charIndex)}</span>
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-primary/80 ml-1"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            {/* Parallax Aurora Backgrounds */}
            <div className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none z-0 mix-blend-screen" />
            <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.02] blur-[100px] pointer-events-none z-0 mix-blend-screen" />

            {/* Hero Section */}
            <motion.section
              style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
              className="min-h-[80vh] w-full flex items-center pt-32 px-6 max-w-7xl mx-auto relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

                {/* Left Panel: Profile */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono w-fit"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      System Online
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
                    >
                      THARUN VARSHAN S
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl font-mono text-muted-foreground"
                    >
                      AI-Powered Software Development Engineer
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-base text-muted leading-relaxed max-w-md"
                    >
                      Building scalable AI systems, backend architectures, intelligent platforms, and production-ready applications.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center gap-4 mt-2"
                  >
                    <Link
                      href="/projects"
                      className="group px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-all flex items-center gap-2"
                    >
                      Explore Projects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/resume"
                      className="px-6 py-3 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-foreground/20 text-foreground font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                      <FileText className="w-4 h-4" />
                      View Resume
                    </Link>
                    <a
                      href="/resume/Tharun_Varshan_Resume.pdf"
                      download="Tharun_Varshan_Resume.pdf"
                      className="p-3 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-foreground/20 text-muted hover:text-foreground transition-all backdrop-blur-sm"
                      title="Download Resume"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>

                {/* Right Panel: Dynamic Console */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="w-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl rounded-3xl" />
                  <div className="relative w-full rounded-2xl border border-border/80 bg-card/30 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-muted" />
                        <span className="text-xs font-mono text-muted">system_status.sh</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      </div>
                    </div>
                    {/* Console Body */}
                    <div className="p-8 h-[280px] font-mono text-sm flex flex-col justify-center bg-background/40">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={consoleIndex}
                          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                          transition={{ duration: 0.4 }}
                          className="text-primary font-medium text-xl"
                        >
                          {CONSOLE_ITEMS[consoleIndex]}
                        </motion.div>
                      </AnimatePresence>
                      <div className="mt-6 flex items-center gap-2 text-muted">
                        <span className="animate-pulse">_</span>
                        <span className="text-xs opacity-50">Awaiting runtime instructions...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.section>

            {/* Scroll spacing */}
            <div className="h-[10vh]" />

            {/* Education & Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-6 max-w-7xl mx-auto w-full relative z-30 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h3 className="text-sm font-mono text-muted uppercase tracking-wider">Education Summary</h3>
                </div>
                
                <div className="flex flex-col gap-3 group">
                  <div className="p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group/card shadow-sm hover:shadow-primary/5">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:animate-[shimmer_2s_infinite]" />
                     <div className="flex justify-between items-start mb-1">
                       <h4 className="font-semibold text-foreground">Sri Eshwar College of Engineering</h4>
                       <span className="text-xs font-mono text-muted">2024 – 2028</span>
                     </div>
                     <p className="text-sm text-muted-foreground mb-2">B.Tech in Artificial Intelligence and Data Science</p>
                     <div className="text-xs font-mono text-primary">CGPA: 8.35</div>
                  </div>
                  
                  <div className="p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-primary/5">
                     <div className="flex justify-between items-start mb-1">
                       <h4 className="font-semibold text-foreground">Peepal Prodigy School</h4>
                       <span className="text-xs font-mono text-muted">2022 – 2024</span>
                     </div>
                     <p className="text-sm text-muted-foreground">Higher Secondary Certificate (HSC)</p>
                  </div>
                  
                  <div className="p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-primary/5">
                     <div className="flex justify-between items-start mb-1">
                       <h4 className="font-semibold text-foreground">Peepal Prodigy School</h4>
                       <span className="text-xs font-mono text-muted">2021 – 2022</span>
                     </div>
                     <p className="text-sm text-muted-foreground">Secondary School Leaving Certificate (SSLC)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h3 className="text-sm font-mono text-muted uppercase tracking-wider">Achievements Snapshot</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-primary/5 group/card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary transition-transform group-hover/card:scale-110">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Winner - CoderAct</h4>
                      <p className="text-xs text-muted-foreground">High-fidelity distributed preprocessor prototype</p>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-primary/5 group/card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary transition-transform group-hover/card:scale-110">
                      ⭐
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">SELFE Finalist</h4>
                      <p className="text-xs text-muted-foreground">Real-world matching geodatabase nodes</p>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-primary/5 group/card">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary transition-transform group-hover/card:scale-110">
                      🤝
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Best Team Spirit Award</h4>
                      <p className="text-xs text-muted-foreground">ACM-ICPC Regional contests</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Activity Stream Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto w-full relative z-30">
              <ActivityStreamSection />
            </section>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
