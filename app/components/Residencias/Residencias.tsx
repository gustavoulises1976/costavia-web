"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ResidenciasDesktop from "./ResidenciasDesktop";
import ResidenciasMobile from "./ResidenciasMobile";

export default function Residencias() {
  const isMobile = useIsMobile();

  return isMobile ? <ResidenciasMobile /> : <ResidenciasDesktop />;
}
