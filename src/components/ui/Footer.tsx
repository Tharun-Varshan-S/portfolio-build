"use client"

import Link from "next/link"
import { Mail, Briefcase, Code2, ArrowUpRight, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <footer id="contact" className="mt-auto pt-24 pb-12 w-full border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        
        {/* Main CTA Block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 justify-between items-start"
        >
          <div className="max-w-xl flex flex-col gap-6">
            <motion.div variants={childVariants} className="text-sm font-medium text-muted">
              Ready to connect
            </motion.div>
            <motion.h2 variants={childVariants} className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Let's Build <br />
              <span className="text-muted">
                Something Meaningful
              </span>
            </motion.h2>
            <motion.p variants={childVariants} className="text-base text-muted leading-relaxed max-w-md">
              Actively exploring collaboration opportunities in AI-powered systems, high-throughput distributed backends, database kernels, and applied machine learning architectures. Let's connect.
            </motion.p>
          </div>
          
          <motion.div variants={childVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 w-full lg:w-auto">
            {/* Email Gateway */}
            <a 
              href="mailto:tharunvarshan.s087@gmail.com" 
              className="flex items-center justify-between gap-6 p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-background border border-border text-foreground group-hover:bg-foreground/5 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">Email</p>
                  <p className="text-sm font-semibold text-foreground">tharunvarshan.s087@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* LinkedIn Connection */}
            <a 
              href="https://www.linkedin.com/in/tharun-varshan-s-ab1246333" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between gap-6 p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-background border border-border text-foreground group-hover:bg-foreground/5 transition-colors duration-300">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">LinkedIn</p>
                  <p className="text-sm font-semibold text-foreground">Tharun Varshan S</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            {/* GitHub Portal */}
            <a 
              href="https://github.com/Tharun-Varshan-S" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between gap-6 p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-background border border-border text-foreground group-hover:bg-foreground/5 transition-colors duration-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">GitHub</p>
                  <p className="text-sm font-semibold text-foreground">Tharun-Varshan-S</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Resume Gateway */}
            <Link 
              href="/resume" 
              className="flex items-center justify-between gap-6 p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-background border border-border text-foreground group-hover:bg-foreground/5 transition-colors duration-300">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">RESUME</p>
                  <p className="text-sm font-semibold text-foreground">View / Download</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Details Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 border-t border-border/50 text-xs font-medium text-muted gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© 2026 Tharun Varshan S.</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>AI-Powered Software Development Engineer</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-card border border-border hover:border-foreground/20 text-muted hover:text-foreground transition-all duration-300 group cursor-pointer shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
