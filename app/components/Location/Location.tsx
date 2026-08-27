"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import LocationDesktop from "./LocationDesktop";
import LocationMobile from "./LocationMobile";

export default function Location() {
  const isMobile = useIsMobile();

  return isMobile ? <LocationMobile /> : <LocationDesktop />;
}
