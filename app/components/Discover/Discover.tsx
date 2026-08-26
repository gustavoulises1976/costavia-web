"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import DiscoverDesktop from "./DiscoverDesktop";
import DiscoverMobile from "./DiscoverMobile";

export default function Discover() {
  const isMobile = useIsMobile();

  return isMobile ? <DiscoverMobile /> : <DiscoverDesktop />;
}
