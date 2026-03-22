import React from "react";
import { useNavigate } from "react-router-dom";
import { PillButton } from "@/components/echoes/PillButton";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-echoes-cream overflow-hidden">
      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 30% 20%, rgba(196,120,74,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 80% 80%, rgba(94,140,106,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center max-w-xs">
          {/* Symbol */}
          <div
            className="text-[48px] leading-none tracking-[2px]"
            style={{ color: "#C4784A" }}
          >
            ◯
          </div>

          {/* Title */}
          <h1 className="display-app-name text-echoes-text mt-3 mb-2">
            Echoes
          </h1>

          {/* Tagline */}
          <p className="body-tagline text-echoes-text-muted">
            feel heard, without being seen
          </p>

          {/* Check-in Button */}
          <div className="mt-[60px]">
            <PillButton
              variant="primary"
              onClick={() => navigate("/check-in")}
            >
              Check in
            </PillButton>
          </div>

          {/* Version Text */}
          <p
            className="ui-meta mt-20"
            style={{ color: "rgba(122, 111, 99, 0.6)", letterSpacing: "0.5px" }}
          >
            MVP Prototype v2
          </p>
        </div>
      </div>
    </div>
  );
}
