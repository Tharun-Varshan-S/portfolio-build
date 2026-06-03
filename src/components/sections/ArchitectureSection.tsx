import { useState, useCallback } from "react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { ReactFlow, Background, Controls, useNodesState, useEdgesState } from '@xyflow/react'
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import '@xyflow/react/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 50, y: 50 }, data: { label: 'Auth (JWT)' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '2', position: { x: 50, y: 150 }, data: { label: 'API Gateway' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '3', position: { x: 250, y: 150 }, data: { label: 'FastAPI Core' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '4', position: { x: 450, y: 100 }, data: { label: 'LangGraph Agents' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '5', position: { x: 650, y: 100 }, data: { label: 'OpenAI / Claude' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '6', position: { x: 450, y: 200 }, data: { label: 'Postgres' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '7', position: { x: 50, y: 300 }, data: { label: 'Grafana / Logs' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
  { id: '8', position: { x: 250, y: 300 }, data: { label: 'Redis Cache' }, style: { backgroundColor: '#0A0E17', color: '#fff', border: '1px solid #1A2332', borderRadius: '8px', padding: '12px' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e3-8', source: '3', target: '8', animated: true, style: { stroke: '#00E5FF' } },
  { id: 'e2-7', source: '2', target: '7', animated: true, style: { stroke: '#00E5FF' } },
];

const nodeDetails: Record<string, any> = {
  '1': { purpose: 'Authentication & Authorization', responsibilities: ['Validate Tokens', 'Rate Limiting'], tech: ['JWT', 'Node.js'], input: 'Credentials', output: 'Access Token' },
  '2': { purpose: 'Route Requests', responsibilities: ['Load Balancing', 'Routing'], tech: ['Nginx', 'Express'], input: 'HTTP Requests', output: 'Forwarded Requests' },
  '3': { purpose: 'Core Business Logic', responsibilities: ['Process requests', 'Orchestrate flow'], tech: ['FastAPI', 'Python'], input: 'Sanitized Data', output: 'Structured Response' },
  '4': { purpose: 'AI Orchestration', responsibilities: ['Manage AI Agents', 'State Tracking'], tech: ['LangGraph', 'Python'], input: 'Prompts', output: 'AI Tool Calls' },
  '5': { purpose: 'LLM Inference', responsibilities: ['Generate Responses', 'Reasoning'], tech: ['OpenAI API', 'Claude API'], input: 'Context & Prompt', output: 'Generated Text' },
  '6': { purpose: 'Persistent Storage', responsibilities: ['Store User Data', 'Store Logs'], tech: ['PostgreSQL'], input: 'SQL Queries', output: 'Data Rows' },
  '7': { purpose: 'Observability', responsibilities: ['Monitor Metrics', 'Aggregate Logs'], tech: ['Grafana', 'Prometheus'], input: 'Log Streams', output: 'Dashboards' },
  '8': { purpose: 'Caching Layer', responsibilities: ['Session Storage', 'Fast Retrieval'], tech: ['Redis'], input: 'Key-Value Pairs', output: 'Cached Data' },
}

export function ArchitectureSection() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const onNodeMouseEnter = useCallback((_: any, node: any) => {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) {
          return { ...n, style: { ...n.style, border: '1px solid #00E5FF', boxShadow: '0 0 15px rgba(0,229,255,0.4)' } };
        }
        return n;
      })
    );
    setEdges((eds) =>
      eds.map((e) => {
        if (e.source === node.id || e.target === node.id) {
          return { ...e, style: { ...e.style, strokeWidth: 2, stroke: '#fff' } };
        }
        return e;
      })
    );
  }, [setNodes, setEdges]);

  const onNodeMouseLeave = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({ ...n, style: { ...n.style, border: '1px solid #1A2332', boxShadow: 'none' } }))
    );
    setEdges((eds) =>
      eds.map((e) => ({ ...e, style: { ...e.style, strokeWidth: 1, stroke: '#00E5FF' } }))
    );
  }, [setNodes, setEdges]);

  const onNodeClick = useCallback((_: any, node: any) => {
    setActiveNode(node.id);
  }, []);

  return (
    <section id="architecture" className="relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
        <SectionHeader
          tag="ARCHITECTURE.CENTER"
          title="System Architecture"
          subtitle="Interactive diagrams for each deployed service. Drag, zoom, and trace data flow."
          className="mb-0"
        />

        <div className="flex gap-1 font-mono text-[10px] uppercase p-1 rounded-md border border-border bg-black/20">
          <button className="px-3 py-1.5 rounded bg-primary/20 text-primary border border-primary/30">AI - INTERVIEW</button>
          <button className="px-3 py-1.5 rounded text-muted hover:text-white transition-colors">ERROR - MITIGATION</button>
          <button className="px-3 py-1.5 rounded text-muted hover:text-white transition-colors">ORGAN DONATION</button>
        </div>
      </div>

      <Card className="h-[500px] rounded-xl overflow-hidden relative border border-border group/arch">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="ml-2">~/architecture/ai-interview.json</span>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          onNodeClick={onNodeClick}
          fitView
          colorMode="dark"
        >
          <Background color="#1A2332" gap={16} />
          <Controls className="!bg-[#0A0E17] !border-[#1A2332]" />
        </ReactFlow>

        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-[10px] font-mono pointer-events-none">
          <span className="text-muted">scroll to navigate page · drag nodes to inspect</span>
          <span className="text-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Flow active</span>
        </div>

        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="absolute top-0 right-0 w-80 h-full bg-[#0A0E17]/95 backdrop-blur-md border-l border-border p-6 shadow-2xl z-20 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-bold text-white">{nodes.find(n => n.id === activeNode)?.data.label as string}</h3>
                <button onClick={() => setActiveNode(null)} className="text-muted hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase mb-1">Purpose</p>
                  <p className="text-sm text-muted-foreground">{nodeDetails[activeNode]?.purpose}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase mb-1">Responsibilities</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {nodeDetails[activeNode]?.responsibilities.map((r: string) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase mb-1">Technology</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {nodeDetails[activeNode]?.tech.map((t: string) => (
                      <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase mb-1">Input</p>
                  <p className="text-sm font-mono text-muted-foreground bg-black/30 p-2 rounded border border-white/5">{nodeDetails[activeNode]?.input}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase mb-1">Output</p>
                  <p className="text-sm font-mono text-muted-foreground bg-black/30 p-2 rounded border border-white/5">{nodeDetails[activeNode]?.output}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </section>
  )
}
