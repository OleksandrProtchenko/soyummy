"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import css from "./Background.module.css";

export default function BackgroundImage() {
  const mobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  const tablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439.9px)",
  });

  const src = mobile
    ? "/welcomePage/welcomeMobile.jpg"
    : tablet
      ? "/welcomePage/welcomeTablet.jpg"
      : "/welcomePage/welcomeDesktop.jpg";

  return (
    <Image
      className={css.welcomeBackgroundImage}
      src={src}
      alt="Welcome Image"
      fill
      priority
    />
  );
}
