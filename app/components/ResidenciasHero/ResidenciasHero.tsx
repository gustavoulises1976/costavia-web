"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ResidenciasHeroDesktop from "./ResidenciasHeroDesktop";
import ResidenciasHeroMobile from "./ResidenciasHeroMobile";

export default function ResidenciasHero() {
  const isMobile = useIsMobile();

  return isMobile ? <ResidenciasHeroMobile /> : <ResidenciasHeroDesktop />;
}
