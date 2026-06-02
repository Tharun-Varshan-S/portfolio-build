import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"

export function ActivityStreamSection() {
  const logs = [
    { time: "12:48:02", category: "GIT", message: "commit pushed → main · ai-interview-platform · feat(agents): rubric scoring v2" },
    { time: "12:31:17", category: "DEPLOY", message: "service ai.interview.platform redeployed (v2.4.1) · region ap-south-1", highlight: true },
    { time: "11:58:44", category: "LEETCODE", message: "solved → 'Minimum Cost to Cut a Stick' · hard · 41ms beats 92%" },
    { time: "11:12:09", category: "SYS", message: "uptime check OK · 47/47 services healthy" },
    { time: "10:44:51", category: "LEARN", message: "MLOps · completed module: model registry + drift detection", color: "text-purple-400" },
    { time: "10:02:33", category: "PR", message: "merged PR #128 → main · refactor(error-mitigation): kafka backpressure", color: "text-blue-400" },
    { time: "09:21:08", category: "HACK", message: "registered: Smart India Hackathon · team THARUN-OS", color: "text-yellow-400" },
    { time: "08:55:22", category: "OPEN-SOURCE", message: "contribution accepted · langgraph #1923", color: "text-green-400" },
    { time: "08:13:00", category: "GIT", message: "commit pushed → main · lifebridge · fix(ws): reconnection backoff" },
    { time: "07:42:17", category: "SYS", message: "scheduled task complete · daily-leetcode · 3 problems" }
  ]

  return (
    <section id="activity">
      <SectionHeader 
        tag="STREAM.LIVE" 
        title="Activity Stream" 
        subtitle="Tailing system events — commits, deployments, learning checkpoints."
      />
      
      <Card className="rounded-xl overflow-hidden border-border bg-[#05050A]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-black/40">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-muted font-mono text-[10px]">tharun@cloud-console:~$ tail -f /var/log/activity</div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            streaming
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs text-muted overflow-x-auto leading-relaxed">
          <div className="mb-4 text-gray-500">
            <p>[boot] starting service: error.mitigation.engine ....... ok</p>
            <p>[boot] starting service: lifebridge.platform ........... ok</p>
            <p>[boot] verifying credentials .......... 4/4 valid</p>
            <p>[boot] establishing uplink: github / linkedin / email ... ok</p>
            <p className="text-white">[boot] SYSTEM READY : welcome, recruiter.</p>
          </div>
          
          <table className="w-full text-left border-collapse">
            <tbody>
              {logs.map((log, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0">
                  <td className="py-2 pr-6 text-gray-600 whitespace-nowrap">{log.time}</td>
                  <td className={`py-2 pr-6 whitespace-nowrap ${log.color || (log.highlight ? 'text-success' : 'text-primary')}`}>
                    [{log.category}]
                  </td>
                  <td className={`py-2 w-full ${log.highlight ? 'text-white font-medium' : ''}`}>
                    {log.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-4 text-primary flex items-center">
            <span>tharun@cloud-console:~$</span>
            <span className="ml-2 w-2 h-4 bg-primary animate-pulse" />
          </div>
        </div>
      </Card>
    </section>
  )
}
