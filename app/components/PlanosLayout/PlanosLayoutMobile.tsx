"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

function RotatedPlan({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {size.width > 0 && (
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: size.height,
            height: size.width,
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        >
          <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
        </div>
      )}
    </div>
  );
}

export default function PlanosLayoutMobile() {
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
        track.scrollLeft = slides.length * width;
        setCurrent(slides.length - 1);
      } else if (extendedIndex === slides.length + 1) {
        track.scrollLeft = width;
        setCurrent(0);
      } else {
        setCurrent(extendedIndex - 1);
      }
    }, 80);
  };

  const slide = slides[current];

  return (
    <section className="relative w-full bg-white px-6 py-16">
      <CircleMarkIcon className="absolute right-6 top-16 h-8 w-auto rotate-90 text-black" />

      <div className="flex max-w-[70%] flex-col gap-2">
        <h2
          className="uppercase text-black"
          style={{
            fontFamily: '"Utopia Std", "Georgia", serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "36px",
            lineHeight: "93%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          {slide.title}
        </h2>

        <p
          className="text-black"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "117%",
            letterSpacing: "0%",
          }}
        >
          {slide.subtitle}
        </p>
      </div>

      <div className="mt-8">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {extendedSlides.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="w-full flex-none snap-center"
            >
              <div
                className="relative mx-auto w-full"
                style={{ aspectRatio: "531 / 989", maxWidth: "80%" }}
              >
                <RotatedPlan
                  src={item.src}
                  alt={`${item.title} — plano`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Ir al plano ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === current ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
