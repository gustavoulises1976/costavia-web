import Image from "next/image";

export default function LaGranVidaDesktop() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-zinc-50 px-[10px] py-[10px]">
      <div className="relative h-full w-full overflow-hidden border border-white/80 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
        <div className="absolute inset-x-0 -top-10 bottom-0">
          <Image
            src="/images/pileta-rio.webp"
            alt="Costavia pool view"
            fill
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/15 via-transparent to-black/10" />

        <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-start px-10  md:pb-4">
          <div
            className="text-white uppercase tracking-[0] pb-10"
            style={{
              fontFamily: '"Utopia Std", "Georgia", serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "150px",
              lineHeight: "85%",
              textTransform: "uppercase",
            }}
          >
            <div>LA</div>
            <div>GRAN</div>
            <div>VIDA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
