"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcase, {
  type MediaShowcaseSlide,
} from "../MediaShowcase/MediaShowcase";

const slides: MediaShowcaseSlide[] = [
  { src: "/images/resicaru1.webp" },
  { src: "/images/resicaru2.webp" },
  { src: "/images/resicaru3.webp" },
  { src: "/images/resicaru4.webp" },
  { src: "/images/resicaru5.webp" },
];

const mobileSlides: MediaShowcaseSlide[] = [
  { src: "/images/slide1-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/slide2-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/slide3-mob.webp", mobileStyle: { objectPosition: "30% 50%" } },
  { src: "/images/slide4-mob.webp", mobileStyle: { objectPosition: "70% 50%" } },
  { src: "/images/slide5-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
];

const gridImages = [
  {
    src: "/images/resi7.webp",
    alt: "Cocinas con diseño en isla",
    caption: <>Cocinas con diseño en isla.</>,
  },
  {
    src: "/images/resi8.webp",
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
    src: "/images/resi9.webp",
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
  const isMobile = useIsMobile();

  return (
    <MediaShowcase
      label="Costavia ambientes"
      slides={isMobile ? mobileSlides : slides}
      gridImages={isMobile ? [] : gridImages}
      ctaLabel="Conocé más"
      ctaHref="/contacto"
    />
  );
}
