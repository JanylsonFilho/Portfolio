"use client"

import { useLanguage } from "@/lib/language-context"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.about.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6" delay={80}>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.paragraph1}</p>

              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.paragraph2}</p>
            </ScrollReveal>

            <ScrollReveal className="space-y-4" delay={160} direction="right">
              <a
                href="#experience"
                className="block p-6 bg-background border border-border rounded-lg hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{t.about.experienceTitle}</h3>
                <p className="text-muted-foreground">{t.about.experienceContent}</p>
              </a>

              <a
                href="#projects"
                className="block p-6 bg-background border border-border rounded-lg hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{t.about.projectsTitle}</h3>
                <p className="text-muted-foreground">{t.about.projectsContent}</p>
              </a>

              <div className="block p-6 bg-background border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{t.about.resumeTitle}</h3>
                <p className="text-muted-foreground">{t.about.resumeContent}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
