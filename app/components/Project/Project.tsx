import Image from "next/image";

export default function Project() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#81B3C7]">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        <div className="flex h-full items-start justify-start px-8 pt-[110px] pb-[80px] md:px-10 lg:px-14">
          <div className="relative flex max-w-[520px] h-full w-full flex-col text-[#F8F7F2]">
            <h2
              className="uppercase"
              style={{
                fontFamily: '"Utopia Std", "Georgia", serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "55px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}
            >
              Arquitectura
              <br />
              a estrenar con
              <br />
              vistas icónicas
              <br />
              de la ciudad
            </h2>

            <a
              href="#"
              className="absolute bottom-0 left-0 inline-block uppercase text-[#F8F7F2]"
              style={{
                fontFamily: '"Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "28px",
                lineHeight: "103%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                textDecorationThickness: "2px",
              }}
            >
              Conocé el proyecto
            </a>
          </div>
        </div>

        <div className="relative h-full min-h-[320px] overflow-hidden">
          <Image
            src="/images/arquitectura.png"
            alt="Arquitectura del proyecto"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
