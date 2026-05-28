const AboutProfile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="flex flex-col items-center lg:items-start gap-4 lg:col-span-1">
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-brand-violet via-brand-cyan to-brand-emerald p-[3px] shadow-lg shadow-brand-violet/20">
          <div className="w-full h-full rounded-full bg-deep-800 flex items-center justify-center">
            <span className="text-3xl font-black text-transparent bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text">
              AL
            </span>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-white font-semibold text-lg">Alejandro Luna</p>
          <p className="text-slate-400 text-sm">Fullstack Developer</p>
        </div>
      </div>

      <div className="lg:col-span-4 bg-deep-800/80 border border-border-500 rounded-xl p-6 shadow-lg">
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Soy un Developer Web con experiencia en la creación de interfaces de usuario y el desarrollo de servicios backend mediante APIs REST. Mi enfoque principal está en el desarrollo backend con tecnologías como Node.js, NestJS y Express, complementando mi perfil con experiencia práctica en el frontend utilizando React y Next.js.
          </p>
          <p>
            Además, cuento con una base técnica sólida en soporte IT, redes y sistemas operativos Windows/Linux. Esta combinación me permite abordar proyectos con una visión integral.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutProfile
