import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Target, Layers, Code2 } from "lucide-react"

export function OverviewSection() {
  return (
    <section>
      <SectionHeader 
        tag="OVERVIEW" 
        title="Operational Snapshot" 
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-muted font-mono text-[10px] uppercase">Current Mission</p>
            <Target className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Designing intelligent backend systems that bridge LLMs with production traffic — focused on latency-aware agent orchestration, vector databases, and event-driven microservices.
          </p>
        </Card>

        <Card className="p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-muted font-mono text-[10px] uppercase">Projects Deployed</p>
            <Layers className="w-4 h-4 text-success" />
          </div>
          <p className="text-5xl font-bold tracking-tighter">03</p>
        </Card>

        <Card className="p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-muted font-mono text-[10px] uppercase">Coding Problems</p>
            <Code2 className="w-4 h-4 text-muted" />
          </div>
          <p className="text-5xl font-bold tracking-tighter">1,380+</p>
        </Card>
      </div>
    </section>
  )
}
