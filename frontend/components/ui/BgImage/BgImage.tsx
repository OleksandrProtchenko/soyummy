"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import css from "./BgImage.module.css";

interface BackgroundImageProps {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  alt?: string;
  className?: string;
}

export default function BackgroundImage({
  mobile,
  tablet,
  desktop,
  alt,
  className,
}: BackgroundImageProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439.9px)",
  });

  const src = isMobile ? mobile : isTablet ? tablet : desktop;

  return (
    <Image
      className={`${css.welcomeBackgroundImage} ${className || ""}`}
      src={src || ""}
      alt={alt || ""}
      fill
      priority
    />
  );
}
