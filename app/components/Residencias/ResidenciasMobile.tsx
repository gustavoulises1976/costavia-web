import Image from "next/image";

export default function ResidenciasMobile() {
  return (
    <section className="w-full bg-white">
      <div className="p-2">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "946 / 480" }}
        >
          <Image
            src="/images/living-tarde.webp"
            alt="Living al atardecer"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-6 pt-8 pb-10 text-[#1a1a1a]">
        <p
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "103%",
            letterSpacing: "0%",
          }}
        >
          Departamentos de 1, 2, 3 y 4 dormitorios. Encontrá tu lugar.
        </p>

        <a
          href="/residencias"
          className="inline-block w-fit uppercase text-[#1a1a1a] underline decoration-[1.5px] underline-offset-[6px] pt-5 pb-10"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18.42px",
            lineHeight: "103%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          Ver residencias
        </a>
      </div>

      <div className="flex justify-end p-2 pb-10">
        <div
          className="relative w-[60%] overflow-hidden"
          style={{ aspectRatio: "474 / 624" }}
        >
          <Image
            src="/images/tarde-sol.webp"
            alt="Tarde de sol"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      <div className="px-6 pb-10 text-[#1a1a1a]">
        <p
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "103%",
            letterSpacing: "0%",
          }}
        >
          Vistas extraordinarias
          <br />
          al río y la ciudad.
        </p>
      </div>

      <div className="p-2">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "912 / 449" }}
        >
          <Image
            src="/images/dos-torres.webp"
            alt="Dos torres"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
