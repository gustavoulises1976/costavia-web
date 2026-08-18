"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ProyectoHeroDesktop from "./ProyectoHeroDesktop";
import ProyectoHeroMobile from "./ProyectoHeroMobile";

export default function ProyectoHero() {
  const isMobile = useIsMobile();

  return isMobile ? <ProyectoHeroMobile /> : <ProyectoHeroDesktop />;
}
