"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(`#${current}`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Removed navItems from the dependency array

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/88 shadow-lg shadow-black/10" : "bg-slate-950/72"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_10px_35px_rgba(2,6,23,0.18)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
              className="group flex min-w-0 items-center transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="truncate text-lg md:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                {t.portfolio}
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={`rounded-full px-4 text-sm transition-all duration-300 ${
                      activeSection === item.href
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-primary md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
              <div className="mb-4 flex justify-start">
                <LanguageToggle />
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={`justify-start rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                      activeSection === item.href
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
