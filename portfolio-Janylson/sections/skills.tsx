"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const skills = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "Clojure"],
  frontend: ["React", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "Spring Boot", "REST APIs", "Zod"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  devops: ["Git", "AWS", "CI/CD"],
}

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    { title: t.skills.languages, skills: skills.languages },
    { title: t.skills.frontend, skills: skills.frontend },
    { title: t.skills.backend, skills: skills.backend },
    { title: t.skills.databases, skills: skills.databases },
    { title: t.skills.devops, skills: skills.devops },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">{t.skills.description}</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
