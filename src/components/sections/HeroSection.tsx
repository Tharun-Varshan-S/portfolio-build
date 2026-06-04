import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { MapPin, GraduationCap, Calculator, ChevronRight, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6 pt-12">
      <div className="flex items-center gap-2 text-xs font-mono">
        <Badge variant="success" dot className="border-none bg-success/5">SYSTEM ONLINE</Badge>
        <span className="text-muted">/ SYSTEM IDENTITY</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <p className="text-muted font-mono text-xs mb-8">~ / THARUN.CLOUD / IDENTITY</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Tharun Varshan S</h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">AI-Powered Software Development Engineer</h2>
            <p className="text-muted text-lg max-w-xl leading-relaxed mb-10">
              Building scalable AI systems, backend architectures, intelligent platforms, and production-ready applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-md font-medium transition-colors">
                View Active Services <ChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-border hover:bg-card text-white rounded-md font-medium transition-colors">
                Inspect Architecture
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
            <div>
              <p className="text-muted font-mono text-[10px] uppercase mb-1">Uptime</p>
              <p className="font-semibold">99.98%</p>
              <p className="text-muted font-mono text-[10px]">last 90d</p>
            </div>
            <div>
              <p className="text-muted font-mono text-[10px] uppercase mb-1">Region</p>
              <p className="font-semibold">ap-south-1</p>
              <p className="text-muted font-mono text-[10px]">Tamil Nadu, India</p>
            </div>
            <div>
              <p className="text-muted font-mono text-[10px] uppercase mb-1">Runtime</p>
              <p className="font-semibold">v24.8.0</p>
              <p className="text-muted font-mono text-[10px]">node + python</p>
            </div>
            <div>
              <p className="text-muted font-mono text-[10px] uppercase mb-1">Deploys</p>
              <p className="font-semibold">12</p>
              <p className="text-muted font-mono text-[10px]">last 30d</p>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <Card className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted font-mono text-[10px] uppercase">/ Current Focus</p>
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-6">AI-Powered Software Engineering</h3>

            <div className="flex flex-col gap-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Sri Eshwar College of Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="w-4 h-4 text-primary" />
                <span>CGPA <span className="text-white font-semibold">8.35</span> / 10</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <p className="text-muted font-mono text-[10px] uppercase">/ Academic_Session</p>
              <span className="text-success text-xs font-mono">running</span>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">B.Tech Artificial Intelligence and Data Science</p>
              <p className="text-muted text-xs font-mono mb-4">2024 - 2028</p>

              <div className="w-full bg-border h-1 rounded-full mb-2">
                <div className="bg-primary h-1 rounded-full w-[25%]" />
              </div>
              <p className="text-muted font-mono text-[10px]">year 2 of 4 · 25% elapsed</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
