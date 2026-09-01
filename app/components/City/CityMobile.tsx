import Image from "next/image";

export default function CityMobile() {
  return (
    <section className="relative h-[calc(100vh-3rem)] w-full overflow-hidden bg-zinc-50">
      <Image
        src="/images/proyecto-3-mob.jpg"
        alt="Costavia y la ciudad"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "60%",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 50.71%, rgba(0, 0, 0, 0.77) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex items-end justify-start px-6 pb-10">
        <h2
          className="uppercase text-[#F8F7F2]"
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
          Un proyecto que se une al pulso de la ciudad
        </h2>
      </div>
    </section>
  );
}
