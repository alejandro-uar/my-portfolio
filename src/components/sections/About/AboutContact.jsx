import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
import Card from "../../ui/Card"

const AboutContact = () => {
  return (
    <Card title="Información de Contacto">
      <ul className="space-y-4 text-slate-300">
        <li className="flex items-center gap-3">
          <MapPin className="text-brand-cyan shrink-0" size={20} />
          Salta Capital, Argentina
        </li>

        <li className="flex items-center gap-3">
          <Mail className="text-brand-cyan shrink-0" size={20} />
          <a href="mailto:alejandro2002.uar@gmail.com" className="hover:text-brand-cyan transition">
            alejandro2002.uar@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-3">
          <Phone className="text-brand-cyan shrink-0" size={20} />
          <a href="tel:3875614895" className="hover:text-brand-cyan transition">
            3875614895
          </a>
        </li>

        <li className="flex items-center gap-3">
          <Linkedin className="text-brand-cyan shrink-0" size={20} />
          <a
            href="https://www.linkedin.com/in/alejandro-luna-72020b208"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cyan transition"
          >
            LinkedIn Profile
          </a>
        </li>

        <li className="flex items-center gap-3">
          <Github className="text-brand-cyan shrink-0" size={20} />
          <a
            href="https://github.com/alejandro-luna"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-cyan transition"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </Card>
  )
}

export default AboutContact
