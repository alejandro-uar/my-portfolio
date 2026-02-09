import Card from "../../ui/Card"
import { Briefcase, Calendar } from "lucide-react"

const ExperienceItem = ({ data, align }) => {
  const isLeft = align === "left"

  return (
    <div
      className={`relative flex w-full ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full"></span>

      <div className="w-full lg:w-[45%]">
        <Card>
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-cyan-400" size={20} />
            <h3 className="text-lg font-bold text-white">
              {data.role}
            </h3>
          </div>

          <p className="text-blue-400 font-medium">
            {data.company} • {data.type}
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 mb-4">
            <Calendar size={16} />
            {data.date}
          </div>

          {/* Tasks */}
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
            {data.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-600 text-slate-200"
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
