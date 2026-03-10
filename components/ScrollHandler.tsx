"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Aguarda a página ser renderizada
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Usa scrollIntoView com comportamento suave
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

