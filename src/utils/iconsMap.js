import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import TikTokIcon from "../components/ui/TikTokIcon"

export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  tiktok: TikTokIcon,
}

export const socialUrls = {
  github: "https://github.com/alejandro-luna",
  linkedin: "https://www.linkedin.com/in/alejandro-luna-72020b208",
  mail: "mailto:alejandro2002.uar@gmail.com",
  tiktok: "https://www.tiktok.com/@alejandro.luna",
}

export const contactIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
}

export const allIcons = {
  ...socialIcons,
  ...contactIcons,
  send: Send,
}
