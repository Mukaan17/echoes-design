import React from "react";
import { cn } from "@/lib/utils";

interface WalkthroughDotProps {
  active?: boolean;
  className?: string;
}

export const WalkthroughDot = ({ active = false, className }: WalkthroughDotProps) => {
  return (
    <div
      className={cn(
        "rounded-[4px] h-2",
        active ? "w-6 bg-echoes-sage" : "w-2 bg-echoes-border",
        className
      )}
    />
  );
};
