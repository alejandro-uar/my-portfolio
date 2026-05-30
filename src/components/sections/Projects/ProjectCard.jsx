import { ExternalLink } from "lucide-react"
import useReveal from "../../../hooks/useReveal"

const gradients = [
  "from-brand-violet to-brand-cyan",
  "from-brand-cyan to-brand-emerald",
  "from-brand-violet to-brand-emerald",
  "from-brand-cyan to-brand-violet",
]

const getAnimation = (index) =>
  index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"

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
      className={`bg-deep-800/80 backdrop-blur border border-border-500 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full ${
        borderAccents[index % borderAccents.length]
      } ${
        isVisible ? getAnimation(index) : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={`h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2.5">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]}`} />
          <h3 className="text-base font-bold text-white font-heading">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 text-xs text-slate-400">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-emerald mt-1 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-surface-700/60 border border-border-500 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-3 py-1.5 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-3 py-1.5 border border-border-400 rounded-lg text-xs text-slate-400 hover:bg-surface-700/60 hover:border-slate-500 transition-all"
            >
              <ExternalLink size={14} />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
