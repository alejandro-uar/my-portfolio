import { contactIcons } from "../../../utils/iconsMap"
import { contactInfo } from "./contactData"

const ContactInfo = () => {
  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>

      {contactInfo.map((item, index) => {
        const Icon = contactIcons[item.icon]

        return (
          <div key={index} className="flex items-center gap-3 text-sm">
            <Icon className="text-blue-400" size={18} />
            <span className="text-slate-300">{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ContactInfo
