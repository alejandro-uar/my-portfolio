import useReveal from "../../../hooks/useReveal"

const SkillCategoryCard = ({ category, index }) => {
  const [ref, isVisible] = useReveal()
  const Icon = category.icon

  return (
    <div
      ref={ref}
      className={`bg-slate-900/70 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:scale-[1.02] hover:border-${category.color.replace("text-", "")}/30 transition-all hover:shadow-lg ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-700/50">
        <div className={`p-2.5 rounded-lg bg-slate-800 ${category.color}`}>
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-white">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-xs rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCategoryCard
