import Image from "next/image";
import type { CSSProperties } from "react";

// Recorte vertical propio de mobile. La versión apaisada (resi2.png, 1440x861)
// la sigue usando el desktop; acá con object-fit: cover se perdía ~70% del
// ancho y objectPosition en Y quedaba inerte por no haber sobrante vertical.
const imageSrc = "/images/towers-mob.webp";

// Se mergea encima del objectFit. La imagen (1672x2648, ratio 0.63) sigue
// siendo menos alargada que la pantalla, así que cover escala por el alto y el
// recorte pasa por el eje X: mover el primer valor corre la imagen (más bajo =
// hacia la derecha). El segundo valor no tiene recorrido. "50% 50%" es centro.
const imageStyle: CSSProperties = { objectPosition: "50% 50%" };

export default function ResidenciasTowersMobile() {
  return (
    <section className="relative h-[calc(100vh-3rem)] w-full overflow-hidden bg-zinc-50">
      <Image
        src={imageSrc}
        alt="Costavia tres torres"
        fill
        style={{ objectFit: "cover", ...imageStyle }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 46.15%, rgba(0, 0, 0, 0.77) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 left-0 z-10 flex flex-col gap-10 pl-4 pb-15 text-[#F8F7F2]">
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
          Tres torres,
          <br />
          un solo proyecto
        </h2>

        <a
          href="/contacto"
          className="w-fit whitespace-nowrap uppercase text-[#F8F7F2] underline decoration-[1.5px] underline-offset-[6px]"
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
          Consultar disponibilidad
        </a>
      </div>
    </section>
  );
}
