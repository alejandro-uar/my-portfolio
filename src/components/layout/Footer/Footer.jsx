import { Mail, Phone } from "lucide-react"
import FooterColumn from "./FooterColumn"
import { footerInfo, socialLinks } from "./footerData"
import { socialIcons } from "../../../utils/iconsMap"

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12 text-slate-300">

        {/* Top */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <FooterColumn>
            <h3 className="text-white font-semibold text-lg">
              {footerInfo.name}
            </h3>
            <p className="text-sm text-slate-400">
              {footerInfo.role}
            </p>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contacto">
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>{footerInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <span>{footerInfo.phone}</span>
            </div>
          </FooterColumn>

          {/* Social */}
          <FooterColumn title="Redes Sociales">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </FooterColumn>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <p className="text-center text-sm text-slate-500">
          © {footerInfo.year} {footerInfo.name}. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}

export default Footer
