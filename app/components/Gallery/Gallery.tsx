"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import GalleryDesktop from "./GalleryDesktop";
import GalleryMobile from "./GalleryMobile";

export default function Gallery() {
  const isMobile = useIsMobile();

  return isMobile ? <GalleryMobile /> : <GalleryDesktop />;
}
