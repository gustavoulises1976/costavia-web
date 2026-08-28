"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ResidenciasTowersDesktop from "./ResidenciasTowersDesktop";
import ResidenciasTowersMobile from "./ResidenciasTowersMobile";

export default function ResidenciasTowers() {
  const isMobile = useIsMobile();

  return isMobile ? <ResidenciasTowersMobile /> : <ResidenciasTowersDesktop />;
}
