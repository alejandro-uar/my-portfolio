import { socialIcons, socialUrls } from "../../utils/iconsMap"

const SocialIcon = ({ icon }) => {
  const Icon = socialIcons[icon]
  const url = socialUrls[icon]

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon}
      className="p-4 rounded-full bg-surface-700 border border-border-500 hover:border-brand-cyan hover:scale-110 hover:shadow-lg hover:shadow-brand-cyan/20 transition-all cursor-pointer inline-flex"
    >
      <Icon size={28} className="text-slate-300 hover:text-brand-cyan transition-colors" />
    </a>
  )
}

export default SocialIcon
