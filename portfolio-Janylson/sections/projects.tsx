"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.project1Title, // UniQuadras
      description: t.projects.project1Desc,
      tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
      image: "/modern-web-application.png",
      githubUrl: "https://github.com/JanylsonFilho/Uniquadras-SpringBoot",
    },
    {
      title: t.projects.project2Title, // Restaurante
      description: t.projects.project2Desc,
      tags: ["Node.js", "Express", "MySQL", "MVC Architecture"],
      image: "/api-dashboard.jpg",
      githubUrl: "https://github.com/JanylsonFilho/Sistema-Restaurante",
    },
    {
      title: t.projects.project3Title, // Graph Theory
      description: t.projects.project3Desc,
      tags: ["Java", "Graph Theory", "Algorithms", "Heuristics"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Graph",
    },
    {
      title: t.projects.project4Title, // Stock Portfolio
      description: t.projects.project4Desc,
      tags: ["Clojure", "Functional Programming", "REST API", "Finance"],
      image: "/Stock-Portfolio.jpg",
      githubUrl: "https://github.com/JanylsonFilho/stock-portfolio-API",
    },
    {
      title: t.projects.project5Title, // File System
      description: t.projects.project5Desc,
      tags: ["Java", "CLI", "Java NIO", "I/O Systems"],
      image: "/FileSystem.jpg",
      githubUrl: "https://github.com/JanylsonFilho/file-system-cli",
    },
    {
      title: t.projects.project6Title, // ToDoList
      description: t.projects.project6Desc,
      tags: ["Node.js", "MongoDB", "Express", "Full Stack"],
      image: "/ToDoListImage.jpg",
      githubUrl: "https://github.com/JanylsonFilho/ToDoList",
    },
    {
      title: t.projects.project7Title, // Bin Packing
      description: t.projects.project7Desc,
      tags: ["Python", "Pyomo", "Optimization", "Pandas"],
      image: "/bin-packing.jpg",
      githubUrl: "https://github.com/JanylsonFilho/bin-packing-pyomo",
    },
    {
      title: t.projects.project10Title, // CANA
      description: t.projects.project10Desc,
      tags: ["Java", "Big O", "Backtracking", "Dynamic Programming"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/CANA",
    },
    {
      title: t.projects.project8Title, // Indice Remissivo
      description: t.projects.project8Desc,
      tags: ["Java", "Data Structures", "Algorithms", "Indexing"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Indice-Remissivo",
    },
    {
      title: t.projects.project9Title, // Frogger
      description: t.projects.project9Desc,
      tags: ["Java", "OOP", "Swing/AWT", "Game Dev"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Frogger_Game",
    },
    {
      title: t.projects.project11Title, // Calculadora Proposicional
      description: t.projects.project11Desc,
      tags: ["Java", "Logic", "Truth Table", "Data Structures"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Calculadora-Proposicional",
    },
    {
      title: t.projects.project12Title, // Estacionamento
      description: t.projects.project12Desc,
      tags: ["Java", "OOP", "Console System", "Management"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Menu-de-Estacionamento",
    },
    {
      title: t.projects.project13Title, // Álgebra Linear
      description: t.projects.project13Desc,
      tags: ["Java", "Math", "Linear Algebra", "Matrix Operations"],
      image: "/placeholder.svg",
      githubUrl: "https://github.com/JanylsonFilho/Biblioteca-de-Algebra-Linear",
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

          <div className="px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full flex flex-col overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl group">
                      <div className="relative overflow-hidden aspect-video bg-muted shrink-0">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6 space-y-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                            >
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}