"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type TowerImage = {
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

const images: TowerImage[] = [
  { src: "/images/proyecto-6.webp", style: { objectPosition: "50% 100%" } },
  { src: "/images/proyecto-7.webp", style: { objectPosition: "50% 80%" } },
  { src: "/images/proyecto-8.webp", style: { objectPosition: "50% 100%" } },
  { src: "/images/proyecto-9.webp", style: { objectPosition: "50% 100%" } },
];

const extendedImages = [images[images.length - 1], ...images, images[0]];

const textStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "160%",
  letterSpacing: "0%",
} as const;

export default function TowersMobile() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.clientWidth;
  }, []);

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

    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = setTimeout(() => {
      const width = track.clientWidth;
      const extendedIndex = Math.round(track.scrollLeft / width);

      if (extendedIndex === 0) {
        track.scrollLeft = images.length * width;
        setCurrent(images.length - 1);
      } else if (extendedIndex === images.length + 1) {
        track.scrollLeft = width;
        setCurrent(0);
      } else {
        setCurrent(extendedIndex - 1);
      }
    }, 80);
  };

  return (
    <section className="flex h-[calc(100vh-3rem)] w-full flex-col bg-white">
      <div className="flex h-[60%] w-full flex-col">
        <div className="relative min-h-0 flex-1 p-2 pt-0">
          <div className="relative h-full w-full overflow-hidden">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {extendedImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative h-full w-full flex-none snap-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? "Costavia torres"}
                    fill
                    style={{ objectFit: "cover", ...image.style }}
                    priority={index === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 pb-2 pt-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === current ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex h-[40%] w-full flex-col justify-center gap-6 px-6 text-black">
        <p className="uppercase" style={textStyle}>
          Tres torres
        </p>

        <p style={textStyle}>
          Dos niveles de oficinas
          <br />
          Tres niveles de amenities
          <br />
          Tres subsuelos de estacionamientos
        </p>

        <p style={textStyle}>
          Áreas verdes
          <br />
          Amenities panorámicos
        </p>
      </div>
    </section>
  );
}
