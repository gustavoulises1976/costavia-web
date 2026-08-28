"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import PHDesktop from "./PHDesktop";
import PHMobile from "./PHMobile";

export default function PH() {
  const isMobile = useIsMobile();

  return isMobile ? <PHMobile /> : <PHDesktop />;
}
