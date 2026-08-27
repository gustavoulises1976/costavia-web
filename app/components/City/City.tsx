"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import CityDesktop from "./CityDesktop";
import CityMobile from "./CityMobile";

export default function City() {
  const isMobile = useIsMobile();

  return isMobile ? <CityMobile /> : <CityDesktop />;
}
