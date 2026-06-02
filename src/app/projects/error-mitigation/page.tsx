"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Code2, ShieldAlert, Cpu, Database, CheckCircle, Terminal, HelpCircle, AlertTriangle } from "lucide-react"

export default function ErrorMitigationDetail() {
  const techStack = [
    { name: "Python", category: "Language Core" },
    { name: "Scikit-Learn", category: "ML Modeling Pipeline" },
    { name: "Pandas & NumPy", category: "Data Manipulation Grid" },
    { name: "Matplotlib & Seaborn", category: "Statistical Reporting" },
    { name: "Flask", category: "Restful Prediction API" }
  ]

  const decisions = [
    {
      title: "Pipeline Automation with Scikit-Learn",
      rationale: "Instead of disjointed cleaning scripts, implemented standard ML Pipelines. This ensures data preprocessing transformers and predictive estimators are bound in a single serializable object."
    },
    {
      title: "Adaptive Data Drift Monitoring",
      rationale: "Configured population stability indexes (PSI) that check running data streams for drift. Preprocessor automatically triggers alerting if running distributions shift."
    },
    {
      title: "Real-time Isolation Forests",
      rationale: "Selected Isolation Forest algorithms over standard Z-score boundaries for multi-dimensional anomaly detection due to superior high-dimensional scaling capabilities."
    }
  ]

  const challenges = [
    {
      title: "Class Imbalance in Critical Targets",
      problem: "Anomaly occurrences represented under 2% of the aggregate dataset, causing basic classifiers to exhibit extreme recall bias.",
      solution: "Integrated SMOTE (Synthetic Minority Over-sampling Technique) in combination with custom class weight limits, boosting our anomaly detection sensitivity down to a 98.2% F1 score."
    },
    {
      title: "In-stream Imputation Performance Bottlenecks",
      problem: "Standard KNN Imputer modules introduced heavy CPU latency, exceeding 150ms per batch transaction.",
      solution: "Swapped out memory-heavy KNN processes in active streams with an optimized Iterative Imputer powered by ultra-fast Bayesian Ridge regression, dropping latency down to a clean 45ms."
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
          <ShieldAlert className="w-4 h-4 text-pink-400" />
          SYSTEM CODE: ERROR.MITIGATION
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
          Error Mitigation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Engine
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-3xl">
          An automated, production-ready machine learning framework engineered to detect data quality anomalies, handle missing information dynamically, and rectify outliers in real-time stream layers.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs">
          <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/25 hover:border-primary/50 text-primary transition-all duration-300">
            <ExternalLink className="w-4 h-4" /> INITIATE TESTING FRAME
          </a>
          <a href="https://github.com/Tharun-Varshan-S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
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
            Data systems ingest corrupt, incomplete, or distorted feeds continuously. Missing attributes, unexpected sensor readings, or outliers regularly pass through backend storage blocks unmitigated, resulting in downstream runtime errors and machine learning failures.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-mono text-primary tracking-wider uppercase flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            02. WHY IT EXISTS
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            The mitigation engine acts as a pre-storage filter. It dynamically identifies anomalies, balances data anomalies instantly, and imputes null entries programmatically, ensuring clean transactional feeds reach long-term storage clusters.
          </p>
        </div>
      </div>

      {/* System Overview */}
      <div className="flex flex-col gap-6 p-8 rounded-2xl border border-border/85 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-primary/5 pointer-events-none">
          <Terminal className="w-48 h-48" />
        </div>

        <h3 className="text-xl font-bold text-white uppercase tracking-tight">System Overview & Architecture Flow</h3>
        <p className="text-sm text-muted leading-relaxed max-w-3xl">
          The processing pipeline integrates a series of serial pre-processing steps. Raw stream payloads are first verified for structural schema consistency. Sub-modules perform outlier analysis using Isolation Forests before feeding values to Bayesian Ridge regression for missing value imputation.
        </p>

        {/* Textual flow stream representation */}
        <div className="mt-6 flex flex-col gap-3 font-mono text-[10px] text-muted tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="text-primary">[RAW TRANSACTIONS]</span>
            <span>&rarr;</span>
            <span>OUTLIER DETECTOR (ISOLATION FOREST)</span>
            <span>&rarr;</span>
            <span className="text-primary">[CLEAN TARGETS]</span>
          </div>
          <div className="flex items-center gap-3 ml-12">
            <span>&rarr;</span>
            <span>BAYESIAN IMPUTER (NULL CORRECTION)</span>
            <span>&rarr;</span>
            <span className="text-success">[COMPLETED FEATURES]</span>
            <span>&rarr;</span>
            <span>STORAGE LAYER</span>
          </div>
        </div>
      </div>

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
          <li><strong>Dynamic Pipeline Export:</strong> Add support for ONNX pipeline exports to deploy the preprocessing engine natively inside low-latency Rust/C++ runtime containers.</li>
          <li><strong>Deep Generative Imputation:</strong> Research Autoencoder networks to model extreme missing feature sequences under highly correlated inputs.</li>
          <li><strong>Distributed Kafka Integration:</strong> Build native Kafka partition consumer interfaces to clean high-velocity stream feeds asynchronously.</li>
        </ul>
      </div>

    </div>
  )
}
