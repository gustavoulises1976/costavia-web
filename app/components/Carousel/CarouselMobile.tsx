"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  "/images/proyecto-5.png",
  "/images/carou2.png",
  "/images/carou3.png",
  "/images/carou4.png",
  "/images/carou5.png",
];

export default function CarouselMobile() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
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
          {slides.map((src, index) => (
            <div
              key={src}
              className="relative h-full w-full flex-none snap-center"
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
        </div>

        <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-3">
          {slides.map((src, index) => (
            <button
              key={src}
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
