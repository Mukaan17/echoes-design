import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";
import { TextField } from "@/components/echoes/AuthInputs";
import { WalkthroughIcon } from "@/components/echoes/Cards";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const isValidEmail = email.includes("@");

  // Form State
  if (!sent) {
    return (
      <div className="min-h-screen bg-echoes-cream">
        <div className="px-7 py-7 flex flex-col h-screen">
          {/* Header */}
          <SectionLabel className="mb-1 block">RESET PASSWORD</SectionLabel>
          <h1 className="display-section-title text-echoes-text mb-1">
            Reset your password
          </h1>
          <p className="ui-subtitle text-echoes-text-muted mb-6">
            We'll send you a link to create a new one.
          </p>

          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@email.com"
          />

          {/* Spacer */}
          <div className="flex-1" />

          {/* Send Button */}
          <FullWidthButton
            enabled={isValidEmail}
            onClick={() => setSent(true)}
          >
            Send reset link
          </FullWidthButton>
        </div>
      </div>
    );
  }

  // Sent State
  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 flex flex-col h-screen items-center justify-center text-center">
        <WalkthroughIcon icon="✉" className="mb-6" />
        <h1 className="display-section-title text-echoes-text mb-2">
          Check your email
        </h1>
        <p className="ui-subtitle text-echoes-text-muted max-w-[280px]">
          We sent you a link to reset your password.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-8 ui-button-secondary text-echoes-text-muted hover:text-echoes-text transition-colors"
        >
          Back to sign in
        </button>
      </div>
    </div>
  );
}
