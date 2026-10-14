"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CostaviaLogo from "../../icons/CostaviaLogo";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Proyecto", href: "/proyecto" },
  { label: "Residencias", href: "/residencias" },
  { label: "Amenities", href: "/amenities" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  // Con el menú abierto se bloquea el scroll de la página de atrás.
  // Se bloquean <html> y <body>: globals.css declara `overflow-x: hidden` en
  // los dos, y con overflow no-visible en <html> el contenedor de scroll pasa
  // a ser ese, así que tocar solo <body> no alcanzaría.
  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const { body } = document;
    const previous = { root: root.style.overflow, body: body.style.overflow };

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previous.root;
      body.style.overflow = previous.body;
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-12 items-center border-b border-black bg-white px-4">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-10 flex h-6 w-6 items-center justify-center text-zinc-900"
      >
        {isOpen ? (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.358398 0.348633L-9.90033e-05 0.697172L13.9999 14.3083L14.3584 13.9597L14.7169 13.6112L0.716896 9.36091e-05L0.358398 0.348633Z" fill="black"/>
            <path d="M0.358398 14.0977L0.716896 14.4462L14.7169 0.835084L14.3584 0.486545L13.9999 0.138006L-9.90033e-05 13.7491L0.358398 14.0977Z" fill="black"/>
          </svg>
        ) : (
          <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0129395 5.63721L0.0259214 6.13704H18.0259L18.0129 5.63721L18 5.13738H-4.25233e-05L0.0129395 5.63721Z" fill="black"/>
            <path d="M0.0129395 10.4998L0.0259214 10.9996H18.0259L18.0129 10.4998L18 9.99992H-4.25233e-05L0.0129395 10.4998Z" fill="black"/>
            <path d="M0.0129395 0.499756L0.0259214 0.999587H18.0259L18.0129 0.499756L18 -7.55787e-05H-4.25233e-05L0.0129395 0.499756Z" fill="black"/>
          </svg>
        )}
      </button>

      <Link
        href="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="invert">
          <CostaviaLogo className="h-auto w-29.25" />
        </div>
      </Link>

      {isOpen && (
        <nav
          aria-label="Main navigation"
          className="fixed inset-x-0 top-12 z-20 flex h-[calc(100dvh-3rem)] flex-col items-center overflow-y-auto overscroll-contain bg-white px-6 py-10"
        >
          {/* flex-1: los links se centran en el espacio entre el tope y el
              ícono, que es hermano en la columna y no queda tapado. */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-900 uppercase"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "25.47px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="https://www.instagram.com/costavia.rosario/?hl=es-la"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_254_4961)">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.3903 2.00024H7.55697C3.81754 2.00024 0.786133 5.12944 0.786133 8.98949V20.1723C0.786133 24.0323 3.81754 27.1615 7.55697 27.1615H18.3903C22.1297 27.1615 25.1611 24.0323 25.1611 20.1723V8.98949C25.1611 5.12944 22.1297 2.00024 18.3903 2.00024ZM22.7913 20.1723C22.7839 22.6781 20.8178 24.7076 18.3903 24.7153H7.55697C5.12942 24.7076 3.16336 22.6781 3.15592 20.1723V8.98949C3.16336 6.48364 5.12942 4.45415 7.55697 4.44648H18.3903C20.8178 4.45415 22.7839 6.48364 22.7913 8.98949V20.1723ZM19.4059 9.33895C20.1538 9.33895 20.7601 8.71311 20.7601 7.9411C20.7601 7.1691 20.1538 6.54326 19.4059 6.54326C18.658 6.54326 18.0518 7.1691 18.0518 7.9411C18.0518 8.71311 18.658 9.33895 19.4059 9.33895ZM12.9736 8.29057C9.60815 8.29057 6.87988 11.1068 6.87988 14.5809C6.87988 18.055 9.60815 20.8712 12.9736 20.8712C16.3391 20.8712 19.0674 18.055 19.0674 14.5809C19.071 12.9114 18.4301 11.3093 17.2865 10.1289C16.1429 8.94838 14.5909 8.28685 12.9736 8.29057ZM9.24967 14.5809C9.24967 16.7039 10.9169 18.425 12.9736 18.425C15.0303 18.425 16.6976 16.7039 16.6976 14.5809C16.6976 12.4578 15.0303 10.7368 12.9736 10.7368C10.9169 10.7368 9.24967 12.4578 9.24967 14.5809Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_254_4961">
                  <rect width="25.9476" height="25.1613" fill="white" transform="translate(0 2)"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </nav>
      )}
    </header>
  );
}
