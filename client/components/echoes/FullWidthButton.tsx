import React from "react";
import { cn } from "@/lib/utils";

interface FullWidthButtonProps {
  enabled?: boolean;
  variant?: "default" | "sage";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FullWidthButton = ({
  enabled = true,
  variant = "default",
  children,
  onClick,
  className,
}: FullWidthButtonProps) => {
  const isSage = variant === "sage";
  const bgColor = !enabled
    ? "bg-echoes-border"
    : isSage
      ? "bg-echoes-sage"
      : "bg-echoes-terracotta";
  const textColor = !enabled ? "text-echoes-text-muted" : "text-echoes-cream";

  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={cn(
        "w-full py-3.5 px-4 rounded-[14px] font-dm-sans font-medium text-[15px] tracking-[0.3px] text-center",
        bgColor,
        textColor,
        !enabled && "cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};
