import Image from "next/image";
import ArrowIcon from "../../icons/ArrowIcon";

export default function LocationMobile() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 p-2">
      {/* Sin alto fijo: la imagen entra con sus dimensiones intrínsecas y la
          sección toma su alto, así no quedan franjas vacías como con contain. */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/proyecto-4-mob.webp"
          alt="Ubicación de Costavia"
          width={1348}
          height={1852}
          className="h-auto w-full"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-start px-6 pt-8">
          <a
            href="https://maps.app.goo.gl/SgNQrKuMMaGFKNU19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase text-black transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18.2px",
              lineHeight: "103%",
              letterSpacing: "0%",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "6px",
                textDecorationThickness: "1.5px",
              }}
            >
              Miralo en el mapa
            </span>
            <ArrowIcon className="h-[15px] w-[15px] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
