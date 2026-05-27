import useReveal from "../../../hooks/useReveal"
import Card from "../../ui/Card"
import { Briefcase, Calendar } from "lucide-react"

const ExperienceItem = ({ data, align, index }) => {
  const [ref, isVisible] = useReveal()
  const isLeft = align === "left"

  return (
    <div
      ref={ref}
      className={`relative flex w-full ${isLeft ? "justify-start lg:pr-[52%]" : "justify-end lg:pl-[52%]"} ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Center dot + horizontal connector */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center">
        {/* Horizontal line pointing to the card */}
        <div className={`absolute top-1/2 h-0.5 bg-gradient-to-r ${
          isLeft
            ? "from-brand-cyan/40 to-transparent right-full w-12"
            : "from-transparent to-brand-cyan/40 left-full w-12"
        }`} />
        {/* Glowing dot */}
        <div className="w-4 h-4 bg-brand-cyan rounded-full shadow-lg shadow-brand-cyan/50 ring-4 ring-deep-900" />
      </div>

      {/* Date badge for mobile */}
      <div className="flex items-center gap-2 text-sm text-slate-500 lg:hidden mb-1 ml-1">
        <Calendar size={14} />
        {data.date}
      </div>

      <div className="w-full">
        <Card>
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
              <Briefcase size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {data.role}
              </h3>
              <p className="text-brand-cyan text-sm font-medium">
                {data.company}
                <span className="text-slate-500 mx-1.5">·</span>
                <span className="text-slate-400">{data.type}</span>
              </p>
            </div>
          </div>

          {/* Date - desktop */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500 mt-3 mb-4">
            <Calendar size={14} />
            {data.date}
          </div>

          {/* Tasks */}
          <ul className="space-y-2 text-slate-300 mb-4">
            {data.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-brand-emerald mt-1.5 shrink-0">▹</span>
                {task}
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs rounded-md bg-surface-700 border border-border-500 text-slate-300 font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ExperienceItem
