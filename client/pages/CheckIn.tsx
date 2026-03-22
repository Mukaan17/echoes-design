import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { EmotionPill } from "@/components/echoes/EmotionPill";
import { IntensitySelector } from "@/components/echoes/IntensitySelector";
import { ContextTextArea } from "@/components/echoes/Inputs";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";

type EmotionType =
  | "joy"
  | "sadness"
  | "anxiety"
  | "anger"
  | "loneliness"
  | "gratitude"
  | "hope"
  | "overwhelm";

export default function CheckIn() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isActive = searchParams.get("variant") === "active";

  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(
    isActive ? "sadness" : null
  );
  const [intensity, setIntensity] = useState("moderate");
  const [context, setContext] = useState("");

  const emotions: EmotionType[] = [
    "joy",
    "sadness",
    "anxiety",
    "anger",
    "loneliness",
    "gratitude",
    "hope",
    "overwhelm",
  ];

  const canContinue = selectedEmotion && (isActive || context === "");

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 flex flex-col h-screen">
        {/* Header */}
        <SectionLabel className="mb-1 block">CHECK-IN</SectionLabel>
        <h1 className="display-screen-title text-echoes-text mb-5">
          How are you <span className="italic">really</span> feeling?
        </h1>

        {/* Emotion Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4.5">
          {emotions.map((emotion) => (
            <EmotionPill
              key={emotion}
              emotion={emotion}
              selected={selectedEmotion === emotion}
              onClick={() => setSelectedEmotion(emotion)}
            />
          ))}
        </div>

        {/* Active Variant - Intensity and Context */}
        {selectedEmotion && (
          <>
            <p className="ui-question-label text-echoes-text-muted mb-2">
              How heavy does it feel?
            </p>
            <IntensitySelector
              selected={intensity as any}
              onChange={setIntensity}
            />

            <div className="mt-4 mb-4">
              <ContextTextArea
                value={context}
                onChange={setContext}
                focused={false}
              />
            </div>
          </>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Continue Button */}
        <FullWidthButton
          enabled={canContinue}
          onClick={() => {
            if (selectedEmotion) {
              navigate("/leading-questions");
            }
          }}
        >
          Continue
        </FullWidthButton>
      </div>
    </div>
  );
}
