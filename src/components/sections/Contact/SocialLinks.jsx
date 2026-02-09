import { socialIcons } from "../../../utils/iconsMap"
import { socialLinks } from "./contactData"

const SocialLinks = () => {
  return (
    <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>

      <div className="space-y-3">
        {socialLinks.map((item, index) => {
          const Icon = socialIcons[item.name.toLowerCase()]

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
            >
              <Icon size={18} />
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks
