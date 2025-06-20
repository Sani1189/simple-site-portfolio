import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import About from "@/components/About"
import WorkProcess from "@/components/WorkProcess"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  )
}
