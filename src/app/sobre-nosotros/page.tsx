import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Iglesia Casa del Alfarero",
  description:
    "Conoce la historia, mision, liderazgo y creencias de Iglesia Casa del Alfarero en Powder Springs, Georgia.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    title: "Adoracion Autentica",
    description:
      "Creemos en una adoracion que nace del corazon, donde cada voz y cada instrumento se unen para glorificar al Creador. Nuestros servicios son espacios de encuentro genuino con Dios.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-azul"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
  {
    title: "Comunidad Familiar",
    description:
      "Somos una familia unida por la fe. Cada miembro es valorado y acompanado en su caminar espiritual. Juntos crecemos, celebramos y nos apoyamos en cada etapa de la vida.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-azul"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Servicio Transformador",
    description:
      "Extendemos las manos de Cristo a nuestra comunidad. A traves de programas de ayuda, mentoria y servicio social, buscamos transformar vidas y reflejar el amor de Dios en cada accion.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-azul"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const timelineEvents = [
  {
    year: "2004",
    title: "Los Comienzos",
    description:
      "Roberto Martinez, el fundador, comenzo esta iglesia hace mas de 20 anos en el area de Cobb County, Georgia, con la vision de crear un hogar espiritual para la comunidad hispana.",
  },
  {
    year: "2015",
    title: "Crecimiento y Consolidacion",
    description:
      "La iglesia crecio bajo el liderazgo de Roberto, estableciendose como un pilar para la comunidad hispana en el area metropolitana de Atlanta.",
  },
  {
    year: "2020",
    title: "Expansion Digital",
    description:
      "En medio de la pandemia, expandimos nuestro alcance digital, llevando la Palabra de Dios a hogares a traves de plataformas en linea.",
  },
  {
    year: "2023",
    title: "Nueva Generacion",
    description:
      "Daniela Martinez, esposa de nuestro pastor, quien vino a apoyar a su suegro Roberto Martinez, continua el legado. Roberto ha partido con el Senor, pero la iglesia sigue siendo un pilar para nuestra comunidad.",
  },
  {
    year: "2026",
    title: "Familia Unida",
    description:
      "Somos una iglesia pequena pero muy unida. Seguimos creciendo juntos en fe, amor y comunidad, honrando el legado de nuestro fundador.",
  },
];

const smallLeaders = [
  {
    name: "Daniela Martinez",
    role: "Esposa del Pastor / Lider de Adoracion",
    description:
      "Daniela Martinez es la esposa de nuestro pastor, quien vino a apoyar a su suegro Roberto Martinez, el fundador de esta iglesia. Guia al equipo de alabanza con excelencia y uncion.",
  },
  {
    name: "Laysha Rodriguez",
    role: "Lider de Ministerio de Mujeres",
    description:
      "Dirige el ministerio de mujeres con pasion, creando espacios de discipulado, sanidad emocional y empoderamiento espiritual para cada mujer.",
  },
];

const beliefs = [
  {
    title: "La Biblia",
    scripture: "2 Timoteo 3:16-17",
    description:
      "Creemos que la Biblia es la Palabra de Dios, inspirada, infalible y la autoridad suprema para la fe y la conducta de todo creyente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "La Trinidad",
    scripture: "Mateo 28:19",
    description:
      "Creemos en un solo Dios eternamente existente en tres personas: Padre, Hijo y Espiritu Santo, iguales en poder y gloria.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Salvacion por Gracia",
    scripture: "Efesios 2:8-9",
    description:
      "Creemos que la salvacion es un regalo de Dios recibido por fe en Jesucristo, no por obras, sino por Su gracia inmerecida.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "El Bautismo",
    scripture: "Romanos 6:3-4",
    description:
      "Creemos en el bautismo por inmersion como testimonio publico de fe, simbolizando la muerte al pecado y la resurreccion a una nueva vida en Cristo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "La Iglesia",
    scripture: "1 Corintios 12:27",
    description:
      "Creemos que la Iglesia es el cuerpo de Cristo, formado por todos los creyentes, llamados a vivir en comunidad, edificarse mutuamente y cumplir la Gran Comision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "El Espiritu Santo",
    scripture: "Hechos 1:8",
    description:
      "Creemos en la persona y obra del Espiritu Santo, quien habita en cada creyente, otorgando dones, guiando a la verdad y capacitando para el servicio.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "La Segunda Venida",
    scripture: "Apocalipsis 22:12",
    description:
      "Creemos en la segunda venida literal y visible de Jesucristo, quien regresara en gloria para establecer Su reino eterno y juzgar al mundo con justicia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Mayordomia",
    scripture: "Malaquias 3:10",
    description:
      "Creemos que todo lo que tenemos pertenece a Dios. La mayordomia fiel de nuestro tiempo, talentos y recursos es una expresion de gratitud y obediencia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-azul" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const membershipSteps = [
  {
    step: 1,
    title: "Asiste 4 Domingos",
    description:
      "Visita nuestros servicios durante cuatro semanas consecutivas para conocer nuestra comunidad y sentirte en casa.",
  },
  {
    step: 2,
    title: "Clase de Nuevos Miembros",
    description:
      "Completa nuestra clase de nuevos miembros donde aprenderas sobre nuestra vision, valores y doctrina.",
  },
  {
    step: 3,
    title: "Entrevista con Liderazgo",
    description:
      "Reune con nuestro equipo pastoral para compartir tu testimonio y explorar como servir en la iglesia.",
  },
  {
    step: 4,
    title: "Ceremonia de Bienvenida",
    description:
      "Celebramos tu integracion oficial a la familia de Casa del Alfarero ante toda la congregacion.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function SobreNosotrosPage() {
  return (
    <main className="font-body">
      {/* ============================================================= */}
      {/*  1. HERO                                                       */}
      {/* ============================================================= */}
      <section className="bg-gradient-to-br from-oscuro to-azul py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-5xl font-bold tracking-tight md:text-6xl">
            Nuestra Historia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Descubre como Dios ha moldeado a Casa del Alfarero desde sus
            humildes comienzos hasta convertirse en una familia de fe vibrante.
            Somos una iglesia pequena pero muy unida.
          </p>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mt-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li className="font-semibold text-white">Sobre Nosotros</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  2. MISSION / PILLARS                                          */}
      {/* ============================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-4xl font-bold text-oscuro">
            Moldeados con Proposito
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-oscuro/70">
            Tres pilares fundamentales guian cada paso de nuestra iglesia.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-crema/40 bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="font-heading text-xl font-bold text-oscuro">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-oscuro/70">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  3. TIMELINE                                                   */}
      {/* ============================================================= */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-4xl font-bold text-oscuro">
            Nuestro Camino
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-oscuro/70">
            Un recorrido por los momentos que han definido nuestra historia.
          </p>

          {/* Timeline container */}
          <div className="relative mx-auto mt-14 max-w-4xl">
            {/* Center line — hidden on mobile, visible on lg */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-oro/40 md:left-1/2 md:-translate-x-1/2 lg:block" />
            {/* Left line — visible on mobile / md, hidden on lg */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-oro/40 lg:hidden" />

            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex flex-col lg:flex-row lg:items-start ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Year badge — always visible */}
                    <div className="absolute left-0 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-oro text-xs font-bold text-white shadow-md lg:static lg:mx-auto lg:h-12 lg:w-12 lg:shrink-0 lg:text-sm">
                      {/* On lg, the badge is centered */}
                    </div>

                    {/* Mobile / Tablet card — shown below lg */}
                    <div className="ml-14 lg:hidden">
                      <span className="inline-block rounded-full bg-oro px-3 py-0.5 text-xs font-bold text-white">
                        {event.year}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-oscuro">
                        {event.title}
                      </h3>
                      <p className="mt-1 leading-relaxed text-oscuro/70">
                        {event.description}
                      </p>
                    </div>

                    {/* Desktop card — only on lg */}
                    <div
                      className={`hidden lg:block lg:w-[calc(50%-2rem)] ${
                        isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-oro px-4 py-1 text-sm font-bold text-white">
                        {event.year}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-oscuro">
                        {event.title}
                      </h3>
                      <p className="mt-1 leading-relaxed text-oscuro/70">
                        {event.description}
                      </p>
                    </div>

                    {/* Center dot on lg */}
                    <div className="hidden lg:flex lg:w-16 lg:shrink-0 lg:items-start lg:justify-center">
                      <div className="mt-1 h-4 w-4 rounded-full border-4 border-oro bg-white" />
                    </div>

                    {/* Spacer for the other side on lg */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  4. LEADERSHIP TEAM                                            */}
      {/* ============================================================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-4xl font-bold text-oscuro">
            Conoce a Nuestros Lideres
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-oscuro/70">
            Siervos comprometidos que guian a nuestra congregacion con amor y
            fidelidad.
          </p>

          {/* Featured: Pastor Emmanuel */}
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl lg:flex">
            {/* Placeholder image */}
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-tierra to-oro lg:h-auto lg:w-2/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            {/* Bio */}
            <div className="p-8 lg:w-3/5 lg:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-azul">
                Pastor Principal
              </span>
              <h3 className="mt-1 font-heading text-3xl font-bold text-oscuro">
                Pastor Emmanuel
              </h3>
              <p className="mt-4 leading-relaxed text-oscuro/70">
                El Pastor Emmanuel vino a apoyar a su suegro, Roberto
                Martinez, el fundador que inicio esta iglesia hace mas de 20
                anos en el area de Cobb County. Roberto ha partido con el
                Senor, pero la iglesia permanece como un pilar para nuestra
                comunidad.
              </p>
              <p className="mt-4 leading-relaxed text-oscuro/70">
                Su liderazgo se caracteriza por la ensenanza biblica solida, el
                amor pastoral genuino y una fe inquebrantable en el poder
                transformador de Dios. Somos una iglesia pequena pero muy
                unida.
              </p>
              <blockquote className="mt-6 border-l-4 border-oro pl-4 italic text-oscuro/80">
                &ldquo;Somos barro en las manos del Maestro Alfarero&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Other leaders */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {smallLeaders.map((leader) => (
              <div
                key={leader.name}
                className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Placeholder gradient image */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-azul to-tierra">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-azul">
                    {leader.role}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-oscuro">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-oscuro/70">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  5. BELIEFS                                                    */}
      {/* ============================================================= */}
      <section className="bg-azul/5 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-4xl font-bold text-oscuro">
            Lo Que Creemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-oscuro/70">
            Nuestra fe esta arraigada en la Palabra de Dios. Estas son las
            verdades fundamentales que guian nuestra vida y ministerio como
            iglesia.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="flex gap-4 rounded-lg border-l-4 border-azul bg-white p-6 shadow-sm"
              >
                <div className="shrink-0 pt-1">{belief.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-oscuro">
                    {belief.title}
                  </h3>
                  <span className="text-sm font-medium text-azul">
                    {belief.scripture}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-oscuro/70">
                    {belief.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  6. MEMBERSHIP CTA                                             */}
      {/* ============================================================= */}
      <section className="bg-tierra py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-4xl font-bold">
            Conviertete en Miembro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/80">
            Ser parte de Casa del Alfarero es mas que asistir a un servicio; es
            unirse a una familia que camina junta en fe y proposito.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {membershipSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contacto"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-bold text-tierra shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            >
              Iniciar Proceso de Membresia
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
