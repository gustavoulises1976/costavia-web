"use client";

import type { CSSProperties } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import PageHeroDesktop from "./PageHeroDesktop";
import PageHeroMobile from "./PageHeroMobile";

export type PageHeroProps = {
  imageSrc: string;
  /** Imagen para mobile. Si no se pasa, se usa `imageSrc`. */
  mobileImageSrc?: string;
  imageAlt: string;
  title: string;
  bottomPadding?: boolean;
  /**
   * Estilo del <Image> en mobile, se mergea encima del `objectFit: "cover"`.
   * Es propio de mobile porque el recorte vertical rara vez sirve en desktop.
   *
   * Para reencuadrar, `objectPosition`. Ojo con el sentido: con `cover` la
   * imagen desborda el contenedor, así que un porcentaje MÁS BAJO la corre
   * hacia la DERECHA / ABAJO (se ve más del lado izquierdo / arriba) y uno más
   * alto la corre al revés. "50% 50%" es el centro.
   */
  mobileImageStyle?: CSSProperties;
};

export default function PageHero(props: PageHeroProps) {
  const isMobile = useIsMobile();

  return isMobile ? <PageHeroMobile {...props} /> : <PageHeroDesktop {...props} />;
}
