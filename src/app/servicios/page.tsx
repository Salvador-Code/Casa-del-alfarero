import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios | Iglesia Casa del Alfarero",
  description:
    "Conoce nuestros horarios de culto, que esperar en tu primera visita, y como unirte a nuestros servicios en vivo. Iglesia Casa del Alfarero en Powder Springs, GA.",
  openGraph: {
    title: "Servicios | Iglesia Casa del Alfarero",
    description:
      "Horarios de culto, informacion para visitantes y transmisiones en vivo. Un lugar para cada etapa de tu jornada espiritual.",
    type: "website",
    locale: "es_ES",
    siteName: "Iglesia Casa del Alfarero",
  },
};

/* ──────────────────────────────────────────────
   SVG Icon Components
   ────────────────────────────────────────────── */

function PrayerHandsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 4v8" />
      <path d="M22 8l3 6" />
      <path d="M42 8l-3 6" />
      <path d="M20 20c0-2 2-4 4-4h2l6 8 6-8h2c2 0 4 2 4 4v6c0 2-1 4-3 5l-5 4v10c0 2-1 4-4 4h0c-3 0-4-2-4-4V35l-5-4c-2-1-3-3-3-5v-6z" />
      <path d="M28 35v10c0 2-1 4-4 4h0c-3 0-4-2-4-4V35" />
      <path d="M36 35v10c0 2 1 4 4 4h0c3 0 4-2 4-4V35" />
      <path d="M26 56h12" />
    </svg>
  );
}

function CrossRaysIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Rays */}
      <path d="M32 4v6" />
      <path d="M32 54v6" />
      <path d="M4 32h6" />
      <path d="M54 32h6" />
      <path d="M12 12l5 5" />
      <path d="M47 47l5 5" />
      <path d="M52 12l-5 5" />
      <path d="M17 47l-5 5" />
      {/* Cross */}
      <rect x="28" y="14" width="8" height="40" rx="1" />
      <rect x="18" y="22" width="28" height="8" rx="1" />
    </svg>
  );
}

function ParkingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="36" height="36" rx="6" />
      <path d="M18 34V14h8a7 7 0 0 1 0 14h-8" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 24h8l6-4 6 4 6-4 6 4h8" />
      <path d="M12 24v-8l6-4" />
      <path d="M36 24v-8l-6-4" />
      <path d="M18 28l4 4 4-4" />
      <path d="M22 32l4 4" />
    </svg>
  );
}

function ChairIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 8h24v16H12z" />
      <path d="M10 24h28v4H10z" />
      <path d="M14 28v12" />
      <path d="M34 28v12" />
      <path d="M8 16v8" />
      <path d="M40 16v8" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 42S6 28 6 17a9 9 0 0 1 18 0 9 9 0 0 1 18 0c0 11-18 25-18 25z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 44S8 28 8 18a16 16 0 1 1 32 0c0 10-16 26-16 26z" />
      <circle cx="24" cy="18" r="6" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default function ServiciosPage() {
  return (
    <>
      {/* =============================================
          SECTION 1 — Hero
          ============================================= */}
      <section className="bg-gradient-to-br from-azul to-oscuro py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-5xl font-bold md:text-6xl">
            Nuestros Servicios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-white/90">
            Un lugar para cada etapa de tu jornada espiritual
          </p>
        </div>
      </section>

      {/* =============================================
          SECTION 2 — Weekly Schedule Detail
          ============================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-4xl font-bold text-oscuro text-center mb-14">
            Horarios de Culto
          </h2>

          <div className="space-y-10">
            {/* ── Card 1: Viernes ── */}
            <div className="rounded-xl border-l-4 border-oro bg-white p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:gap-12">
                {/* Icon area */}
                <div className="mb-6 flex shrink-0 items-start justify-center lg:mb-0 lg:w-32">
                  <PrayerHandsIcon className="h-24 w-24 text-tierra" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="rounded-full bg-tierra/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-tierra">
                      Viernes
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-oscuro">
                    Viernes
                  </h3>
                  <p className="font-heading text-4xl font-bold text-oro mt-1">
                    6:30 PM
                  </p>
                  <p className="mt-1 font-body text-lg text-oscuro/70">
                    90 minutos
                  </p>

                  <p className="mt-4 font-body text-oscuro/80 leading-relaxed max-w-3xl">
                    Nuestro servicio de viernes es un tiempo intimo dedicado a la
                    oracion profunda y la ensenanza de la Palabra de Dios. Es un
                    espacio donde podemos desconectarnos del ajetreo de la semana
                    y reconectarnos con el Senor, fortaleciendo nuestra fe a
                    traves de la adoracion y el estudio biblico.
                  </p>

                  {/* What to Expect */}
                  <div className="mt-6">
                    <h4 className="font-heading text-lg font-semibold text-oscuro mb-3">
                      Que Esperar
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {[
                        { item: "Adoracion acustica", time: "15 min" },
                        { item: "Oracion", time: "20 min" },
                        { item: "Ensenanza", time: "45 min" },
                        { item: "Oracion final", time: "10 min" },
                      ].map(({ item, time }) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-body text-oscuro/80"
                        >
                          <span className="inline-block h-2 w-2 rounded-full bg-oro" />
                          {item}{" "}
                          <span className="text-sm text-oscuro/50">
                            ({time})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Childcare */}
                  <div className="mt-5 flex items-center gap-2 rounded-lg bg-verde/10 px-4 py-2 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-verde"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-body text-sm font-semibold text-verde">
                      Disponible para edades 0-5
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <CalendarIcon className="h-5 w-5" />
                      Agregar a Calendario
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card 2: Domingo ── */}
            <div className="rounded-xl border-l-4 border-oro bg-white p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:gap-12">
                {/* Icon area */}
                <div className="mb-6 flex shrink-0 items-start justify-center lg:mb-0 lg:w-32">
                  <CrossRaysIcon className="h-24 w-24 text-tierra" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="rounded-full bg-azul/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-azul">
                      Domingo
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-oscuro">
                    Domingo
                  </h3>
                  <p className="font-heading text-4xl font-bold text-oro mt-1">
                    11:00 AM
                  </p>
                  <p className="mt-1 font-body text-lg text-oscuro/70">
                    2 horas
                  </p>

                  <p className="mt-4 font-body text-oscuro/80 leading-relaxed max-w-3xl">
                    Nuestro culto dominical es una celebracion familiar donde
                    toda la congregacion se reune para adorar, aprender y crecer
                    juntos en la fe. Es el momento central de nuestra semana,
                    lleno de alabanza vibrante, ensenanza biblica relevante y un
                    ambiente de comunidad y amor.
                  </p>

                  {/* What to Expect */}
                  <div className="mt-6">
                    <h4 className="font-heading text-lg font-semibold text-oscuro mb-3">
                      Que Esperar
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { item: "Alabanza", time: "25 min" },
                        { item: "Adoracion", time: "15 min" },
                        { item: "Anuncios", time: "10 min" },
                        { item: "Mensaje pastoral", time: "40 min" },
                        { item: "Altar call", time: "20 min" },
                        { item: "Companerismo", time: "10 min" },
                      ].map(({ item, time }) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-body text-oscuro/80"
                        >
                          <span className="inline-block h-2 w-2 rounded-full bg-oro" />
                          {item}{" "}
                          <span className="text-sm text-oscuro/50">
                            ({time})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div className="mt-6">
                    <h4 className="font-heading text-lg font-semibold text-oscuro mb-3">
                      Programas Disponibles
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-oro/10 px-4 py-1.5 font-body text-sm font-semibold text-oro">
                        Escuela Dominical &mdash; 9:30 AM
                      </span>
                      <span className="rounded-full bg-verde/10 px-4 py-1.5 font-body text-sm font-semibold text-verde">
                        Ministerio Infantil (edades ~3-4 a 12)
                      </span>
                    </div>
                    <p className="mt-3 font-body text-sm text-oscuro/60 italic">
                      Nota: Por el momento no contamos con programas para adolescentes (13-17 anos).
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <PlayIcon className="h-5 w-5" />
                      Ver en Vivo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 3 — First Time Visitors
          ============================================= */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-4xl font-bold text-oscuro text-center mb-14">
            Que Esperar en Tu Primera Visita
          </h2>

          {/* 4-step cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ParkingIcon className="h-12 w-12" />,
                title: "Estacionamiento",
                description:
                  "Contamos con amplio estacionamiento gratuito. Nuestro equipo de bienvenida te guiara al llegar para que encuentres un espacio facilmente.",
              },
              {
                icon: <HandshakeIcon className="h-12 w-12" />,
                title: "Bienvenida",
                description:
                  "Seras recibido con una sonrisa en la puerta. Nuestro equipo de hospitalidad esta listo para responderte cualquier pregunta y hacerte sentir en casa.",
              },
              {
                icon: <ChairIcon className="h-12 w-12" />,
                title: "Encuentra tu Asiento",
                description:
                  "Puedes sentarte donde gustes. No hay asientos asignados. Llegando unos minutos antes podras encontrar un lugar comodo.",
              },
              {
                icon: <HeartIcon className="h-12 w-12" />,
                title: "Disfruta el Servicio",
                description:
                  "Relajate y disfruta. Participa al nivel que te sientas comodo. No se te pedira que hagas nada que no desees. Estamos felices de que estes aqui.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tierra/10 text-tierra">
                  {icon}
                </div>
                <h4 className="font-heading text-xl font-bold text-oscuro">
                  {title}
                </h4>
                <p className="mt-2 font-body text-sm leading-relaxed text-oscuro/70">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h3 className="font-heading text-3xl font-bold text-oscuro text-center mb-10">
              Preguntas Frecuentes
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  question: "Que debo vestir?",
                  answer:
                    "Ven como te sientas comodo. Nuestra congregacion viste de manera casual. Lo importante es que vengas tal como eres.",
                },
                {
                  question: "Cuanto dura el servicio?",
                  answer:
                    "Nuestros servicios duran entre 1.5 y 2 horas, dependiendo del dia. Los viernes son aproximadamente 90 minutos y los domingos cerca de 2 horas.",
                },
                {
                  question: "Hay estacionamiento disponible?",
                  answer:
                    "Si, contamos con estacionamiento amplio y gratuito. Nuestro equipo te ayudara a encontrar un espacio al llegar.",
                },
                {
                  question: "Que hago con mis hijos?",
                  answer:
                    "Tenemos un ministerio infantil dedicado con maestros capacitados. Los ninos disfrutan de actividades, ensenanzas y juegos apropiados para su edad.",
                },
                {
                  question: "Tendre que hablar en publico?",
                  answer:
                    "No, en absoluto. No se te pedira que te pongas de pie, te presentes o hables frente a la congregacion. Participa a tu propio ritmo.",
                },
                {
                  question: "Se espera que de ofrenda?",
                  answer:
                    "La ofrenda no es obligatoria. Es una practica voluntaria para los miembros de nuestra iglesia. Como visitante, no hay ninguna expectativa al respecto.",
                },
              ].map(({ question, answer }) => (
                <div
                  key={question}
                  className="rounded-xl bg-white p-6 shadow-md"
                >
                  <p className="font-heading text-lg font-bold text-oscuro">
                    {question}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-oscuro/70">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4 — Location
          ============================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-4xl font-bold text-oscuro text-center mb-14">
            Ubicacion
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left — Address Card */}
            <div className="rounded-xl bg-crema p-8 shadow-md">
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-10 w-10 shrink-0 text-rojo" />
                <div>
                  <h3 className="font-heading text-2xl font-bold text-oscuro">
                    Iglesia Casa del Alfarero
                  </h3>
                  <address className="mt-3 font-body not-italic leading-relaxed text-oscuro/80">
                    4329 Marietta St
                    <br />
                    Powder Springs, GA 30127
                    <br />
                    Estados Unidos
                  </address>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=4329+Marietta+St,+Powder+Springs,+GA+30127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MapPinIcon className="h-5 w-5" />
                  Obtener Direcciones
                </a>
              </div>

              <div className="mt-6 rounded-lg bg-white p-4">
                <h4 className="font-heading text-lg font-semibold text-oscuro mb-2">
                  Estacionamiento
                </h4>
                <p className="font-body text-sm text-oscuro/70 leading-relaxed">
                  Estacionamiento gratuito disponible en el lote principal
                  frente al edificio. Espacios accesibles estan disponibles
                  cerca de la entrada principal. Nuestro equipo de bienvenida
                  estara en el estacionamiento para guiarte los domingos.
                </p>
              </div>
            </div>

            {/* Right — Google Maps Embed */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Ubicacion de Iglesia Casa del Alfarero"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0!2d-84.6838!3d33.8596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51a5c5f0e1b3d%3A0x0!2s4329+Marietta+St%2C+Powder+Springs%2C+GA+30127!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 5 — Live Stream CTA
          ============================================= */}
      <section className="bg-azul py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            No Puedes Venir? Unete Online
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-xl text-white/90">
            En Vivo Domingos 11:00 AM EST
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-body font-semibold text-rojo shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Ver en YouTube
            </a>
            <a
              href="https://www.facebook.com/casadelalfareroatl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-body font-semibold text-azul shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Seguir en Facebook
            </a>
          </div>

          {/* Email Capture */}
          <div className="mx-auto mt-12 max-w-lg">
            <p className="font-body text-lg text-white/90 mb-4">
              Recibe recordatorio antes del servicio
            </p>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={undefined}
            >
              <input
                type="email"
                placeholder="Tu correo electronico"
                required
                className="flex-1 rounded-lg px-5 py-3 font-body text-oscuro placeholder:text-oscuro/40 focus:outline-none focus:ring-2 focus:ring-oro"
                aria-label="Correo electronico"
              />
              <button
                type="submit"
                className="rounded-lg bg-oro px-8 py-3 font-body font-semibold text-white transition hover:bg-oro/90 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
