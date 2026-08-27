import Image from "next/image";

export default function LifestyleMobile() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col gap-6 px-6 pt-10 pb-20 text-black">
        <h2
          className="uppercase"
          style={{
            fontFamily: '"Utopia Std", "Georgia", serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "36px",
            lineHeight: "93%",
            letterSpacing: "0%",
            textTransform: "uppercase",
          }}
        >
          Arquitectura y estilo de vida
        </h2>

        <p
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "117%",
            letterSpacing: "0%",
          }}
        >
          Gagliardo Arquitectura, Obring y Rosental, llevan adelante el
          proyecto de tres torres icónicas, reconocibles por la calidad
          espacial de sus residencias y la asombrosa disposición de sus
          amenities.
        </p>
      </div>

      <div className="p-2">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src="/images/proyecto-2.jpg"
            alt="Costavia arquitectura y estilo de vida"
            fill
            style={{ objectFit: "cover", scale: 2.5, objectPosition: "-5px -30px" }}
          />
        </div>
      </div>
    </section>
  );
}
