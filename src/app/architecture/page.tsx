"use client"

import { useState } from "react"
import { ReactFlow, Background, Controls } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { motion } from "framer-motion"
import { Cpu, Terminal, Network, Shield, Server, Database, ChevronRight, Activity } from "lucide-react"

// Types
type SystemKey = "interview" | "error" | "lifebridge"

interface NodeDetails {
  title: string
  status: string
  latency: string
  cpu: string
  memory: string
  protocols: string[]
  desc: string
}

export default function ArchitecturePage() {
  const [activeSystem, setActiveSystem] = useState<SystemKey>("interview")
  const [selectedNode, setSelectedNode] = useState<NodeDetails | null>({
    title: "Auth (JWT Gateway)",
    status: "Operational",
    latency: "12ms",
    cpu: "0.5 Cores",
    memory: "256 MB",
    protocols: ["HTTPS", "Bcrypt", "JWT"],
    desc: "Intercepts all incoming REST requests, decodes bearer tokens, and maps credentials to system scopes."
  })

  const nodeClass = "bg-card text-foreground border border-border rounded-lg p-3 text-sm font-medium shadow-sm min-w-[150px] text-center"

  // System Nodes Mapping
  const systemsNodes = {
    interview: [
      { id: "1", position: { x: 50, y: 50 }, data: { label: "Auth (JWT)" }, className: nodeClass },
      { id: "2", position: { x: 50, y: 180 }, data: { label: "Express API" }, className: nodeClass },
      { id: "3", position: { x: 280, y: 180 }, data: { label: "Resume Parser" }, className: nodeClass },
      { id: "4", position: { x: 520, y: 100 }, data: { label: "Gemini AI Core" }, className: nodeClass },
      { id: "5", position: { x: 740, y: 100 }, data: { label: "MongoDB Store" }, className: nodeClass },
      { id: "6", position: { x: 520, y: 260 }, data: { label: "Mongoose Layer" }, className: nodeClass }
    ],
    error: [
      { id: "1", position: { x: 50, y: 50 }, data: { label: "Data Streams" }, className: nodeClass },
      { id: "2", position: { x: 50, y: 180 }, data: { label: "Isolation Forest" }, className: nodeClass },
      { id: "3", position: { x: 280, y: 180 }, data: { label: "Bayesian Imputer" }, className: nodeClass },
      { id: "4", position: { x: 520, y: 180 }, data: { label: "Classifier Model" }, className: nodeClass },
      { id: "5", position: { x: 740, y: 180 }, data: { label: "MLflow Registry" }, className: nodeClass }
    ],
    lifebridge: [
      { id: "1", position: { x: 50, y: 50 }, data: { label: "React App Interface" }, className: nodeClass },
      { id: "2", position: { x: 280, y: 50 }, data: { label: "Express API Nodes" }, className: nodeClass },
      { id: "3", position: { x: 280, y: 200 }, data: { label: "Role middleware (RBAC)" }, className: nodeClass },
      { id: "4", position: { x: 520, y: 200 }, data: { label: "Postgres Geolocation" }, className: nodeClass },
      { id: "5", position: { x: 740, y: 200 }, data: { label: "Audit Ledger Chain" }, className: nodeClass }
    ]
  }

  const edgeStyle = { stroke: "hsl(var(--muted-foreground))" }

  const systemsEdges = {
    interview: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle },
      { id: "e2-3", source: "2", target: "3", animated: true, style: edgeStyle },
      { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle },
      { id: "e4-5", source: "4", target: "5", animated: true, style: edgeStyle },
      { id: "e3-6", source: "3", target: "6", animated: true, style: edgeStyle }
    ],
    error: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle },
      { id: "e2-3", source: "2", target: "3", animated: true, style: edgeStyle },
      { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle },
      { id: "e4-5", source: "4", target: "5", animated: true, style: edgeStyle }
    ],
    lifebridge: [
      { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle },
      { id: "e2-3", source: "2", target: "3", animated: true, style: edgeStyle },
      { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle },
      { id: "e4-5", source: "4", target: "5", animated: true, style: edgeStyle }
    ]
  }

  // Node details dictionary for selection lookup
  const nodeDetailsDict: Record<string, NodeDetails> = {
    // Interview Platform Nodes
    "Auth (JWT)": { title: "Auth (JWT Gateway)", status: "Operational", latency: "12ms", cpu: "0.5 Cores", memory: "256 MB", protocols: ["HTTPS", "Bcrypt", "JWT"], desc: "Intercepts all incoming REST requests, decodes bearer tokens, and maps credentials to system scopes." },
    "Express API": { title: "Express API Gateway", status: "Operational", latency: "25ms", cpu: "1.2 Cores", memory: "512 MB", protocols: ["Express.js", "REST API"], desc: "Processes primary incoming HTTP requests, handles session validation steps, and orchestrates pipeline workers." },
    "Resume Parser": { title: "Resume Extraction Node", status: "Operational", latency: "150ms", cpu: "2.0 Cores", memory: "1.5 GB", protocols: ["PDF.js", "Custom Regex Patterns"], desc: "Translates binary PDF resume streams into structured string logs, compiling skill arrays for analysis." },
    "Gemini AI Core": { title: "Gemini RAG Processor", status: "Operational", latency: "1.1s", cpu: "API Client (Extern)", memory: "N/A", protocols: ["Gemini RAG Prompt", "JSON Schema Out"], desc: "Leverages deep semantic models to compare extracted skill blocks against role descriptions, compiling tailored coding questions." },
    "MongoDB Store": { title: "MongoDB Database Node", status: "Operational", latency: "5ms", cpu: "1.5 Cores", memory: "2.0 GB", protocols: ["Mongoose Engine", "WiredTiger Cluster"], desc: "Persists candidate accounts, evaluation scores, and dynamic technical assessments reliably." },
    "Mongoose Layer": { title: "Mongoose ODM Validator", status: "Operational", latency: "2ms", cpu: "0.2 Cores", memory: "128 MB", protocols: ["TypeScript Schemas"], desc: "Validates JSON structure integrity before database write events to avoid corrupt schemas." },
    
    // Error Mitigation Engine Nodes
    "Data Streams": { title: "Ingestion Stream Layer", status: "Streaming", latency: "2ms", cpu: "0.8 Cores", memory: "512 MB", protocols: ["JSON Stream", "Pandas CSV Parser"], desc: "Aggregates external files, database records, and active API inputs into active working memory pools." },
    "Isolation Forest": { title: "Outlier Forest Estimator", status: "Active", latency: "18ms", cpu: "1.6 Cores", memory: "1.0 GB", protocols: ["Scikit-Learn Preprocessor"], desc: "Calculates anomaly scores for high-dimensional feature variables to intercept outlier values immediately." },
    "Bayesian Imputer": { title: "Bayesian Imputation Layer", status: "Active", latency: "22ms", cpu: "1.2 Cores", memory: "768 MB", protocols: ["Bayesian Ridge IterativeImputer"], desc: "Fills in null columns dynamically using fast statistical regression rather than heavy computational clustering." },
    "Classifier Model": { title: "Random Forest Classifier", status: "Active", latency: "5ms", cpu: "1.0 Cores", memory: "512 MB", protocols: ["Scikit-Learn Estimator"], desc: "Processes preprocessed feature inputs to predict categorical targets under strict accuracy constraints." },
    "MLflow Registry": { title: "MLflow Model Registry", status: "Operational", latency: "N/A", cpu: "0.5 Cores", memory: "512 MB", protocols: ["Artifact Storage", "REST Registry"], desc: "Tracks operational parameters, model versions, and accuracy metrics for deployment validation." },

    // LifeBridge Nodes
    "React App Interface": { title: "LifeBridge UI Interface", status: "Operational", latency: "N/A (Client)", cpu: "Browser Execution", memory: "Browser Dynamic", protocols: ["Vite", "React 18", "Tailwind"], desc: "Renders role-based interfaces for administrators, medical networks, and donors." },
    "Express API Nodes": { title: "Transactional REST Gateway", status: "Operational", latency: "30ms", cpu: "1.0 Cores", memory: "512 MB", protocols: ["Express.js API", "CORS Middleware"], desc: "Handles hospital matching queries and security controls securely." },
    "Role middleware (RBAC)": { title: "Middleware Authorization Gate", status: "Operational", latency: "4ms", cpu: "0.2 Cores", memory: "128 MB", protocols: ["Express Session", "Role Headers"], desc: "Enforces strict access bounds based on authenticated role properties." },
    "Postgres Geolocation": { title: "PostgreSQL Geodatabase Node", status: "Operational", latency: "8ms", cpu: "2.0 Cores", memory: "2.0 GB", protocols: ["PostGIS Spatial Engine"], desc: "Computes spatial distance matrices between hospital dispatch targets and donors dynamically." },
    "Audit Ledger Chain": { title: "Ledger Chain Audit Logger", status: "Operational", latency: "12ms", cpu: "0.5 Cores", memory: "256 MB", protocols: ["SHA-256 Chain Logs"], desc: "Appends audit entries in chronological chains to secure clinical transparency." }
  }

  // Handle node selection in diagram
  const onNodeClick = (_: any, node: any) => {
    const details = nodeDetailsDict[node.data.label]
    if (details) {
      setSelectedNode(details)
    }
  }

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto w-full flex flex-col gap-16 relative z-10">
      
      {/* Page Header */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-none">
          Interactive <br />
          <span className="text-muted">
            System Topology
          </span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-xl">
          Visualizing data transactions, security checkpoints, and processing nodes in real time. Select a system and drag or click nodes to expand core telemetry parameters.
        </p>
      </div>

      {/* Selector and Main Visual Workspace */}
      <div className="flex flex-col gap-8">
        
        {/* Toggle Bar */}
        <div className="flex flex-wrap gap-2 text-sm font-medium p-1 rounded-xl border border-border bg-card shadow-sm max-w-xl">
          <button 
            onClick={() => { setActiveSystem("interview"); setSelectedNode(nodeDetailsDict["Auth (JWT)"]) }}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSystem === "interview" 
                ? "bg-foreground text-background shadow-sm" 
                : "text-muted hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            Interview Platform
          </button>
          <button 
            onClick={() => { setActiveSystem("error"); setSelectedNode(nodeDetailsDict["Data Streams"]) }}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSystem === "error" 
                ? "bg-foreground text-background shadow-sm" 
                : "text-muted hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            Error Engine
          </button>
          <button 
            onClick={() => { setActiveSystem("lifebridge"); setSelectedNode(nodeDetailsDict["React App Interface"]) }}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSystem === "lifebridge" 
                ? "bg-foreground text-background shadow-sm" 
                : "text-muted hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            LifeBridge Network
          </button>
        </div>

        {/* Main Grid: Flow Canvas vs Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* React Flow Card Container */}
          <div className="lg:col-span-2 h-[520px] rounded-2xl border border-border bg-card/40 shadow-sm overflow-hidden relative">
            
            {/* React Flow Canvas */}
            <ReactFlow 
              nodes={systemsNodes[activeSystem]} 
              edges={systemsEdges[activeSystem]} 
              onNodeClick={onNodeClick}
              fitView 
              colorMode="system"
            >
              <Background color="var(--border)" gap={16} />
              <Controls className="!bg-card !border-border !text-foreground" />
            </ReactFlow>

            {/* Instruction labels */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-xs font-medium text-muted pointer-events-none">
              <span>Drag to pan · Scroll to zoom</span>
              <span className="text-success flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success" /> 
                System Active
              </span>
            </div>
          </div>

          {/* Node telemetry Expansion Sidebar */}
          <div className="flex flex-col gap-6">
            {selectedNode ? (
              <motion.div 
                key={selectedNode.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 rounded-2xl border border-border bg-card shadow-sm flex flex-col gap-6 flex-1 justify-between"
              >
                <div className="flex flex-col gap-6">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">Selected Node</span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-success/10 border border-success/20 text-success text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      {selectedNode.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{selectedNode.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{selectedNode.desc}</p>
                  
                  {/* Parameter rows */}
                  <div className="flex flex-col gap-4 mt-4 text-xs font-medium">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-muted">Latency</span>
                      <span className="text-foreground font-semibold">{selectedNode.latency}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-muted">CPU</span>
                      <span className="text-foreground font-semibold">{selectedNode.cpu}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="text-muted">Memory</span>
                      <span className="text-foreground font-semibold">{selectedNode.memory}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Protocols</p>
                  <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                    {selectedNode.protocols.map(p => (
                      <span key={p} className="px-2.5 py-1 rounded bg-secondary border border-border text-secondary-foreground">{p}</span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="p-8 rounded-2xl border border-border bg-card shadow-sm flex items-center justify-center text-center flex-1">
                <p className="text-sm font-medium text-muted">Select a node in the diagram to inspect operational parameters.</p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Protocol logs & High Engineering Weight Explanations */}
      <div className="flex flex-col gap-8 mt-6">
        <h3 className="text-xl font-bold text-foreground tracking-tight">Technical Protocols</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="p-8 rounded-xl border border-border bg-card shadow-sm flex flex-col gap-4 group hover:border-foreground/20 transition-all">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
              REST API & Stateless Auth
            </h4>
            <p className="text-muted leading-relaxed">
              API routes utilize HTTP REST channels configured under strict CORS rules. State authorization relies entirely on asymmetric JWT bearer signatures, eliminating database token overhead to support lightning-fast sub-second transaction checks.
            </p>
          </div>
          <div className="p-8 rounded-xl border border-border bg-card shadow-sm flex flex-col gap-4 group hover:border-foreground/20 transition-all">
            <h4 className="text-base font-bold text-foreground flex items-center gap-2">
              <Server className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
              Microservices Topology
            </h4>
            <p className="text-muted leading-relaxed">
              Decoupling computationally intensive parsing blocks from raw API controller sequences. Critical pipelines execute as parallel asynchronous threads, mitigating blocking operations and keeping average latency under 45ms.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
