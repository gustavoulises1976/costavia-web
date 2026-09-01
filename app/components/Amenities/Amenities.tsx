"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcase, {
  type MediaShowcaseGridImage,
  type MediaShowcaseSlide,
} from "../MediaShowcase/MediaShowcase";

const slides: MediaShowcaseSlide[] = [
  { src: "/images/resi3-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/resi32-mob.webp", mobileStyle: { objectPosition: "30% 50%" } },
  { src: "/images/resi33-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/resi34-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/resi35-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/resi36-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
  { src: "/images/resi37-mob.webp", mobileStyle: { objectPosition: "50% 50%" } },
];

const mobileOnlyGridImages: MediaShowcaseGridImage[] = [
  {
    src: "/images/balcones-mobile.webp",
    alt: "Balcones y terrazas con vegetación nativa",
    caption: (
      <>
        Balcones y terrazas
        <br />
        con vegetación nativa.
      </>
    ),
    mobileStyle: { objectPosition: "50% 50%" },
  },
  {
    src: "/images/ext-mobile.webp",
    alt: "Instalaciones previstas para cocina exterior",
    caption: (
      <>
        Instalaciones previstas
        <br />
        para cocina exterior.
      </>
    ),
    mobileStyle: { objectPosition: "30% 50%" },
  },
  {
    src: "/images/banos-mobile.webp",
    alt: "Baños con microcemento, sanitarios Ferrum y grifería FV",
    caption: (
      <>
        Baños con microcemento,
        <br />
        sanitarios Ferrum y grifería FV.
      </>
    ),
    mobileStyle: { objectPosition: "50% 50%" },
  },
  {
    src: "/images/resi-grid-mob.webp",
    alt: "Cocinas con diseño en isla",
    caption: <>Cocinas con diseño en isla.</>,
    mobileStyle: { objectPosition: "50% 50%" },
  },
  {
    src: "/images/resi-grid-mob-2.webp",
    alt: "Placares completos en todos los dormitorios",
    caption: (
      <>
        Placares completos en
        <br />
        todos los dormitorios.
      </>
    ),
    mobileStyle: { objectPosition: "50% 50%" },
  },
  {
    src: "/images/resi-grid-mob-3.webp",
    alt: "Pisos de madera de ingeniería en roble en todos los ambientes",
    caption: (
      <>
        Pisos de madera de ingeniería
        <br />
        en roble en todos los ambientes.
      </>
    ),
    mobileStyle: { objectPosition: "50% 50%" },
  },
];

const gridImages = [
  {
    src: "/images/resi4.webp",
    alt: "Balcones y terrazas con vegetación nativa",
    caption: (
      <>
        Balcones y terrazas
        <br />
        con vegetación nativa.
      </>
    ),
  },
  {
    src: "/images/resi5.webp",
    alt: "Instalaciones previstas para cocina exterior",
    caption: (
      <>
        Instalaciones previstas
        <br />
        para cocina exterior.
      </>
    ),
  },
  {
    src: "/images/resi6.webp",
    alt: "Baños con microcemento, sanitarios Ferrum y grifería FV",
    caption: (
      <>
        Baños con microcemento,
        <br />
        sanitarios Ferrum y grifería FV.
      </>
    ),
  },
];

export default function Amenities() {
  const isMobile = useIsMobile();

  return (
    <MediaShowcase
      label="Costavia amenities"
      slides={slides}
      gridImages={isMobile ? mobileOnlyGridImages : gridImages}
    />
  );
}
