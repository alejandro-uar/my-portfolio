import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
import Card from "../../ui/Card"

const AboutContact = () => {
  return (
    <Card title="Información de Contacto">
      <ul className="space-y-4 text-slate-300">

        <li className="flex items-center gap-3">
          <MapPin className="text-cyan-400" size={20} />
          Salta Capital, Argentina
        </li>

        <li className="flex items-center gap-3">
          <Mail className="text-cyan-400" size={20} />
          alejandro2002.uar@gmail.com
        </li>

        <li className="flex items-center gap-3">
          <Phone className="text-cyan-400" size={20} />
          3875614895
        </li>

        <li className="flex items-center gap-3">
          <Linkedin className="text-cyan-400" size={20} />
          LinkedIn Profile
        </li>

        <li className="flex items-center gap-3">
          <Github className="text-cyan-400" size={20} />
          GitHub Profile
        </li>

      </ul>
    </Card>
  )
}

export default AboutContact
