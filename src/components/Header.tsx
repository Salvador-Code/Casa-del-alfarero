"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Ministerios", href: "/ministerios" },
  { label: "Sermones", href: "/sermones" },
  { label: "Diezmos", href: "/diezmos" },
  { label: "Contacto", href: "/contacto" },
];

function PotteryIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rim of the bowl */}
      <ellipse
        cx="32"
        cy="18"
        rx="22"
        ry="5"
        fill="var(--color-tierra, #A0522D)"
        opacity="0.85"
      />
      {/* Bowl body */}
      <path
        d="M10 18 C10 18 12 44 22 50 C26 52.5 38 52.5 42 50 C52 44 54 18 54 18"
        fill="var(--color-tierra, #A0522D)"
        opacity="0.7"
      />
      {/* Base / foot of vessel */}
      <ellipse
        cx="32"
        cy="52"
        rx="10"
        ry="3"
        fill="var(--color-tierra, #A0522D)"
        opacity="0.9"
      />
      {/* Decorative band around center */}
      <path
        d="M14 28 Q32 36 50 28"
        stroke="var(--color-oro, #D4A843)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner shadow on rim */}
      <ellipse
        cx="32"
        cy="18"
        rx="18"
        ry="3"
        fill="var(--color-tierra, #A0522D)"
        opacity="0.5"
      />
      {/* Highlight on bowl */}
      <path
        d="M18 22 Q20 34 26 40"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.35"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Desktop: 80px, Mobile: 64px */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        {/* ---- Logo / Brand ---- */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        >
          <PotteryIcon className="h-8 w-8 md:h-10 md:w-10" />
          <span className="font-heading text-lg font-bold tracking-tight text-oscuro md:text-xl lg:text-2xl">
            Casa del Alfarero
          </span>
        </Link>

        {/* ---- Desktop Navigation (center) ---- */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 font-body text-sm font-medium text-oscuro transition-colors duration-200 hover:text-tierra xl:px-4"
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-tierra transition-all duration-300 ease-out group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        {/* ---- Desktop CTA Button (right) ---- */}
        <div className="hidden lg:block">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-lg bg-tierra px-5 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-tierra/90 hover:shadow-lg active:scale-[0.97]"
          >
            {/* Live red dot indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rojo opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rojo" />
            </span>
            Ver en Vivo
          </Link>
        </div>

        {/* ---- Mobile Hamburger Button ---- */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-oscuro transition-colors duration-200 hover:bg-crema/50 hover:text-tierra lg:hidden"
          aria-label="Abrir menu de navegacion"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* ---- Mobile Menu Overlay ---- */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        {/* Mobile Menu Header */}
        <div className="flex h-16 items-center justify-between border-b border-crema/40 px-4 md:h-20">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <PotteryIcon className="h-8 w-8" />
            <span className="font-heading text-lg font-bold text-oscuro">
              Casa del Alfarero
            </span>
          </Link>

          {/* Close (X) Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-oscuro transition-colors duration-200 hover:bg-crema/50 hover:text-tierra"
            aria-label="Cerrar menu de navegacion"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center rounded-lg px-4 py-3.5 font-body text-base font-medium text-oscuro transition-all duration-200 hover:bg-crema/30 hover:text-tierra active:bg-crema/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA Button at bottom */}
        <div className="border-t border-crema/40 px-4 py-5">
          <Link
            href="/servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-tierra px-5 py-3.5 font-body text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-tierra/90 active:scale-[0.97]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rojo opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rojo" />
            </span>
            Ver en Vivo
          </Link>
        </div>
      </div>
    </header>
  );
}
