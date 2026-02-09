const SkillCategoryCard = ({ category }) => {
  const Icon = category.icon

  return (
    <div className="bg-slate-900/70 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:scale-[1.02] transition">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`${category.color}`} size={26} />
        <h3 className="text-lg font-semibold text-white">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-600 text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCategoryCard
