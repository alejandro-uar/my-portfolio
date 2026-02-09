import educationData from "./educationData"
import coursesData from "./coursesData"
import EducationCard from "./EducationCard"

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Educación y <span className="text-blue-400">Formación</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Educación Formal */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              🎓 Educación Formal
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <EducationCard key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
              🏅 Cursos y Certificaciones
            </h3>

            <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 space-y-4">
              {coursesData.map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 border-b border-slate-700 pb-3 last:border-none"
                >
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <p className="text-white text-sm">
                      {course.title}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {course.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Aprendizaje continuo */}
            <div className="mt-8 bg-emerald-900/20 border border-emerald-700 rounded-2xl p-6">
              <h4 className="text-emerald-400 font-semibold mb-2">
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
