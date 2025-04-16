"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"
import { cvData } from "@/data/cv-data"

export function CVPage() {
  const [language, setLanguage] = useState<"en" | "de">("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-end mb-4">
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
        <Header data={cvData.header} language={language} />
        <main className="space-y-12 my-12">
          <About data={cvData.about} language={language} />
          <Education data={cvData.education} language={language} />
          <Skills data={cvData.skills} language={language} />
          <Projects data={cvData.projects} language={language} />
          <Contact data={cvData.contact} language={language} />
        </main>
        <Footer data={cvData.footer} language={language} />
      </div>
    </div>
  )
}
