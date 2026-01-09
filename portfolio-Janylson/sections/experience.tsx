"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experience.job1Title,
      company: t.experience.job1Company,
      period: t.experience.period1,
      description: t.experience.job1Desc,
      tags: ["TypeScript", "Express", "Jest", "Zod", "REST API", "MongoDB", "React"],
    },
    // Only one professional experience retained (others removed per user request)
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">{t.experience.description}</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
