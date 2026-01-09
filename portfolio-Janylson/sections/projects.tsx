"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.project1Title,
      description: t.projects.project1Desc,
      tags: ["React", "Next.js", "TypeScript"],
      image: "/modern-web-application.png",
      githubUrl: "#",
    },
    {
      title: t.projects.project2Title,
      description: t.projects.project2Desc,
      tags: ["Node.js", "PostgreSQL", "Docker"],
      image: "/api-dashboard.jpg",
      githubUrl: "#",
    },
    {
      title: t.projects.project3Title,
      description: t.projects.project3Desc,
      tags: ["React", "Firebase", "Tailwind"],
      image: "/mobile-app-interface.png",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">{t.projects.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t.projects.code}
                      </a>
                    </Button>
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
