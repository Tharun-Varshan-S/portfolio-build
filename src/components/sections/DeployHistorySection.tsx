import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { Trophy, Award, Star } from "lucide-react"

export function DeployHistorySection() {
  const milestones = [
    {
      date: "2025-XX",
      hash: "dp1_3e9822",
      icon: <Trophy className="w-4 h-4 text-yellow-400" />,
      title: "Best Team Spirit Award",
      subtitle: "ICPC",
      desc: "Recognised at Sri Eshwar College of Engineering for outstanding collaboration and competitive programming endurance.",
      status: "AWARDED"
    },
    {
      date: "2025-XX",
      hash: "dp2_1f4a90",
      icon: <Award className="w-4 h-4 text-yellow-500" />,
      title: "Winner — CoderAct",
      subtitle: "Sri Sakthi College of Engineering",
      desc: "Secured first place in the CoderAct hackathon with an innovative software solution.",
      status: "WINNER"
    },
    {
      date: "2024-XX",
      hash: "dp3_8a7b6c",
      icon: <Star className="w-4 h-4 text-gray-300" />,
      title: "Finalist — SELFE Hackathon",
      subtitle: "National Hackathon",
      desc: "Reached the final round among numerous competing teams.",
      status: "FINALIST"
    }
  ]

  return (
    <section>
      <SectionHeader 
        tag="ACHIEVEMENTS.LOG" 
        title="Deployment Milestones" 
        subtitle="Recognised achievements — each treated as a successful deployment."
      />
      
      <div className="flex flex-col border border-border/50 rounded-2xl overflow-hidden bg-card/20">
        {milestones.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 p-8 border-b border-border/50 last:border-0 hover:bg-white/[0.02] transition-colors relative">
            <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-muted">{item.hash}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                {item.icon}
                <h4 className="font-semibold">{item.title}</h4>
              </div>
              <p className="font-mono text-[10px] text-muted mb-4">{item.subtitle}</p>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
            
            <div className="absolute top-8 right-8">
              <Badge variant="success" dot className="font-mono tracking-widest">{item.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
