import type { ProjectsData } from "@/types/cv-types"
import { ExternalLink } from "lucide-react"

interface ProjectsProps {
  data: ProjectsData
  language: "en" | "de"
}

export function Projects({ data, language }: ProjectsProps) {
  const content = data[language]

  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">{content.title}</h2>
      <div className="space-y-8">
        {content.items.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <p className="font-medium">{project.date}</p>
              <p className="text-sm">{project.organization}</p>
            </div>
            <div className="md:col-span-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="mt-2">{project.description}</p>
              {project.technologies && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
