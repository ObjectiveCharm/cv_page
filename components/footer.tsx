import type { FooterData } from "@/types/cv-types"

interface FooterProps {
  data: FooterData
  language: "en" | "de"
}

export function Footer({ data, language }: FooterProps) {
  const content = data[language]

  return (
    <footer className="border-t border-black pt-6 mt-12 text-center">
      <p>{content.copyright}</p>
      <p className="text-sm mt-2">
        {content.lastUpdated}: {data.lastUpdatedDate}
      </p>
    </footer>
  )
}
