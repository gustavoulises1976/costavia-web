"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import TowersDesktop from "./TowersDesktop";
import TowersMobile from "./TowersMobile";

export default function Towers() {
  const isMobile = useIsMobile();

  return isMobile ? <TowersMobile /> : <TowersDesktop />;
}
