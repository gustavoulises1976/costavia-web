"use client";

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import type { PageHeroProps } from "./PageHero";

export default function PageHeroMobile({
  imageSrc,
  imageAlt,
  title,
  bottomPadding = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative h-screen w-full overflow-hidden bg-zinc-50 px-[10px] pt-[10px] ${
        bottomPadding ? "pb-[10px]" : ""
      }`}
    >
      <div className="relative h-full w-full overflow-hidden border border-white/80 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(222.56deg, rgba(0, 0, 0, 0) 56.65%, rgba(0, 0, 0, 0.48) 80.23%)",
          }}
        />

        <Navbar />

        <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-start px-4 pb-6">
          <h1
            className="text-[#F8F7F2]"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "93%",
              letterSpacing: "0%",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
