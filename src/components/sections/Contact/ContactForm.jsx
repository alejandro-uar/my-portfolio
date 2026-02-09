const ContactForm = () => {
  return (
    <form className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 space-y-5">
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-300">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full mt-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-slate-300">Asunto</label>
        <input
          type="text"
          placeholder="¿En qué puedo ayudarte?"
          className="w-full mt-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label className="text-sm text-slate-300">Mensaje</label>
        <textarea
          rows={4}
          placeholder="Cuéntame sobre tu proyecto o consulta..."
          className="w-full mt-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        ✈️ Enviar Mensaje
      </button>
    </form>
  )
}

export default ContactForm
