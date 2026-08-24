import MediaShowcase from "../MediaShowcase/MediaShowcase";

const slides = [
  "/images/resicaru1.png",
  "/images/resicaru2.png",
  "/images/resicaru3.jpg",
  "/images/resicaru4.jpg",
  "/images/resicaru5.png",
];

const gridImages = [
  {
    src: "/images/resi7.png",
    alt: "Cocinas con diseño en isla",
    caption: (
      <>
        Cocinas con diseño
        <br />
        en isla.
      </>
    ),
  },
  {
    src: "/images/resi8.png",
    alt: "Placares completos en todos los dormitorios",
    caption: (
      <>
        Placares completos en
        <br />
        todos los dormitorios.
      </>
    ),
  },
  {
    src: "/images/resi9.png",
    alt: "Pisos de madera de ingeniería en roble en todos los ambientes",
    caption: (
      <>
        Pisos de madera de ingeniería
        <br />
        en roble en todos los ambientes.
      </>
    ),
  },
];

export default function Ambientes() {
  return (
    <MediaShowcase
      label="Costavia ambientes"
      slides={slides}
      gridImages={gridImages}
      ctaLabel="Conocé más"
    />
  );
}
