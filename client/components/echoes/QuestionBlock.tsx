import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface QuestionOption {
  id: string;
  icon: string;
  label: string;
}

interface QuestionBlockProps {
  question: string;
  options: QuestionOption[];
  accentColor: string;
  accentColorHex: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export const QuestionBlock = ({
  question,
  options,
  accentColor,
  accentColorHex,
  selectedId,
  onSelect,
}: QuestionBlockProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="ui-question-label text-echoes-text-muted mb-2">
        {question}
      </label>
      <div className="flex flex-col gap-1.5">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          const bgColor = isSelected ? `${accentColorHex}0F` : "transparent"; // 6% opacity
          const borderColor = isSelected ? accentColorHex : "#D6CABD";
          const iconBgColor = isSelected
            ? `${accentColorHex}20`
            : "#D6CABD5F"; // 12.5% vs 37% opacity
          const iconColor = isSelected ? accentColorHex : "#7A6F63";
          const textColor = isSelected ? "#3D3228" : "#7A6F63";
          const fontWeight = isSelected ? 500 : 400;

          return (
            <button
              key={option.id}
              onClick={() => onSelect?.(option.id)}
              style={{
                borderColor,
                backgroundColor: bgColor,
              }}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[12px] border-[1.5px]"
            >
              <div
                style={{
                  backgroundColor: iconBgColor,
                  color: iconColor,
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-dm-sans"
              >
                {option.icon}
              </div>
              <span
                style={{
                  color: textColor,
                  fontWeight,
                }}
                className="ui-question-option text-left"
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
