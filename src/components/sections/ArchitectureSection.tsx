"use client"

import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { ReactFlow, Background, Controls } from '@xyflow/react'
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

export function ArchitectureSection() {
  return (
    <section id="architecture">
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
          <button className="px-3 py-1.5 rounded text-muted hover:text-white transition-colors">LIFEBRIDGE</button>
        </div>
      </div>
      
      <Card className="h-[500px] rounded-xl overflow-hidden relative border border-border">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="ml-2">~/architecture/ai-interview.json</span>
        </div>
        
        <ReactFlow 
          nodes={initialNodes} 
          edges={initialEdges} 
          fitView 
          colorMode="dark"
        >
          <Background color="#1A2332" gap={16} />
          <Controls className="!bg-[#0A0E17] !border-[#1A2332]" />
        </ReactFlow>

        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-[10px] font-mono">
          <span className="text-muted">scroll to navigate page · drag nodes to inspect</span>
          <span className="text-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success" /> Flow active</span>
        </div>
      </Card>
    </section>
  )
}
