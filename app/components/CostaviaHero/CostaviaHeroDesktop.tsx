"use client";

import Image from "next/image";
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
        style={{ objectFit: "cover", objectPosition: "top" }}
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

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="pb-2">
          <div className="ml-10 flex items-end gap-15">
            <GagliardoLogo className="h-10" />
            <ObringLogo className="h-10" />
            <RosentalLogo className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
