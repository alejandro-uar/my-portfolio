import { MapPin, Mail, Linkedin, Github } from "lucide-react"

const contactItems = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Salta Capital, Argentina",
    href: null
  },
  {
    icon: Mail,
    label: "Email",
    value: "alejandro2002.uar@gmail.com",
    href: "mailto:alejandro2002.uar@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Alejandro Luna",
    href: "https://www.linkedin.com/in/alejandro-luna-72020b208/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@alejandro-luna",
    href: "https://github.com/alejandro-luna"
  }
]

const AboutContact = () => {
  return (
    <div className="bg-deep-800/80 border border-border-500 rounded-xl p-6 shadow-lg h-full">
      <h3 className="text-lg font-semibold mb-5 text-white font-heading flex items-center gap-2">
        <span className="w-1 h-5 bg-brand-cyan rounded-full" />
        Información de Contacto
      </h3>
      <ul className="space-y-4">
        {contactItems.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-slate-300 hover:text-brand-cyan transition-all group"
              >
                <span className="p-2 rounded-lg bg-surface-700/50 border border-border-500 group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all">
                  <item.icon size={16} className="text-brand-cyan shrink-0" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-3 text-slate-300">
                <span className="p-2 rounded-lg bg-surface-700/50 border border-border-500">
                  <item.icon size={16} className="text-brand-cyan shrink-0" />
                </span>
                <div>
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="text-sm">{item.value}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutContact
