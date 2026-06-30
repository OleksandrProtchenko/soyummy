"use client";

import css from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  style: "screw" | "normal";
  variant: "primary" | "secondary" | "empty";
  text: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export function Button({
  type,
  style,
  variant,
  text,
  onClick,
  className,
  ariaLabel,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${css[style]} ${css[variant]} ${disabled ? css.disabled : ""} ${css.button} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
