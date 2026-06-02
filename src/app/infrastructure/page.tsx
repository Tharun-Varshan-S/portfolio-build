"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Terminal, Database, Network, Code2, Cloud, ArrowRight, Activity } from "lucide-react"

interface TechNode {
  name: string
  desc: string
  relation: string
}

interface InfrastructureCategory {
  title: string
  subtitle: string
  icon: any
  color: string
  accent: string
  nodes: TechNode[]
}

export default function InfrastructurePage() {
  const [hoveredTech, setHoveredTech] = useState<{ name: string; desc: string; relation: string; cat: string } | null>({
    name: "TypeScript",
    desc: "A strongly-typed programming language that builds on JavaScript, giving structured safety to system scripts.",
    relation: "Compiles standard Express server environments and binds strict React flow state variables.",
    cat: "BACKEND INFRASTRUCTURE"
  })

  // Grouped Infrastructure Layer Map
  const layers: InfrastructureCategory[] = [
    {
      title: "Client & UI Layers",
      subtitle: "FRONTEND",
      icon: Code2,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "React.js", desc: "A component-based library for building highly interactive user interfaces.", relation: "Integrates React Flow canvases and handles dashboard states dynamically." },
        { name: "Vite", desc: "A next-generation frontend toolchain providing ultra-fast compilation.", relation: "Speeds up client development compilation sequences." },
        { name: "Tailwind CSS", desc: "A utility-first CSS styling framework designed for flexible layouts.", relation: "Applies glassmorphism models and micro-interaction spotlights." }
      ]
    },
    {
      title: "Backend Clusters",
      subtitle: "BACKEND",
      icon: Terminal,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "TypeScript", desc: "A strongly-typed programming language providing complete type safety.", relation: "Validates incoming API scopes and enforces strict model compiler types." },
        { name: "Node.js", desc: "An open-source, cross-platform JavaScript runtime environment.", relation: "Compiles REST controllers and processes parallel async worker scripts." },
        { name: "Express.js", desc: "A fast, minimalist web framework for Node.js API development.", relation: "Handles routing structures and triggers secure auth controllers." }
      ]
    },
    {
      title: "Data Operations",
      subtitle: "STORAGE",
      icon: Database,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "MongoDB", desc: "A document-based database engine that stores data in JSON-like structures.", relation: "Holds account attributes and evaluation results." },
        { name: "PostgreSQL", desc: "A high-performance relational SQL database engine with spatial modules.", relation: "Manages donor matrices utilizing geolocational index tables." },
        { name: "Redis", desc: "An in-memory key-value data store used for low-latency session caching.", relation: "Caches active transaction counts and implements database queue locks." }
      ]
    },
    {
      title: "Intelligence & ML",
      subtitle: "PROCESSING",
      icon: Cpu,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "Gemini AI API", desc: "Google's deep multimodal LLM engine providing high-context parsing.", relation: "Generates custom engineering problems based on resume timelines." },
        { name: "Scikit-Learn", desc: "A powerful Python library for machine learning algorithms and pipelines.", relation: "Orchestrates isolation forests for data outlier cleaning." },
        { name: "Pandas & NumPy", desc: "Numerical data analysis blocks for Python scripts.", relation: "Transforms raw matrices and processes multi-dimensional tensors." }
      ]
    },
    {
      title: "Cloud & Ops",
      subtitle: "INFRASTRUCTURE",
      icon: Cloud,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "Git & GitHub", desc: "Version control systems managing collaborative code repositories.", relation: "Triggers automated continuous deployment sequences on commits." },
        { name: "Vercel / Render", desc: "Cloud computing services hosting frontend and server nodes.", relation: "Deploys production runtimes under automated SSL locks." },
        { name: "PostGIS Map", desc: "A spatial database extender module for PostgreSQL database engines.", relation: "Enables geographic coordinates distance calculations." }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Infrastructure <br />
          <span className="text-muted">
            Map
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-xl">
          Visualizing runtime engines, databases, machine learning layers, and cloud nodes that compose the active deployment workspace. Hover tech nodes to check dependencies.
        </p>
      </div>

      {/* Main visual infrastructure columns */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* Left 3 Columns: Grid Layers */}
        <div className="xl:col-span-3 flex flex-col gap-8">
          {layers.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <div 
                key={layer.title}
                className="relative rounded-2xl border border-border bg-card shadow-sm hover:shadow-md p-8 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 group transition-all"
              >
                {/* Left Side: Layer Title */}
                <div className="flex items-center gap-4 relative z-10 md:w-64">
                  <div className={`p-3 rounded-xl border bg-background ${layer.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{layer.subtitle}</span>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">{layer.title}</h3>
                  </div>
                </div>

                {/* Right Side: Interactive nodes */}
                <div className="flex flex-wrap gap-3 relative z-10 flex-1 md:justify-end">
                  {layer.nodes.map((node) => {
                    const isHovered = hoveredTech?.name === node.name
                    return (
                      <button
                        key={node.name}
                        onMouseEnter={() => setHoveredTech({ ...node, cat: layer.subtitle })}
                        className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                          isHovered 
                            ? "bg-foreground text-background border-foreground scale-[1.03]" 
                            : "bg-background border-border text-foreground hover:border-foreground/20"
                        }`}
                      >
                        {node.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right 1 Column: Telemetry detail Card */}
        <div className="flex flex-col gap-6">
          {hoveredTech ? (
            <motion.div 
              key={hoveredTech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col gap-6 flex-1 sticky top-32 justify-between"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                  {hoveredTech.cat}
                </div>
                <h3 className="text-3xl font-bold text-foreground tracking-tight">{hoveredTech.name}</h3>
                <div className="h-0.5 w-12 bg-border rounded-full" />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Specification</span>
                  <p className="text-base text-muted leading-relaxed">{hoveredTech.desc}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider flex items-center gap-1">
                  Dependency Link
                  <ArrowRight className="w-4 h-4" />
                </span>
                <p className="text-base text-foreground leading-relaxed font-sans">{hoveredTech.relation}</p>
              </div>

            </motion.div>
          ) : (
            <div className="p-8 rounded-2xl border border-border bg-card shadow-sm flex items-center justify-center text-center flex-1 font-medium text-sm text-muted">
              Hover technology nodes to inspect relationships and specifications.
            </div>
          )}
        </div>

      </div>

    </div>
  )
}
