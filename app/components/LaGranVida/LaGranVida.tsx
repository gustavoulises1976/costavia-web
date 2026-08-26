"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import LaGranVidaDesktop from "./LaGranVidaDesktop";
import LaGranVidaMobile from "./LaGranVidaMobile";

export default function LaGranVida() {
  const isMobile = useIsMobile();

  return isMobile ? <LaGranVidaMobile /> : <LaGranVidaDesktop />;
}
