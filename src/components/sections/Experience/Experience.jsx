import ExperienceItem from "./ExperienceItem"
import experienceData from "./experienceData"

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-900 to-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Experiencia <span className="text-cyan-400">Profesional</span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col gap-20">

          {/* Vertical line */}
          <span className="absolute left-1/2 top-0 h-full w-0.5 bg-slate-700"></span>

          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              data={item}
              align={index % 2 === 0 ? "right" : "left"}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience
