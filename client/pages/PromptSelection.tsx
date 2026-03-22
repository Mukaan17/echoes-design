import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import {
  PromptCardDynamic,
  PromptCardGeneral,
  PromptCardFreeWrite,
} from "@/components/echoes/Cards";

export default function PromptSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-echoes-cream overflow-y-auto">
      <div className="px-7 py-7">
        {/* Header */}
        <SectionLabel className="mb-1 block">YOUR LETTER</SectionLabel>
        <h1 className="display-section-title text-echoes-text mb-1.5">
          Choose a prompt
        </h1>
        <p className="ui-subtitle text-echoes-text-muted mb-5.5">
          Pick one that speaks to you, or write freely.
        </p>

        {/* Prompt Cards */}
        <div className="space-y-2.5 pb-8">
          <PromptCardDynamic
            emotion="sadness"
            emotionColor="#7A9E8E"
            emotionSymbol="◯"
            prompt="If your sadness could speak, what would it want someone to hear?"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => navigate("/letter-compose")}
          />

          <PromptCardGeneral
            prompt="What would you tell someone having the exact day you're having?"
            onClick={() => navigate("/letter-compose")}
          />

          <PromptCardGeneral
            prompt="Describe something small that made you feel something today."
            onClick={() => navigate("/letter-compose")}
          />

          <PromptCardGeneral
            prompt="What's one thing you want someone to know but haven't said out loud?"
            onClick={() => navigate("/letter-compose")}
          />

          <PromptCardFreeWrite onClick={() => navigate("/letter-compose")} />
        </div>
      </div>
    </div>
  );
}
