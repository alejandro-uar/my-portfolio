import { socialIcons } from "../../../utils/iconsMap"
import { socialLinks } from "./contactData"

const SocialLinks = () => {
  return (
    <div className="bg-deep-800/70 border border-border-500 rounded-2xl p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4 font-heading">Redes Sociales</h3>

      <div className="space-y-3">
        {socialLinks.map((item, index) => {
          const Icon = socialIcons[item.icon]

          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-brand-cyan transition"
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
