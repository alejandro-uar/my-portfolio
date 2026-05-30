const projectsData = [
  {
    title: "Scraper Jobs Salta",
    description:
      "Plataforma de empleos enfocada en la provincia de Salta que centraliza ofertas laborales mediante scraping automatizado y una API REST. Orientada tanto a perfiles profesionales como a empleos operativos y oficios, con la idea de integrar más portales y fuentes de búsqueda a futuro.",
    highlights: [
      "Scraping automático de ofertas laborales",
      "Búsqueda y filtrado inteligente de empleos",
      "Arquitectura fullstack con API REST",
    ],
    tech: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/scraper-jobs.jpg",
    demoUrl: "https://scraper-frontend-salta.vercel.app/",
    githubUrl: "https://github.com/alejandro-luna/scraper-jobs-salta",
  },
  {
    title: "ByteFix",
    description:
      "Sistema de gestión de turnos para un servicio técnico de reparación y ensamblaje de PC. Permite a los clientes registrarse, agendar turnos dentro de los horarios laborales y cancelarlos con anticipación. Cuenta con autenticación de usuarios, validación de reglas de negocio y una API REST conectada a Supabase como base de datos PostgreSQL.",
    highlights: [
      "Agendamiento y cancelación de turnos en tiempo real",
      "Autenticación de usuarios con registro y login",
      "Base de datos PostgreSQL hosteada en Supabase con TypeORM",
    ],
    tech: [
      "Express",
      "TypeORM",
      "Supabase (PostgreSQL)",
      "React",
      "Vite",
      "TypeScript",
      "CSS Modules",
    ],
    image: "/projects/bytefix.jpg",
    demoUrl: "https://bytefix-front.vercel.app/",
    githubUrl: "",
  },
  {
    title: "MyCloset",
    description:
      "Plataforma colaborativa que transforma el vestuario físico en un clóset digital inteligente, optimizando la creación de outfits diarios. Como responsable del backend, diseñé la arquitectura de servicios y la lógica de negocio que hacen posible una experiencia de usuario fluida, segura y automatizada desde el registro hasta el procesamiento de pagos.",
    highlights: [
      "Autenticación segura con JWT y OAuth 2.0 (Google) con persistencia vía cookies",
      "Integración de pasarela de pago y automatización de notificaciones por mail",
      "Diseño de base de datos relacional y documentación completa de la API REST",
    ],
    tech: [
      "Nestjs",
      "PostgreSQL",
      "MercadoPago API",
      "JWT",
      "Swagger",
    ],
    image: "/projects/my-closet.jpg", 
    demoUrl: "https://mycloset57.vercel.app/",
    githubUrl: "https://github.com/alejandro-luna/mycloset",
  },
];

export default projectsData
