"use client";

import Image from "next/image";
import { useState } from "react";
import ChevronIcon from "../../icons/ChevronIcon";

const slides = [
  "/images/proyecto-5.png",
  "/images/carou2.png",
  "/images/carou3.png",
  "/images/carou4.png",
  "/images/carou5.png",
];

export default function CarouselDesktop() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50 px-[10px] py-[10px]">
      <div className="relative h-full w-full overflow-hidden">
        {slides.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Costavia ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(270deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 12.02%, rgba(0, 0, 0, 0) 90.38%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        />

        <button
          type="button"
          aria-label="Anterior"
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white transition-opacity hover:opacity-70 md:left-8"
        >
          <ChevronIcon className="h-10 w-6 rotate-180 md:h-14 md:w-8" />
        </button>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white transition-opacity hover:opacity-70 md:right-8"
        >
          <ChevronIcon className="h-10 w-6 md:h-14 md:w-8" />
        </button>

        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
