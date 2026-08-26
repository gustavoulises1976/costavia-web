"use client";

import Image from "next/image";
import CostaviaLogo from "../../icons/CostaviaLogo";
import GagliardoLogo from "../../icons/GagliardoLogo";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

export default function CostaviaHeroMobile() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-zinc-50">
      <Image
        src="/images/home-hero-mobile.png"
        alt="Costavia hero mobile"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
          transform: "scale(1.8) translateY(-5%)",
        }}
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="pt-16 flex justify-center">
          <CostaviaLogo className="w-73.75 h-auto" />
        </div>

        <div className="pb-10">
          <div className="grid grid-cols-3 items-center">
            <GagliardoLogo className="w-[22vw] h-auto justify-self-start" />
            <ObringLogo className="w-[22vw] h-auto justify-self-center" />
            <RosentalLogo className="w-[22vw] h-auto justify-self-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
