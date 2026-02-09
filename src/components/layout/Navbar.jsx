const Navbar = ({ onScroll }) => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-cyan-400">
          AL
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-200 font-medium">
          {[
            { label: "Inicio", id: "hero" },
            { label: "Sobre mí", id: "about" },
            { label: "Experiencia", id: "experience" },
            { label: "Proyectos", id: "projects" },
            { label: "Contacto", id: "contact" },
          ].map((item) => (
            <li
              key={item.id}
              onClick={() => onScroll(item.id)}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
