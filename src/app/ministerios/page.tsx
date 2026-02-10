import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ministerios | Iglesia Casa del Alfarero",
  description:
    "Descubre los ministerios de la Iglesia Casa del Alfarero. Programas para ninos, jovenes, adultos y familias. Encuentra tu lugar para crecer y servir.",
};

/* ============================================
   Data
   ============================================ */

type Category = "NINOS" | "JOVENES" | "ADULTOS" | "ESPECIALES";

interface Ministry {
  category: Category;
  title: string;
  audience: string;
  schedule: string;
  description: string;
  icon: React.ReactNode;
}

const categoryColors: Record<Category, { border: string; badge: string; badgeText: string }> = {
  NINOS: {
    border: "border-t-verde",
    badge: "bg-verde",
    badgeText: "text-white",
  },
  JOVENES: {
    border: "border-t-azul",
    badge: "bg-azul",
    badgeText: "text-white",
  },
  ADULTOS: {
    border: "border-t-tierra",
    badge: "bg-tierra",
    badgeText: "text-white",
  },
  ESPECIALES: {
    border: "border-t-oro",
    badge: "bg-oro",
    badgeText: "text-white",
  },
};

const categoryLabels: Record<Category, string> = {
  NINOS: "NINOS",
  JOVENES: "JOVENES",
  ADULTOS: "ADULTOS",
  ESPECIALES: "ESPECIALES",
};

/* ---------- SVG Icons ---------- */

function BabyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M16 16c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="21" cy="15" r="1.5" fill="currentColor" />
      <circle cx="27" cy="15" r="1.5" fill="currentColor" />
      <path d="M21 19c1 1.5 5 1.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 28c0-4 5.4-6 12-6s12 2 12 6v6c0 2-1 4-3 4H15c-2 0-3-2-3-4v-6z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M20 38v4M28 38v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 8h12c2.2 0 4 1.8 4 4v28c-1.6-1.2-3.6-2-6-2H8V8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M40 8H28c-2.2 0-4 1.8-4 4v28c1.6-1.2 3.6-2 6-2h10V8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M13 16h4M13 22h4M13 28h4M31 16h4M31 22h4M31 28h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function YouthIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="14" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 28c0-4 3.6-6 8-6s8 2 8 6v8H10v-8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M26 30c0-3 2.7-5 6-5s6 2 6 5v6H26v-6z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M22 24l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 42v-6M21 42v-6M29 42v-4M35 42v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GradCapIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 8L4 18l20 10 20-10L24 8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M36 24v10c0 2-5 5-12 5s-12-3-12-5V24" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M44 18v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="34" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 24L24 8l18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 22v16a2 2 0 002 2h24a2 2 0 002-2V22" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="18" y="28" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 28v12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 34h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BookHeartIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 6h12c2.2 0 4 1.8 4 4v30c-1.6-1.2-3.6-2-6-2H8V6z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M40 6H28c-2.2 0-4 1.8-4 4v30c1.6-1.2 3.6-2 6-2h10V6z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 20c-1-3-4-4-6-2s-2 5 0 7l6 5 6-5c2-2 2-5 0-7s-5-1-6 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="18" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M32 22h4a4 4 0 010 8h-4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 42h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 8c0 4 4 4 4 8M22 6c0 4 4 4 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RingsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="26" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="30" cy="26" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M18 10l-2-4h4l-2 4zM30 10l-2-4h4l-2 4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function PrayerIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 6v4M16 10l2 3M32 10l-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6v4l4 8v4c0 2-1.5 4-4 4h-2l-4 4-4-4h-2c-2.5 0-4-2-4-4v-4l4-8v-4z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M21 26l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function GlobeHandsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="18" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="18" rx="5" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 18h24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 12h20M14 24h20" stroke="currentColor" strokeWidth="1" />
      <path d="M6 34c4-2 8-2 12 0 4 2 8 2 12 0 4-2 8-2 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M8 38c4-2 8-2 10 0 4 2 8 2 12 0 4-2 6-2 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const ministries: Ministry[] = [
  {
    category: "NINOS",
    title: "Ministerio Infantil",
    audience: "0-5 anos",
    schedule: "Domingos 11:00 AM",
    description:
      "Un ambiente seguro y amoroso donde los mas pequenos aprenden sobre el amor de Dios a traves de nursery, juegos, historias biblicas y canciones.",
    icon: <BabyIcon />,
  },
  {
    category: "NINOS",
    title: "Escuela Dominical",
    audience: "6-12 anos",
    schedule: "Domingos 9:30 AM",
    description:
      "Lecciones interactivas, manualidades y actividades disenadas para que los ninos descubran la Biblia de manera divertida y significativa.",
    icon: <BookIcon />,
  },
  {
    category: "JOVENES",
    title: "Ministerio Universitario",
    audience: "18-25 anos",
    schedule: "Martes 7:00 PM",
    description:
      "Cafe, discusion biblica y comunidad para jovenes adultos navegando la universidad y los primeros anos de carrera profesional.",
    icon: <GradCapIcon />,
  },
  {
    category: "ADULTOS",
    title: "Celulas en Casas",
    audience: "Todas las edades",
    schedule: "Miercoles noches, varias ubicaciones",
    description:
      "Grupos pequenos que se reunen en hogares para estudiar la Palabra, orar juntos y construir relaciones profundas en comunidad.",
    icon: <HomeIcon />,
  },
  {
    category: "ADULTOS",
    title: "Estudio Biblico de Mujeres",
    audience: "Mujeres adultas",
    schedule: "Jueves 10:00 AM",
    description:
      "Un tiempo de estudio profundo de la Escritura, oracion y companerismo entre mujeres. Guarderia disponible durante la reunion.",
    icon: <BookHeartIcon />,
  },
  {
    category: "ADULTOS",
    title: "Grupo de Hombres",
    audience: "Hombres adultos",
    schedule: "Sabados, una vez al mes",
    description:
      "Companerismo y una breve ensenanza para hombres que desean crecer en su fe y liderazgo espiritual.",
    icon: <CoffeeIcon />,
  },
  {
    category: "ESPECIALES",
    title: "Alcance Comunitario",
    audience: "Voluntarios de todas las edades",
    schedule: "Mensual, servicio al vecindario",
    description:
      "Proyectos mensuales de servicio comunitario donde mostramos el amor de Cristo a traves de acciones concretas en nuestro vecindario.",
    icon: <GlobeHandsIcon />,
  },
];

interface CalendarEvent {
  date: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
}

const upcomingEvents: CalendarEvent[] = [
  {
    date: "14",
    day: "Feb 14",
    month: "Feb",
    title: "Noche de Alabanza",
    time: "7:00 PM",
    location: "Santuario Principal",
  },
  {
    date: "7",
    day: "Mar 7",
    month: "Mar",
    title: "Grupo de Hombres",
    time: "8:00 AM",
    location: "Salon de Eventos",
  },
  {
    date: "8",
    day: "Mar 8",
    month: "Mar",
    title: "Conferencia de Mujeres",
    time: "9:00 AM",
    location: "Santuario",
  },
  {
    date: "15-17",
    day: "Mar 15-17",
    month: "Mar",
    title: "Retiro de Familias",
    time: "Fin de semana completo",
    location: "Camp Georgia",
  },
];

interface VolunteerRole {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const volunteerRoles: VolunteerRole[] = [
  {
    title: "Equipo de Bienvenida",
    description: "Recibe a cada persona con una sonrisa calida.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6 32c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M26 14l4-4M30 10l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ministerio Infantil",
    description: "Cuida y ensena a los mas pequenos de la iglesia.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 22c0-3 3.6-5 8-5s8 2 8 5v6H10v-6z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M15 32v2M21 32v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="9" r="1" fill="currentColor" />
        <circle cx="20" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Alabanza y Adoracion",
    description: "Guia a la congregacion en la adoracion a Dios.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M12 8v18c-3 0-6 1.3-6 4s3 4 6 4 6-1.3 6-4V12l12-4v18c-3 0-6 1.3-6 4s3 4 6 4 6-1.3 6-4V4L18 8" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Produccion / Tecnologia",
    description: "Maneja el sonido, luces y transmisiones en vivo.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 30h8M18 24v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 12a8 8 0 010 6M24 12a8 8 0 000 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Grupos Pequenos",
    description: "Facilita estudios biblicos y comunidad en hogares.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="18" cy="22" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 14v4l6 4M24 14v4l-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 32c0-2 1.8-4 4-4s4 2 4 4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

/* ============================================
   Page Component
   ============================================ */

export default function MinisteriosPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="bg-gradient-to-br from-oscuro to-verde/80 py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Encuentra Tu Lugar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/90 sm:text-xl">
            Ministerios para Cada Edad y Etapa
          </p>
        </div>
      </section>

      {/* ========== MINISTRIES OVERVIEW ========== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-center text-3xl font-bold text-oscuro sm:text-4xl">
            Nuestros Ministerios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-oscuro/70">
            Tenemos un lugar para ti y tu familia. Explora nuestros ministerios y encuentra
            la comunidad donde puedes crecer espiritualmente.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => {
              const colors = categoryColors[ministry.category];
              return (
                <div
                  key={ministry.title}
                  className={`rounded-xl border-t-4 ${colors.border} bg-white p-6 shadow transition-shadow duration-300 hover:shadow-lg`}
                >
                  {/* Category badge */}
                  <span
                    className={`inline-block rounded-full ${colors.badge} ${colors.badgeText} px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider`}
                  >
                    {categoryLabels[ministry.category]}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 text-oscuro">{ministry.icon}</div>

                  {/* Title */}
                  <h3 className="mt-3 font-heading text-xl font-bold text-oscuro">
                    {ministry.title}
                  </h3>

                  {/* Audience */}
                  <p className="mt-1 font-body text-sm text-oscuro/60">{ministry.audience}</p>

                  {/* Schedule */}
                  <p className="mt-2 font-body text-sm font-semibold text-oro">
                    {ministry.schedule}
                  </p>

                  {/* Description */}
                  <p className="mt-3 font-body text-sm leading-relaxed text-oscuro/80">
                    {ministry.description}
                  </p>

                  {/* Link */}
                  <Link
                    href="/contacto"
                    className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-azul transition-colors hover:text-azul/80"
                  >
                    Mas Informacion
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="translate-y-px"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== EVENTS CALENDAR ========== */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-center text-3xl font-bold text-oscuro sm:text-4xl">
            Calendario de Eventos
          </h2>

          {/* Month header */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-oro" aria-hidden="true" />
            <span className="font-heading text-xl font-semibold text-oscuro">
              Febrero 2026
            </span>
            <span className="h-px w-12 bg-oro" aria-hidden="true" />
          </div>

          {/* Events list */}
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Date badge */}
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-oro text-white">
                  <span className="font-body text-[11px] font-semibold uppercase leading-none">
                    {event.month}
                  </span>
                  <span className="mt-0.5 font-heading text-xl font-bold leading-none">
                    {event.date}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-oscuro">
                    {event.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-oscuro/70">
                    <span className="font-semibold text-oro">{event.time}</span>
                    {" | "}
                    {event.location}
                  </p>
                </div>

                {/* RSVP link */}
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-oro px-4 py-2 font-body text-sm font-semibold text-oro transition-colors hover:bg-oro hover:text-white"
                >
                  RSVP
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED EVENT ========== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-center text-3xl font-bold text-oscuro sm:text-4xl">
            Evento Destacado
          </h2>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl shadow-xl">
            {/* Gradient image placeholder */}
            <div className="relative bg-gradient-to-r from-tierra to-oro px-8 py-16 sm:px-12 sm:py-20">
              {/* Badge */}
              <span className="inline-block rounded-full bg-rojo px-4 py-1 font-body text-xs font-bold uppercase tracking-widest text-white">
                Evento Especial
              </span>

              <h3 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
                Retiro de Familias 2026
              </h3>

              <p className="mt-2 font-body text-lg font-semibold text-white/90">
                Marzo 15-17 | Camp Georgia
              </p>

              <p className="mt-4 max-w-xl font-body leading-relaxed text-white/85">
                Un fin de semana inolvidable para toda la familia. Disfruta de actividades al
                aire libre, talleres para matrimonios, programacion especial para ninos y
                jovenes, fogatas, adoracion bajo las estrellas y tiempo de calidad con tu
                familia en un entorno natural. Ven a fortalecer los lazos familiares y
                espirituales.
              </p>
            </div>

            {/* Details */}
            <div className="bg-crema px-8 py-8 sm:px-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                    Costo
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-oscuro">
                    $150 / familia
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                    Fecha limite de registro
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-oscuro">
                    Feb 28, 2026
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-oscuro/50">
                    Disponibilidad
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-rojo">
                    15 familias restantes
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left">
                <Link
                  href="/contacto"
                  className="btn-primary inline-flex items-center gap-2 text-lg"
                >
                  Registrar Mi Familia
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 4l8 6-8 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VOLUNTEER CTA ========== */}
      <section className="bg-azul py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
            Sirve con Nosotros
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-body text-lg text-white/85">
            Dios te ha dado dones y talentos unicos. Usarlos para servir a otros es una de
            las maneras mas poderosas de crecer en tu fe. Encuentra tu area de servicio.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col items-center rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
              >
                <div className="text-white">{role.icon}</div>
                <h3 className="mt-3 font-heading text-base font-bold leading-snug">
                  {role.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-snug text-white/75">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-body text-lg font-bold text-azul shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Aplicar para Servir
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4l8 6-8 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
