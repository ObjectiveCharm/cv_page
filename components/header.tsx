import { Badge } from "@/components/ui/badge"
import type { HeaderData } from "@/types/cv-types"

interface HeaderProps {
  data: HeaderData
  language: "en" | "de"
}

export function Header({ data, language }: HeaderProps) {
  const content = data[language]

  return (
    <header className="border-b border-black pb-6">
      <h1 className="text-4xl font-bold tracking-tight">{data.name}</h1>
      <p className="text-lg mt-2 italic">{content.title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {content.tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="border-black text-black">
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  )
}
