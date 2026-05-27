import useReveal from "../../../hooks/useReveal"
import educationData from "./educationData"
import coursesData from "./coursesData"
import EducationCard from "./EducationCard"

const Education = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="education" className="min-h-screen bg-deep-900 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Educación y <span className="text-brand-cyan">Formación</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Educación Formal */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-6 text-slate-200 font-heading">
              <span className="text-blue-400">🎓</span> Educación Formal
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <EducationCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-6 text-slate-200 font-heading">
              <span className="text-amber-400">🏅</span> Cursos y Certificaciones
            </h3>

            <div className="bg-deep-800/70 border border-border-500 rounded-2xl p-6 space-y-4">
              {coursesData.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 border-b border-border-500 pb-3 last:border-none"
                >
                  <span className="text-brand-cyan mt-1 shrink-0">▹</span>
                  <div>
                    <p className="text-white text-sm">{course.title}</p>
                    <p className="text-slate-400 text-xs">{course.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-emerald/5 border border-brand-emerald/20 rounded-2xl p-6">
              <h4 className="text-brand-emerald font-semibold mb-2 font-heading">
                Aprendizaje Continuo
              </h4>
              <p className="text-slate-300 text-sm">
                Constantemente actualizándome con las últimas tecnologías y
                mejores prácticas del desarrollo web y la informática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
