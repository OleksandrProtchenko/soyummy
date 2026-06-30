"use client";

import css from "./Welcome.module.css";

import { Button } from "../ui/Button/Button";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import BackgroundImage from "../ui/BgImage/BgImage";

export default function Welcome() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRegisterClick = () => {
    router.push("/register");
  };
  const handleSignInClick = () => {
    router.push("/signin");
  };
  return (
    <div key={pathname} className={css.welcomeWrapper}>
      <BackgroundImage
        mobile="/welcomePage/welcomeMobile.jpg"
        tablet="/welcomePage/welcomeTablet.jpg"
        desktop="/welcomePage/welcomeDesktop.jpg"
        alt="Welcome Image"
      />
      <div className={`container ${css.welcomeContainer}`}>
        <div className={css.welcomeContent}>
          <div className={css.welcomeLogoWrapper}>
            <Image src="/logo.png" alt="Welcome Icon" fill unoptimized />
          </div>
          <h1 className={css.welcomeTitle}>Welcome to the app!</h1>
          <p className={css.welcomeDescription}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <div className={css.welcomeButtonWrapper}>
            <Button
              type="button"
              text="Registration"
              style="screw"
              variant="primary"
              onClick={handleRegisterClick}
              ariaLabel="Registration"
            />
            <Button
              type="button"
              text="Sign In"
              style="screw"
              variant="empty"
              onClick={handleSignInClick}
              ariaLabel="Sign In"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
