import React from "react";
import { useNavigate } from "react-router-dom";
import { WalkthroughIcon } from "@/components/echoes/Cards";
import { PillButton } from "@/components/echoes/PillButton";

export default function Intervention() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-echoes-cream overflow-hidden">
      {/* Subtle Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(94, 140, 106, 0.03)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-9 py-12">
        <div className="text-center max-w-[300px]">
          {/* Icon */}
          <div className="flex justify-center">
            <WalkthroughIcon icon="❤" />
          </div>

          {/* Title */}
          <h1 className="display-screen-title text-echoes-text mt-7 mb-3">
            We care about you
          </h1>

          {/* Body Text */}
          <p className="body-walkthrough text-echoes-text-muted">
            It sounds like you might be going through something really difficult
            right now. You don't have to go through it alone.
          </p>

          {/* Resources Card */}
          <div className="rounded-[16px] border-[1px] border-echoes-border bg-white p-5 mt-7 space-y-4">
            {/* Resource 1 */}
            <div>
              <p className="ui-emotion-label text-echoes-text">
                988 Suicide & Crisis Lifeline
              </p>
              <p className="ui-question-option text-echoes-sage">
                Call or text 988
              </p>
            </div>

            {/* Resource 2 */}
            <div>
              <p className="ui-emotion-label text-echoes-text">
                Crisis Text Line
              </p>
              <p className="ui-question-option text-echoes-sage">
                Text HOME to 741741
              </p>
            </div>
          </div>

          {/* Confidence Text */}
          <p className="ui-meta text-echoes-text-muted opacity-60 mt-2">
            Free, confidential, available 24/7.
          </p>

          {/* Validation Text */}
          <p className="body-sent-body text-echoes-text-muted mt-6">
            Your letter wasn't sent, but your feelings are valid.
          </p>

          {/* Continue Button */}
          <div className="mt-7">
            <PillButton
              variant="secondary"
              onClick={() => navigate("/check-in")}
            >
              Continue
            </PillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
