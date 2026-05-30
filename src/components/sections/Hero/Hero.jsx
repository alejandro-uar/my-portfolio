import SocialIcon from "../../ui/SocialIcon"
import { Download, ChevronDown } from "lucide-react"

const Hero = ({ onScroll }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-900 pt-20"
    >
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-900 via-deep-800/60 to-deep-900 animate-gradient bg-[length:200%_200%]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-5xl px-4">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-emerald bg-clip-text text-transparent">
            Alejandro Luna
          </span>
        </h1>

        {/* Role */}
        <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <span className="text-2xl md:text-4xl font-bold text-slate-200">
            <span className="text-brand-cyan">Téc. Informática</span>
            <span className="text-slate-400 mx-2">&</span>
            <span className="text-brand-cyan">Web Developer</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Desarrollo proyectos backend y fullstack utilizando Node.js, NestJS y React.
          Interesado en crear aplicaciones funcionales, mantenibles y escalables.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <button
            onClick={() => onScroll("projects")}
            className="px-8 py-4 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-lg font-bold hover:scale-105 hover:shadow-lg hover:shadow-brand-cyan/25 transition-all"
          >
            Ver Proyectos
          </button>

          <a
            href="/cv.pdf"
            download="AlejandroLuna-cv"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-amber/50 text-brand-amber rounded-lg font-medium hover:bg-brand-amber/10 hover:border-brand-amber transition-all"
          >
            <Download size={18} />
            Currículum
          </a>

          <button
            onClick={() => onScroll("contact")}
            className="px-8 py-4 border border-border-400 rounded-lg font-medium hover:bg-surface-700 hover:border-brand-cyan/50 transition-all"
          >
            Contactar
          </button>
        </div>

        {/* Social */}
        <div className="mt-8 flex justify-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <SocialIcon icon="github" />
          <SocialIcon icon="linkedin" />
          <SocialIcon icon="tiktok" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-fade-in-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}

export default Hero
