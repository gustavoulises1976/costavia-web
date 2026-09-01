"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcase, {
  type MediaShowcaseSlide,
} from "../MediaShowcase/MediaShowcase";

const slides: MediaShowcaseSlide[] = [
  { src: "/images/resicaru1.png" },
  { src: "/images/resicaru2.png" },
  { src: "/images/resicaru3.jpg" },
  { src: "/images/resicaru4.jpg" },
  { src: "/images/resicaru5.png" },
];

const mobileSlides: MediaShowcaseSlide[] = [
  { src: "/images/slide1-mob.jpg", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/slide2-mob.jpg", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/slide3-mob.jpg", mobileStyle: { objectPosition: "30% 50%" } },
  { src: "/images/slide4-mob.jpg", mobileStyle: { objectPosition: "70% 50%" } },
  { src: "/images/slide5-mob.jpg", mobileStyle: { objectPosition: "50% 50%" } },
];

const gridImages = [
  {
    src: "/images/resi7.png",
    alt: "Cocinas con diseño en isla",
    caption: <>Cocinas con diseño en isla.</>,
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
