"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import {
  FileDown,
  Terminal,
  Copy,
  Check,
  GraduationCap,
  Award,
  Code2,
  Briefcase,
  ChevronRight,
  ExternalLink
} from "lucide-react"

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"education" | "skills" | "achievements" | "experience">("education")
  const [copied, setCopied] = useState(false)
  const curlCommand = "curl -O https://tharunvarshan.dev/resume/Tharun_Varshan_Resume.pdf"

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Sri Eshwar College of Engineering",
      duration: "2024 - 2028",
      cgpa: "8.35 / 10",
      highlights: [
        "Specialised modules in Machine Learning, Neural Networks, and Advanced Data Structures",
        "Active member of the programming & hackathon club",
        "Top tier academic consistency (8.35 CGPA)"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Peepal Prodigy School",
      duration: "2022 - 2024",
      cgpa: "92%",
      highlights: [
        "Completed higher secondary education with a focus on core sciences and mathematics."
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Peepal Prodigy School",
      duration: "2021 - 2022",
      cgpa: "96%",
      highlights: [
        "Completed secondary education with high distinction."
      ]
    }
  ]

  const skills = [
    { category: "Programming", list: ["C", "C++", "Python", "Java", "JavaScript"] },
    { category: "Web Technologies", list: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Next.js", "Tailwind CSS"] },
    { category: "Databases", list: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Machine Learning", list: ["Linear Regression", "Logistic Regression", "K-Means", "Random Forest", "Scikit-Learn", "Pandas", "NumPy"] },
    { category: "Tools", list: ["VS Code", "GitHub", "Postman", "Google Colab", "Jupyter Notebook", "Docker"] },
    { category: "Core Concepts", list: ["Data Structures and Algorithms", "Problem Solving", "RESTful APIs", "JWT Auth"] }
  ]

  const achievements = [
    {
      title: "Winner — CoderAct",
      organization: "Sri Sakthi College of Engineering",
      description: "Ranked 1st place overall for conceptualising and deploying an innovative software solution under tight timelines."
    },
    {
      title: "Best Team Spirit Award — ICPC",
      organization: "Sri Eshwar College of Engineering",
      description: "Recognised at Sri Eshwar College of Engineering for excellent collaboration and algorithmic problem-solving endurance during the ICPC team challenge."
    },
    {
      title: "Finalist — SELFE Hackathon",
      organization: "National Level Hackathon",
      description: "Shortlisted into the top finalist teams nationwide for developing a viable product prototype."
    }
  ]

  const experience = [
    {
      role: "MERN Stack Intern",
      duration: "Dec 2025",
      company: "Better Tomorrow",
      points: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
        "Built and integrated RESTful APIs for efficient client-server communication.",
        "Implemented modular and scalable backend architecture for maintainability.",
        "Worked on database design, authentication, and deployment of web applications."
      ]
    },
    {
      role: "AI & Full-Stack Developer (Personal & Academic Projects)",
      duration: "2024 - Present",
      company: "Independent Research & Development",
      points: [
        "Built a full-stack AI-Powered Technical Interview Platform that parses resumes and dynamically generates technical questions via Gemini AI.",
        "Architected an Intelligent Data Error Mitigation Engine in Python to automate detection of missing values, outliers, and data imbalances.",
        "Designed and deployed 'Organ Donation System' using role-based access controls and geo-aware hospital matching.",
        "Solved over 1,380+ algorithms across LeetCode (500+ solved, rating 1678), SkillRack (750+), and CodeChef (130+)."
      ]
    }
  ]

  return (
    <section id="resume" className="scroll-mt-24">
      <SectionHeader
        tag="SYSTEM.IDENTITY"
        title="Interactive Resume"
        subtitle="Access compiled professional details, education registry, and cryptographic credentials."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Console Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card className="p-6 bg-[#05050A] border-border/60 shadow-xl shadow-primary/5 flex flex-col gap-6 relative overflow-hidden">
            {/* Ambient cyan glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-center pb-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-muted">resume_downloader.sh</span>
              </div>
              <Badge variant="success" dot className="text-[10px] font-mono">COMPILED</Badge>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted leading-relaxed">
                Download the complete high-resolution PDF resume document or clone the professional snapshot directly from the terminal.
              </p>

              {/* Interactive terminal command block */}
              <div className="bg-black/40 rounded-lg border border-border p-3 flex items-center justify-between font-mono text-xs text-white">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-primary">$</span>
                  <span className="truncate">{curlCommand}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded hover:bg-white/5 text-muted hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/resume/Tharun_Varshan_Resume.pdf"
                download="Tharun_Varshan_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" /> Download PDF
              </a>
              <a
                href="/resume/Tharun_Varshan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-border hover:bg-card text-white rounded-lg font-medium transition-colors active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" /> Live Preview
              </a>
            </div>

            {/* Quick Metadata Logs */}
            <div className="pt-4 border-t border-border/30 font-mono text-[10px] text-muted flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span>FILE_NAME:</span>
                <span className="text-white">Tharun_Varshan_Resume.pdf</span>
              </div>
              <div className="flex justify-between">
                <span>HASH:</span>
                <span className="text-white">SHA256: 4e9d8f...7c2b</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-success flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-success animate-pulse" /> CURRENT</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Tabbed Details Column */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap p-1 gap-1 rounded-xl border border-border bg-black/20 font-mono text-xs">
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg transition-all ${activeTab === "education"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted hover:text-white border border-transparent"
                }`}
            >
              <GraduationCap className="w-3.5 h-3.5" /> EDUCATION
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg transition-all ${activeTab === "skills"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted hover:text-white border border-transparent"
                }`}
            >
              <Code2 className="w-3.5 h-3.5" /> SKILLS
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg transition-all ${activeTab === "experience"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted hover:text-white border border-transparent"
                }`}
            >
              <Briefcase className="w-3.5 h-3.5" /> PROJECTS & EXP
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg transition-all ${activeTab === "achievements"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted hover:text-white border border-transparent"
                }`}
            >
              <Award className="w-3.5 h-3.5" /> HONORS
            </button>
          </div>

          {/* Details Content Window */}
          <Card className="p-6 md:p-8 min-h-[380px] bg-card/30 flex flex-col justify-between border-border/40 relative">
            <div>
              {/* Education Content */}
              {activeTab === "education" && (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                          <p className="text-primary font-mono text-xs mt-1">{edu.institution}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-xs text-muted block">{edu.duration}</span>
                          <Badge variant="cyan" className="mt-1.5 text-[10px] font-mono">CGPA: {edu.cgpa}</Badge>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-4">
                        {edu.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Content */}
              {activeTab === "skills" && (
                <div className="grid sm:grid-cols-2 gap-6 animate-fadeIn">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/10 border border-border/40">
                      <h5 className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">{skillGroup.category}</h5>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.list.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded bg-white/[0.03] text-muted border border-white/[0.04] hover:border-primary/20 hover:text-white transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects & Experience Content */}
              {activeTab === "experience" && (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-4 pb-2 border-b border-border/20">
                        <div>
                          <h4 className="text-lg font-bold text-white leading-tight">{exp.role}</h4>
                          <p className="text-xs text-muted font-mono mt-1">{exp.company}</p>
                        </div>
                        <span className="font-mono text-xs text-muted shrink-0">{exp.duration}</span>
                      </div>

                      <div className="flex flex-col gap-3.5 mt-3">
                        {exp.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements/Honors Content */}
              {activeTab === "achievements" && (
                <div className="flex flex-col gap-6 animate-fadeIn">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-black/10 border border-border/40 hover:border-primary/20 transition-all group">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                        <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">{ach.title}</h4>
                        <p className="text-xs text-muted font-mono mt-0.5">{ach.organization}</p>
                        <p className="text-xs text-muted leading-relaxed mt-2">{ach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-border/30 text-[10px] font-mono text-muted flex justify-between items-center mt-6">
              <span>SYSTEM: OK</span>
              <span>INDEX: {activeTab.toUpperCase()}</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
