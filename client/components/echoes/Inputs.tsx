import React from "react";
import { cn } from "@/lib/utils";

interface ContextTextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  focused?: boolean;
  className?: string;
}

export const ContextTextArea = ({
  value,
  onChange,
  focused = false,
  className,
}: ContextTextAreaProps) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder="Want to share more about what's going on? (optional)"
      className={cn(
        "w-full resize-none rounded-[14px] border-[1.5px] p-[11px_14px] bg-transparent outline-none font-newsreader text-[14px] leading-[150%] text-echoes-text placeholder-echoes-text-muted/50",
        focused ? "border-echoes-sage-muted" : "border-echoes-border",
        className
      )}
      rows={2}
    />
  );
};

interface LetterTextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  focused?: boolean;
  className?: string;
}

export const LetterTextArea = ({
  value,
  onChange,
  focused = false,
  className,
}: LetterTextAreaProps) => {
  const svgPattern = `<svg width="100%" height="26" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="26" x2="100%" y2="26" stroke="rgba(214, 202, 189, 0.19)" stroke-width="1"/></svg>`;
  const encodedSvg = encodeURIComponent(svgPattern);

  return (
    <div className={cn("relative w-full", className)}>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Dear stranger..."
        className={cn(
          "w-full resize-none rounded-[18px] border-[1.5px] p-[18px] bg-cover bg-repeat outline-none font-newsreader text-[15px] leading-[175%] tracking-[0.2px] text-echoes-text placeholder-echoes-text-muted/50 min-h-[240px]",
          focused ? "border-echoes-sage-muted" : "border-echoes-border"
        )}
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--echoes-cream)) 0%, hsl(var(--echoes-bg) / 0.25) 25%), url("data:image/svg+xml,${encodedSvg}")`,
          backgroundSize: "100% 26px",
          backgroundPosition: "0 0, 0 0",
          backgroundAttachment: "local, scroll",
        }}
      />
    </div>
  );
};
