import useReveal from "../../../hooks/useReveal"
import ExperienceItem from "./ExperienceItem"
import experienceData from "./experienceData"

const Experience = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="experience" className="bg-deep-800 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Experiencia <span className="text-brand-violet">Profesional</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-16">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-brand-cyan/40 via-brand-violet/20 to-transparent -translate-x-1/2 hidden lg:block" />

          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              data={item}
              index={index}
              align={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
