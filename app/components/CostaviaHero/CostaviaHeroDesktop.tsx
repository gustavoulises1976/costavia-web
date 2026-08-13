"use client";

import Image from "next/image";
import CostaviaLogo from "../../icons/CostaviaLogo";
import GagliardoLogo from "../../icons/GagliardoLogo";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

export default function CostaviaHeroDesktop() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-zinc-50">
      <Image
        src="/images/home-hero.png"
        alt="Costavia hero"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 max-w-7xl mx-auto px-8 flex flex-col justify-between py-8">
        <header>
          <div className="absolute top-6 left-8 z-20">
            <CostaviaLogo className="h-12 text-white" />
          </div>
        </header>

        <footer>
          <div className="absolute bottom-6 left-8 z-20 flex gap-6 items-end">
            <GagliardoLogo className="h-6" />
            <ObringLogo className="h-6" />
            <RosentalLogo className="h-6" />
          </div>
        </footer>
      </div>
    </section>
  );
}
