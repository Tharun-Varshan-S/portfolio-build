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

  // Track scroll depth to add blur styling
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border" : "py-5 bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Branding: Personal Profile Style */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card text-xs font-mono font-bold text-primary group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">TVS</span>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-tight tracking-wider uppercase group-hover:text-primary transition-colors duration-300">
              Tharun Varshan S
            </span>
            <span className="text-[10px] font-mono text-muted tracking-tight group-hover:text-white/60 transition-colors duration-300">
              AI Systems Backend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Anchor Menu */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-border bg-card/40 backdrop-blur-md relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-mono text-[10px] tracking-widest transition-all duration-300 uppercase rounded-full ${isActive ? "text-white font-medium" : "text-muted hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase hover:bg-primary/25 hover:border-primary/50 transition-all duration-300 flex items-center gap-1.5"
          >
            Initiate Contact
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
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
            className="absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-lg px-6 py-6 lg:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between p-3 rounded-lg border font-mono text-xs tracking-wider uppercase transition-all duration-300 ${isActive
                        ? "bg-primary/5 border-primary/20 text-primary"
                        : "bg-card/30 border-transparent text-muted hover:text-white hover:bg-card/50"
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                  </Link>
                )
              })}
            </div>

            <Link
              href="/contact"
              className="w-full py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-center text-xs font-mono uppercase hover:bg-primary/25 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              Initiate Contact
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
