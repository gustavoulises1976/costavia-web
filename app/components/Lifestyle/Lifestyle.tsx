import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="flex h-screen w-full flex-col overflow-hidden bg-white">
      <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-6 px-8 pt-20 md:grid-cols-2 md:px-10 lg:px-14">
        <h2
          className="uppercase text-black"
          style={{
            fontFamily: '"Utopia Std", "Georgia", serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "103%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          Arquitectura y estilo de vida
        </h2>

        <p
          className="text-black"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "139%",
            letterSpacing: "0%",
          }}
        >
          Gagliardo Arquitectura, Obring y Rosental, llevan adelante el
          proyecto de tres torres icónicas, reconocibles por la calidad
          espacial de sus residencias y la asombrosa disposición de sus
          amenities.
        </p>
      </div>

      <div className="relative h-[432px] w-full px-[10px] pb-[10px]">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/proyecto-2.jpg"
            alt="Costavia arquitectura y estilo de vida"
            fill
            style={{ objectFit: "cover", objectPosition: "10px -400px" }}
          />
        </div>
      </div>
    </section>
  );
}
