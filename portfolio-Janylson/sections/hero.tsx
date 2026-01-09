"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up md:text-left text-center">
            <p className="text-sm uppercase tracking-wider text-primary font-medium">{t.hero.role}</p>

            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              {t.hero.title}
              <span className="block text-primary mt-2">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{t.hero.description}</p>

            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 pt-6">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="min-w-[160px]">
                {t.hero.viewProjects}
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="min-w-[160px]">
                {t.hero.getInTouch}
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in-up">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image src="/professional-developer-portrait-photo.jpg" alt="Profile Photo" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
