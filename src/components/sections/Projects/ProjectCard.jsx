import { ExternalLink } from "lucide-react"
import useReveal from "../../../hooks/useReveal"

const gradients = [
  "from-brand-violet/40 to-brand-cyan/40",
  "from-brand-cyan/40 to-brand-emerald/40",
  "from-brand-violet/40 to-brand-emerald/40",
  "from-brand-cyan/40 to-brand-violet/40",
]

const animations = [
  "animate-fade-in-left",
  "animate-fade-in-right",
  "animate-fade-in-right",
  "animate-fade-in-left",
]

const borderAccents = [
  "hover:border-brand-cyan/50",
  "hover:border-brand-emerald/50",
  "hover:border-brand-violet/50",
  "hover:border-brand-cyan/50",
]

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`bg-deep-800/80 backdrop-blur border border-border-500 rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto ${
        borderAccents[index % borderAccents.length]
      } ${
        isVisible ? animations[index % animations.length] : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div
        className={`h-28 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-deep-900/20 group-hover:opacity-0 transition-opacity duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-cyan/10 to-brand-violet/10" />
        <span className="text-4xl font-black text-white/10 select-none font-heading group-hover:scale-110 group-hover:text-white/20 transition-all duration-500">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-base font-bold text-white font-heading">
          {project.title}
        </h3>

        <p className="text-slate-300 text-xs leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-0.5 text-xs text-slate-300">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-emerald mt-0.5 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1 mt-1">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-surface-700/80 border border-border-500 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-3 py-1.5 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-lg text-xs hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-3 py-1.5 border border-border-400 rounded-lg text-xs text-slate-300 hover:bg-surface-700/60 hover:border-slate-500 transition-all"
            >
              <ExternalLink size={16} />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
