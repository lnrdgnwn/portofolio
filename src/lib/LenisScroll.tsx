"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []); // Hanya dijalankan di client-side

  return null; // Tidak ada elemen yang perlu dirender
};

export default LenisScroll;
