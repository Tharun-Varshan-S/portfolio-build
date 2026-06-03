"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Code2, Network, Cpu, Database, CheckCircle, Terminal, HelpCircle, AlertTriangle } from "lucide-react"
import { ProjectArchitecture } from "@/components/sections/ProjectArchitecture"

export default function OrganDonationDetail() {
  const techStack = [
    { name: "React 18", category: "Client View Engine" },
    { name: "Vite", category: "Fast Client Bundler" },
    { name: "Tailwind CSS", category: "Utility Style Layer" },
    { name: "React Router", category: "Client-side Route Matrix" },
    { name: "Node.js & Express", category: "API Controller Service" },
    { name: "PostgreSQL", category: "Relational Geodatabase" }
  ]

  const decisions = [
    {
      title: "Granular Role-based Access Control (RBAC)",
      rationale: "Selected cryptographic authentication rules mapping users to three rigid system views: Donor, Hospital, and Administrator. Enforced middleware tokens that verify role claims prior to query compilation."
    },
    {
      title: "Hospital Geolocation Mapping API",
      rationale: "Implemented spatial geo-indices in PostgreSQL (PostGIS) to compute distance matrices between transplant donors and patient hubs immediately on update, optimizing delivery coordinates."
    },
    {
      title: "Encrypted Secure Audit Logs",
      rationale: "To guarantee clinical trust, database insert operations trigger automated transaction logging using cryptographic hash chains, creating a permanent verification history."
    }
  ]

  const challenges = [
    {
      title: "Concurrent Geolocation Match Conflicts",
      problem: "When multiple hospitals requested matching donor indices simultaneously, database locks resulted in race conditions.",
      solution: "Enforced strict transaction isolation rules (`SERIALIZABLE`) at PostgreSQL node levels, utilizing redis locks to queue query operations gracefully."
    },
    {
      title: "Protecting Private Health Information (PHI)",
      problem: "Exposing absolute donor records violated compliance standards on the administrative dashboard view.",
      solution: "Engineered customized dynamic column masking filters inside Express controller nodes. Detailed personal entries are fully masked unless double-verified via authorization hashes."
    }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-5xl mx-auto w-full flex flex-col gap-16 relative z-10">

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
          <Network className="w-4 h-4 text-emerald-400" />
          SYSTEM CODE: ORGANDONATION.SYSTEM
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
          Organ Donation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            System
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-3xl">
          A highly secure, role-based medical database system designed to connect organ donors, transplant coordinators, and urgent care networks instantly through geolocation routing and dynamic authorization.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs">
          <a href="https://github.com/Tharun-Varshan-S/organ-donation-system.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
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
            Organ transplant coordination relies on highly fragmented, static networks. Real-time changes in donor statuses are delayed, matching distances are computed manually, and access credentials lack the necessary granularity required to protect patient privacy.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-mono text-primary tracking-wider uppercase flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            02. WHY IT EXISTS
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            Organ Donation System was engineered to provide instant, secure matching capabilities. By combining role-based authentication layers with localized geocoding APIs, matching is solved automatically under strict HIPAA compliance rules.
          </p>
        </div>
      </div>

      {/* Interactive System Architecture */}
      <ProjectArchitecture projectId="lifebridge" />

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
          <li><strong>Blockchain-backed Transactions:</strong> Transition historical matching chains to Ethereum Smart Contracts to enforce complete, unalterable clinical audibility.</li>
          <li><strong>Real-time Socket Alerting:</strong> Integrate bidirectional WebSockets to notify transplant coordinators immediately on donor registration spikes.</li>
          <li><strong>Automated Route Mapping:</strong> Embed Google Maps Directions API to map real-time traffic hazards into emergency transport timers.</li>
        </ul>
      </div>

    </div>
  )
}
