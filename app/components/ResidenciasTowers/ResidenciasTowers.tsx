import Image from "next/image";

export default function ResidenciasTowers() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50">
      <Image
        src="/images/resi2.png"
        alt="Costavia tres torres"
        fill
        style={{ objectFit: "cover" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 46.15%, rgba(0, 0, 0, 0.77) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-between gap-6 px-8 pb-10 md:px-10 lg:px-14">
        <div className="flex max-w-[520px] flex-col gap-4 text-[#F8F7F2]">
          <h2
            className="uppercase"
            style={{
              fontFamily: '"Utopia Std", "Georgia", serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "46px",
              lineHeight: "93%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            Tres torres,
            <br />
            un solo proyecto
          </h2>

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "139%",
              letterSpacing: "0%",
            }}
          >
            Sobre más de 5.000 m² en el corazón de Pichincha. La Torre 1 ya
            tiene vecinos, la Torre 2 está lista para estrenar, y la Torre 3
            viene en camino.
          </p>
        </div>

        <a
          href="/contacto"
          className="whitespace-nowrap uppercase text-[#F8F7F2] underline decoration-[1.5px] underline-offset-[6px]"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "21.54px",
            lineHeight: "103%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          Consultar disponibilidad
        </a>
      </div>
    </section>
  );
}
