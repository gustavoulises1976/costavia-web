"use client";

import { useIsMobile } from "../../hooks/useIsMobile";
import PageHeroDesktop from "./PageHeroDesktop";
import PageHeroMobile from "./PageHeroMobile";

export type PageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  bottomPadding?: boolean;
};

export default function PageHero(props: PageHeroProps) {
  const isMobile = useIsMobile();

  return isMobile ? <PageHeroMobile {...props} /> : <PageHeroDesktop {...props} />;
}
