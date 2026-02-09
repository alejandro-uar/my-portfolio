import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-white">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contacto
        </h2>

        <p className="text-center text-slate-400 mb-16">
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left */}
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Right */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
