"use client"

import { FileText, Printer, ArrowLeft, Mail, Globe, ExternalLink, MapPin, GraduationCap, Award, Briefcase, Code2, Terminal, Phone, CheckCircle2, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const triggerPrint = () => {
    window.print()
  }

  const skills = [
    { category: "Programming", list: ["C", "C++", "Python", "Java", "JavaScript"] },
    { category: "Web Technologies", list: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Databases", list: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Machine Learning", list: ["Linear Regression", "Logistic Regression", "K-Means", "Random Forest"] },
    { category: "Tools", list: ["VS Code", "GitHub", "Postman", "Google Colab", "Jupyter Notebook"] },
    { category: "Core Concepts", list: ["Data Structures and Algorithms", "Problem Solving"] }
  ]

  const codingProfiles = [
    { platform: "LeetCode", metrics: "500+ problems — Max Rating: 1678 — Best Rank: 2313" },
    { platform: "SkillRack", metrics: "750+ programming challenges" },
    { platform: "CodeChef", metrics: "130+ problems" }
  ]

  const achievements = [
    { title: "Best Team Spirit Award", org: "ICPC", location: "Sri Eshwar College of Engineering" },
    { title: "Winner — CoderAct", org: "Hackathon", location: "Sri Sakthi College of Engineering" },
    { title: "Finalist", org: "SELFE Hackathon", location: "National Level" }
  ]

  const certifications = [
    { title: "C++ Training", org: "Spoken Tutorial, IIT Bombay" },
    { title: "C Training", org: "Spoken Tutorial, IIT Bombay" },
    { title: "Data Structures and Algorithms", org: "Udemy" },
    { title: "Python using Generative AI", org: "Udemy" },
    { title: "Data Science using Python", org: "NPTEL" }
  ]

  return (
    <div className="min-h-screen py-32 px-6 max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 relative z-10 print:py-0 print:px-0 print:flex-col print:gap-0">
      
      {/* Main Resume Container (70%) */}
      <div className="lg:w-[70%] w-full p-8 sm:p-12 rounded-2xl border border-border bg-card/20 print:border-0 print:bg-transparent print:p-0 flex flex-col gap-10">
        
        {/* Resume Header */}
        <div className="flex flex-col gap-6 border-b border-border pb-8 print:border-black/20 print:pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight print:text-black">
              Tharun Varshan S
            </h1>
            <p className="text-base font-medium text-muted print:text-blue-700">
              Artificial Intelligence & Data Science Engineer
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium text-muted print:text-black/80">
            <a href="tel:8903549081" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-muted print:text-blue-700" /> 8903549081
            </a>
            <a href="mailto:tharunvarshan.s2024aids@sece.ac.in" className="flex items-center gap-2 hover:text-foreground transition-colors break-all">
              <Mail className="w-4 h-4 text-muted print:text-blue-700" /> tharunvarshan.s2024aids@sece.ac.in
            </a>
            <a href="https://www.linkedin.com/in/tharun-varshan-s-ab1246333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <ExternalLink className="w-4 h-4 text-muted print:text-blue-700" /> linkedin.com/in/tharun-varshan-s
            </a>
            <a href="https://github.com/Tharun-Varshan-S" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Globe className="w-4 h-4 text-muted print:text-blue-700" /> github.com/Tharun-Varshan-S
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted print:text-blue-700" /> Tamil Nadu, India
            </span>
          </div>
        </div>

        {/* Section: Education */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <GraduationCap className="w-5 h-5 text-muted print:text-blue-700" />
            Education
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground text-base print:text-black">
                  B.Tech in Artificial Intelligence and Data Science
                </h3>
                <p className="text-sm font-medium text-muted print:text-blue-700">
                  Sri Eshwar College of Engineering
                </p>
              </div>
              <div className="text-right text-sm font-medium shrink-0 text-muted print:text-black">
                <span>2024 – 2028</span>
                <span className="block font-bold text-foreground print:text-black mt-1">CGPA: 8.35</span>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-sm font-medium text-muted print:text-blue-700">
                  Peepal Prodigy School
                </p>
              </div>
              <div className="text-right text-sm font-medium shrink-0 text-muted print:text-black">
                <span>2022 – 2024</span>
                <span className="block font-bold text-foreground print:text-black mt-1">Score: 92%</span>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Secondary School Leaving Certificate (SSLC)
                </h3>
                <p className="text-sm font-medium text-muted print:text-blue-700">
                  Peepal Prodigy School
                </p>
              </div>
              <div className="text-right text-sm font-medium shrink-0 text-muted print:text-black">
                <span>2021 – 2022</span>
                <span className="block font-bold text-foreground print:text-black mt-1">Score: 96%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Professional Experience */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Briefcase className="w-5 h-5 text-muted print:text-blue-700" />
            Professional Experience
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-foreground text-base print:text-black">
                  MERN Stack Intern
                </h3>
                <p className="text-sm font-medium text-muted print:text-blue-700">
                  Better Tomorrow
                </p>
              </div>
              <div className="text-right text-sm font-medium shrink-0 text-muted print:text-black">
                <span>Dec 2025</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-1.5 print:text-black/85 -mt-3">
              <li>Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Built REST APIs for efficient client-server communication.</li>
              <li>Worked on authentication and database design workflows.</li>
              <li>Implemented scalable backend architecture for maintainability.</li>
              <li>Participated in deployment workflows for web applications.</li>
            </ul>
          </div>
        </div>

        {/* Section: Projects */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Briefcase className="w-5 h-5 text-muted print:text-blue-700" />
            Projects
          </h2>

          <div className="flex flex-col gap-8">
            {/* Project 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  AI-Powered Technical Interview Platform
                </h3>
              </div>
              <span className="text-xs font-semibold text-primary mb-1 print:text-blue-700">React.js, TypeScript, Node.js, Express.js, MongoDB</span>
              <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-1.5 print:text-black/85">
                <li>Built a full-stack AI platform that automates technical interviews by analyzing resumes and generating personalized questions.</li>
                <li>Implemented real-time answer evaluation with AI-generated feedback and scoring.</li>
                <li>Integrated JWT authentication and Gemini AI API for secure interview evaluation.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Intelligent Error Mitigation System
                </h3>
              </div>
              <span className="text-xs font-semibold text-primary mb-1 print:text-blue-700">Python, Scikit-learn, Pandas, NumPy, Matplotlib</span>
              <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-1.5 print:text-black/85">
                <li>Developed an ML system to detect data issues like missing values, outliers, class imbalance, and data drift.</li>
                <li>Implemented preprocessing, resampling, and retraining strategies to improve model reliability.</li>
                <li>Improved dataset stability using automated validation pipelines.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-foreground text-base print:text-black">
                  Organ Donation Management System
                </h3>
              </div>
              <span className="text-xs font-semibold text-primary mb-1 print:text-blue-700">React 18, Vite, Tailwind CSS, React Router</span>
              <ul className="list-disc pl-5 text-sm text-muted leading-relaxed flex flex-col gap-1.5 print:text-black/85">
                <li>Designed a role-based web platform connecting donors, hospitals, and administrators.</li>
                <li>Enabled donor registration and compatibility-based hospital search.</li>
                <li>Developed centralized admin dashboards to monitor donor and hospital activities.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Technical Skills */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Code2 className="w-5 h-5 text-muted print:text-blue-700" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-1.5 print:break-inside-avoid">
                <h4 className="text-sm font-semibold text-foreground print:text-black">
                  {group.category}
                </h4>
                <p className="text-sm text-muted leading-relaxed print:text-black/90">
                  {group.list.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Section: Achievements & Coding Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 print:block">
          
          <div className="flex flex-col gap-4 print:mb-8">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
              <Award className="w-5 h-5 text-muted print:text-blue-700" />
              Achievements
            </h2>
            <div className="flex flex-col gap-3">
              {achievements.map((ach) => (
                <div key={ach.title} className="flex flex-col gap-1 print:break-inside-avoid">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0 print:text-blue-700" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground print:text-black">{ach.title}</h4>
                      <p className="text-xs text-muted print:text-black/80">{ach.org}{ach.location !== "National Level" ? `, ${ach.location}` : ` — ${ach.location}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
              <Terminal className="w-5 h-5 text-muted print:text-blue-700" />
              Coding Profiles
            </h2>
            <div className="flex flex-col gap-3">
              {codingProfiles.map((profile) => (
                <div key={profile.platform} className="flex flex-col gap-1 print:break-inside-avoid">
                  <div className="flex items-start gap-2">
                    <LinkIcon className="w-4 h-4 text-primary mt-0.5 shrink-0 print:text-blue-700" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground print:text-black">{profile.platform}</h4>
                      <p className="text-xs text-muted print:text-black/80">{profile.metrics}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section: Certifications */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-2 print:text-black print:border-black/20">
            <Award className="w-5 h-5 text-muted print:text-blue-700" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-start gap-2 print:break-inside-avoid">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 print:bg-blue-700" />
                <div>
                  <h4 className="font-semibold text-sm text-foreground print:text-black">{cert.title}</h4>
                  <p className="text-xs text-muted print:text-black/80">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Controls Container (30%) */}
      <div className="lg:w-[30%] w-full flex flex-col gap-6 print:hidden sticky top-32 h-fit">
        <div className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-sm flex flex-col gap-6">
          <h3 className="font-bold text-foreground flex items-center gap-2 border-b border-border pb-4">
            <Terminal className="w-4 h-4 text-primary" />
            Resume Actions
          </h3>
          <div className="flex flex-col gap-3">
            <button 
              onClick={triggerPrint}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground hover:bg-foreground/5 hover:border-foreground/20 shadow-sm transition-all duration-300 text-sm font-medium"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
            <a 
              href="/resume/Tharun_Varshan_Resume.pdf" 
              download="Tharun_Varshan_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-foreground text-background hover:scale-[1.02] shadow-sm transition-all duration-300 text-sm font-medium"
            >
              <FileText className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>

        <Link 
          href="/" 
          className="group flex items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card/20 hover:bg-card hover:border-foreground/20 text-sm font-medium text-muted hover:text-foreground transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

    </div>
  )
}
