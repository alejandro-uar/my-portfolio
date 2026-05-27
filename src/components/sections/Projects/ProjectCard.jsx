import { ExternalLink, Github } from "lucide-react"
import useReveal from "../../../hooks/useReveal"

const gradients = [
  "from-brand-violet/40 to-brand-cyan/40",
  "from-brand-cyan/40 to-brand-emerald/40",
  "from-brand-violet/40 to-brand-emerald/40",
]

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`bg-deep-800/80 backdrop-blur border border-border-500 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-cyan/5 transition-all ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient placeholder */}
      <div
        className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-deep-900/20" />
        <span className="text-6xl font-black text-white/10 select-none font-heading">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white font-heading">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 text-sm text-slate-300">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-emerald mt-0.5 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-700/80 border border-border-500 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border-400 rounded-lg text-sm hover:bg-surface-700 transition text-slate-300"
          >
            <Github size={16} />
            Código
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-lg text-sm hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
