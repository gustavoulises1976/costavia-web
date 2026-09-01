"use client";

import type { CSSProperties, ReactNode } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcaseDesktop from "./MediaShowcaseDesktop";
import MediaShowcaseMobile from "./MediaShowcaseMobile";

export type MediaShowcaseGridImage = {
  src: string;
  alt: string;
  caption: ReactNode;
  /**
   * Estilo del <Image> en mobile, se mergea encima del `objectFit: "cover"`.
   * El desktop lo ignora. Mismas reglas que `MediaShowcaseSlide.mobileStyle`.
   */
  mobileStyle?: CSSProperties;
};

export type MediaShowcaseSlide = {
  src: string;
  /**
   * Estilo del <Image> en mobile, se mergea encima del `objectFit: "cover"`.
   * El desktop lo ignora: el recorte vertical rara vez sirve en horizontal.
   *
   * Para reencuadrar, `objectPosition`. Ojo con el sentido: con `cover` la
   * imagen desborda el contenedor, así que un porcentaje MÁS BAJO la corre
   * hacia la DERECHA / ABAJO y uno más alto al revés. "50% 50%" es el centro.
   * Solo mueve en el eje donde efectivamente hay sobrante.
   */
  mobileStyle?: CSSProperties;
};

export type MediaShowcaseProps = {
  label: string;
  slides: MediaShowcaseSlide[];
  gridImages?: MediaShowcaseGridImage[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function MediaShowcase(props: MediaShowcaseProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MediaShowcaseMobile {...props} />
  ) : (
    <MediaShowcaseDesktop {...props} />
  );
}
