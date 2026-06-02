import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Link2 } from "lucide-react"

export function CredentialsSection() {
  const credentials = [
    {
      issuer: "IIT BOMBAY",
      title: "C++ Training - Spoken Tutorial",
      hash: "0x01:9F:5B7A:84BB:E1F3"
    },
    {
      issuer: "IIT BOMBAY",
      title: "C Training - Spoken Tutorial",
      hash: "8xAW5S:9ID4:56EA:0CCB"
    },
    {
      issuer: "UDEMY",
      title: "Data Structures and Algorithms",
      hash: "6X6G12:7889:AA34:EB32"
    },
    {
      issuer: "UDEMY",
      title: "Python using Generative AI",
      hash: "2X3N9B:0D2C:1198:7EEE"
    },
    {
      issuer: "NPTEL",
      title: "Data Science using Python",
      hash: "5Y7M11:0K8V:2244:9XZ1"
    }
  ]

  return (
    <section>
      <SectionHeader
        tag="CREDENTIALS.VERIFIED"
        title="Verified System Credentials"
        subtitle="Certifications cryptographically attested via issuer registries."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {credentials.map((cred, idx) => (
          <Card key={idx} className="p-6 flex flex-col justify-between hover:border-primary/30 transition-colors group cursor-pointer">
            <div>
              <div className="flex justify-between items-center mb-6">
                <Badge variant="success" dot className="bg-transparent border-success/30 font-mono text-[10px]">VERIFIED</Badge>
              </div>
              <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">{cred.issuer}</p>
              <h4 className="font-semibold text-sm leading-tight mb-8 group-hover:text-primary transition-colors">{cred.title}</h4>
            </div>

            <div className="flex items-center gap-2 text-muted">
              <Link2 className="w-3 h-3" />
              <p className="font-mono text-[8px] truncate">{cred.hash}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
