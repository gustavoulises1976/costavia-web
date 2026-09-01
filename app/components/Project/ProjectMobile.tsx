import Image from "next/image";

export default function ProjectMobile() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#81B3C7]">
      <div className="flex h-[45%] w-full flex-col justify-start gap-30 px-6 pt-16 text-[#F8F7F2]">
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
          Arquitectura a estrenar con vistas icónicas de la ciudad
        </h2>

        <a
          href="/proyecto"
          className="inline-block w-fit uppercase text-[#F8F7F2]"
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18.2px",
            lineHeight: "103%",
            letterSpacing: "0%",
            textTransform: "uppercase",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            textDecorationThickness: "1.5px",
          }}
        >
          Conocé el proyecto
        </a>
      </div>

      <div className="relative h-[55%] w-full overflow-hidden">
        <Image
          src="/images/arquitectura.webp"
          alt="Arquitectura del proyecto"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>
    </section>
  );
}
