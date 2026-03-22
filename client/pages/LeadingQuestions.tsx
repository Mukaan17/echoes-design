import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { QuestionBlock } from "@/components/echoes/QuestionBlock";
import { BackButton } from "@/components/echoes/BackButton";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";

export default function LeadingQuestions() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") === "some-selected";

  const [q1, setQ1] = useState(variant ? "q1-3" : null);
  const [q2, setQ2] = useState(variant ? "q2-2" : null);
  const [q3, setQ3] = useState(null);

  const hasSelections = q1 || q2 || q3;

  return (
    <div className="min-h-screen bg-echoes-cream overflow-y-auto">
      <div className="px-7 py-7 flex flex-col min-h-screen">
        {/* Header */}
        <SectionLabel className="mb-1 block">A LITTLE MORE CONTEXT</SectionLabel>
        <h1 className="display-section-title text-echoes-text mb-1">
          Help us find your letter
        </h1>
        <p className="ui-subtitle text-echoes-text-muted mb-5.5">
          These help us match you thoughtfully. Skip any you'd rather not
          answer.
        </p>

        {/* Question Blocks */}
        <div className="space-y-5">
          <QuestionBlock
            question="Is this feeling new?"
            options={[
              { id: "q1-1", icon: "·", label: "Hit me today" },
              { id: "q1-2", icon: "··", label: "Been building this week" },
              {
                id: "q1-3",
                icon: "···",
                label: "I've been carrying this",
              },
            ]}
            accentColor="sadness"
            accentColorHex="#7A9E8E"
            selectedId={q1 || undefined}
            onSelect={setQ1}
          />

          <QuestionBlock
            question="Are you going through this with support?"
            options={[
              {
                id: "q2-1",
                icon: "◐",
                label: "I have people around me",
              },
              {
                id: "q2-2",
                icon: "◑",
                label: "I'm on my own with this",
              },
            ]}
            accentColor="sage"
            accentColorHex="#5E8C6A"
            selectedId={q2 || undefined}
            onSelect={setQ2}
          />

          <QuestionBlock
            question="What would feel good right now?"
            options={[
              { id: "q3-1", icon: "≈", label: "Someone who gets it" },
              { id: "q3-2", icon: "↗", label: "Something hopeful" },
              {
                id: "q3-3",
                icon: "↓",
                label: "Just get this off my chest",
              },
            ]}
            accentColor="gratitude"
            accentColorHex="#C9A84C"
            selectedId={q3 || undefined}
            onSelect={setQ3}
          />
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-3" />

        {/* Button Row */}
        <div className="flex gap-2.5 mt-4">
          <BackButton onClick={() => navigate("/check-in")} />
          <FullWidthButton
            enabled={true}
            onClick={() => navigate("/walkthrough?step=1")}
          >
            {variant ? "Continue" : "Skip for now"}
          </FullWidthButton>
        </div>
      </div>
    </div>
  );
}
