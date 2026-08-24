"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import ChevronIcon from "../../icons/ChevronIcon";

export type MediaShowcaseGridImage = {
  src: string;
  alt: string;
  caption: ReactNode;
};

const textStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "103%",
  letterSpacing: "0%",
  marginLeft: "40px",
  marginTop: "10px",
} as const;

export default function MediaShowcase({
  label,
  slides,
  gridImages,
  ctaLabel,
  ctaHref = "#",
}: {
  label: string;
  slides: string[];
  gridImages: MediaShowcaseGridImage[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-white px-2.5 pb-20">
      <div className="relative h-[730px] w-full overflow-hidden">
        {slides.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${label} ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}

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

        <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3">
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

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {gridImages.map((image) => (
          <div key={image.src} className="flex flex-col gap-4">
            <div className="relative h-[568px] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <p className="text-black" style={textStyle}>
              {image.caption}
            </p>
          </div>
        ))}
      </div>

      {ctaLabel && (
        <div className="mt-10">
          <a
            href={ctaHref}
            className="inline-block uppercase text-black underline decoration-[1.5px] underline-offset-[6px]"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              marginLeft: "40px",
              marginTop: "60px",
            }}
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </section>
  );
}
