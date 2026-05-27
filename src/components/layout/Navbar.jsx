import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", id: "hero" },
  { label: "Sobre mí", id: "about" },
  { label: "Experiencia", id: "experience" },
  { label: "Proyectos", id: "projects" },
  { label: "Stack", id: "skills" },
  { label: "Contacto", id: "contact" },
]

const Navbar = ({ onScroll }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    onScroll(id)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-deep-900/70 border-b border-border-500">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          onClick={() => onScroll("hero")}
          className="text-xl font-bold text-brand-cyan font-heading cursor-pointer tracking-tight"
        >
          AL<span className="text-brand-violet">.</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium text-sm">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onScroll(item.id)}
              className="cursor-pointer hover:text-brand-cyan transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 p-2 hover:text-brand-cyan transition"
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-deep-900/95 backdrop-blur-md border-t border-border-500">
          <ul className="flex flex-col items-center gap-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="w-full text-center py-4 text-slate-300 hover:text-brand-cyan hover:bg-surface-700/50 transition cursor-pointer border-b border-border-500 last:border-none text-sm"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
