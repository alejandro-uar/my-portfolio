import {
  Monitor,
  Server,
  Database,
  Wrench,
  Users,
  Headphones,
} from "lucide-react"

const skillsData = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-blue-400",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-400",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PHP",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    color: "text-purple-400",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "TypeORM",
      "Mongoose",
    ],
  },
  {
    title: "Herramientas & DevOps",
    icon: Wrench,
    color: "text-orange-400",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Jest",
      "Postman",
      "Swagger",
      "TeamViewer",
    ],
  },
  {
    title: "Metodologías",
    icon: Users,
    color: "text-pink-400",
    skills: ["Scrum", "Agile", "Atomic Design", "Trello", "Miro"],
  },
  {
    title: "Soporte Técnico",
    icon: Headphones,
    color: "text-yellow-400",
    skills: [
      "Windows",
      "Linux",
      "macOS",
      "Hardware",
      "Redes LAN",
      "AWS Básico",
      "Cisco Packet Tracer",
    ],
  },
]

export default skillsData
