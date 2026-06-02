import { SectionHeader } from "@/components/ui/SectionHeader"
import { Code2, PenTool, Database, Cpu, Layers, HardDrive } from "lucide-react"

export function StackSection() {
  const layers = [
    {
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      title: "Programming Layer",
      subtitle: "CORE LANGUAGES",
      tags: ["C", "C++", "Python", "Java", "JavaScript"]
    },
    {
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      title: "Frontend Layer",
      subtitle: "UI & INTERACTION",
      tags: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      icon: <HardDrive className="w-4 h-4 text-blue-400" />,
      title: "Backend Layer",
      subtitle: "APIS & LOGIC",
      tags: ["Node.js", "Express.js"]
    },
    {
      icon: <Database className="w-4 h-4 text-yellow-400" />,
      title: "Data Layer",
      subtitle: "PERSISTENCE",
      tags: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      icon: <Cpu className="w-4 h-4 text-pink-400" />,
      title: "AI Layer",
      subtitle: "MACHINE LEARNING",
      tags: ["Linear Regression", "Logistic Regression", "K-Means", "Random Forest"]
    },
    {
      icon: <PenTool className="w-4 h-4 text-emerald-400" />,
      title: "Tooling Layer",
      subtitle: "WORKFLOW & ENV",
      tags: ["GitHub", "Postman", "VS Code", "Google Colab", "Jupyter Notebook"]
    }
  ]

  return (
    <section id="stack">
      <SectionHeader 
        tag="INFRASTRUCTURE.LAYERS" 
        title="Tech Infrastructure" 
      />
      
      <div className="flex flex-col">
        {layers.map((layer, idx) => (
          <div 
            key={idx} 
            className="flex flex-col md:flex-row items-start md:items-center py-6 border-b border-border/50 gap-6 md:gap-12 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
          >
            <div className="w-full md:w-64 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                {layer.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{layer.title}</h4>
                <p className="text-[10px] font-mono text-muted uppercase mt-0.5">{layer.subtitle}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 flex-1 font-mono text-xs text-muted">
              {layer.tags.map(tag => (
                <span key={tag} className="hover:text-white transition-colors">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
