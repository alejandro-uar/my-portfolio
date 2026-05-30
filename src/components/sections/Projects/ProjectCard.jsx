import { ExternalLink } from "lucide-react"

const gradients = [
  "from-brand-violet to-brand-cyan",
  "from-brand-cyan to-brand-emerald",
  "from-brand-violet to-brand-emerald",
  "from-brand-cyan to-brand-violet",
]

const borderAccents = [
  "hover:border-brand-cyan/50",
  "hover:border-brand-emerald/50",
  "hover:border-brand-violet/50",
  "hover:border-brand-cyan/50",
]

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-deep-800/80 via-deep-800/50 to-surface-700/20 backdrop-blur border border-border-500 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 w-full h-full ${
        borderAccents[index % borderAccents.length]
      }`}
    >
      <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]} relative`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]} blur-lg opacity-50`} />
      </div>

      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} opacity-5 blur-3xl pointer-events-none`} />

      <div className="p-3.5 flex flex-col gap-2.5 flex-1 relative z-10">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]}`} />
          <h3 className="text-sm font-bold text-white font-heading">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-0.5 text-xs text-slate-400">
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

        <div className="flex gap-2 pt-1.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full gap-1.5 px-2.5 py-1.5 border border-border-400 rounded-lg text-xs text-slate-400 hover:bg-surface-700/60 hover:border-slate-500 transition-all"
            >
              <ExternalLink size={13} />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
