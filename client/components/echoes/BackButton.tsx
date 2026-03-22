import React from "react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

export const BackButton = ({ onClick, className }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-3.5 rounded-[14px] border-[1.5px] border-echoes-border text-echoes-text-muted font-dm-sans font-medium text-[14px]",
        className
      )}
    >
      Back
    </button>
  );
};
