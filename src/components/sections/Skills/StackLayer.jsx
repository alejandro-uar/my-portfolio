import useReveal from "../../../hooks/useReveal"

const layerGradients = [
  "from-blue-600/20 to-blue-600/5 border-blue-500/30",
  "from-brand-violet/20 to-brand-violet/5 border-brand-violet/30",
  "from-brand-emerald/20 to-brand-emerald/5 border-brand-emerald/30",
  "from-brand-cyan/20 to-brand-cyan/5 border-brand-cyan/30",
  "from-amber-600/20 to-amber-600/5 border-amber-500/30",
  "from-rose-600/20 to-rose-600/5 border-rose-500/30",
]

const badges = [
  "text-blue-400 bg-blue-500/10 border-blue-500/30",
  "text-brand-violet bg-brand-violet/10 border-brand-violet/30",
  "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30",
  "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30",
  "text-amber-400 bg-amber-500/10 border-amber-500/30",
  "text-rose-400 bg-rose-500/10 border-rose-500/30",
]

const StackLayer = ({ category, index }) => {
  const [ref, isVisible] = useReveal()
  const Icon = category.icon

  return (
    <div
      ref={ref}
      className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Connecting line between layers (except first) */}
      {index > 0 && (
        <div className="flex justify-center h-8">
          <div className="w-px h-full bg-gradient-to-b from-border-400 via-border-400/50 to-transparent" />
        </div>
      )}

      <div
        className={`bg-gradient-to-r ${layerGradients[index]} backdrop-blur border rounded-xl p-5 md:p-6 hover:scale-[1.01] transition-transform`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Layer label */}
          <div className="flex items-center gap-3 md:w-56 shrink-0">
            <div className={`p-2.5 rounded-lg ${badges[index]} bg-opacity-20`}>
              <Icon size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white font-heading">
              {category.title}
            </h3>
          </div>

          {/* Skills */}
          <div className="flex-1 flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-mono rounded-md bg-deep-900/60 border border-border-500 text-slate-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:shadow-sm hover:shadow-brand-cyan/20 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackLayer
