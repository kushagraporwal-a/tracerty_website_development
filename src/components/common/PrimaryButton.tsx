import { ButtonHTMLAttributes } from "react";

import { THEME } from "@/data/theme";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full px-6 py-3 text-base font-medium transition hover:opacity-90 font-oxygen ${className ?? ""}`}
      style={{
        backgroundColor: THEME.colors.primaryOrange,
        color: THEME.colors.backgroundTone,
      }}
    >
      {children}
    </button>
  );
}
