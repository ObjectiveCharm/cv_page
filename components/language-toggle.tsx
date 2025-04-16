"use client"

import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  language: "en" | "de"
  toggleLanguage: () => void
}

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <Button onClick={toggleLanguage} variant="outline" className="border-black hover:bg-gray-100">
      {language === "en" ? "Deutsch" : "English"}
    </Button>
  )
}
