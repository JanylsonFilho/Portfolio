"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 .004 5.37.004 12c0 2.116.56 4.09 1.534 5.86L0 24l6.39-1.672A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.206-1.246-6.21-3.48-8.52zM12 22.005c-1.86 0-3.66-.502-5.198-1.448l-.372-.22-3.803.996.999-3.71-.242-.386A9.003 9.003 0 013 12c0-4.97 4.03-9 9-9 2.403 0 4.66.94 6.364 2.646A8.994 8.994 0 0121 12c0 4.97-4.03 9.005-9 9.005z" />
    <path d="M17.11 14.03c-.3-.15-1.773-.875-2.047-.975-.273-.1-.472-.15-.67.15-.198.3-.769.975-.943 1.175-.173.2-.347.225-.647.075-.3-.15-1.263-.464-2.405-1.483-.89-.79-1.49-1.76-1.664-2.06-.173-.3-.018-.462.132-.612.136-.137.3-.356.45-.534.15-.177.2-.3.3-.5.1-.2 0-.375-.05-.525-.05-.15-.67-1.606-.918-2.2-.242-.579-.487-.5-.67-.51l-.57-.01c-.2 0-.525.075-.8.375s-1.05 1.03-1.05 2.51c0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.35 5.16 4.695 3.03 1.34 3.03.89 3.575.835.545-.05 1.773-.72 2.025-1.415.252-.695.252-1.29.177-1.415-.075-.125-.273-.2-.573-.35z" fill="#fff" />
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: t.contact.emailValue,
      href: "mailto:" + t.contact.emailValue,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: t.contact.phoneValue,
      href: "tel:+5585989551746",
      whatsappHref: "https://wa.me/5585989551746?text=Ol%C3%A1%20Janylson%2C%20gostaria%20de%20falar%20com%20voc%C3%AA",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "janylsonfilho",
      href: "https://github.com/janylsonfilho",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "janylsonfilho",
      href: "https://www.linkedin.com/in/janylsonfilho",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Fortaleza, Ceará",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">{t.contact.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <Card
                  key={idx}
                  className="p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium mb-1">{info.label}</p>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={info.href}
                      {...(info.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                    {info.whatsappHref ? (
                      <a
                        href={info.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir WhatsApp"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 hover:bg-green-100 text-green-600"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Form removed — static contact information only */}
        </div>
      </div>
    </section>
  )
}
