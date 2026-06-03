import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import activityLogs from "@/data/activity.json"

export function ActivityStreamSection() {
  const getCategoryColor = (type: string) => {
    switch (type) {
      case "AWARD": return "text-yellow-400"
      case "DEPLOY": return "text-success"
      case "LEETCODE": return "text-amber-500"
      case "GIT": return "text-blue-400"
      default: return "text-primary"
    }
  }

  return (
    <section id="activity" className="relative z-10 w-full">
      <SectionHeader
        tag="STREAM.LIVE"
        title="Activity Stream"
        subtitle="Dynamic system events — commits, deployments, learning checkpoints."
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
            <p>[boot] starting service: organdonation.system .......... ok</p>
            <p>[boot] verifying credentials .......... 4/4 valid</p>
            <p>[boot] establishing uplink: github / linkedin / email ... ok</p>
            <p className="text-white">[boot] SYSTEM READY : welcome, recruiter.</p>
          </div>

          <table className="w-full text-left border-collapse">
            <tbody>
              {activityLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0">
                  <td className="py-2 pr-6 text-gray-600 whitespace-nowrap">{log.date}</td>
                  <td className={`py-2 pr-6 whitespace-nowrap ${getCategoryColor(log.type)}`}>
                    [{log.type}]
                  </td>
                  <td className="py-2 w-full text-white/90">
                    {log.description}
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

