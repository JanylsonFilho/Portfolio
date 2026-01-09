"use client"

import { Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.373 0 .004 5.37.004 12c0 2.116.56 4.09 1.534 5.86L0 24l6.39-1.672A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.206-1.246-6.21-3.48-8.52zM12 22.005c-1.86 0-3.66-.502-5.198-1.448l-.372-.22-3.803.996.999-3.71-.242-.386A9.003 9.003 0 013 12c0-4.97 4.03-9 9-9 2.403 0 4.66.94 6.364 2.646A8.994 8.994 0 0121 12c0 4.97-4.03 9.005-9 9.005z" />
    <path d="M17.11 14.03c-.3-.15-1.773-.875-2.047-.975-.273-.1-.472-.15-.67.15-.198.3-.769.975-.943 1.175-.173.2-.347.225-.647.075-.3-.15-1.263-.464-2.405-1.483-.89-.79-1.49-1.76-1.664-2.06-.173-.3-.018-.462.132-.612.136-.137.3-.356.45-.534.15-.177.2-.3.3-.5.1-.2 0-.375-.05-.525-.05-.15-.67-1.606-.918-2.2-.242-.579-.487-.5-.67-.51l-.57-.01c-.2 0-.525.075-.8.375s-1.05 1.03-1.05 2.51c0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.35 5.16 4.695 3.03 1.34 3.03.89 3.575.835.545-.05 1.773-.72 2.025-1.415.252-.695.252-1.29.177-1.415-.075-.125-.273-.2-.573-.35z" fill="#fff" />
  </svg>
)

const socialLinks = [
  { icon: Github, href: "https://github.com/janylsonfilho", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/janylsonfilho", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://wa.me/5585989551746?text=Olá%20Janylson%2C%20gostaria%20de%20falar%20com%20você", label: "WhatsApp" },
]

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear}. {t.footer.rights}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
