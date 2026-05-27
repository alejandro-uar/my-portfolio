import { useState, useRef } from "react"
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle")
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus("success")
      setFields({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-deep-800/70 border border-border-500 rounded-2xl p-6 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm text-slate-400">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full mt-1 bg-deep-900 border border-border-500 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-slate-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full mt-1 bg-deep-900 border border-border-500 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm text-slate-400">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={fields.subject}
          onChange={handleChange}
          placeholder="¿En qué puedo ayudarte?"
          className="w-full mt-1 bg-deep-900 border border-border-500 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-slate-400">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={fields.message}
          onChange={handleChange}
          placeholder="Cuéntame sobre tu proyecto o consulta..."
          className="w-full mt-1 bg-deep-900 border border-border-500 rounded-lg px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gradient-to-r from-brand-violet to-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all disabled:opacity-60 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar Mensaje
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg px-4 py-3 text-sm">
          <CheckCircle size={18} />
          Mensaje enviado correctamente. Gracias por contactarme.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3 text-sm">
          <AlertCircle size={18} />
          Error al enviar. Intenta de nuevo o escríbeme directo a mi email.
        </div>
      )}
    </form>
  )
}

export default ContactForm
