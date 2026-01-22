"use client"

import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Ícone do WhatsApp
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  const contactData = [
    // 1. Email
    {
      icon: Mail,
      title: t.contact.email,
      value: t.contact.emailValue,
      link: `mailto:${t.contact.emailValue}`,
    },
    // 2. LinkedIn
    {
      icon: Linkedin,
      title: t.contact.linkedin, 
      value: t.contact.linkedinValue, 
      description: t.contact.linkedinAction, 
      link: "https://www.linkedin.com/in/janylsonfilho", 
    },
    // 3. GitHub (Novo!)
    {
      icon: Github,
      title: t.contact.github, // "GitHub"
      value: t.contact.githubValue, // "github.com/janylsonfilho"
      description: t.contact.githubAction, // "Ver Perfil no GitHub"
      link: "https://github.com/janylsonfilho", 
    },
    // 4. WhatsApp
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      value: t.contact.phoneValue, 
      description: t.contact.whatsappValue,
      link: "https://wa.me/5585989551746",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        {/* Layout ajustado: 1 coluna (mobile), 2 (tablet), 4 (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => {
            const Icon = item.icon
            
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden group border bg-muted/30 hover:border-primary transition-all duration-300"
              >
                <div className="h-full p-6 flex flex-col items-center text-center justify-between min-h-[200px]">
                  
                  {/* Ícone */}
                  <div className="p-4 rounded-full bg-muted mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="space-y-2 w-full">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    
                    {/* Renderização Lógica do Conteúdo */}
                    {item.description ? (
                      // CASO WHATSAPP, LINKEDIN e GITHUB: Valor é texto, Descrição é Link
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-muted-foreground font-medium select-text cursor-text">
                          {item.value}
                        </p>
                        <a 
                          href={item.link!} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4 mt-1"
                        >
                          {item.description}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ) : (
                      // CASO EMAIL: Valor é Link
                      <a 
                        href={item.link!}
                        className="text-muted-foreground font-medium hover:text-primary hover:underline underline-offset-4 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}