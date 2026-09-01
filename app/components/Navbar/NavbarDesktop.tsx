"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CostaviaLogo from "../../icons/CostaviaLogo";

const navItems = [
  { label: "Proyecto", href: "/proyecto" },
  { label: "Residencias", href: "/residencias" },
  { label: "Amenities", href: "/amenities" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

const SCROLL_THRESHOLD = 24;
const SCRIM_OPACITY = 0.1;
const BLUR_RADIUS = 10;
// Alto del logo compacto (equivale al h-10 que tenía) y el doble para el tope.
const LOGO_HEIGHT = 35;
const LOGO_HEIGHT_TOP = LOGO_HEIGHT * 2;
// Padding suelto (p-20) mientras el logo está solo, y el compacto del navbar.
const PADDING_TOP_STATE = 40;
const PADDING_X = 24;
const PADDING_Y = 16;
const TRANSITION = "300ms ease";

export default function NavbarDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 flex items-center justify-between"
      style={{
        padding: isScrolled
          ? `${PADDING_Y}px ${PADDING_X}px`
          : `${PADDING_TOP_STATE}px`,
        backgroundColor: `rgba(0, 0, 0, ${isScrolled ? SCRIM_OPACITY : 0})`,
        // Se anima el radio del blur (no se togglea la propiedad) para que
        // entre de forma gradual junto con el velo.
        backdropFilter: `blur(${isScrolled ? BLUR_RADIUS : 0}px)`,
        WebkitBackdropFilter: `blur(${isScrolled ? BLUR_RADIUS : 0}px)`,
        transition: `padding ${TRANSITION}, background-color ${TRANSITION}, backdrop-filter ${TRANSITION}, -webkit-backdrop-filter ${TRANSITION}`,
      }}
    >
      <Link href="/" className="flex items-center">
        {/* El SVG trae width="377" fijo, así que se le da w-auto y el alto se
            controla desde el wrapper para que escale por proporción. */}
        <span
          className="block"
          style={{
            height: `${isScrolled ? LOGO_HEIGHT : LOGO_HEIGHT_TOP}px`,
            transition: `height ${TRANSITION}`,
          }}
        >
          <CostaviaLogo className="h-full w-auto text-white [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.45))]" />
        </span>
      </Link>

      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center gap-7 lg:gap-10"
        style={{
          opacity: isScrolled ? 1 : 0,
          // visibility saca los links del foco por teclado mientras están ocultos.
          visibility: isScrolled ? "visible" : "hidden",
          transform: `translateY(${isScrolled ? 0 : -4}px)`,
          transition: `opacity ${TRANSITION}, transform ${TRANSITION}, visibility ${TRANSITION}`,
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white uppercase transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
