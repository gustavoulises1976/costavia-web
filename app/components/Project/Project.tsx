"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

export default function Project() {
  const isMobile = useIsMobile();

  return isMobile ? <ProjectMobile /> : <ProjectDesktop />;
}
