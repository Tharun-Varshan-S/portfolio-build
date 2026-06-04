"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Code2, Cpu, Database, CheckCircle, Terminal, HelpCircle, AlertTriangle } from "lucide-react"
import { ProjectArchitecture } from "@/components/sections/ProjectArchitecture"

export default function InterviewPlatformDetail() {
  const techStack = [
    { name: "React.js", category: "Frontend Core" },
    { name: "TypeScript", category: "Language Standard" },
    { name: "Node.js & Express.js", category: "Backend Engine" },
    { name: "MongoDB", category: "Primary Data Warehouse" },
    { name: "Gemini AI API", category: "Intelligent RAG Core" },
    { name: "JWT & Bcrypt", category: "Cryptographic Authentication" }
  ]

  const decisions = [
    {
      title: "Transition to Gemini RAG Pipeline",
      rationale: "Selected Gemini AI over GPT-3.5 due to its superior contextual token windows and structured JSON output API. Built custom prompt schemas that restrict LLM hallucinations during question generation."
    },
    {
      title: "Stateless Token-based (JWT) Security",
      rationale: "To support high-throughput, horizontally scalable API endpoints, authentication is fully stateless using cryptographic signatures. User permissions are mapped inside base64 payload properties."
    },
    {
      title: "Mongoose ODM Layer Validation",
      rationale: "Enforced strict validation checks inside the document schema files to ensure corrupt data (e.g. malformed resume JSON outputs) is intercepted before database commit actions."
    }
  ]

  const challenges = [
    {
      title: "Prompt Hallucinations and Schema Integrity",
      problem: "Initial LLM outputs regularly returned malformed JSON or nested arrays that crashed the frontend UI parser.",
      solution: "Implemented strict validation layers in Gemini middleware utilizing Zod schemas. If the model outputs a corrupt structure, a recursive retry handler is automatically triggered with prompt adjustments."
    },
    {
      title: "Optimizing Latency under Multi-Task Prompts",
      problem: "Compiling a complete resume structure while generating custom technical problems exceeded 6 seconds in initial trials.",
      solution: "Decoupled the tasks into parallel async processes: one parsing the raw text block and another compiling baseline technical categories concurrently, dropping the average time down to <2 seconds."
    }
  ]

  return (
    <div className="min-h-screen py-24 px-6 max-w-[1700px] mx-auto w-full flex flex-col gap-12 relative z-10">

      {/* Back to Hub Link */}
      <div className="flex">
        <Link
          href="/projects"
          className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted hover:text-white uppercase transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          BACK TO SYSTEMS HUB
        </Link>
      </div>

      {/* Hero Block */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-xs font-mono text-primary tracking-widest uppercase">
          <Cpu className="w-4 h-4 text-cyan-400" />
          SYSTEM CODE: INTERVIEW.INTELLIGENCE
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
          Interview Intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Platform
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-3xl">
          An advanced, automated technical evaluation workspace that replaces generic, non-targeted recruitment practices. It reads custom candidate profiles and engineers tailored engineering problems to evaluate skillsets objectively in real-time.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs">
          <a href="https://github.com/Tharun-Varshan-S/AI-nterview-assistant.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
            <Code2 className="w-4 h-4" /> BROWSE REPOSITORY
          </a>
        </div>
      </div>

      {/* Visual Separation Line */}
      <div className="h-px bg-border/80" />

      {/* Grid: Problem Statement vs Why It Exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-mono text-primary tracking-wider uppercase flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-primary" />
            01. THE PROBLEM
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Traditional hiring pipelines are clogged with generic evaluations. Recruiters review hundreds of candidate profiles using basic matching, resulting in poor screening quality, missed technical talent, and excessive hours wasted on manual interviewing.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-mono text-primary tracking-wider uppercase flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            02. WHY IT EXISTS
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            This platform was built to create an objective, algorithmic screening system. By dynamically parsing resumes and generating specialized coding, debugging, and system design assessments, candidates are qualified instantly on real-world engineering demands.
          </p>
        </div>
      </div>

      {/* Interactive System Architecture */}
      <ProjectArchitecture projectId="interview-platform" />

      {/* Technical Decisions Table */}
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">Key Engineering Decisions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {decisions.map((d, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card/10 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white">{d.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{d.rationale}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Challenges & Solutions */}
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">Complex Challenges Solved</h3>
        <div className="flex flex-col gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="p-8 rounded-2xl border border-border/80 bg-card/25 flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">CHALLENGE {i + 1}: {c.title}</span>
                <p className="text-sm text-muted leading-relaxed"><strong className="text-white">Problem:</strong> {c.problem}</p>
              </div>
              <div className="flex-1 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
                <span className="text-[10px] font-mono text-success uppercase tracking-widest">MITIGATION SOLUTION</span>
                <p className="text-sm text-muted leading-relaxed"><strong className="text-white">Mitigation:</strong> {c.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans">System Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="p-4 rounded-lg bg-card/40 border border-border flex flex-col gap-1">
              <span className="text-sm font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.02] flex flex-col gap-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          SYSTEM FUTURE ROADMAP
        </h3>
        <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-2">
          <li><strong>Distributed Audio Streaming:</strong> Integrate real-time speech-to-text nodes using Whisper API to support voice-based technical interviews.</li>
          <li><strong>Advanced sandboxed compiler:</strong> Add a secure isolated code runner execution layer utilizing Docker sub-processes to compile submitted solutions immediately.</li>
          <li><strong>Integrated Team Dashboards:</strong> Provide recruitment coordinators with tabular metrics comparing candidates objectively.</li>
        </ul>
      </div>

    </div>
  )
}
