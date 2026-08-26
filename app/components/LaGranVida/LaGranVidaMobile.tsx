import Image from "next/image";

export default function LaGranVidaMobile() {
  return (
    <section className="relative h-[calc(100vh-3rem)] w-full overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 p-2">
        <div className="relative h-full w-full overflow-hidden border border-white/80 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
          <Image
            src="/images/pileta-rio-mobile.png"
            alt="Costavia pool view"
            fill
            style={{ objectFit: "cover", objectPosition: "100% center" }}
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10" />

          <div className="absolute inset-x-0 top-0 left-0 z-10 flex items-start justify-start px-4 pt-8">
            <div
              className="text-white uppercase tracking-[0]"
              style={{
                fontFamily: '"Utopia Std", "Georgia", serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "91.33px",
                lineHeight: "90%",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              <div>LA</div>
              <div>GRAN</div>
              <div>VIDA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
