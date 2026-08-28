"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import PlanosLayoutDesktop from "./PlanosLayoutDesktop";
import PlanosLayoutMobile from "./PlanosLayoutMobile";

export default function PlanosLayout() {
  const isMobile = useIsMobile();

  return isMobile ? <PlanosLayoutMobile /> : <PlanosLayoutDesktop />;
}
