import React from "react";
import { useNavigate } from "react-router-dom";
import { PillButton } from "@/components/echoes/PillButton";

export default function LetterReading() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-echoes-cream overflow-y-auto">
      <div className="px-8 py-7 pb-8">
        {/* Header */}
        <p
          className="ui-section-label text-echoes-text-muted mb-2"
          style={{ letterSpacing: "1.5px" }}
        >
          A LETTER FROM NEW YORK
        </p>

        {/* Emotion Info */}
        <div className="flex items-center gap-1.5 mb-6">
          <span className="text-[16px]">◯</span>
          <p className="body-sent-body text-echoes-text-muted">
            Written with sadness
          </p>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 mb-6">
          <p
            className="body-letter-body text-echoes-text"
            style={{ lineHeight: "1.8" }}
          >
            I keep expecting to hear the door open and see them walk in. It's
            been three months and I still set two plates at dinner sometimes.
          </p>
          <p
            className="body-letter-body text-echoes-text"
            style={{ lineHeight: "1.8" }}
          >
            I know it gets easier. I just wish someone would tell me when.
          </p>
          <p
            className="body-letter-body text-echoes-text"
            style={{ lineHeight: "1.8" }}
          >
            But today I found their old sweater in the back of the closet and
            instead of crying I just held it for a while and smiled. Maybe
            that's something.
          </p>
        </div>

        {/* Timestamp */}
        <p className="ui-meta text-echoes-text-muted opacity-60 mb-6">
          Written 3 hours ago
        </p>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-6"
          style={{ backgroundColor: "rgba(214, 202, 189, 0.4)" }}
        />

        {/* Actions */}
        <div className="space-y-3 flex flex-col items-center">
          <PillButton
            variant="primary"
            onClick={() => navigate("/letter-compose")}
          >
            Write back to the universe
          </PillButton>
          <button className="ui-button-secondary text-echoes-text-muted hover:text-echoes-text transition-colors">
            Sit with this
          </button>
        </div>
      </div>
    </div>
  );
}
