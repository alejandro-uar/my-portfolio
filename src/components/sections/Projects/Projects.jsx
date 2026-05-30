import useReveal from "../../../hooks/useReveal"
import ProjectsCarousel from "./ProjectsCarousel"
import projectsData from "./projectsData"

const Projects = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="projects" className="bg-deep-800 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Proyectos <span className="text-brand-violet">Destacados</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluciones reales que he construido como desarrollador fullstack
          </p>
        </div>

        <ProjectsCarousel projects={projectsData} />
      </div>
    </section>
  )
}

export default Projects
