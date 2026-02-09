import { socialIcons } from "../../utils/iconsMap"

const SocialIcon = ({ icon }) => {
  const Icon = socialIcons[icon]

  return (
    <div className="p-4 rounded-full bg-slate-800 border border-slate-600 hover:border-cyan-400 hover:scale-110 transition cursor-pointer">
      <Icon size={28} className="text-slate-300 hover:text-white" />
    </div>
  )
}

export default SocialIcon
