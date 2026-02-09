import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero/Hero"
import About from "../components/sections/About/About"
import Experience from "../components/sections/Experience/Experience"
import Projects from "../components/sections/Projects/Projects"
import Skills from "../components/sections/Skills/Skills"
import Education from "../components/sections/Educations/Education"
import Contact from "../components/sections/Contact/Contact"

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar onScroll={scrollToSection} />
      <Hero onScroll={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}

export default Home
