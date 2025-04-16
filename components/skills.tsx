import type { SkillsData } from "@/types/cv-types"
import { Progress } from "@/components/ui/progress"

interface SkillsProps {
  data: SkillsData
  language: "en" | "de"
}

export function Skills({ data, language }: SkillsProps) {
  const content = data[language]

  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">{content.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">{content.technical.title}</h3>
          <div className="space-y-4">
            {content.technical.items.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}/5</span>
                </div>
                <Progress value={skill.level * 20} className="h-2 bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">{content.personal.title}</h3>
          <div className="space-y-4">
            {content.personal.items.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}/5</span>
                </div>
                <Progress value={skill.level * 20} className="h-2 bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
