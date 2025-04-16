import type { AboutData } from "@/types/cv-types"

interface AboutProps {
  data: AboutData
  language: "en" | "de"
}

export function About({ data, language }: AboutProps) {
  const content = data[language]

  return (
    <section id="about">
      <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">{content.title}</h2>
      <p className="text-lg">{content.description}</p>
    </section>
  )
}
