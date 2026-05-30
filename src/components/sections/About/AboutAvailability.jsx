import { Briefcase, Clock, Zap } from "lucide-react"

const availabilityItems = [
  {
    icon: Briefcase,
    label: "Tipo de trabajo",
    value: "Fullstack, Frontend o Backend Developer"
  },
  {
    icon: Clock,
    label: "Modalidad",
    value: "Remoto / Presencial"
  },
  {
    icon: Zap,
    label: "Disponibilidad",
    value: "Inmediata"
  }
]

const AboutAvailability = () => {
  return (
    <div className="bg-deep-800/80 border border-border-500 rounded-xl p-6 shadow-lg h-full">
      <h3 className="text-lg font-semibold mb-5 text-white font-heading flex items-center gap-2">
        <span className="w-1 h-5 bg-brand-emerald rounded-full" />
        Disponibilidad
      </h3>

      <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-lg bg-brand-emerald/5 border border-brand-emerald/20">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald" />
        </span>
        <span className="text-brand-emerald font-medium text-sm">
          Abierto a nuevas oportunidades
        </span>
      </div>

      <ul className="space-y-4">
        {availabilityItems.map((item) => (
          <li key={item.label} className="flex items-start gap-3 text-slate-300">
            <item.icon size={16} className="text-brand-emerald shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-sm font-medium text-white">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutAvailability
