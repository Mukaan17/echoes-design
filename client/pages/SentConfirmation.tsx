import React from "react";
import { useNavigate } from "react-router-dom";
import { SentIcon, DeliveryEstimateCard } from "@/components/echoes/Cards";
import { PillButton } from "@/components/echoes/PillButton";

export default function SentConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-9 py-15 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Icon */}
        <SentIcon />

        {/* Title */}
        <h1 className="display-sent-title text-echoes-text mt-7 mb-3">
          Your letter is traveling
        </h1>

        {/* Body */}
        <p className="body-sent-body text-echoes-text-muted max-w-[280px]">
          It will find someone who needs to hear exactly what you wrote.
        </p>

        {/* Delivery Card */}
        <div className="mt-7 w-full max-w-xs">
          <DeliveryEstimateCard />
        </div>

        {/* Done Button */}
        <div className="mt-9">
          <PillButton
            variant="secondary"
            onClick={() => navigate("/home")}
          >
            Done
          </PillButton>
        </div>
      </div>
    </div>
  );
}
