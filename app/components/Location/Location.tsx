import Image from "next/image";
import ArrowIcon from "../../icons/ArrowIcon";

export default function Location() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50 px-[10px] py-[10px]">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/images/proyecto-4.png"
          alt="Ubicación de Costavia"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-end px-8 pb-10 md:px-10 lg:px-14">
          <a
            href="https://maps.app.goo.gl/SgNQrKuMMaGFKNU19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 uppercase text-white transition-opacity hover:opacity-80"
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
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                textDecorationThickness: "2px",
              }}
            >
              Mirá el proyecto en el mapa
            </span>
            <ArrowIcon className="h-5 w-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
