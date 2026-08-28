"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcase from "../MediaShowcase/MediaShowcase";

const slides = [
  "/images/resi3.png",
  "/images/resi31.png",
  "/images/resi32.png",
  "/images/resi33.png",
  "/images/resi34.png",
  "/images/resi35.png",
  "/images/resi36.png",
];

const mobileOnlyGridImages = [
  {
    src: "/images/balcones-mobile.jpg",
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
    src: "/images/ext-mobile.jpeg",
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
    src: "/images/banos-mobile.jpg",
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

const gridImages = [
  {
    src: "/images/resi4.png",
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
    src: "/images/resi5.png",
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
    src: "/images/resi6.jpg",
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
      gridImages={
        isMobile ? [...mobileOnlyGridImages, ...gridImages] : gridImages
      }
    />
  );
}
