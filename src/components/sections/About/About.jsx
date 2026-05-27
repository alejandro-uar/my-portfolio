import useReveal from "../../../hooks/useReveal"
import AboutProfile from "./AboutProfile"
import AboutContact from "./AboutContact"
import AboutAvailability from "./AboutAvailability"

const About = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="about" className="min-h-screen bg-deep-800 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Sobre <span className="text-brand-violet">Mí</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AboutProfile />
          </div>
          <div className="flex flex-col gap-8">
            <AboutContact />
            <AboutAvailability />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
