import Image from "next/image";

export default function Discover() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f4f1ec]">
      <div className="relative h-full w-full overflow-hidden bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)]">
        <Image
          src="/images/pileta-interior.png"
          alt="Interior de piscina"
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
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

        <div className="absolute inset-x-0 bottom-0 left-0 z-20 flex items-end justify-between px-8 pb-17 md:px-10 lg:px-14">
          <div className="max-w-[700px] text-[#f7f7f3]">
            <h2
              className="uppercase"
              style={{
                fontFamily: '"Utopia Std", "Georgia", serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "45px",
                lineHeight: "93%",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              Amenities sin igual
              <br />
              en Rosario
            </h2>
          </div>

          <a
            href="#"
            className="inline-block uppercase text-[#f7f7f3] underline decoration-[2px] underline-offset-[12px]"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "28px",
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
