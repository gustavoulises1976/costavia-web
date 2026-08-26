import Image from "next/image";

export default function DiscoverMobile() {
  return (
    <section className="relative h-[calc(100vh-3rem)] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-white">
        <Image
          src="/images/pileta-interior.png"
          alt="Interior de piscina"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: "scale(1.2) translateY(-8%)",
          }}
          priority
        />

        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 65.08%, rgba(0, 0, 0, 0.6) 100%)",
            backgroundBlendMode: "multiply",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 left-0 z-20 flex flex-col gap-4 px-6 pb-12 text-[#f7f7f3] pb-20">
          <h2
            className="uppercase"
            style={{
              fontFamily: '"Utopia Std", "Georgia", serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "30px",
              lineHeight: "93%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            Amenities sin
            <br />
            igual en Rosario
          </h2>

          <a
            href="/amenities"
            className="inline-block w-fit uppercase text-[#f7f7f3] underline decoration-[1.5px] underline-offset-[6px] pt-5"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18.2px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            Descubrí la gran vida
          </a>
        </div>
      </div>
    </section>
  );
}
