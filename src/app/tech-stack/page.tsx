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

export default function TechStackPage() {
  const [hoveredTech, setHoveredTech] = useState<{ name: string; desc: string; relation: string; cat: string } | null>({
    name: "TypeScript",
    desc: "A strongly-typed programming language that builds on JavaScript, giving structured safety to system scripts.",
    relation: "Compiles standard Express server environments and binds strict React flow state variables.",
    cat: "BACKEND STACK"
  })

  const layers: InfrastructureCategory[] = [
    {
      title: "Programming",
      subtitle: "LANGUAGES",
      icon: Terminal,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "C", desc: "Low-level system programming and procedural execution.", relation: "" },
        { name: "C++", desc: "Object-oriented programming and competitive coding.", relation: "" },
        { name: "Python", desc: "Machine learning workflows and general automation.", relation: "" },
        { name: "Java", desc: "Enterprise application architectures and robust OOP design.", relation: "" },
        { name: "JavaScript", desc: "Dynamic web functionality and client-side logic.", relation: "" }
      ]
    },
    {
      title: "Frontend",
      subtitle: "UI/UX",
      icon: Code2,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "HTML", desc: "Semantic markup for structuring content.", relation: "" },
        { name: "CSS", desc: "Visual styling and responsive layouts.", relation: "" },
        { name: "React", desc: "Component-based library for building highly interactive UIs.", relation: "" },
        { name: "Tailwind", desc: "Utility-first CSS styling framework designed for flexible layouts.", relation: "" },
        { name: "Vite", desc: "Next-generation frontend toolchain providing ultra-fast compilation.", relation: "" }
      ]
    },
    {
      title: "Backend",
      subtitle: "SERVER",
      icon: Cloud,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "Node.js", desc: "Open-source, cross-platform JavaScript runtime environment.", relation: "" },
        { name: "Express.js", desc: "Fast, minimalist web framework for Node.js API development.", relation: "" },
        { name: "FastAPI", desc: "High-performance Python web framework for building APIs.", relation: "" }
      ]
    },
    {
      title: "Database",
      subtitle: "STORAGE",
      icon: Database,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "MongoDB", desc: "Document-based database engine that stores data in JSON-like structures.", relation: "" },
        { name: "MySQL", desc: "Relational database management system for structured data.", relation: "" },
        { name: "PostgreSQL", desc: "High-performance relational SQL database engine with spatial modules.", relation: "" }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "PROCESSING",
      icon: Cpu,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "Scikit-Learn", desc: "Machine learning algorithms and pipelines.", relation: "" },
        { name: "Pandas", desc: "Data manipulation and analysis.", relation: "" },
        { name: "NumPy", desc: "Numerical computing and multi-dimensional arrays.", relation: "" },
        { name: "Matplotlib", desc: "Data visualization and plotting.", relation: "" },
        { name: "Linear Regression", desc: "Predictive modeling for continuous variables.", relation: "" },
        { name: "Logistic Regression", desc: "Classification algorithms for discrete outcomes.", relation: "" },
        { name: "Random Forest", desc: "Ensemble learning method for classification and regression.", relation: "" },
        { name: "K-Means", desc: "Unsupervised learning algorithm for clustering.", relation: "" }
      ]
    },
    {
      title: "Tools",
      subtitle: "WORKSPACE",
      icon: Network,
      color: "from-border to-transparent",
      accent: "border-border text-foreground",
      nodes: [
        { name: "GitHub", desc: "Version control and collaborative code repositories.", relation: "" },
        { name: "VS Code", desc: "Extensible source code editor and IDE.", relation: "" },
        { name: "Postman", desc: "API development, testing, and documentation platform.", relation: "" },
        { name: "Google Colab", desc: "Hosted Jupyter notebook service for ML research.", relation: "" },
        { name: "Jupyter Notebook", desc: "Interactive computing environments for data science.", relation: "" }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Tech Stack <br />
          <span className="text-muted">
            Ecosystem Map
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
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Experience Context</span>
                  <p className="text-base text-muted leading-relaxed">{hoveredTech.desc}</p>
                </div>
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
