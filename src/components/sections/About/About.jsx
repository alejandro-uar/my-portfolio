import useReveal from "../../../hooks/useReveal"
import AboutProfile from "./AboutProfile"
import AboutContact from "./AboutContact"
import AboutAvailability from "./AboutAvailability"

const About = () => {
  const [titleRef, titleVisible] = useReveal()
  const [profileRef, profileVisible] = useReveal()
  const [infoRef, infoVisible] = useReveal()

  return (
    <section id="about" className="relative bg-deep-800 text-white py-24 px-6 overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-violet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Sobre <span className="text-brand-violet">Mí</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, experiencia y lo que me motiva
          </p>
        </div>

        <div
          ref={profileRef}
          className={`transition-all duration-700 ${profileVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <AboutProfile />
        </div>

        <div
          ref={infoRef}
          className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${infoVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <AboutContact />
          <AboutAvailability />
        </div>
      </div>
    </section>
  )
}

export default About
