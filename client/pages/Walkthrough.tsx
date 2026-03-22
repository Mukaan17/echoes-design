import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { WalkthroughDot } from "@/components/echoes/WalkthroughDot";
import { WalkthroughIcon } from "@/components/echoes/Cards";
import { BackButton } from "@/components/echoes/BackButton";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";

interface Step {
  icon: string;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    icon: "✉",
    title: "Letters aren't messages",
    body: "They're anonymous notes exchanged between people who might understand what the other is feeling. No profiles. No pressure.",
  },
  {
    icon: "◈",
    title: "Matched thoughtfully",
    body: "Your letter reaches someone whose emotional world resonates with yours. Not random — intentional.",
  },
  {
    icon: "↻",
    title: "No pressure to respond",
    body: "Read. Sit with it. Write back to the universe if you want. This isn't a conversation — it's a connection.",
  },
];

export default function WalkthroughPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get("step");
  const [currentStep, setCurrentStep] = useState(
    stepParam ? parseInt(stepParam) - 1 : 0
  );

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      navigate("/prompt-selection");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/check-in");
    }
  };

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-8 py-10 flex flex-col h-screen">
        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <WalkthroughIcon icon={step.icon} />
          <h1 className="display-section-title text-echoes-text text-center mt-7 mb-3.5">
            {step.title}
          </h1>
          <p
            className="body-walkthrough text-echoes-text-muted text-center max-w-[300px]"
            style={{ lineHeight: "1.65" }}
          >
            {step.body}
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mb-7">
          {steps.map((_, idx) => (
            <WalkthroughDot key={idx} active={idx === currentStep} />
          ))}
        </div>

        {/* Button Row */}
        <div className="flex gap-2.5">
          {currentStep > 0 && (
            <BackButton onClick={handleBack} />
          )}
          <FullWidthButton
            variant="sage"
            enabled={true}
            onClick={handleNext}
          >
            {isLastStep ? "Start writing" : "Next"}
          </FullWidthButton>
        </div>
      </div>
    </div>
  );
}
