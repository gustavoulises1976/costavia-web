"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import CostaviaHeroDesktop from "./CostaviaHeroDesktop";
import CostaviaHeroMobile from "./CostaviaHeroMobile";

export default function CostaviaHero() {
  const isMobile = useIsMobile();

  return isMobile ? <CostaviaHeroMobile /> : <CostaviaHeroDesktop />;
}
