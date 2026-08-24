"use client";

import Image from "next/image";
import Navbar from "../Navbar/Navbar";

export default function ResidenciasHeroDesktop() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 px-[10px] pt-[10px]">
      <div className="relative h-screen w-full overflow-hidden border border-white/80 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
        <Image
          src="/images/resi1.png"
          alt="Costavia residencias"
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

        <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-start px-8 pb-10 md:px-10 lg:px-14">
          <h1
            className="text-[#F8F7F2]"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "64px",
              lineHeight: "93%",
              letterSpacing: "0%",
            }}
          >
            Residencias
          </h1>
        </div>
      </div>

      <div className="flex h-[300px] w-full items-center justify-start gap-16 bg-white px-8 md:px-10 lg:px-14">
        <p
          className="uppercase text-black"
          style={{
            fontFamily: '"Utopia Std", "Georgia", serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "103%",
            letterSpacing: "0%",
          }}
        >
          Departamentos a estrenar
        </p>

        <p
          className="text-black"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "139%",
            letterSpacing: "0%",
            marginLeft: "110px",
          }}
        >
          De 1, 2, 3 y 4 dormitorios.
        </p>
      </div>
    </section>
  );
}
