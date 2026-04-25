import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sermones | Iglesia Casa del Alfarero",
  description:
    "Escucha los sermones y mensajes de la Iglesia Casa del Alfarero. Series biblicas, predicaciones y recursos para alimentar tu alma y crecer espiritualmente.",
  openGraph: {
    title: "Sermones | Iglesia Casa del Alfarero",
    description:
      "Mensajes que transforman vidas. Escucha nuestras predicaciones, series biblicas y devocionales en linea.",
    type: "website",
    locale: "es_ES",
    siteName: "Iglesia Casa del Alfarero",
  },
};

/* ──────────────────────────────────────────────
   SVG Icon Components
   ────────────────────────────────────────────── */

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="currentColor" opacity={0.9} />
      <polygon points="26,20 26,44 46,32" fill="white" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
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
      <path d="M12 6h18l8 8v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <polyline points="30,6 30,14 38,14" />
      <line x1="16" y1="22" x2="32" y2="22" />
      <line x1="16" y1="28" x2="32" y2="28" />
      <line x1="16" y1="34" x2="26" y2="34" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
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
      <path d="M4 6h16c2.2 0 4 1.8 4 4v28c0-2.2-1.8-4-4-4H4V6z" />
      <path d="M44 6H28c-2.2 0-4 1.8-4 4v28c0-2.2 1.8-4 4-4h16V6z" />
    </svg>
  );
}

function SunriseIcon({ className }: { className?: string }) {
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
      <path d="M24 12V4" />
      <path d="M8.9 17.9l2.8 2.8" />
      <path d="M4 32h4" />
      <path d="M40 32h4" />
      <path d="M36.3 17.9l-2.8 2.8" />
      <path d="M24 16a16 16 0 0 0-16 16" />
      <path d="M24 16a16 16 0 0 1 16 16" />
      <line x1="2" y1="36" x2="46" y2="36" />
      <line x1="6" y1="42" x2="42" y2="42" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ApplePodcastIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 2C11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22S36.15 2 24 2zm0 8a10 10 0 0 1 10 10c0 3.13-1.44 5.92-3.69 7.76a2 2 0 1 1-2.62-3.04A6 6 0 0 0 30 20a6 6 0 1 0-9.69 4.72 2 2 0 1 1-2.62 3.04A10 10 0 0 1 14 20a10 10 0 0 1 10-10zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-2 8h4l1 14h-6l1-14z" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YTMusicIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228 18.228 15.432 18.228 12 15.432 5.772 12 5.772zM9.684 15.54V8.46L16.2 12l-6.516 3.54z" />
    </svg>
  );
}

function RSSIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6.18" cy="17.82" r="2.18" />
      <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ScriptureIcon({ className }: { className?: string }) {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

interface Sermon {
  id: number;
  title: string;
  date: string;
  duration: string;
  series: string;
  gradient: string;
}

const sermons: Sermon[] = [
  {
    id: 1,
    title: "El Alfarero Tiene un Plan para Ti",
    date: "Abril 20, 2026",
    duration: "44 min",
    series: "Moldeados por Sus Manos",
    gradient: "from-tierra to-oro",
  },
  {
    id: 2,
    title: "Resistiendo en el Desierto",
    date: "Abril 13, 2026",
    duration: "40 min",
    series: "Moldeados por Sus Manos",
    gradient: "from-azul to-oscuro",
  },
  {
    id: 3,
    title: "La Gracia que Sostiene",
    date: "Abril 6, 2026",
    duration: "38 min",
    series: "Moldeados por Sus Manos",
    gradient: "from-oscuro to-azul",
  },
  {
    id: 4,
    title: "Resurrección: Vida Nueva",
    date: "Marzo 29, 2026",
    duration: "52 min",
    series: "Especial Resurrección",
    gradient: "from-oro to-tierra",
  },
  {
    id: 5,
    title: "La Semana Santa Transformadora",
    date: "Marzo 22, 2026",
    duration: "45 min",
    series: "Especial Resurrección",
    gradient: "from-rojo to-oscuro",
  },
  {
    id: 6,
    title: "Preparandonos para Su Venida",
    date: "Marzo 15, 2026",
    duration: "42 min",
    series: "Vigilancia Espiritual",
    gradient: "from-azul/80 to-oscuro",
  },
  {
    id: 7,
    title: "El Precio de la Obediencia",
    date: "Marzo 8, 2026",
    duration: "38 min",
    series: "Vigilancia Espiritual",
    gradient: "from-oscuro to-azul",
  },
  {
    id: 8,
    title: "Amor que Restaura",
    date: "Marzo 1, 2026",
    duration: "40 min",
    series: "Familia segun Dios",
    gradient: "from-verde to-azul",
  },
  {
    id: 9,
    title: "Fe que Mueve Montanas",
    date: "Febrero 22, 2026",
    duration: "43 min",
    series: "Fundamentos de Fe",
    gradient: "from-tierra to-oscuro",
  },
];

const seriesData = [
  {
    title: "Moldeados por Sus Manos",
    progress: "Parte 3 de 8",
    fraction: 3 / 8,
    gradient: "from-tierra to-oro",
    complete: false,
    count: 8,
  },
  {
    title: "Vigilancia Espiritual",
    progress: "Parte 6 de 6",
    fraction: 1,
    gradient: "from-azul to-oscuro",
    complete: true,
    count: 6,
  },
  {
    title: "Familia segun Dios",
    progress: "Parte 5 de 8",
    fraction: 5 / 8,
    gradient: "from-verde to-azul",
    complete: false,
    count: 8,
  },
];

const resources = [
  {
    title: "Notas de Sermones",
    description: "Descarga guias de estudio semanales",
    Icon: DocumentIcon,
  },
  {
    title: "Planes de Lectura",
    description: "Sigue planes biblicos con nuestra comunidad",
    Icon: BookIcon,
  },
  {
    title: "Devocionales",
    description: "Reflexiones diarias del Pastor Emmanuel",
    Icon: SunriseIcon,
  },
];

/* ──────────────────────────────────────────────
   Sermon Card Component
   ────────────────────────────────────────────── */

function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <article className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Gradient Thumbnail */}
      <div
        className={`relative aspect-video bg-gradient-to-br ${sermon.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon className="w-16 h-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-2">
          <CalendarIcon className="w-3.5 h-3.5" />
          {sermon.date}
        </p>
        <h4 className="font-heading text-lg font-semibold text-oscuro leading-snug line-clamp-2 mb-3">
          {sermon.title}
        </h4>
        <div className="flex items-center justify-between">
          <span className="inline-block bg-azul/10 text-azul text-xs font-semibold rounded-full px-3 py-1">
            {sermon.series}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5" />
            {sermon.duration}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

export default function SermonesPage() {
  return (
    <>
      {/* ────────── 1. Hero ────────── */}
      <section className="relative bg-gradient-to-br from-oscuro to-tierra/70 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(65,105,225,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-oro">
            Iglesia Casa del Alfarero
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Alimenta Tu Alma
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80 font-body">
            Mensajes que Transforman Vidas
          </p>
        </div>
      </section>

      {/* ────────── 2. Featured Sermon ────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-oscuro sm:text-4xl">
              Mensaje Reciente
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-oro" />
          </div>

          {/* Two-column layout */}
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Video Embed (3 cols) */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Preparandonos para Su Venida - Iglesia Casa del Alfarero"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Info (2 cols) */}
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="mb-4 inline-block w-fit rounded-full bg-tierra/10 px-4 py-1 text-sm font-semibold text-tierra">
                Serie: Moldeados por Sus Manos
              </span>
              <h3 className="font-heading text-2xl font-bold text-oscuro sm:text-3xl">
                El Alfarero Tiene un Plan para Ti
              </h3>
              <p className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  Abril 20, 2026
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  44 min
                </span>
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-oro">
                <ScriptureIcon className="w-4 h-4" />
                Jeremías 18:1-6
              </p>
              <p className="mt-5 text-gray-600 leading-relaxed font-body">
                En este poderoso mensaje, el Pastor Emmanuel nos recuerda que
                Dios, como el gran Alfarero, tiene un propósito único para cada
                uno de nosotros. Aunque las pruebas nos moldean, Su mano nunca
                nos suelta. Descubrimos cómo rendirnos al proceso de Dios con
                confianza y esperanza.
              </p>

              {/* Share Buttons */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-500">
                  Compartir:
                </span>
                <Link
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-azul hover:text-azul/70 transition-colors"
                  aria-label="Compartir en Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-verde hover:text-verde/70 transition-colors"
                  aria-label="Compartir en WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Copiar enlace"
                >
                  <LinkIcon className="w-4 h-4" />
                  Copiar Enlace
                </Link>
              </div>

              {/* YouTube Button */}
              <Link
                href="#"
                className="btn-primary mt-6 w-fit gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Ver en YouTube
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 3. Active Series ────────── */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-oscuro sm:text-4xl">
              Series en Progreso
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-oro" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seriesData.map((series) => (
              <Link
                key={series.title}
                href="#"
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient Background */}
                <div
                  className={`bg-gradient-to-br ${series.gradient} p-8 text-white min-h-[220px] flex flex-col justify-between`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
                  <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/5" />

                  <div className="relative">
                    <h3 className="font-heading text-2xl font-bold">
                      {series.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {series.complete
                        ? `${series.count} sermones`
                        : series.progress}
                    </p>
                  </div>

                  <div className="relative mt-6">
                    {series.complete ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                        <CheckIcon className="w-4 h-4" />
                        Completa
                      </span>
                    ) : (
                      <div>
                        <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                          <span>Progreso</span>
                          <span>{Math.round(series.fraction * 100)}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
                          <div
                            className="h-full rounded-full bg-white/80 transition-all duration-500"
                            style={{ width: `${series.fraction * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <p className="mt-4 text-sm font-semibold text-white/90 group-hover:text-white transition-colors flex items-center gap-1">
                      Ver Serie
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 4. Sermon Archive ────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-oscuro sm:text-4xl">
              Todos los Sermones
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-oro" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-14 text-center">
            <button
              type="button"
              className="btn-secondary gap-2"
            >
              Cargar Mas Sermones
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ────────── 5. Podcast Section ────────── */}
      <section className="bg-crema py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-oscuro sm:text-4xl">
              Escucha Donde Quieras
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600 font-body">
              Nuestros sermones estan disponibles en las principales plataformas
              de podcast para que puedas escucharlos en cualquier momento.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Apple Podcasts */}
            <Link
              href="#"
              className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <ApplePodcastIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Escucha en</p>
                <p className="text-sm font-semibold text-oscuro">
                  Apple Podcasts
                </p>
              </div>
            </Link>

            {/* Spotify */}
            <Link
              href="#"
              className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1DB954] text-white">
                <SpotifyIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Escucha en</p>
                <p className="text-sm font-semibold text-oscuro">Spotify</p>
              </div>
            </Link>

            {/* YouTube Music */}
            <Link
              href="#"
              className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF0000] text-white">
                <YTMusicIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Escucha en</p>
                <p className="text-sm font-semibold text-oscuro">
                  YouTube Music
                </p>
              </div>
            </Link>

            {/* RSS Feed */}
            <Link
              href="#"
              className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white">
                <RSSIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Suscribete via</p>
                <p className="text-sm font-semibold text-oscuro">RSS Feed</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────── 6. Resources ────────── */}
      <section className="bg-tierra py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Recursos para Crecer
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-oro" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href="#"
                className="group rounded-xl bg-white/10 p-6 text-center backdrop-blur transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <resource.Icon className="w-7 h-7 text-oro" />
                </div>
                <h3 className="font-heading text-xl font-bold">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 font-body">
                  {resource.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-oro group-hover:gap-2 transition-all">
                  Explorar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
