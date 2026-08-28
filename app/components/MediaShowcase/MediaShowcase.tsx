"use client";

import { ReactNode } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import MediaShowcaseDesktop from "./MediaShowcaseDesktop";
import MediaShowcaseMobile from "./MediaShowcaseMobile";

export type MediaShowcaseGridImage = {
  src: string;
  alt: string;
  caption: ReactNode;
};

export type MediaShowcaseProps = {
  label: string;
  slides: string[];
  gridImages?: MediaShowcaseGridImage[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function MediaShowcase(props: MediaShowcaseProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MediaShowcaseMobile {...props} />
  ) : (
    <MediaShowcaseDesktop {...props} />
  );
}
