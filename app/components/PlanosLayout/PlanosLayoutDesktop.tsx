"use client";

import Image from "next/image";
import { useState } from "react";
import CircleChevronIcon from "../../icons/CircleChevronIcon";
import CircleMarkIcon from "../../icons/CircleMarkIcon";

const slides = [
  {
    src: "/images/planoresi1.svg",
    title: "Torre 1",
    subtitle: "PISOS 3° a 12°",
  },
  {
    src: "/images/planoresi2.svg",
    title: "Torre 1",
    subtitle: "PISOS 13° a 17°",
  },
  {
    src: "/images/planoresi3.svg",
    title: "Torre 1",
    subtitle: "PISOS 18° a 24°",
  },
  {
    src: "/images/planoresi4.svg",
    title: "Torre 2",
    subtitle: "PISOS 13° a 18°",
  },
  {
    src: "/images/planoresi5.svg",
    title: "Torre 2",
    subtitle: "PISOS 19° a 22°",
  }, 
];

export default function PlanosLayoutDesktop() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative w-full bg-white px-8 py-16 md:px-10 lg:px-14">
      <CircleMarkIcon className="absolute right-8 top-16 h-9 w-auto text-black md:right-10 lg:right-14" />

      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[180px_1fr] md:gap-2">
        <div className="flex flex-col gap-2">
          <h2
            className="uppercase text-black"
            style={{
              fontFamily: '"Utopia Std", "Georgia", serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "93%",
              letterSpacing: "0%",
            }}
          >
            {slide.title}
          </h2>

          <p
            className="uppercase text-black"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "139%",
              letterSpacing: "1px",
            }}
          >
            {slide.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              aria-label="Plano anterior"
              onClick={() => goTo(current - 1)}
              className="text-black transition-opacity hover:opacity-60"
            >
              <CircleChevronIcon className="h-9 w-9" />
            </button>

            <button
              type="button"
              aria-label="Plano siguiente"
              onClick={() => goTo(current + 1)}
              className="rotate-180 text-black transition-opacity hover:opacity-60"
            >
              <CircleChevronIcon className="h-9 w-9" />
            </button>
          </div>
        </div>

        <div className="w-[1000px] max-w-full ml-30">
          <div className="relative h-[500px] w-full">
            <Image
              src={slide.src}
              alt={`${slide.title} — plano`}
              fill
              style={{ objectFit: "contain", objectPosition: "top" }}
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Ir al plano ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === current ? "bg-black" : "bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
