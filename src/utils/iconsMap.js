import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export const contactIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
}

export const allIcons = {
  ...socialIcons,
  ...contactIcons,
}
