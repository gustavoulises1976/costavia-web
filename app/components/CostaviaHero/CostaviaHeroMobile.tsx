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
        src="/images/home-hero.png"
        alt="Costavia hero mobile"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="pt-3">
          <CostaviaLogo className="h-10" />
        </div>

        <div className="pb-3">
          <div className="flex gap-3 items-end">
            <GagliardoLogo className="h-5" />
            <ObringLogo className="h-5" />
            <RosentalLogo className="h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
