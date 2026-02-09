import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diezmos y Ofrendas | Iglesia Casa del Alfarero",
  description:
    "Da con generosidad y fe. Conoce las opciones de donacion, el impacto de tu ofrenda y los recursos financieros de la Iglesia Casa del Alfarero.",
};

export default function DiezmosPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1 — Hero
          ============================================================ */}
      <section className="bg-gradient-to-br from-tierra to-oro py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
            Bendecir y Ser Bendecido
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl italic text-white/90">
            &ldquo;Traed todos los diezmos al alfoli y haya alimento en mi casa;
            y probadme ahora en esto, dice Jehova de los ejercitos, si no os
            abrire las ventanas de los cielos, y derramare sobre vosotros
            bendicion hasta que sobreabunde.&rdquo;
            <span className="mt-2 block text-base not-italic text-white/70">
              &mdash; Malaquias 3:10
            </span>
          </p>

          <div className="mt-10">
            <a
              href="#donar"
              className="inline-flex items-center rounded-xl bg-white px-10 py-4 text-lg font-bold text-oscuro shadow-lg transition hover:bg-white/90 hover:shadow-xl"
            >
              Dar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Why We Give
          ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              La Bendicion de la Mayordomia
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Pillar 1 — Obediencia a Dios */}
            <div className="rounded-xl border-t-4 border-oro bg-white p-8 text-center shadow">
              {/* Bible icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-oro/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-oscuro">
                Obediencia a Dios
              </h3>
              <p className="mt-2 text-sm font-semibold text-oro">
                Malaquias 3:10
              </p>
              <p className="mt-4 leading-relaxed text-oscuro/70">
                El diezmo es el 10% de nuestros ingresos, apartado para honrar a
                Dios como acto de obediencia y gratitud. Es un principio biblico
                que refleja nuestra confianza en que El es nuestro proveedor y
                que todo lo que tenemos le pertenece.
              </p>
            </div>

            {/* Pillar 2 — Sostener la Mision */}
            <div className="rounded-xl border-t-4 border-oro bg-white p-8 text-center shadow">
              {/* Church icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-oro/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M15.75 21H8.25m6.75-18.06V21m-6.75 0V6.53m0 0L12 2.25l3.75 4.28"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-oscuro">
                Sostener la Mision
              </h3>
              <ul className="mt-4 space-y-2 text-left text-oscuro/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oro" />
                  Mantener y mejorar nuestras instalaciones
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oro" />
                  Apoyar al equipo pastoral y de servicio
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oro" />
                  Financiar misiones locales e internacionales
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oro" />
                  Proveer recursos para ministerios y programas
                </li>
              </ul>
            </div>

            {/* Pillar 3 — Cosechar Bendiciones */}
            <div className="rounded-xl border-t-4 border-oro bg-white p-8 text-center shadow">
              {/* Plant icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-oro/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-oro"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c0-4-3-7-7-7 4 0 7-3 7-7 0 4 3 7 7 7-4 0-7 3-7 7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21V10"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-oscuro">
                Cosechar Bendiciones
              </h3>
              <p className="mt-2 text-sm font-semibold text-oro">
                Lucas 6:38
              </p>
              <p className="mt-4 leading-relaxed text-oscuro/70">
                &ldquo;Dad, y se os dara; medida buena, apretada, remecida y
                rebosando.&rdquo; Dios promete bendecir abundantemente a quienes
                dan con alegria y generosidad. El dador alegre cosecha las
                bendiciones del cielo.
              </p>
            </div>
          </div>

          {/* Transparency statement */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-crema px-6 py-3 text-sm text-oscuro/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-verde"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              Somos administradores fieles de tus ofrendas. Informe financiero
              anual disponible a peticion.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Giving Options
          ============================================================ */}
      <section id="donar" className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Opciones de Donacion
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-white p-8 shadow-lg md:p-10">
            {/* Amount grid */}
            <div className="grid grid-cols-3 gap-3">
              {["$10", "$25", "$50", "$100", "$250", "$500"].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className="rounded-lg border-2 border-tierra p-4 text-center text-lg font-bold text-tierra transition hover:bg-tierra hover:text-white"
                >
                  {amount}
                </button>
              ))}
            </div>

            <p className="mt-4 text-center text-sm text-oscuro/60">
              Otro Monto
            </p>

            {/* Designation */}
            <div className="mt-8">
              <label className="text-sm font-semibold text-oscuro">
                Designar a:
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Diezmo",
                  "Ofrenda General",
                  "Misiones",
                  "Construccion/Mejoras",
                  "Ayuda Benevolencia",
                ].map((designation) => (
                  <span
                    key={designation}
                    className="cursor-pointer rounded-full border border-oscuro/20 px-4 py-2 text-sm text-oscuro/70 transition hover:border-tierra hover:bg-tierra/5 hover:text-tierra"
                  >
                    {designation}
                  </span>
                ))}
              </div>
            </div>

            {/* Processing fee checkbox */}
            <div className="mt-8 flex items-start gap-3">
              <input
                type="checkbox"
                id="processingFee"
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
              <label
                htmlFor="processingFee"
                className="text-sm text-oscuro/70"
              >
                Cubrir tarifa de procesamiento (3.2% + $0.30)
              </label>
            </div>

            {/* Security badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-oscuro/50">
              {/* Lock icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Procesado seguro. Datos encriptados.
            </div>

            {/* Donate button */}
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-tierra to-oro py-4 text-xl font-bold text-white shadow-lg transition hover:shadow-xl hover:brightness-110"
            >
              DONAR AHORA
            </button>

            {/* Confirmation items */}
            <div className="mt-6 space-y-2">
              {[
                "Recibiras recibo por email",
                "Deducible de impuestos",
                "Cancela en cualquier momento",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-oscuro/60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 text-verde"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — Other Ways to Give
          ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Otras Formas de Dar
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Card 1 — Efectivo o Cheque */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-tierra/10">
                  {/* Cash icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-tierra"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-oscuro">
                    En Efectivo o Cheque
                  </h3>
                  <p className="mt-2 leading-relaxed text-oscuro/70">
                    Entrega tu ofrenda durante los servicios del viernes o
                    domingo. Los cheques deben ser a nombre de{" "}
                    <span className="font-semibold">
                      &ldquo;Iglesia Casa del Alfarero&rdquo;
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 — Zelle */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-azul/10">
                  {/* Mobile payment icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-azul"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-oscuro">
                    Zelle
                  </h3>
                  <p className="mt-2 leading-relaxed text-oscuro/70">
                    Envia tu ofrenda por Zelle al email:{" "}
                    <span className="font-semibold text-azul">
                      cda.atlanta@gmail.com
                    </span>
                    . Incluye una nota con tu nombre y la designacion del regalo.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 — Transferencia Bancaria */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-verde/10">
                  {/* Bank icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-verde"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-oscuro">
                    Transferencia Bancaria
                  </h3>
                  <p className="mt-2 leading-relaxed text-oscuro/70">
                    Contacta la oficina de la iglesia para obtener los datos
                    bancarios y realizar una transferencia directa. Te
                    proporcionaremos toda la informacion necesaria.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 — Donaciones en Especie */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-oro/10">
                  {/* Gift icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-oro"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-oscuro">
                    Donaciones en Especie
                  </h3>
                  <p className="mt-2 leading-relaxed text-oscuro/70">
                    Aceptamos donaciones de bienes, equipos y materiales.
                    Contacta al equipo administrativo para coordinar la entrega
                    de donaciones en especie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — Impact
          ============================================================ */}
      <section className="bg-azul py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Donde Va Tu Ofrenda
            </h2>
          </div>

          {/* Budget breakdown bars */}
          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {[
              {
                label: "Personal Ministerial",
                pct: 40,
                color: "bg-oro",
              },
              {
                label: "Instalaciones",
                pct: 25,
                color: "bg-tierra",
              },
              {
                label: "Ministerios y Programas",
                pct: 15,
                color: "bg-verde",
              },
              {
                label: "Misiones",
                pct: 10,
                color: "bg-white/50",
              },
              {
                label: "Ayuda Benevolencia",
                pct: 5,
                color: "bg-rojo",
              },
              {
                label: "Administracion",
                pct: 5,
                color: "bg-white/30",
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-bold">{item.pct}%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Impact stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "$247,000", label: "Donado en 2025" },
              { value: "3,200", label: "Comidas servidas" },
              { value: "48", label: "Familias asistidas" },
              { value: "$12,000", label: "Enviado a misiones" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — FAQ
          ============================================================ */}
      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold text-oscuro md:text-5xl">
              Preguntas sobre el Diezmo
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              {
                q: "Cuanto debo dar como diezmo?",
                a: "El diezmo biblico es el 10% de tus ingresos. Sin embargo, la cantidad que des debe ser una decision entre tu y Dios. Lo mas importante es dar con un corazon alegre y generoso, sin importar la cantidad.",
              },
              {
                q: "Debo calcular el diezmo sobre el ingreso bruto o neto?",
                a: "Esta es una decision personal. Algunos hermanos calculan sobre el ingreso bruto (antes de impuestos) y otros sobre el neto (despues de impuestos). Ambas opciones son validas. Lo importante es la actitud del corazon al dar.",
              },
              {
                q: "Debo diezmar si tengo deudas?",
                a: "La Biblia nos ensena a honrar a Dios con las primicias de nuestros ingresos (Proverbios 3:9). Muchos creyentes dan testimonio de que al ser fieles en el diezmo, Dios les ha ayudado a salir de sus deudas. Sin embargo, si atraviesas una situacion financiera dificil, habla con tu pastor para recibir orientacion.",
              },
              {
                q: "Recibire un recibo para mis impuestos?",
                a: "Si. Emitimos recibos anuales de donaciones para propositos fiscales. Las donaciones a la Iglesia Casa del Alfarero son deducibles de impuestos bajo la seccion 501(c)(3). Los recibos se envian por email en enero de cada ano.",
              },
              {
                q: "Es seguro donar en linea?",
                a: "Absolutamente. Nuestra plataforma de donaciones utiliza encriptacion SSL de 256 bits y cumple con los estandares PCI DSS. Tu informacion financiera esta completamente protegida y nunca se almacena en nuestros servidores.",
              },
              {
                q: "Puedo designar mi ofrenda a un ministerio especifico?",
                a: "Si. Al momento de donar, puedes seleccionar entre varias opciones de designacion: Diezmo, Ofrenda General, Misiones, Construccion/Mejoras o Ayuda Benevolencia. Si deseas apoyar un proyecto especifico, contactanos.",
              },
              {
                q: "Que hago si estoy pasando por dificultades financieras?",
                a: "Si estas atravesando una situacion dificil, no te sientas culpable. Dios conoce tu corazon y tu situacion. Te invitamos a hablar con el pastor o solicitar consejeria financiera gratuita y confidencial a traves de la iglesia.",
              },
              {
                q: "Puedo ver como se usa el presupuesto de la iglesia?",
                a: "Si. Creemos en la transparencia total. Cada ano publicamos un informe financiero que detalla como se utilizaron los fondos. Puedes solicitar una copia en la oficina de la iglesia o por correo electronico en cualquier momento.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white p-6">
                <h3 className="font-bold text-oscuro">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — Financial Resources
          ============================================================ */}
      <section className="bg-tierra py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Administra Bien lo que Dios Te Ha Dado
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Card 1 — Taller */}
            <div className="rounded-xl bg-white/10 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">
                Taller de Finanzas Biblicas
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Curso de 8 semanas donde aprenderas principios biblicos para
                manejar tus finanzas, crear un presupuesto, eliminar deudas y
                planificar tu futuro financiero con sabiduria.
              </p>
              <p className="mt-4 text-sm font-semibold text-oro">
                Proxima sesion: Abril 2026
              </p>
            </div>

            {/* Card 2 — Consejeria */}
            <div className="rounded-xl bg-white/10 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">
                Consejeria Financiera
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Ofrecemos sesiones de consejeria financiera gratuitas y
                confidenciales para miembros de la iglesia. Nuestros consejeros
                te ayudaran a crear un plan personalizado para alcanzar
                estabilidad financiera.
              </p>
              <p className="mt-4 text-sm font-semibold text-oro">
                Gratis para miembros &middot; Confidencial
              </p>
            </div>

            {/* Card 3 — Recursos */}
            <div className="rounded-xl bg-white/10 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">
                Recursos Recomendados
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Descubre libros, podcasts y materiales que te ayudaran a crecer
                en tu mayordomia financiera. Desde clasicos biblicos hasta guias
                practicas para la familia hispana.
              </p>
              <p className="mt-4 text-sm font-semibold text-oro">
                Libros y podcasts disponibles
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
