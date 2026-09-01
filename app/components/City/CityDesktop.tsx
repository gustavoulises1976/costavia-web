import Image from "next/image";

export default function CityDesktop() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50">
      <Image
        src="/images/proyecto-3.webp"
        alt="Costavia y la ciudad"
        fill
        style={{ objectFit: "cover" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50.71%, rgba(0, 0, 0, 0.77) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-start px-8 pb-14 md:px-10 lg:px-14">
        <div className="flex max-w-[660px] flex-col gap-4 text-[#F8F7F2]">
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
            Un proyecto que se une
            <br />
            al pulso de la ciudad
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
            Ubicado en un predio de más de 5.000 m² en el corazón de
            Pichincha. Costavía fusiona el paisaje del río con la proximidad
            del centro de la ciudad, dando como resultado la conexión entre
            cercanía y espacios abiertos.
          </p>
        </div>
      </div>
    </section>
  );
}
