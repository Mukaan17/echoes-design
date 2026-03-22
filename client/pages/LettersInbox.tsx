import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";

export default function LettersInbox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isEmpty = searchParams.get("empty") === "true";

  const letters = [
    {
      id: 1,
      location: "New York",
      preview: "I keep expecting to hear the door open and...",
      time: "45 minutes ago",
      emotion: "◯",
      emotionColor: "#7A9E8E",
      isUnread: true,
    },
    {
      id: 2,
      location: "California",
      preview: "Sometimes the hardest part is just asking for help...",
      time: "2 hours ago",
      emotion: "△",
      emotionColor: "#B07156",
      isUnread: false,
    },
    {
      id: 3,
      location: "Portland",
      preview: "You're not alone in this. I promise...",
      time: "1 day ago",
      emotion: "◎",
      emotionColor: "#A8C4A0",
      isUnread: false,
    },
  ];

  if (isEmpty) {
    return (
      <div className="min-h-screen bg-echoes-cream">
        <div className="px-7 py-7 flex flex-col items-center justify-center min-h-screen text-center">
          <p className="text-[36px] text-echoes-border mb-4">◯</p>
          <h2 className="body-letter-body text-echoes-text-muted mb-3">
            No letters yet
          </h2>
          <p className="ui-subtitle text-echoes-text-muted opacity-60 max-w-[260px]">
            Your first letter is on its way. We'll let you know when it arrives.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-echoes-cream overflow-y-auto">
      <div className="px-7 py-7">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <SectionLabel>LETTERS</SectionLabel>
          <div
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#C4784A" }}
          >
            <span className="text-white text-[10px] font-semibold">2</span>
          </div>
        </div>

        {/* Letter List */}
        <div className="space-y-2.5 pb-8">
          {letters.map((letter) => (
            <button
              key={letter.id}
              onClick={() => navigate("/letter-reading")}
              className="w-full text-left"
            >
              <div
                className="rounded-[14px] border-[1.5px] p-3.5 flex gap-3 relative group hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor:
                    letter.isUnread ? "#E8D5C420" : "transparent",
                  borderColor: letter.isUnread ? "#D6CABD" : "#D6CABD",
                }}
              >
                {/* Emotion Circle */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[16px]"
                  style={{
                    backgroundColor: `${letter.emotionColor}19`,
                    color: letter.emotionColor,
                  }}
                >
                  {letter.emotion}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="ui-emotion-label text-echoes-text truncate">
                    A letter from {letter.location}
                  </p>
                  <p className="body-letter-body text-echoes-text-muted text-sm truncate">
                    {letter.preview}
                  </p>
                  <p className="ui-meta text-echoes-text-muted opacity-60">
                    {letter.time}
                  </p>
                </div>

                {/* Unread Dot */}
                {letter.isUnread && (
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: "#C4784A" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
