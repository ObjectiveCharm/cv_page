import type { EducationData } from "@/types/cv-types"

interface EducationProps {
  data: EducationData
  language: "en" | "de"
}

export function Education({ data, language }: EducationProps) {
  const content = data[language]

  return (
    <section id="education">
      <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">{content.title}</h2>
      <div className="space-y-6">
        {content.items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <p className="font-medium">{item.period}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-lg">{item.institution}</p>
              <p className="mt-2">{item.description}</p>
              {item.courses && (
                <ul className="list-disc list-inside mt-2">
                  {item.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
