"use client"

import { FileText, Printer, ArrowLeft, Mail, Globe, ExternalLink, MapPin, GraduationCap, Award, Briefcase, Code2 } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const triggerPrint = () => {
    window.print()
  }

  const skills = [
    { category: "Languages", list: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "SQL"] },
    { category: "Frameworks & Web", list: ["Next.js", "React.js", "Express.js", "Node.js", "Flask", "FastAPI"] },
    { category: "Databases & Caches", list: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { category: "ML & Preprocessing", list: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { category: "Developer Tools", list: ["Git / GitHub", "Docker", "Postman", "Bash/Linux Shell", "Vite"] }
  ]

  const achievements = [
    { title: "Winner — CoderAct Hackathon", org: "Sri Sakthi College of Engineering", desc: "Ranked 1st place overall for conceptualizing and deploying an innovative software solution under tight timelines." },
    { title: "Best Team Spirit Award", org: "ACM-ICPC Regional", desc: "Recognized for excellent collaboration and algorithmic problem-solving endurance during the team challenge." },
    { title: "Finalist — National SELFE Hackathon", org: "National Level", desc: "Shortlisted into the top finalist teams nationwide for developing a viable product prototype." }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-4xl mx-auto w-full flex flex-col gap-12 relative z-10 print:py-0 print:px-0">
      
      {/* Navigation & Controls Block (Hidden on Print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 print:hidden">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>

        <div className="flex gap-3 text-sm font-medium">
          <button 
            onClick={triggerPrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-foreground/5 shadow-sm transition-all duration-300"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
          <a 
            href="/Tharun_Varshan_Resume.pdf" 
            download="Tharun_Varshan_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:scale-[1.02] shadow-sm transition-all duration-300"
          >
            <FileText className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card/20 print:border-0 print:bg-transparent print:p-0 flex flex-col gap-10">
        
        {/* Resume Header */}
        <div className="flex flex-col gap-6 border-b border-border pb-8 print:border-black/20">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight print:text-black">
              Tharun Varshan S
            </h1>
            <p className="text-base font-medium text-muted print:text-blue-600">
              Artificial Intelligence & Data Science Engineer
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-muted print:text-black/80">
            <a href="mailto:tharunvarshans@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-muted print:text-blue-600" /> tharunvarshans@gmail.com
            </a>
            <a href="https://linkedin.com/in/tharunvarshan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <ExternalLink className="w-4 h-4 text-muted print:text-blue-600" /> linkedin.com/in/tharunvarshan
            </a>
            <a href="https://github.com/Tharun-Varshan-S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Globe className="w-4 h-4 text-muted print:text-blue-600" /> github.com/Tharun-Varshan-S
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted print:text-blue-600" /> Tamil Nadu, India
            </span>
          </div>
        </div>

        {/* Section: Education */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <GraduationCap className="w-5 h-5 text-muted print:text-blue-600" />
            Education
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Bachelor of Technology in Artificial Intelligence & Data Science
                </h3>
                <p className="text-sm font-medium text-muted print:text-blue-600">
                  Sri Eshwar College of Engineering
                </p>
              </div>
              <div className="text-right text-sm font-medium shrink-0 text-muted print:text-black">
                <span>2024 - 2028</span>
                <span className="block font-bold text-foreground print:text-black mt-1">CGPA: 8.35 / 10</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-1.5 print:text-black/85 mt-2">
              <li>Specialized modules in Data Structures, Machine Learning Algorithms, Neural Networks, and Advanced Relational Databases.</li>
              <li>Active technical organizer inside the college programming and hackathon planning teams.</li>
              <li>Consistently ranked in the top academic brackets of the department (8.35 CGPA).</li>
            </ul>
          </div>
        </div>

        {/* Section: Experience & Core Achievements */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Briefcase className="w-5 h-5 text-muted print:text-blue-600" />
            Engineering Projects
          </h2>

          <div className="flex flex-col gap-6">
            {/* Project 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  AI-Powered Technical Interview Platform (NeuroPrep AI)
                </h3>
                <span className="text-sm font-medium text-muted print:text-black">Next.js, FastAPI, Gemini AI</span>
              </div>
              <p className="text-sm text-muted leading-relaxed print:text-black/85">
                Engineered an end-to-end recruitment platform that parses candidate PDF resumes, compiles precise skill timelines, and leverages Gemini API to generate target-based coding questions dynamically. Integrates strict real-time sandbox code evaluation pipelines.
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Intelligent Data Error Mitigation Engine
                </h3>
                <span className="text-sm font-medium text-muted print:text-black">Python, Scikit-Learn, Flask</span>
              </div>
              <p className="text-sm text-muted leading-relaxed print:text-black/85">
                Built an automated machine learning pre-preprocessing framework designed to detect data anomalies, perform fast iterative Bayesian null-imputations, and balance skewed classes dynamically using SMOTE methods to protect downstream predictive pipelines.
              </p>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  LifeBridge Organ Dispatch Network
                </h3>
                <span className="text-sm font-medium text-muted print:text-black">React, PostgreSQL, Express, PostGIS</span>
              </div>
              <p className="text-sm text-muted leading-relaxed print:text-black/85">
                Designed a role-based medical coordinator dashboard that matches organ donors to patient hubs instantly via spatial geocoding models (PostGIS spatial queries) under cryptographic transaction logs to ensure security.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Technical Skills */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Code2 className="w-5 h-5 text-muted print:text-blue-600" />
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-1.5 print:break-inside-avoid">
                <h4 className="text-sm font-semibold text-foreground print:text-blue-600">
                  {group.category}
                </h4>
                <p className="text-sm text-muted leading-relaxed print:text-black/90">
                  {group.list.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Honors & Competition Results */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Award className="w-5 h-5 text-muted print:text-blue-600" />
            Honors & Certifications
          </h2>
          <div className="flex flex-col gap-4">
            {achievements.map((ach) => (
              <div key={ach.title} className="flex flex-col gap-1 print:break-inside-avoid">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-base text-foreground print:text-black">{ach.title}</h4>
                  <span className="text-sm font-medium text-muted print:text-black">{ach.org}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed print:text-black/85">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
