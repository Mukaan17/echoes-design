import React from "react";
import { cn } from "@/lib/utils";

type EmotionType =
  | "joy"
  | "sadness"
  | "anxiety"
  | "anger"
  | "loneliness"
  | "gratitude"
  | "hope"
  | "overwhelm";

interface EmotionConfig {
  symbol: string;
  label: string;
  description: string;
  colorVar: string;
  colorHex: string;
}

const emotionConfig: Record<EmotionType, EmotionConfig> = {
  joy: {
    symbol: "✦",
    label: "Joy",
    description: "Lightness, happiness, delight",
    colorVar: "emotion-joy",
    colorHex: "#D4A574",
  },
  sadness: {
    symbol: "◯",
    label: "Sadness",
    description: "Heaviness, grief, melancholy",
    colorVar: "emotion-sadness",
    colorHex: "#7A9E8E",
  },
  anxiety: {
    symbol: "◇",
    label: "Anxiety",
    description: "Restless, worried, on edge",
    colorVar: "emotion-anxiety",
    colorHex: "#C4956A",
  },
  anger: {
    symbol: "△",
    label: "Anger",
    description: "Frustration, heat, tension",
    colorVar: "emotion-anger",
    colorHex: "#B07156",
  },
  loneliness: {
    symbol: "◻",
    label: "Loneliness",
    description: "Isolated, disconnected, unseen",
    colorVar: "emotion-loneliness",
    colorHex: "#8BA89A",
  },
  gratitude: {
    symbol: "❋",
    label: "Gratitude",
    description: "Thankful, warm, appreciative",
    colorVar: "emotion-gratitude",
    colorHex: "#C9A84C",
  },
  hope: {
    symbol: "◎",
    label: "Hope",
    description: "Looking forward, believing",
    colorVar: "emotion-hope",
    colorHex: "#A8C4A0",
  },
  overwhelm: {
    symbol: "▣",
    label: "Overwhelm",
    description: "Too much, drowning, scattered",
    colorVar: "emotion-overwhelm",
    colorHex: "#B8907A",
  },
};

interface EmotionPillProps {
  emotion: EmotionType;
  selected?: boolean;
  onClick?: () => void;
}

export const EmotionPill = ({
  emotion,
  selected = false,
  onClick,
}: EmotionPillProps) => {
  const config = emotionConfig[emotion];
  const emotionColor = `hsl(var(--${config.colorVar}))`;

  const bgStyle = selected
    ? {
        backgroundColor: `${config.colorHex}12`, // 7% opacity
      }
    : {};

  const borderColor = selected ? config.colorHex : "#D6CABD";
  const textColor = selected ? "#3D3228" : "#7A6F63";

  return (
    <button
      onClick={onClick}
      style={{
        borderColor,
        ...bgStyle,
      }}
      className="flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] border-[1.5px] bg-transparent"
    >
      <span
        style={{ color: emotionColor }}
        className="text-[18px] w-[18px] text-center flex-shrink-0"
      >
        {config.symbol}
      </span>
      <div className="flex flex-col gap-[1px] text-left">
        <span
          style={{ color: textColor }}
          className="ui-emotion-label"
        >
          {config.label}
        </span>
        <span className="ui-emotion-desc opacity-70" style={{ color: textColor }}>
          {config.description}
        </span>
      </div>
    </button>
  );
};
