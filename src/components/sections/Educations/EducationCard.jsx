const EducationCard = ({ item }) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur border border-slate-700 rounded-2xl p-6">
      
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">
          {item.title}
        </h3>

        <span className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-300">
          {item.type}
        </span>
      </div>

      {item.subtitle && (
        <p className="text-indigo-500 text-sm mb-1">
          {item.subtitle}
        </p>
      )}

      <p className="text-blue-400 text-sm">
        {item.institution}
      </p>

      <p className="text-slate-500 text-xs mt-2">
        {item.period}
      </p>
    </div>
  )
}

export default EducationCard
