import SocialIcon from "../../ui/SocialIcon"

const Hero = ({ onScroll }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-950 to-slate-950 text-white pt-20"
    >
      <div className="text-center max-w-5xl px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/20 border border-green-400 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 font-semibold">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Alejandro Luna
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-4xl font-bold mb-6">
          <span>Técnico en Informática</span>
          <span className="text-blue-400">|</span>
          <span className="text-cyan-400">Developer Web</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Especializado en <span className="text-blue-400 font-semibold">backend</span> con Node.js y NestJS,
          APIs REST y sistemas fullstack.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() => onScroll("projects")}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-bold hover:scale-105 transition shadow-lg"
          >
            Ver Proyectos
          </button>

          <button
            onClick={() => onScroll("contact")}
            className="px-8 py-4 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
          >
            Contactar
          </button>
        </div>

        {/* Social icons */}
        <div className="mt-14 flex justify-center gap-6">
          <SocialIcon icon="github" />
          <SocialIcon icon="linkedin" />
          <SocialIcon icon="mail" />
        </div>

      </div>
    </section>
  )
}

export default Hero
