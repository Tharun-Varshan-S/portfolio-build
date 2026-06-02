import Link from "next/link"
import { MapPin, Mail, MonitorDot } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-8 h-8 rounded border border-border bg-card text-xs font-mono font-bold">
          TVS
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white leading-tight">Tharun Cloud Console</span>
          <span className="text-[10px] font-mono text-muted">V1.0 · AP-SOUTH-1</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-xs text-muted tracking-widest">
        <Link href="#services" className="hover:text-white transition-colors">SERVICES</Link>
        <Link href="#architecture" className="hover:text-white transition-colors">ARCHITECTURE</Link>
        <Link href="#stack" className="hover:text-white transition-colors">STACK</Link>
        <Link href="#analytics" className="hover:text-white transition-colors">ANALYTICS</Link>
        <Link href="#activity" className="hover:text-white transition-colors">ACTIVITY</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-muted border-r border-border pr-4">
          <span className="flex items-center gap-2"><MonitorDot className="w-3.5 h-3.5 text-success" /> 04:34:23 UTC</span>
          <MapPin className="w-3.5 h-3.5" />
          <Mail className="w-3.5 h-3.5" />
        </div>
        <Link href="#contact" className="px-4 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase hover:bg-primary/20 transition-colors">
          Initiate Connection
        </Link>
      </div>
    </nav>
  )
}
