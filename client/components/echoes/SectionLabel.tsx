import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <span className={cn("ui-section-label text-echoes-terracotta", className)}>
      {children}
    </span>
  );
};
