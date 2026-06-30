"use client";

import css from "./Welcome.module.css";

import { Button } from "../ui/Button/Button";
import BackgroundImage from "./Background/Background";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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
      <BackgroundImage />
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
            />
            <Button
              type="button"
              text="Sign In"
              style="screw"
              variant="empty"
              onClick={handleSignInClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
