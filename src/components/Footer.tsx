import Link from "next/link";

const navigationLinks = [
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/ministerios", label: "Ministerios" },
  { href: "/sermones", label: "Sermones" },
  { href: "/blog", label: "Blog / Recursos" },
];

const scheduleItems = [
  {
    day: "Viernes",
    time: "6:30 PM",
    service: "Oracion y Ensenanza",
  },
  {
    day: "Domingo",
    time: "11:00 AM",
    service: "Culto General",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=4329+Marietta+St+Powder+Springs+GA+30127";

export default function Footer() {
  return (
    <footer className="bg-oscuro text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Branding */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Potter's Bowl SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="h-10 w-10 shrink-0"
                aria-hidden="true"
              >
                {/* Hands cupping */}
                <path
                  d="M8 38 C4 34, 2 28, 6 22 C8 18, 12 16, 16 16 L14 20 C10 22, 8 26, 10 32 Z"
                  fill="currentColor"
                  opacity="0.5"
                />
                <path
                  d="M56 38 C60 34, 62 28, 58 22 C56 18, 52 16, 48 16 L50 20 C54 22, 56 26, 54 32 Z"
                  fill="currentColor"
                  opacity="0.5"
                />
                {/* Bowl body */}
                <ellipse
                  cx="32"
                  cy="32"
                  rx="20"
                  ry="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                {/* Bowl base */}
                <path
                  d="M20 36 Q24 50, 32 50 Q40 50, 44 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Rim highlight */}
                <path
                  d="M14 30 Q23 24, 32 24 Q41 24, 50 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
              </svg>
              <span className="font-heading text-xl font-bold tracking-wide">
                Casa del Alfarero
              </span>
            </Link>

            <p className="font-body text-sm text-white/70 italic">
              Moldeados por Sus Manos
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/casadelalfareroatl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 transition-all duration-300 hover:text-oro hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-all duration-300 hover:text-oro hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/70 transition-all duration-300 hover:text-oro hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-tierra">
              Navegacion
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors duration-300 hover:text-oro"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Schedule */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-tierra">
              Horarios
            </h3>
            <ul className="space-y-4">
              {scheduleItems.map((item) => (
                <li key={item.day} className="font-body text-sm">
                  <span className="block font-semibold text-white">
                    {item.day} {item.time}
                  </span>
                  <span className="text-white/70">{item.service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-5 text-tierra">
              Contacto
            </h3>
            <ul className="space-y-4 font-body text-sm">
              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 mt-0.5 text-tierra"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433a19.695 19.695 0 002.683-2.006c1.9-1.7 3.945-4.238 3.945-7.343a8 8 0 00-16 0c0 3.105 2.045 5.643 3.945 7.343a19.695 19.695 0 002.683 2.006 12.296 12.296 0 00.757.433l.281.14.018.008.006.003zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/70">
                  4329 Marietta St,
                  <br />
                  Powder Springs, GA 30127
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-tierra"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+17708966436"
                  className="text-white/70 transition-colors duration-300 hover:text-oro"
                >
                  (770) 896-6436
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-tierra"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:cda.atlanta@gmail.com"
                  className="text-white/70 transition-colors duration-300 hover:text-oro"
                >
                  cda.atlanta@gmail.com
                </a>
              </li>

              {/* Directions */}
              <li className="pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-oro transition-colors duration-300 hover:text-tierra"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586V14.414l3.707 3.707A1 1 0 0019 17.414V7a1 1 0 00-.293-.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Obtener Direcciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-xs text-white/50">
            &copy; 2026 Iglesia Casa del Alfarero. Todos los derechos
            reservados.
          </p>
          <p className="font-body text-xs text-white/40">
            Sitio creado con amor para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  );
}
