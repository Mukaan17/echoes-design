import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { LetterTextArea } from "@/components/echoes/Inputs";
import { PillButton } from "@/components/echoes/PillButton";

export default function LetterCompose() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isActive = searchParams.get("variant") === "active";

  const defaultValue = isActive
    ? "Dear stranger, I don't know who you are, but I hope you know that the heaviness you might be feeling right now doesn't define you. I've been there. Some days the weight feels like it'll never lift..."
    : "";

  const [letterValue, setLetterValue] = useState(defaultValue);

  const wordCount = letterValue
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const isEnabled = letterValue.trim().length > 0;

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 flex flex-col h-screen">
        {/* Header */}
        <SectionLabel className="mb-2.5 block">WRITING A LETTER</SectionLabel>

        {/* Prompt Display */}
        <div
          className="rounded-[12px] border-[1px] p-3.5 mb-3.5"
          style={{
            borderColor: "#7A9E8E40",
            backgroundColor: "#7A9E8E0A",
          }}
        >
          <p className="body-prompt-dynamic text-echoes-text">
            If your sadness could speak, what would it want someone to hear?
          </p>
        </div>

        {/* Letter Text Area */}
        <div className="flex-1 mb-3.5">
          <LetterTextArea value={letterValue} onChange={setLetterValue} />
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between">
          <p className="ui-meta text-echoes-text-muted opacity-60">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </p>
          <PillButton
            variant={isEnabled ? "primary" : "secondary"}
            onClick={() => {
              if (isEnabled) {
                navigate("/sent-confirmation");
              }
            }}
          >
            Send into the world
          </PillButton>
        </div>
      </div>
    </div>
  );
}
