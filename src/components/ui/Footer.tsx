import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Mail, Briefcase, Code2, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="pb-12">
      <Card className="p-12 flex flex-col md:flex-row gap-12 justify-between items-start lg:items-center">
        <div className="max-w-xl">
          <SectionHeader 
            tag="INITIATE.CONNECTION" 
            title="Let's build something that ships." 
            className="mb-6"
          />
          <p className="text-muted leading-relaxed">
            Currently open to internships, research roles, and freelance engagements in AI systems, backend engineering, and applied ML.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <a href="mailto:tharunvarshan.s087@gmail.com" className="flex items-center justify-between gap-8 p-4 rounded-lg bg-black/20 border border-border/50 hover:bg-white/[0.02] hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-card border border-border text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">Email</p>
                <p className="text-xs font-mono text-muted">tharunvarshan.s087@gmail.com</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
          </a>

          <a href="https://www.linkedin.com/in/tharun-varshan-s-ab1246333" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-8 p-4 rounded-lg bg-black/20 border border-border/50 hover:bg-white/[0.02] hover:border-[#0077b5]/50 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-card border border-border text-[#0077b5]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</p>
                <p className="text-xs font-mono text-muted">in/tharun-varshan-s</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-[#0077b5] transition-colors" />
          </a>
          
          <a href="https://github.com/Tharun-Varshan-S" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-8 p-4 rounded-lg bg-black/20 border border-border/50 hover:bg-white/[0.02] hover:border-white/30 transition-all group">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-card border border-border text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white transition-colors">GitHub</p>
                <p className="text-xs font-mono text-muted">Tharun-Varshan-S</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
          </a>
        </div>
      </Card>
      
      <div className="mt-8 flex justify-between items-center text-muted font-mono text-[10px] uppercase">
        <p>© 2026 Tharun Varshan S. All rights reserved.</p>
        <p>System V1.0</p>
      </div>
    </footer>
  )
}
