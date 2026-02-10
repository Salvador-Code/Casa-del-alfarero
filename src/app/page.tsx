import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* ============================================================
          SECTION 1 — Hero (full viewport)
          ============================================================ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-oscuro via-oscuro/90 to-azul px-4 text-center text-white">
        {/* Decorative overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Bienvenidos a la Casa del Alfarero!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl font-light text-white/90 md:text-2xl">
            Donde Dios Moldea Vidas como el Alfarero Moldea el Barro
          </p>

          <blockquote className="mx-auto mt-8 max-w-xl text-base italic text-white/70" style={{ fontFamily: "Georgia, serif" }}>
            &ldquo;He aqui que como el barro en la mano del alfarero, asi sois vosotros en mi mano.&rdquo;
            <br />
            <span className="mt-1 inline-block text-sm not-italic text-white/50">
              &mdash; Jeremias 18:6
            </span>
          </blockquote>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#horarios"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-oro to-yellow-500 px-8 py-3.5 text-sm font-semibold text-oscuro shadow-lg transition hover:brightness-110"
            >
              Unete el Domingo
            </a>
            <Link
              href="/sermones"
              className="inline-flex items-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-oscuro"
            >
              Ver Ultimo Sermon
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#horarios" aria-label="Desplazar hacia abajo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-white/60"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Service Schedule (Horarios)
          ============================================================ */}
      <section id="horarios" className="bg-crema py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-azul md:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-oscuro/70">
              Te esperamos con los brazos abiertos
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Card — Viernes */}
            <div className="rounded-xl bg-white p-8 shadow transition hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                {/* Praying hands icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-oro/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-8 w-8 text-oro"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C12 2 9.5 6 9.5 9c0 1.5.7 2.8 1.8 3.6L8 21h2l2.5-6.5L15 21h2l-3.3-8.4c1.1-.8 1.8-2.1 1.8-3.6 0-3-2.5-7-2.5-7z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5s-1.5 1-2.5 3M15 12.5s1.5 1 2.5 3" />
                  </svg>
                </div>

                <h3 className="font-heading text-2xl font-bold text-oscuro">Viernes</h3>
                <p className="mt-2 text-4xl font-bold text-oro">6:30 PM</p>
                <p className="mt-3 text-oscuro/70">Oracion y Ensenanza</p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Agregar a Calendario
                </a>
              </div>
            </div>

            {/* Card — Domingo */}
            <div className="rounded-xl bg-white p-8 shadow transition hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                {/* Cross icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-oro/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-8 w-8 text-oro"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M7 7h10" />
                  </svg>
                </div>

                <h3 className="font-heading text-2xl font-bold text-oscuro">Domingo</h3>
                <p className="mt-2 text-4xl font-bold text-oro">11:00 AM</p>
                <p className="mt-3 text-oscuro/70">Alabanza, Adoracion y Palabra</p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-1.5 h-4 w-4"
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
                  Como Llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Pastor
          ============================================================ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Left — Pastor Photo (2 cols) */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/pastor.jpg"
                  alt="Pastor Emmanuel Lopez"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Right — Bio (3 cols) */}
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-oro">
                Liderazgo Pastoral
              </p>

              <h2 className="mt-3 font-heading text-3xl font-bold text-oscuro md:text-4xl">
                Pastor Emmanuel Lopez
              </h2>

              <p className="mt-2 text-lg text-tierra">
                Continuando el Legado de Roberto Martinez
              </p>

              <div className="mt-6 space-y-4 text-oscuro/70 leading-relaxed">
                <p>
                  Daniela Martinez es la esposa de nuestro pastor, quien vino a apoyar a su suegro,
                  Roberto Martinez — el fundador que inicio esta iglesia hace mas de 20 anos en el
                  area de Cobb County. Roberto ha partido con el Senor, pero la iglesia permanece como
                  un pilar para nuestra comunidad.
                </p>
                <p>
                  Somos una iglesia pequena pero muy unida. El Pastor Emmanuel lidera con ensenanza
                  biblica solida y un corazon pastoral genuino, ayudando a cada persona a descubrir
                  el proposito que Dios tiene para ellos.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-8 border-t border-oscuro/10 pt-8">
                <div>
                  <p className="text-3xl font-bold text-azul">10+</p>
                  <p className="text-sm text-oscuro/60">Anos de Experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-azul">177</p>
                  <p className="text-sm text-oscuro/60">Familias Activas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-azul">223</p>
                  <p className="text-sm text-oscuro/60">Vidas Transformadas</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center text-base font-semibold text-azul transition hover:text-azul/80"
                >
                  Conoce Nuestro Equipo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Latest Sermon
          ============================================================ */}
      <section className="bg-azul py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Mensaje Reciente
            </h2>
          </div>

          {/* YouTube embed (16:9 aspect ratio) */}
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sermon reciente - Iglesia Casa del Alfarero"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Sermon info with notepad image */}
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="text-center lg:text-left">
                <h3 className="font-heading text-2xl font-bold">
                  El Alfarero Tiene un Plan para Ti
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Domingo, 2 de Febrero 2026
                </p>
                <p className="mt-4 text-white/80 leading-relaxed">
                  En este poderoso mensaje, el Pastor Emmanuel nos recuerda que Dios, como el gran Alfarero,
                  tiene un proposito unico para cada uno de nosotros. Aunque las pruebas nos moldean, Su mano
                  nunca nos suelta.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/notepad.jpg"
                  alt="Notas del sermon pastoral"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/sermones"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-azul shadow transition hover:bg-white/90"
            >
              Ver Todos los Sermones
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — Events
          ============================================================ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Unete a Nuestros Eventos
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Event 1 */}
            <article className="group relative overflow-hidden rounded-xl border border-oscuro/10 bg-white p-6 transition hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-lg bg-gradient-to-br from-oro to-yellow-500 px-3 py-1.5 text-center shadow">
                <span className="block text-xs font-bold text-oscuro">FEB</span>
                <span className="block text-lg font-bold leading-tight text-oscuro">14</span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-bold text-oscuro">Noche de Alabanza</h3>
                <p className="mt-2 text-sm text-oscuro/60">
                  <span className="font-medium">7:00 PM</span> &middot; Santuario Principal
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  Mas Info
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1 h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Event 2 */}
            <article className="group relative overflow-hidden rounded-xl border border-oscuro/10 bg-white p-6 transition hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-lg bg-gradient-to-br from-oro to-yellow-500 px-3 py-1.5 text-center shadow">
                <span className="block text-xs font-bold text-oscuro">FEB</span>
                <span className="block text-lg font-bold leading-tight text-oscuro">21</span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-bold text-oscuro">Retiro de Jovenes</h3>
                <p className="mt-2 text-sm text-oscuro/60">
                  <span className="font-medium">9:00 AM</span> &middot; Centro de Retiros
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  Mas Info
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1 h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Event 3 */}
            <article className="group relative overflow-hidden rounded-xl border border-oscuro/10 bg-white p-6 transition hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-lg bg-gradient-to-br from-oro to-yellow-500 px-3 py-1.5 text-center shadow">
                <span className="block text-xs font-bold text-oscuro">CADA</span>
                <span className="block text-lg font-bold leading-tight text-oscuro">MIE</span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-bold text-oscuro">Estudio Biblico</h3>
                <p className="mt-2 text-sm text-oscuro/60">
                  <span className="font-medium">7:00 PM</span> &middot; Salon de Comunion
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  Mas Info
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1 h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Event 4 — Men's Group */}
            <article className="group relative overflow-hidden rounded-xl border border-oscuro/10 bg-white p-6 transition hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-lg bg-gradient-to-br from-oro to-yellow-500 px-3 py-1.5 text-center shadow">
                <span className="block text-xs font-bold text-oscuro">MAR</span>
                <span className="block text-lg font-bold leading-tight text-oscuro">7</span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-xl font-bold text-oscuro">Grupo de Hombres</h3>
                <p className="mt-2 text-sm text-oscuro/60">
                  <span className="font-medium">8:00 AM</span> &middot; Salon de Eventos
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-azul transition hover:text-azul/80"
                >
                  Mas Info
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1 h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5B — Congregation Photo
          ============================================================ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Nuestra Familia
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-oscuro/70">
              Una iglesia pequena pero muy unida
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/group.jpg"
              alt="Congregacion de la Iglesia Casa del Alfarero"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — Testimonials
          ============================================================ */}
      <section className="bg-crema py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Vidas Transformadas
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <blockquote className="rounded-xl bg-white p-8 shadow">
              <span className="block text-6xl leading-none text-tierra/30">&ldquo;</span>
              <p className="mt-2 italic text-oscuro/80 leading-relaxed">
                Cuando llegamos a Georgia no conociamos a nadie. La Casa del Alfarero se convirtio en
                nuestra familia. Aqui encontramos amor, apoyo y una comunidad que nos recibio con
                los brazos abiertos. Dios verdaderamente transformo nuestra vida.
              </p>
              <footer className="mt-6">
                <p className="font-bold text-oscuro">Maria y Carlos Gutierrez</p>
                <p className="text-sm text-oscuro/60">Miembros desde 2018</p>
              </footer>
            </blockquote>

            {/* Testimonial 2 */}
            <blockquote className="rounded-xl bg-white p-8 shadow">
              <span className="block text-6xl leading-none text-tierra/30">&ldquo;</span>
              <p className="mt-2 italic text-oscuro/80 leading-relaxed">
                El ministerio de jovenes cambio la vida de mis hijos. Antes estaban perdidos, sin
                direccion, pero a traves de la ensenanza biblica y el companerismo, hoy son jovenes
                de fe que impactan a otros. Gracias, Pastor Emmanuel, por su dedicacion.
              </p>
              <footer className="mt-6">
                <p className="font-bold text-oscuro">Rosa Elena Martinez</p>
                <p className="text-sm text-oscuro/60">Madre de familia, miembro desde 2019</p>
              </footer>
            </blockquote>

            {/* Testimonial 3 */}
            <blockquote className="rounded-xl bg-white p-8 shadow">
              <span className="block text-6xl leading-none text-tierra/30">&ldquo;</span>
              <p className="mt-2 italic text-oscuro/80 leading-relaxed">
                Pase por un momento muy dificil en mi matrimonio y fue gracias a la consejeria
                pastoral y las oraciones de esta iglesia que pudimos restaurar nuestra relacion.
                Hoy somos un testimonio vivo del poder de Dios obrando en las familias.
              </p>
              <footer className="mt-6">
                <p className="font-bold text-oscuro">Jorge y Ana Ramirez</p>
                <p className="text-sm text-oscuro/60">Lideres de grupo pequeno, miembros desde 2020</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — Final CTA
          ============================================================ */}
      <section className="bg-tierra py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Listo para Dar el Siguiente Paso?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            No importa donde te encuentres en tu camino de fe, hay un lugar para ti en la Casa del
            Alfarero. Te invitamos a ser parte de una comunidad que crece junta en el amor de Dios.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#horarios"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-oro to-yellow-500 px-8 py-3.5 text-sm font-semibold text-oscuro shadow-lg transition hover:brightness-110"
            >
              Visitanos
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-tierra"
            >
              Peticiones de Oracion
            </Link>
            <Link
              href="/ministerios"
              className="inline-flex items-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-tierra"
            >
              Servir en la Iglesia
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
