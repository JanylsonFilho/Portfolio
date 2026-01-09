import Hero from "@/sections/hero"
import About from "@/sections/about"
import Skills from "@/sections/skills"
import Projects from "@/sections/projects"
import Experience from "@/sections/experience"
import Contact from "@/sections/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
