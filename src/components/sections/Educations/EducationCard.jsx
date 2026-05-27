import useReveal from "../../../hooks/useReveal"

const EducationCard = ({ item, index }) => {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`bg-deep-800/70 backdrop-blur border border-border-500 rounded-2xl p-6 hover:border-brand-cyan/30 transition-colors ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-2 gap-4">
        <h3 className="text-lg font-semibold text-white font-heading">
          {item.title}
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-surface-700 border border-border-500 text-slate-300 shrink-0">
          {item.type}
        </span>
      </div>

      {item.subtitle && (
        <p className="text-brand-violet text-sm mb-1">{item.subtitle}</p>
      )}

      <p className="text-brand-cyan text-sm">{item.institution}</p>
      <p className="text-slate-500 text-xs mt-2">{item.period}</p>
    </div>
  )
}

export default EducationCard
