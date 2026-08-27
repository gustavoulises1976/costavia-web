"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import LifestyleDesktop from "./LifestyleDesktop";
import LifestyleMobile from "./LifestyleMobile";

export default function Lifestyle() {
  const isMobile = useIsMobile();

  return isMobile ? <LifestyleMobile /> : <LifestyleDesktop />;
}
