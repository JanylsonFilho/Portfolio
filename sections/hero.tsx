"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/55 to-transparent" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6 md:text-left text-center" direction="left">
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              {t.hero.title}
              <span className="block text-primary mt-2">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{t.hero.description}</p>

            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="min-w-[160px] transition-transform duration-300 hover:-translate-y-1"
              >
                {t.hero.viewProjects}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="min-w-[160px] transition-all duration-300 hover:-translate-y-1 bg-transparent"
              >
                {t.hero.getInTouch}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex justify-center md:justify-end" direction="right" delay={120}>
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/foto-oficial-perfil.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover object-[center_5%] scale-[1.70]"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
