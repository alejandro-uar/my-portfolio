import Card from "../../ui/Card"

const AboutProfile = () => {
  return (
    <Card title="Perfil Profesional">
      <div className="space-y-4 text-slate-300 leading-relaxed">

        <p>
          Soy un <span className="text-cyan-400 font-semibold">Developer Web</span> con experiencia
          en la creación de interfaces gráficas y el desarrollo de servicios backend y
          <span className="text-blue-400 font-semibold"> APIs REST</span>.
        </p>

        <p>
          Mi especialización principal está en el
          <span className="text-blue-400 font-semibold"> desarrollo backend</span> con tecnologías
          como Node.js, NestJS y Express, aunque con el tiempo he adquirido experiencia sólida
          en frontend con React y Next.js.
        </p>

        <p>
          Poseo conocimientos en arquitecturas modulares, gestión de bases de datos
          (PostgreSQL, MongoDB, MariaDB) y seguridad. Mi perfil se complementa con una
          sólida base técnica en informática, soporte técnico y sistemas operativos
          Windows / Linux.
        </p>

        <p>
          Esta combinación de habilidades me permite abordar proyectos de software con una
          visión integral, desde la infraestructura hasta la experiencia del usuario final.
        </p>

      </div>
    </Card>
  )
}

export default AboutProfile
