"use client";

import Image from "next/image";
import CostaviaLogo from "../../icons/CostaviaLogo";
import GagliardoLogo from "../../icons/GagliardoLogo";
import ObringLogo from "../../icons/ObringLogo";
import RosentalLogo from "../../icons/RosentalLogo";

export default function CostaviaHeroDesktop() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50">
      <Image
        src="/images/home-hero.png"
        alt="Costavia hero"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120.81deg, rgba(0, 0, 0, 0) 55.81%, rgba(0, 13, 19, 0.62) 82.29%)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="pt-2">
          <CostaviaLogo className="h-12 text-white" />
        </div>

        <div className="pb-2">
          <div className="flex items-end gap-5 md:gap-6">
            <GagliardoLogo className="h-6 md:h-7" />
            <ObringLogo className="h-6 md:h-7" />
            <RosentalLogo className="h-6 md:h-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
