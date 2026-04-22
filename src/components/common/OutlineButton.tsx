import { ButtonHTMLAttributes } from "react";

import { THEME } from "@/data/theme";

type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function OutlineButton({
  children,
  className,
  ...props
}: OutlineButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full border px-6 py-3 text-base font-medium transition hover:opacity-90 font-oxygen ${className ?? ""}`}
      style={{
        backgroundColor: THEME.colors.white,
        borderColor: THEME.colors.backgroundDarkTone,
        color: THEME.colors.backgroundDarkTone,
      }}
    >
      {children}
    </button>
  );
}
