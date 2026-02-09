import AboutProfile from "./AboutProfile"
import AboutContact from "./AboutContact"
import AboutAvailability from "./AboutAvailability"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Sobre <span className="text-cyan-400">Mí</span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            <AboutProfile />
          </div>

          {/* Right */}
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
