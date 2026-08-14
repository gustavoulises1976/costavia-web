"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import ContactFormDesktop from "./ContactFormDesktop";
import ContactFormMobile from "./ContactFormMobile";

export default function ContactForm() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null;
  }

  return isMobile ? <ContactFormMobile /> : <ContactFormDesktop />;
}
