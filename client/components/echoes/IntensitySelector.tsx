import React from "react";
import { cn } from "@/lib/utils";

type IntensityLevel = "light" | "moderate" | "heavy";

interface IntensitySelectorProps {
  selected?: IntensityLevel;
  onChange?: (level: IntensityLevel) => void;
  className?: string;
}

const labels: Record<IntensityLevel, string> = {
  light: "Light",
  moderate: "Moderate",
  heavy: "Heavy",
};

export const IntensitySelector = ({
  selected = "light",
  onChange,
  className,
}: IntensitySelectorProps) => {
  const levels: IntensityLevel[] = ["light", "moderate", "heavy"];

  return (
    <div className={cn("flex gap-2 w-full", className)}>
      {levels.map((level) => {
        const isSelected = selected === level;
        return (
          <button
            key={level}
            onClick={() => onChange?.(level)}
            className={cn(
              "flex-1 py-2 px-3 rounded-[10px] text-center ui-intensity-label transition-all",
              isSelected
                ? "border-[1.5px] border-echoes-sage text-echoes-sage font-medium bg-echoes-sage/8"
                : "border-[1.5px] border-echoes-border text-echoes-text-muted"
            )}
          >
            {labels[level]}
          </button>
        );
      })}
    </div>
  );
};
