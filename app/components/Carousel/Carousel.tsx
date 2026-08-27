"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";

export default function Carousel() {
  const isMobile = useIsMobile();

  return isMobile ? <CarouselMobile /> : <CarouselDesktop />;
}
