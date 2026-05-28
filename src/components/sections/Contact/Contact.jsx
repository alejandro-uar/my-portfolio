import useReveal from "../../../hooks/useReveal"
import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"
import ContactForm from "./ContactForm"

const Contact = () => {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section id="contact" className="bg-deep-800 py-24 px-6">
      <div className="max-w-6xl mx-auto text-white">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Contacto
          </h2>
          <p className="text-slate-400">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
