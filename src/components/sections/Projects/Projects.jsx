import ProjectCard from "./ProjectCard"
import projectsData from "./projectsData"

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Proyectos <span className="text-blue-400">Destacados</span>
        </h2>

        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Algunos de mis trabajos más relevantes en desarrollo fullstack,
          backend y frontend
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
