import skillsData from "./skillsData"
import SkillCategoryCard from "./SkillCategoryCard"

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Habilidades <span className="text-blue-400">Técnicas</span>
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Stack tecnológico y herramientas con las que trabajo
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>

        {/* Languages */}
        <div className="mt-20 flex justify-center">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl px-8 py-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
            <p className="text-slate-300">
              <span className="text-blue-400">Español:</span> Nativo •{" "}
              <span className="text-blue-400">Inglés:</span> A2 (En constante aprendizaje)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
