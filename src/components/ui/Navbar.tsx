"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track active page links
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "TECH STACK", href: "/tech-stack" },
    { name: "CODING PROFILE", href: "/coding-profile" },
    { name: "RESUME", href: "/resume" },
    { name: "CONTACT", href: "/contact" }
  ]

  // Track scroll depth to add blur styling and reduce height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "py-3 bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-sm" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-[1700px] mx-auto px-6 flex items-center justify-between">

        {/* Branding: Personal Profile Style */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-border/80 bg-card/50 backdrop-blur-sm text-xs font-mono font-bold text-primary group-hover:border-primary/50 group-hover:bg-card transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">TVS</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-tight tracking-wider uppercase group-hover:text-primary transition-colors duration-300">
              Tharun Varshan S
            </span>
            <span className="text-[10px] font-mono text-muted tracking-tight group-hover:text-white/60 transition-colors duration-300">
              AI-Powered Software Development Engineer
            </span>
          </div>
        </Link>

        {/* Center Section: AI Terminal Navigation Strip */}
        <div className="hidden lg:flex flex-col justify-center translate-x-8">
          <div className="text-[10px] font-mono text-muted/60 flex items-center gap-1 mb-2 ml-1 tracking-widest uppercase">
            <span>$ navigate</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-1.5 h-1 bg-muted/60 align-bottom translate-y-[2px]"
            />
          </div>
          <div className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group/navlink relative flex items-center text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                    isActive ? "text-white" : "text-muted hover:text-white/90 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  }`}
                >
                  <span className={`transition-all duration-300 font-medium text-primary ${
                    isActive ? "opacity-100 mr-2" : "opacity-0 -ml-4 mr-0 group-hover/navlink:opacity-60 group-hover/navlink:mr-2 group-hover/navlink:ml-0"
                  }`}>
                    {'>'}
                  </span>
                  
                  <span className={`relative ${isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : ""}`}>
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right Section: Action Button & System Status */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted/80 uppercase tracking-widest bg-card/30 px-3 py-1.5 rounded-full border border-border/50">
            <div className="relative flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 z-10" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 absolute animate-ping" />
            </div>
            System Online
          </div>

          <Link
            href="/contact"
            className="group px-4 py-2.5 rounded-lg bg-card/40 border border-border/80 text-primary text-[11px] font-mono uppercase tracking-wider hover:bg-primary/10 hover:border-primary/40 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 relative overflow-hidden backdrop-blur-sm shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">Open Channel</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg border border-border bg-card text-muted hover:text-white hover:border-primary/30 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-xl px-6 py-6 lg:hidden flex flex-col gap-6 shadow-xl"
          >
            <div className="text-[10px] font-mono text-muted/60 flex items-center gap-1 mb-1 tracking-widest uppercase">
              <span>$ system.navigate</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-1.5 h-1 bg-muted/60 align-bottom translate-y-[2px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center p-3 rounded-lg border font-mono text-xs tracking-wider uppercase transition-all duration-300 ${isActive
                        ? "bg-primary/5 border-primary/20 text-white"
                        : "bg-card/30 border-transparent text-muted hover:text-white hover:bg-card/50"
                      }`}
                  >
                    <span className={`mr-2 font-medium transition-opacity ${isActive ? "text-primary opacity-100" : "opacity-0"}`}>
                      {'>'}
                    </span>
                    <span className={isActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : ""}>{link.name}</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center justify-between mt-2 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted/80 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                System Online
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-center text-xs font-mono uppercase hover:bg-primary/25 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                Open Channel
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
