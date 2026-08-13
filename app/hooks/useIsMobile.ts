"use client";

import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 1024; // matches Tailwind's `md`

const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

const subscribe = (callback: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

export const useIsMobile = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
