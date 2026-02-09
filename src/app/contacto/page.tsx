import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Iglesia Casa del Alfarero",
  description:
    "Conecta con la Iglesia Casa del Alfarero. Visitanos, llamanos, o envianos un mensaje. Estamos aqui para ti.",
};

export default function ContactoPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1 — Hero
          ============================================================ */}
      <section className="bg-gradient-to-b from-azul to-oscuro py-32 text-center text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
            Conecta con Nosotros
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90 md:text-2xl">
            Estamos Aqui para Ti
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Contact Methods
          ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 — Visitanos */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:shadow-lg">
              {/* Map Pin Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 text-tierra"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">Visitanos</h3>
              <p className="mt-3 text-sm text-oscuro/70 leading-relaxed">
                4329 Marietta St,
                <br />
                Powder Springs, GA 30127
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4329+Marietta+St+Powder+Springs+GA+30127"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
              >
                Obtener Direcciones
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-1 h-3.5 w-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                  Horario de Oficina
                </p>
                <p className="mt-1 text-sm text-oscuro/70">Lun - Jue: 9:00 AM - 4:00 PM</p>
                <p className="text-sm text-oscuro/70">Vie: 9:00 AM - 12:00 PM</p>
              </div>
            </div>

            {/* Card 2 — Llamanos */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:shadow-lg">
              {/* Phone Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 text-tierra"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">Llamanos</h3>
              <a
                href="tel:+17708966436"
                className="mt-3 inline-block text-lg font-semibold text-azul transition hover:text-azul/80"
              >
                (770) 896-6436
              </a>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                  Horario de Atencion
                </p>
                <p className="mt-1 text-sm text-oscuro/70">Lun - Jue: 9:00 AM - 4:00 PM</p>
                <p className="mt-2 text-xs italic text-oscuro/50">
                  Deja mensaje fuera de horario
                </p>
              </div>
            </div>

            {/* Card 3 — Escribenos */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:shadow-lg">
              {/* Email Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 text-tierra"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">Escribenos</h3>
              <a
                href="mailto:cda.atlanta@gmail.com"
                className="mt-3 inline-block text-sm font-semibold text-azul transition hover:text-azul/80"
              >
                cda.atlanta@gmail.com
              </a>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                  General
                </p>
                <p className="mt-1 text-sm text-oscuro/70">cda.atlanta@gmail.com</p>
              </div>
            </div>

            {/* Card 4 — Siguenos */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:shadow-lg">
              {/* Social Media Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 text-tierra"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">Siguenos</h3>
              <div className="mt-3 space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-oscuro/70 transition hover:text-azul"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  @casadelalfareroatl
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-oscuro/70 transition hover:text-azul"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  @casadelalfareroatl
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-oscuro/70 transition hover:text-azul"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Casa del Alfarero Atlanta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Contact Form
          ============================================================ */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-4xl font-bold text-oscuro md:text-5xl">
            Envianos un Mensaje
          </h2>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
            <form>
              {/* Razon del Contacto */}
              <fieldset>
                <legend className="mb-2 font-semibold text-oscuro">
                  Razon del Contacto
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Pregunta General",
                    "Peticion de Oracion",
                    "Quiero Unirme",
                    "Informacion sobre Ministerios",
                    "Necesito Consejeria",
                    "Otro",
                  ].map((reason) => (
                    <label
                      key={reason}
                      className="flex cursor-pointer items-center gap-2 text-sm text-oscuro/80"
                    >
                      <input
                        type="radio"
                        name="razon"
                        value={reason}
                        className="h-4 w-4 border-gray-300 text-azul focus:ring-azul"
                      />
                      {reason}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Nombre Completo */}
              <div className="mt-6">
                <label
                  htmlFor="nombre"
                  className="mb-2 block font-semibold text-oscuro"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-azul focus:ring-2 focus:ring-azul"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-oscuro"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-azul focus:ring-2 focus:ring-azul"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Telefono */}
              <div className="mt-6">
                <label
                  htmlFor="telefono"
                  className="mb-2 block font-semibold text-oscuro"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-azul focus:ring-2 focus:ring-azul"
                  placeholder="(000) 000-0000"
                />
              </div>

              {/* Asunto */}
              <div className="mt-6">
                <label
                  htmlFor="asunto"
                  className="mb-2 block font-semibold text-oscuro"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-azul focus:ring-2 focus:ring-azul"
                  placeholder="Asunto de tu mensaje"
                />
              </div>

              {/* Mensaje */}
              <div className="mt-6">
                <label
                  htmlFor="mensaje"
                  className="mb-2 block font-semibold text-oscuro"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-azul focus:ring-2 focus:ring-azul"
                  placeholder="Escribe tu mensaje aqui..."
                />
              </div>

              {/* Preferencia de contacto */}
              <fieldset className="mt-6">
                <legend className="mb-2 font-semibold text-oscuro">
                  Como prefieres que te contactemos?
                </legend>
                <div className="flex flex-wrap gap-4">
                  {["Email", "Telefono", "WhatsApp"].map((method) => (
                    <label
                      key={method}
                      className="flex cursor-pointer items-center gap-2 text-sm text-oscuro/80"
                    >
                      <input
                        type="checkbox"
                        name="contacto_preferido"
                        value={method}
                        className="h-4 w-4 rounded border-gray-300 text-azul focus:ring-azul"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Confidencial */}
              <div className="mt-6">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-oscuro/80">
                  <input
                    type="checkbox"
                    name="confidencial"
                    className="h-4 w-4 rounded border-gray-300 text-azul focus:ring-azul"
                  />
                  Mantener mi peticion confidencial
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary mt-8 w-full rounded-xl py-4 text-center text-sm font-bold uppercase tracking-wider"
              >
                Enviar Mensaje
              </button>

              <p className="mt-4 text-center text-sm text-oscuro/50">
                Responderemos dentro de 24-48 horas habiles.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Map
          ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-4xl font-bold text-oscuro md:text-5xl">
            Nuestra Ubicacion
          </h2>

          <div className="mt-12 overflow-hidden rounded-xl shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.123456789!2d-84.6838!3d33.8595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzM0LjIiTiA4NMKwNDEnMDEuNyJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&q=4329+Marietta+St,+Powder+Springs,+GA+30127"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Iglesia Casa del Alfarero"
              className="w-full"
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-crema p-5">
                <h3 className="font-heading text-lg font-bold text-oscuro">
                  Estacionamiento
                </h3>
                <p className="mt-2 text-sm text-oscuro/70 leading-relaxed">
                  Contamos con estacionamiento gratuito amplio en la parte frontal y
                  lateral del edificio. Espacios reservados para visitantes cerca de
                  la entrada principal.
                </p>
              </div>
              <div className="rounded-lg bg-crema p-5">
                <h3 className="font-heading text-lg font-bold text-oscuro">
                  Referencias Cercanas
                </h3>
                <p className="mt-2 text-sm text-oscuro/70 leading-relaxed">
                  Nos encontramos sobre Marietta St en Powder Springs, cerca de la
                  interseccion con Brownsville Rd. A minutos de la autopista I-20 y
                  de la ciudad de Hiram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — Staff Directory
          ============================================================ */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-4xl font-bold text-oscuro md:text-5xl">
            Nuestro Equipo
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Staff 1 — Pastor */}
            <div className="rounded-xl bg-white p-6 text-center shadow">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-tierra to-oro">
                <span className="text-center font-heading text-sm font-bold text-white">
                  Pastor
                  <br />
                  Emmanuel
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">
                Pastor Emmanuel Lopez
              </h3>
              <p className="mt-1 text-sm font-semibold text-tierra">
                Pastor Principal
              </p>
              <div className="mt-4 space-y-1 text-sm text-oscuro/70">
                <p>
                  <a
                    href="mailto:cda.atlanta@gmail.com"
                    className="transition hover:text-azul"
                  >
                    cda.atlanta@gmail.com
                  </a>
                </p>
                <p>Ext. 101</p>
              </div>
            </div>

            {/* Staff 2 — Admin */}
            <div className="rounded-xl bg-white p-6 text-center shadow">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-azul to-oscuro">
                <span className="text-center font-heading text-sm font-bold text-white">
                  Admin
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">
                Administracion
              </h3>
              <p className="mt-1 text-sm font-semibold text-tierra">
                Asistente Administrativo
              </p>
              <div className="mt-4 space-y-1 text-sm text-oscuro/70">
                <p>Reservaciones de instalaciones</p>
                <p>Informacion general</p>
              </div>
            </div>

            {/* Staff 3 — Worship Leader */}
            <div className="rounded-xl bg-white p-6 text-center shadow">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-oro to-tierra">
                <span className="text-center font-heading text-sm font-bold text-white">
                  Adoracion
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-oscuro">
                Lider de Adoracion
              </h3>
              <p className="mt-1 text-sm font-semibold text-tierra">
                Ministerio de Alabanza
              </p>
              <div className="mt-4 space-y-1 text-sm text-oscuro/70">
                <p>Ministerio de adoracion</p>
                <p>Audiciones e informacion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — Emergency Help
          ============================================================ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-xl border-2 border-rojo p-8 text-center">
            {/* Warning Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rojo/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-rojo"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            <h3 className="font-heading text-2xl font-bold text-rojo">
              Necesitas Ayuda Urgente?
            </h3>

            <div className="mt-4 space-y-3 text-sm text-oscuro/80 leading-relaxed">
              <p>
                Si te encuentras en una emergencia que pone en riesgo tu vida,
                llama al{" "}
                <a
                  href="tel:911"
                  className="font-bold text-rojo transition hover:text-rojo/80"
                >
                  911
                </a>{" "}
                inmediatamente.
              </p>
              <p>
                Para oracion urgente o apoyo pastoral fuera de horario, llama a
                nuestra linea de oracion al{" "}
                <a
                  href="tel:+17708966436"
                  className="font-semibold text-azul transition hover:text-azul/80"
                >
                  (770) 896-6436
                </a>{" "}
                y deja un mensaje. Nos comunicaremos contigo lo antes posible.
              </p>
            </div>

            <p className="mt-6 font-heading text-lg font-semibold italic text-oscuro">
              &ldquo;Dios te ama y no estas solo.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — Newsletter
          ============================================================ */}
      <section className="bg-azul py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Mantente Conectado
            </h2>

            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-white/80">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Proximos eventos y actividades
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Sermones y ensenanzas recientes
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Noticias de la comunidad
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Oportunidades para servir
              </li>
            </ul>

            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electronico"
                className="flex-1 rounded-xl border-0 px-5 py-3.5 text-oscuro outline-none placeholder:text-oscuro/40 focus:ring-2 focus:ring-oro"
              />
              <button
                type="submit"
                className="rounded-xl bg-oro px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-oscuro transition hover:bg-oro/90"
              >
                Suscribirse
              </button>
            </form>

            <p className="mt-4 text-sm text-white/50">
              No spam. Cancela en cualquier momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
