"use client"

import React, { useState, useCallback, useEffect } from "react"
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, Handle, Position, BaseEdge, getBezierPath, EdgeProps } from '@xyflow/react'
import { motion, AnimatePresence } from "framer-motion"
import { X, Terminal } from "lucide-react"
import { Card } from "@/components/ui/Card"
import '@xyflow/react/dist/style.css'

// ─── Custom Edge with Particles ──────────────────────────────────────────────
export function CustomEdge({
  sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd, id, selected
}: EdgeProps) {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  const isHighlighted = style.strokeWidth === 2;

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ 
        ...style, 
        stroke: isHighlighted ? '#00E5FF' : 'rgba(0, 229, 255, 0.3)',
        strokeWidth: isHighlighted ? 2 : 1,
        transition: 'all 0.3s ease'
      }} />
      <circle r={isHighlighted ? "4" : "2"} fill={isHighlighted ? "#fff" : "#00E5FF"} style={{ filter: 'drop-shadow(0 0 4px #00E5FF)' }}>
        <animateMotion dur={isHighlighted ? "1.5s" : "3s"} repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
}

const edgeTypes = {
  custom: CustomEdge,
};

// ─── Custom Node ─────────────────────────────────────────────────────────────
const CustomNode = ({ data, selected, isConnectable }: any) => {
  return (
    <div className={`px-4 py-2 shadow-md rounded-md bg-[#0A0E17] border transition-all duration-300 ${selected || data.isHovered ? 'border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-[1.02]' : 'border-[#1A2332]'}`}>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="!bg-[#00E5FF] !w-2 !h-2 !border-none" />
      <div className="flex items-center gap-2">
        <span className="text-white text-xs font-semibold">{data.label}</span>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="!bg-[#00E5FF] !w-2 !h-2 !border-none" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// ─── Project Data Maps ───────────────────────────────────────────────────────
const PROJECTS_DATA: Record<string, any> = {
  'interview-platform': {
    nodes: [
      { id: '1', position: { x: 50, y: 150 }, data: { label: 'Resume Upload' }, type: 'custom' },
      { id: '2', position: { x: 250, y: 150 }, data: { label: 'Resume Parser' }, type: 'custom' },
      { id: '3', position: { x: 450, y: 150 }, data: { label: 'Skill Extractor' }, type: 'custom' },
      { id: '4', position: { x: 650, y: 150 }, data: { label: 'Gemini Question Generator' }, type: 'custom' },
      { id: '5', position: { x: 650, y: 250 }, data: { label: 'Interview Engine' }, type: 'custom' },
      { id: '6', position: { x: 450, y: 250 }, data: { label: 'Evaluation Service' }, type: 'custom' },
      { id: '7', position: { x: 250, y: 250 }, data: { label: 'MongoDB' }, type: 'custom' },
      { id: '8', position: { x: 50, y: 250 }, data: { label: 'Admin Dashboard' }, type: 'custom' },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'custom' },
      { id: 'e2-3', source: '2', target: '3', type: 'custom' },
      { id: 'e3-4', source: '3', target: '4', type: 'custom' },
      { id: 'e4-5', source: '4', target: '5', type: 'custom' },
      { id: 'e5-6', source: '5', target: '6', type: 'custom' },
      { id: 'e6-7', source: '6', target: '7', type: 'custom' },
      { id: 'e8-7', source: '8', target: '7', type: 'custom' },
    ],
    details: {
      '1': { purpose: 'Receive candidate documents', tech: ['React', 'Multer'], input: 'PDF/DOCX', output: 'File Buffer', status: 'Operational', responsibilities: ['File Validation', 'Upload Handling'] },
      '2': { purpose: 'Extract raw text from documents', tech: ['Node.js', 'pdf-parse'], input: 'File Buffer', output: 'Raw Text', status: 'Operational', responsibilities: ['Text Extraction', 'Sanitization'] },
      '3': { purpose: 'Identify core competencies', tech: ['Python', 'NLP'], input: 'Raw Text', output: 'JSON Profile', status: 'Operational', responsibilities: ['Named Entity Recognition', 'Keyword Matching'] },
      '4': { purpose: 'Generate technical interview questions', tech: ['Gemini API'], input: 'JSON Profile', output: 'Question Set', status: 'Operational', responsibilities: ['Prompt Engineering', 'Hallucination Mitigation'] },
      '5': { purpose: 'Orchestrate interview session', tech: ['Express.js', 'Socket.io'], input: 'Candidate Answers', output: 'Evaluated Context', status: 'Operational', responsibilities: ['Real-time State', 'Session Management'] },
      '6': { purpose: 'Grade technical responses', tech: ['Python', 'Scoring Model'], input: 'Evaluated Context', output: 'Final Score', status: 'Operational', responsibilities: ['Accuracy Checking', 'Feedback Generation'] },
      '7': { purpose: 'Persistent data storage', tech: ['MongoDB', 'Mongoose'], input: 'Score Data', output: 'Stored Document', status: 'Operational', responsibilities: ['Data Persistence', 'Schema Validation'] },
      '8': { purpose: 'View candidate metrics', tech: ['React', 'Tailwind'], input: 'Query Requests', output: 'Dashboard Views', status: 'Operational', responsibilities: ['Data Visualization', 'Access Control'] },
    }
  },
  'error-mitigation': {
    nodes: [
      { id: '1', position: { x: 50, y: 150 }, data: { label: 'Dataset Upload' }, type: 'custom' },
      { id: '2', position: { x: 250, y: 150 }, data: { label: 'Validator' }, type: 'custom' },
      { id: '3', position: { x: 450, y: 50 }, data: { label: 'Missing Value Detector' }, type: 'custom' },
      { id: '4', position: { x: 450, y: 150 }, data: { label: 'Outlier Detector' }, type: 'custom' },
      { id: '5', position: { x: 450, y: 250 }, data: { label: 'Data Drift Detector' }, type: 'custom' },
      { id: '6', position: { x: 650, y: 150 }, data: { label: 'Mitigation Engine' }, type: 'custom' },
      { id: '7', position: { x: 850, y: 150 }, data: { label: 'Model Retrainer' }, type: 'custom' },
      { id: '8', position: { x: 850, y: 250 }, data: { label: 'Analytics Dashboard' }, type: 'custom' },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'custom' },
      { id: 'e2-3', source: '2', target: '3', type: 'custom' },
      { id: 'e2-4', source: '2', target: '4', type: 'custom' },
      { id: 'e2-5', source: '2', target: '5', type: 'custom' },
      { id: 'e3-6', source: '3', target: '6', type: 'custom' },
      { id: 'e4-6', source: '4', target: '6', type: 'custom' },
      { id: 'e5-6', source: '5', target: '6', type: 'custom' },
      { id: 'e6-7', source: '6', target: '7', type: 'custom' },
      { id: 'e6-8', source: '6', target: '8', type: 'custom' },
    ],
    details: {
      '1': { purpose: 'Ingest raw data feeds', tech: ['Python', 'Pandas'], input: 'CSV/JSON', output: 'DataFrames', status: 'Operational', responsibilities: ['Ingestion'] },
      '2': { purpose: 'Check schema compliance', tech: ['Pydantic'], input: 'DataFrames', output: 'Validated Data', status: 'Operational', responsibilities: ['Type Checking'] },
      '3': { purpose: 'Identify null zones', tech: ['Scikit-Learn'], input: 'Data', output: 'Imputed Data', status: 'Operational', responsibilities: ['Bayesian Imputation'] },
      '4': { purpose: 'Find statistical outliers', tech: ['Isolation Forest'], input: 'Data', output: 'Filtered Data', status: 'Operational', responsibilities: ['Anomaly Detection'] },
      '5': { purpose: 'Monitor distribution shifts', tech: ['Evidently AI'], input: 'Data Streams', output: 'Drift Metrics', status: 'Operational', responsibilities: ['PSI Calculation'] },
      '6': { purpose: 'Apply corrections', tech: ['Python'], input: 'Metrics & Data', output: 'Cleaned Dataset', status: 'Operational', responsibilities: ['Aggregation', 'Correction'] },
      '7': { purpose: 'Update ML Models', tech: ['MLflow', 'Scikit-Learn'], input: 'Cleaned Dataset', output: 'New Model Weights', status: 'Operational', responsibilities: ['Model Training'] },
      '8': { purpose: 'Visualize data health', tech: ['Streamlit'], input: 'Metrics', output: 'UI Dashboard', status: 'Operational', responsibilities: ['Reporting'] },
    }
  },
  'lifebridge': {
    nodes: [
      { id: '1', position: { x: 50, y: 100 }, data: { label: 'Donor Portal' }, type: 'custom' },
      { id: '2', position: { x: 50, y: 200 }, data: { label: 'Hospital Portal' }, type: 'custom' },
      { id: '3', position: { x: 50, y: 300 }, data: { label: 'Admin Dashboard' }, type: 'custom' },
      { id: '4', position: { x: 250, y: 200 }, data: { label: 'Authentication Layer' }, type: 'custom' },
      { id: '5', position: { x: 450, y: 200 }, data: { label: 'Matching Engine' }, type: 'custom' },
      { id: '6', position: { x: 450, y: 100 }, data: { label: 'Compatibility Service' }, type: 'custom' },
      { id: '7', position: { x: 650, y: 200 }, data: { label: 'Database' }, type: 'custom' },
      { id: '8', position: { x: 650, y: 300 }, data: { label: 'Notification Service' }, type: 'custom' },
    ],
    edges: [
      { id: 'e1-4', source: '1', target: '4', type: 'custom' },
      { id: 'e2-4', source: '2', target: '4', type: 'custom' },
      { id: 'e3-4', source: '3', target: '4', type: 'custom' },
      { id: 'e4-5', source: '4', target: '5', type: 'custom' },
      { id: 'e5-6', source: '5', target: '6', type: 'custom' },
      { id: 'e6-5', source: '6', target: '5', type: 'custom' },
      { id: 'e5-7', source: '5', target: '7', type: 'custom' },
      { id: 'e5-8', source: '5', target: '8', type: 'custom' },
    ],
    details: {
      '1': { purpose: 'Donor registration', tech: ['React'], input: 'User Info', output: 'Registration Req', status: 'Operational', responsibilities: ['UI Form'] },
      '2': { purpose: 'Hospital organ requests', tech: ['React'], input: 'Patient Info', output: 'Organ Request', status: 'Operational', responsibilities: ['UI Form'] },
      '3': { purpose: 'System oversight', tech: ['React'], input: 'Admin Actions', output: 'Config Changes', status: 'Operational', responsibilities: ['Monitoring'] },
      '4': { purpose: 'Verify user identity', tech: ['JWT', 'Bcrypt'], input: 'Credentials', output: 'Auth Token', status: 'Operational', responsibilities: ['RBAC', 'Security'] },
      '5': { purpose: 'Find optimal matches', tech: ['Node.js', 'PostGIS'], input: 'Request Data', output: 'Match Results', status: 'Operational', responsibilities: ['Geospatial Queries', 'Distance Optimization'] },
      '6': { purpose: 'Verify biological fit', tech: ['Python'], input: 'Medical Data', output: 'Compatibility Score', status: 'Operational', responsibilities: ['Medical Rules Engine'] },
      '7': { purpose: 'Secure data persistence', tech: ['PostgreSQL'], input: 'Records', output: 'Saved State', status: 'Operational', responsibilities: ['ACID Transactions', 'Audit Logs'] },
      '8': { purpose: 'Alert stakeholders', tech: ['Socket.io', 'Twilio'], input: 'Match Event', output: 'SMS/Email', status: 'Operational', responsibilities: ['Real-time Alerts'] },
    }
  }
}

export function ProjectArchitecture({ projectId }: { projectId: string }) {
  const projectData = PROJECTS_DATA[projectId];
  
  const [nodes, setNodes, onNodesChange] = useNodesState(projectData?.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState(projectData?.edges || []);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const onNodeMouseEnter = useCallback((_: any, node: any) => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isHovered: n.id === node.id }
      }))
    );
    setEdges((eds) =>
      eds.map((e) => {
        if (e.source === node.id || e.target === node.id) {
          return { ...e, style: { ...e.style, strokeWidth: 2 } };
        }
        return e;
      })
    );
  }, [setNodes, setEdges]);

  const onNodeMouseLeave = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isHovered: false }
      }))
    );
    setEdges((eds) =>
      eds.map((e) => ({ ...e, style: { ...e.style, strokeWidth: 1 } }))
    );
  }, [setNodes, setEdges]);

  const onNodeClick = useCallback((_: any, node: any) => {
    setActiveNode(node.id);
  }, []);

  if (!projectData) return null;

  return (
    <div className="flex flex-col gap-6 w-full">
      <h3 className="text-xl font-bold text-white uppercase tracking-tight">Interactive System Architecture</h3>
      
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-[600px]">
        <Card className="flex-1 min-h-[420px] lg:h-full rounded-xl overflow-hidden relative border border-border group/arch">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] text-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span className="ml-2">~/architecture/{projectId}.json</span>
          </div>

          <div className="absolute inset-0 touch-none">
            <ReactFlow
              className="h-full w-full"
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              panOnDrag
              zoomOnPinch
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeMouseEnter={onNodeMouseEnter}
              onNodeMouseLeave={onNodeMouseLeave}
              onNodeClick={onNodeClick}
              nodesDraggable={!isMobile}
              fitView
              colorMode="dark"
              minZoom={isMobile ? 0.14 : 0.18}
              maxZoom={1.5}
            >
              <Background color="#1A2332" gap={16} />
              <Controls className="!bg-[#0A0E17] !border-[#1A2332] !fill-white" />
            </ReactFlow>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-[10px] font-mono pointer-events-none">
            <span className="text-muted">scroll to zoom · drag to pan · click nodes to inspect</span>
            <span className="text-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Flow active</span>
          </div>
        </Card>

        {/* Node Inspector Panel */}
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key="inspector"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full lg:w-[30%] min-h-[280px] lg:h-full bg-card/30 backdrop-blur-md border border-border rounded-xl p-6 shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest">Node Inspector</p>
                  <h3 className="text-lg font-bold text-white">{nodes.find(n => n.id === activeNode)?.data.label as string}</h3>
                </div>
                <button onClick={() => setActiveNode(null)} className="text-muted hover:text-white transition-colors bg-white/5 p-1.5 rounded-md">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 space-y-5">
                <div>
                  <p className="text-[10px] font-mono text-muted uppercase mb-1">Purpose</p>
                  <p className="text-sm text-white/90">{projectData.details[activeNode]?.purpose}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted uppercase mb-1">Responsibilities</p>
                  <ul className="text-sm text-white/90 list-disc list-inside">
                    {projectData.details[activeNode]?.responsibilities.map((r: string) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted uppercase mb-2">Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {projectData.details[activeNode]?.tech.map((t: string) => (
                      <span key={t} className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-mono text-primary">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-[10px] font-mono text-muted uppercase mb-1">Input</p>
                    <p className="text-xs font-mono text-white/80 bg-black/40 p-2 rounded border border-white/5">{projectData.details[activeNode]?.input}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-muted uppercase mb-1">Output</p>
                    <p className="text-xs font-mono text-white/80 bg-black/40 p-2 rounded border border-white/5">{projectData.details[activeNode]?.output}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-[10px] font-mono text-muted uppercase mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs font-mono text-success">{projectData.details[activeNode]?.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full lg:w-[30%] min-h-[280px] lg:h-full bg-card/10 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Terminal className="w-6 h-6 text-muted" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Awaiting Selection</h3>
                <p className="text-xs text-muted max-w-[200px] mx-auto">Click any node in the architecture graph to inspect its configuration and data flow.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
