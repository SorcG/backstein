'use client';
import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

export function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("up");

  useEffect(() => {
    let prevY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y - prevY > 6)      setDirection("down");
      else if (prevY - y > 6) setDirection("up");
      prevY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}
