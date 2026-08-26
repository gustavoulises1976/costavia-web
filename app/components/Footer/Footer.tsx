"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}
