import { ExternalLink, Github } from "lucide-react"

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">

        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1 text-sm text-slate-300">
          {(project.highlights || []).map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-2">
          {(project.tech || []).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-600 text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={project.codeUrl}
            className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-sm hover:bg-slate-800"
          >
            <Github size={16} />
            Código
          </a>

          <a
            href={project.demoUrl}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700"
          >
            <ExternalLink size={16} />
            Ver más
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
