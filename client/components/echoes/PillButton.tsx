import React from "react";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PillButton = ({
  variant = "primary",
  children,
  onClick,
  className,
}: PillButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-11 py-3.5 rounded-full font-dm-sans font-medium tracking-[0.4px] transition-shadow",
        isPrimary
          ? "bg-echoes-terracotta text-echoes-cream hover:shadow-[0px_6px_24px_rgba(196,120,74,0.35)] shadow-[0px_4px_16px_rgba(196,120,74,0.25)]"
          : "border-[1.5px] border-echoes-border text-echoes-text hover:bg-echoes-bg-deep/30",
        className
      )}
    >
      {isPrimary ? (
        <span className="text-[15px]">{children}</span>
      ) : (
        <span className="text-[14px]">{children}</span>
      )}
    </button>
  );
};
