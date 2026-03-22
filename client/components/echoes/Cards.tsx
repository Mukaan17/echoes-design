import React from "react";
import { cn } from "@/lib/utils";

interface PromptCardDynamicProps {
  emotion: string;
  emotionColor: string;
  emotionSymbol: string;
  prompt: string;
  className?: string;
  onClick?: () => void;
}

export const PromptCardDynamic = ({
  emotion,
  emotionColor,
  emotionSymbol,
  prompt,
  className,
  onClick,
}: PromptCardDynamicProps) => {
  const borderColor = `${emotionColor}40`; // 25% opacity
  const bgColor = `${emotionColor}0A`; // 4% opacity

  return (
    <button
      onClick={onClick}
      style={{
        borderColor,
        backgroundColor: bgColor,
      }}
      className={cn("rounded-[16px] border-[1.5px] p-4 w-full text-left", className)}
    >
      <div
        style={{ color: emotionColor }}
        className="ui-micro mb-1.25"
      >
        {emotionSymbol} FOR YOUR {emotion.toUpperCase()}
      </div>
      <p className="body-prompt-dynamic text-echoes-text">{prompt}</p>
    </button>
  );
};

interface PromptCardGeneralProps {
  prompt: string;
  className?: string;
  onClick?: () => void;
}

export const PromptCardGeneral = ({
  prompt,
  className,
  onClick,
}: PromptCardGeneralProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[16px] border-[1.5px] border-echoes-border p-3 px-4 w-full text-left",
        className
      )}
    >
      <p className="body-prompt-general text-echoes-text">{prompt}</p>
    </button>
  );
};

interface PromptCardFreeWriteProps {
  className?: string;
  onClick?: () => void;
}

export const PromptCardFreeWrite = ({
  className,
  onClick,
}: PromptCardFreeWriteProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-[16px] border-[1.5px] border-dashed border-echoes-border py-3 px-4",
        className
      )}
    >
      <span className="ui-button-secondary text-echoes-text-muted">
        ✎ Free write
      </span>
    </button>
  );
};

interface DeliveryEstimateCardProps {
  className?: string;
}

export const DeliveryEstimateCard = ({ className }: DeliveryEstimateCardProps) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(var(--echoes-sage) / 0.03)",
        borderColor: "hsl(var(--echoes-sage) / 0.125)",
      }}
      className={cn(
        "rounded-[16px] border-[1px] px-6 py-3.5",
        className
      )}
    >
      <div className="ui-delivery-label text-echoes-sage mb-1">
        A LETTER WILL FIND YOU
      </div>
      <p className="ui-delivery-time text-echoes-text">
        Expect yours in ~20–45 min
      </p>
      <div className="flex justify-center gap-1 mt-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-echoes-sage"
          />
        ))}
      </div>
    </div>
  );
};

interface WalkthroughIconProps {
  icon: string;
  className?: string;
}

export const WalkthroughIcon = ({ icon, className }: WalkthroughIconProps) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(var(--echoes-sage) / 0.08)",
      }}
      className={cn("w-20 h-20 rounded-full flex items-center justify-center", className)}
    >
      <span className="text-[32px] text-echoes-sage">{icon}</span>
    </div>
  );
};

interface SentIconProps {
  className?: string;
}

export const SentIcon = ({ className }: SentIconProps) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(var(--echoes-sage) / 0.08)",
      }}
      className={cn("w-[72px] h-[72px] rounded-full flex items-center justify-center", className)}
    >
      <span className="text-[28px] text-echoes-sage">✦</span>
    </div>
  );
};
