"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { MediaShowcaseProps } from "./MediaShowcase";

const captionStyle = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "18px",
  lineHeight: "117%",
  letterSpacing: "0%",
} as const;

export default function MediaShowcaseMobile({
  label,
  slides,
  gridImages,
}: MediaShowcaseProps) {
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

  const [gridCurrent, setGridCurrent] = useState(0);
  const gridTrackRef = useRef<HTMLDivElement>(null);

  const goToGridImage = (index: number) => {
    const track = gridTrackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const handleGridScroll = () => {
    const track = gridTrackRef.current;
    if (!track) return;
    setGridCurrent(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section className="w-full bg-white pb-16">
      <div className="relative h-[calc(100vh-3rem)] w-full overflow-hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className="relative h-full w-full flex-none snap-center overflow-hidden"
            >
              <Image
                src={slide.src}
                alt={`${label} ${index + 1}`}
                fill
                style={{ objectFit: "cover", ...slide.mobileStyle }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3">
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

      {gridImages && gridImages.length > 0 && (
        <div className="flex h-[calc(100vh-3rem)] w-full flex-col">
          <div className="flex h-[80%] w-full flex-col">
            <div className="relative min-h-0 flex-1 p-2">
              <div className="relative h-full w-full overflow-hidden">
                <div
                  ref={gridTrackRef}
                  onScroll={handleGridScroll}
                  className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {gridImages.map((image) => (
                    <div
                      key={image.src}
                      className="relative h-full w-full flex-none snap-center"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "cover", ...image.mobileStyle }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pb-2 pt-4">
              {gridImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Ir a la imagen ${index + 1}`}
                  onClick={() => goToGridImage(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === gridCurrent ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex h-[20%] w-full items-center bg-white px-4 text-black">
            <p style={captionStyle}>{gridImages[gridCurrent].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
