import useReveal from "../../../hooks/useReveal"
import skillsData from "./skillsData"
import StackLayer from "./StackLayer"

const Skills = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="skills" className="bg-deep-900 py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Stack <span className="text-brand-cyan">Tecnológico</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Así está compuesto mi stack de desarrollo — de la interfaz al servidor
          </p>
        </div>

        <div className="space-y-0">
          {skillsData.map((category, index) => (
            <StackLayer key={index} category={category} index={index} />
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-deep-800 border border-border-500">
            <span className="text-sm text-slate-400">Idiomas</span>
            <span className="text-slate-300 text-sm">
              <span className="text-brand-cyan font-semibold">Inglés:</span> A2
              <span className="text-slate-500"> — En constante aprendizaje</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
