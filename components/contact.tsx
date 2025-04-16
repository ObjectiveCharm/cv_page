import type { ContactData } from "@/types/cv-types"
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react"

interface ContactProps {
  data: ContactData
  language: "en" | "de"
}

export function Contact({ data, language }: ContactProps) {
  const content = data[language]

  return (
    <section id="contact">
      <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">{content.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {data.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href={`mailto:${data.email}`} className="hover:underline">
                {data.email}
              </a>
            </div>
          )}

          {data.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href={`tel:${data.phone}`} className="hover:underline">
                {data.phone}
              </a>
            </div>
          )}

          {data.address && (
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{data.address}</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {data.github && (
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              <a
                href={`https://github.com/${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {data.github}
              </a>
            </div>
          )}

          {data.orcid && (
            <div className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              <a
                href={`https://orcid.org/${data.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ORCID: {data.orcid}
              </a>
            </div>
          )}

          {data.links &&
            data.links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {link.name}
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
