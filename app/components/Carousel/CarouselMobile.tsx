"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Slide = {
  src: string;
  alt?: string;
  /**
   * Estilo del <Image>, se mergea encima del `objectFit: "cover"` por defecto.
   *
   * Para reencuadrar, `objectPosition`. Ojo con el sentido: con `cover` la
   * imagen es más ancha que el contenedor, así que un porcentaje MÁS BAJO la
   * corre hacia la DERECHA (se ve más del lado izquierdo) y uno más alto la
   * corre hacia la izquierda. "50% 50%" es el centro.
   *
   * También sirve para `objectFit`, `transform: "scale(1.1)"`, etc.
   */
  style?: CSSProperties;
};

const slides: Slide[] = [
  { src: "/images/proyecto-5-mob.webp", style: { objectPosition: "70% 50%" } },
  { src: "/images/carou2-mob.webp", style: { objectPosition: "50% 50%" } },
  { src: "/images/carou3-mob.webp", style: { objectPosition: "41% 50%" } },
  { src: "/images/carou4-mob.webp", style: { objectPosition: "35% 50%" } },
  { src: "/images/carou5-mob.webp", style: { objectPosition: "62% 50%" } },
];

// Cuánto se espera sin eventos de scroll para dar por frenada la slide.
const SETTLE_MS = 120;

// Track con clones en las puntas: [última, ...slides, primera]. Así el swipe
// más allá de un extremo sigue mostrando imagen, y una vez frenado se salta
// sin animación a la slide real equivalente.
const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

const toRealIndex = (position: number) =>
  (((position - 1) % slides.length) + slides.length) % slides.length;

export default function  CarouselMobile() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // La primera slide real vive en la posición 1, no en la 0.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.clientWidth;
  }, []);

  useEffect(
    () => () => {
      if (settleTimer.current) clearTimeout(settleTimer.current);
    },
    [],
  );

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({
      left: (index + 1) * track.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const position = Math.round(track.scrollLeft / track.clientWidth);
    setCurrent(toRealIndex(position));

    if (settleTimer.current) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      // El salto es invisible: el clon y su slide real son la misma imagen, y
      // toRealIndex devuelve lo mismo para las dos, así que el punto no salta.
      if (position === 0) {
        track.scrollLeft = slides.length * track.clientWidth;
      } else if (position === slides.length + 1) {
        track.scrollLeft = track.clientWidth;
      }
    }, SETTLE_MS);
  };

  return (
    <section className="relative h-[calc(100vh-3rem)] w-full overflow-hidden bg-zinc-50 p-2">
      <div className="relative h-full w-full overflow-hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {loopSlides.map((slide, position) => (
            <div
              key={`${slide.src}-${position}`}
              className="relative h-full w-full flex-none snap-center"
            >
              <Image
                src={slide.src}
                alt={slide.alt ?? `Costavia ${toRealIndex(position) + 1}`}
                fill
                style={{ objectFit: "cover", ...slide.style }}
                priority={position === 1}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
