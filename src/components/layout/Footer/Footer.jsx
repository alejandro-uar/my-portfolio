import { Mail, Phone } from "lucide-react"
import FooterColumn from "./FooterColumn"
import { footerInfo, socialLinks } from "./footerData"
import { socialIcons } from "../../../utils/iconsMap"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-deep-800 to-deep-900 border-t border-border-500">
      <div className="max-w-6xl mx-auto px-6 py-12 text-slate-400">
        <div className="grid gap-8 md:grid-cols-3">
          <FooterColumn>
            <h3 className="text-white font-bold text-lg font-heading">
              {footerInfo.name}
            </h3>
            <p className="text-sm text-slate-500">
              {footerInfo.role}
            </p>
          </FooterColumn>

          <FooterColumn title="Contacto">
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-brand-cyan" />
              <span>{footerInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-brand-cyan" />
              <span>{footerInfo.phone}</span>
            </div>
          </FooterColumn>

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
                    className="hover:text-brand-cyan transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </FooterColumn>
        </div>

        <div className="border-t border-border-500 my-8" />

        <p className="text-center text-sm text-slate-600">
          © {footerInfo.year} {footerInfo.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
