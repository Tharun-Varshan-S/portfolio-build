"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Briefcase, Code2, Send, Terminal, ShieldAlert, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus("sending")
    
    // Simulate API transport latency
    setTimeout(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    }, 1500)
  }

  const channels = [
    { name: "Direct Email", value: "tharunvarshans@gmail.com", href: "mailto:tharunvarshans@gmail.com", icon: Mail },
    { name: "LinkedIn Network", value: "in/tharun-varshan-s", href: "https://www.linkedin.com/in/tharun-varshan-s-ab1246333", icon: Briefcase },
    { name: "GitHub Workspace", value: "Tharun-Varshan-S", href: "https://github.com/Tharun-Varshan-S", icon: Code2 }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-6xl mx-auto w-full flex flex-col gap-16 relative z-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Get In <br />
          <span className="text-muted">
            Touch
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-xl">
          Initiate direct secure message handshakes, consult technical solutions, or coordinate clinical software architecture matching.
        </p>
      </div>

      {/* Main Form vs Channels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Dynamic Contact Form */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-8 rounded-2xl border border-border bg-card shadow-sm relative overflow-hidden">
            
            {/* Header console indicator */}
            <div className="flex justify-between items-center pb-6 border-b border-border mb-6">
              <span className="text-sm font-semibold text-muted uppercase tracking-wider">Contact Form</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-sm font-medium">
              <div className="flex flex-col gap-2">
                <label className="text-muted">Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:border-foreground/20 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-muted">Email</label>
                <input 
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:border-foreground/20 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-muted">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, or matching scopes..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted focus:border-foreground/20 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons / Status Indicators */}
              <div className="pt-2">
                {status === "success" ? (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 rounded-lg bg-success/10 border border-success/20 text-success flex items-center gap-2.5"
                  >
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background shadow-sm hover:scale-[1.01] active:scale-[0.99] font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" /> 
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>

        {/* Right Side: Communication Channels */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {channels.map((c) => {
            const Icon = c.icon
            return (
              <a 
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 shadow-sm hover:shadow-md flex items-center gap-5 group transition-all duration-300"
              >
                <div className="p-3.5 rounded-xl border border-border bg-background group-hover:border-foreground/20 group-hover:text-foreground transition-colors text-muted">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">{c.name}</span>
                  <span className="text-base font-bold text-foreground">{c.value}</span>
                </div>
              </a>
            )
          })}
        </div>

      </div>

    </div>
  )
}
