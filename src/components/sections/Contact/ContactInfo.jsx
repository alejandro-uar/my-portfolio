import { contactIcons } from "../../../utils/iconsMap"
import { contactInfo } from "./contactData"

const ContactInfo = () => {
  return (
    <div className="bg-deep-800/70 border border-border-500 rounded-2xl p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4 font-heading">Información de Contacto</h3>

      {contactInfo.map((item, index) => {
        const Icon = contactIcons[item.icon]

        return (
          <div key={index} className="flex items-center gap-3 text-sm">
            <Icon className="text-brand-cyan shrink-0" size={18} />
            <span className="text-slate-300">{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ContactInfo
