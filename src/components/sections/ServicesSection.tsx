import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { ExternalLink, Code2, FileText, Activity } from "lucide-react"

export function ServicesSection() {
  const projects = [
    {
      title: "AI-Powered Technical Interview Platform",
      domain: "ai.interview.platform",
      desc: "Built a full-stack AI platform that automates technical interviews by analyzing resumes and generating personalized questions.",
      tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
      capabilities: [
        { label: "Resume Analysis", value: "active" },
        { label: "Question Generation", value: "adaptive" },
        { label: "AI Evaluation", value: "real-time" }
      ],
      metrics: [
        { label: "Evaluation", value: "<2s" },
        { label: "Auth", value: "JWT" },
        { label: "Model", value: "Gemini" }
      ],
      repoUrl: "https://github.com/Tharun-Varshan-S/AI-nterview-assistant.git"
    },
    {
      title: "Intelligent Error Mitigation System",
      domain: "error.mitigation.engine",
      desc: "Machine learning system that detects and mitigates data quality issues like missing values, outliers, and class imbalance.",
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      capabilities: [
        { label: "Missing Value Detection", value: "active" },
        { label: "Data Drift Monitoring", value: "active" },
        { label: "Automated Pipelines", value: "running" }
      ],
      metrics: [
        { label: "Latency", value: "45ms" },
        { label: "Accuracy", value: "98.2%" },
        { label: "Retraining", value: "Auto" }
      ],
      repoUrl: "https://github.com/Tharun-Varshan-S/DATA-SCIENCE-PROJECT-COLLEGE.git"
    },
    {
      title: "Organ Donation System",
      domain: "lifebridge.platform",
      desc: "Role-based organ donation management platform connecting donors, hospitals, and administrators.",
      tags: ["React 18", "Vite", "Tailwind CSS", "React Router"],
      capabilities: [
        { label: "Donor Registration", value: "active" },
        { label: "Hospital Matching", value: "geo-aware" },
        { label: "Admin Dashboard", value: "centralized" }
      ],
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Roles", value: "3" },
        { label: "Access", value: "RBAC" }
      ],
      repoUrl: "https://github.com/Tharun-Varshan-S/organ-donation-system.git"
    }
  ]

  return (
    <section id="services">
      <div className="flex items-center gap-2 mb-8">
        <Activity className="w-4 h-4 text-primary" />
        <span className="text-muted font-mono text-xs">ACTIVE v1.0.0 ap-south-1</span>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} className="flex flex-col md:flex-row overflow-hidden border-border/50">
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-border/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
              <p className="text-primary font-mono text-xs mb-6">{project.domain}</p>

              <p className="text-muted text-sm leading-relaxed mb-8 max-w-xl">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-4 font-mono text-xs text-muted mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/[0.03] rounded border border-white/[0.05]">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={project.repoUrl} className="flex items-center gap-2 px-4 py-1.5 border border-border rounded text-xs font-mono text-white hover:bg-white/5 transition-colors">
                  <Code2 className="w-3.5 h-3.5" /> REPO
                </a>
              </div>
            </div>

            <div className="w-full md:w-[350px] bg-black/20 p-8 flex flex-col">
              <p className="text-muted font-mono text-[10px] uppercase mb-8 tracking-widest">Runtime Metrics</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.metrics.map((metric, midx) => (
                  <div key={midx}>
                    <p className="text-muted font-mono text-[9px] uppercase mb-1">{metric.label}</p>
                    <p className="font-semibold text-primary">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 text-xs font-mono">
                {project.capabilities.map((cap, cidx) => (
                  <div key={cidx} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted">{cap.label}</span>
                    <span className="text-white">{cap.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
