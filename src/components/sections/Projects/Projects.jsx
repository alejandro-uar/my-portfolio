import useReveal from "../../../hooks/useReveal"
import ProjectCard from "./ProjectCard"
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

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
