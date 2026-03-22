import React from "react";
import { useNavigate } from "react-router-dom";
import { PillButton } from "@/components/echoes/PillButton";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 pb-20 flex flex-col h-screen">
        {/* Greeting */}
        <h1 className="display-screen-title text-echoes-text mb-6">
          Good evening, Sarah
        </h1>

        {/* Emotion Summary Card */}
        <div
          className="rounded-[16px] border-[1.5px] p-4 mb-4 flex gap-2.5"
          style={{
            borderColor: "#7A9E8E40",
            backgroundColor: "#7A9E8E0A",
          }}
        >
          <div className="text-2xl flex-shrink-0">◯</div>
          <div className="text-left flex-1">
            <p className="ui-emotion-label text-echoes-text">
              Feeling sadness
            </p>
            <p className="ui-meta text-echoes-text-muted">
              Checked in 2 hours ago
            </p>
          </div>
        </div>

        {/* Unread Letters Card */}
        <div
          className="rounded-[16px] border-[1px] p-4 mb-8"
          style={{
            borderColor: "#5E8C6A26",
            backgroundColor: "#5E8C6A0A",
          }}
        >
          <div className="flex items-center justify-between">
            <p className="ui-question-option text-echoes-text">
              You have 2 unread letters
            </p>
            <p className="ui-button-secondary text-echoes-sage">Read →</p>
          </div>
        </div>

        {/* Check-in Button */}
        <div className="mb-auto">
          <div className="flex justify-center">
            <PillButton
              variant="primary"
              onClick={() => navigate("/check-in")}
            >
              Check in
            </PillButton>
          </div>
        </div>

        {/* Bottom Stats */}
        <p
          className="ui-meta text-center"
          style={{ color: "rgba(122, 111, 99, 0.5)" }}
        >
          Letters sent: 5 · Letters received: 3
        </p>
      </div>
    </div>
  );
}
