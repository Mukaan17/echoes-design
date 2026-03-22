import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";
import { BackButton } from "@/components/echoes/BackButton";
import {
  ProgressBar,
  TextField,
  PasswordStrength,
} from "@/components/echoes/AuthInputs";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [region, setRegion] = useState("");

  // Email validation
  const isValidEmail =
    email.length > 0 && email.includes("@") && email.includes(".");
  const emailError =
    email.length > 0 && !isValidEmail ? "That doesn't look right" : "";

  // DOB and age validation
  const calculateAge = (dateString: string): number | null => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return null;

    const [month, day, year] = dateString.split("/").map(Number);
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge(dob);
  const isTooYoung = age !== null && age < 13;
  const isDobValid = dob.length >= 8;

  const regions = [
    "New York",
    "California",
    "Texas",
    "Florida",
    "Illinois",
    "Pennsylvania",
    "Ontario",
    "London",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 flex flex-col h-screen">
        {/* Progress Bar */}
        <ProgressBar step={step} total={5} className="mb-6" />

        {/* Section Label */}
        <SectionLabel className="mb-1 block">CREATE ACCOUNT</SectionLabel>

        {/* STEP 1: Name */}
        {step === 1 && (
          <>
            <h1 className="display-screen-title text-echoes-text mb-6">
              What should we call you?
            </h1>

            <TextField
              value={name}
              onChange={setName}
              placeholder="Your first name"
              helperText="This is just for us to personalize your experience. Other users won't see it."
            />

            <div className="flex-1" />

            <div className="flex gap-2.5">
              <BackButton onClick={() => navigate("/welcome")} />
              <div className="flex-1">
                <FullWidthButton
                  enabled={name.length >= 2}
                  onClick={() => setStep(2)}
                >
                  Continue
                </FullWidthButton>
              </div>
            </div>
          </>
        )}

        {/* STEP 2: Email */}
        {step === 2 && (
          <>
            <h1 className="display-screen-title text-echoes-text mb-6">
              Your email
            </h1>

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@email.com"
              error={emailError}
              helperText={
                !emailError
                  ? "We'll use this to keep your account safe. We don't share it."
                  : undefined
              }
            />

            <div className="flex-1" />

            <div className="flex gap-2.5">
              <BackButton onClick={() => setStep(1)} />
              <div className="flex-1">
                <FullWidthButton
                  enabled={isValidEmail}
                  onClick={() => setStep(3)}
                >
                  Continue
                </FullWidthButton>
              </div>
            </div>
          </>
        )}

        {/* STEP 3: Password */}
        {step === 3 && (
          <>
            <h1 className="display-screen-title text-echoes-text mb-6">
              Create a password
            </h1>

            <TextField
              label="Password"
              type="password"
              showToggle
              value={password}
              onChange={setPassword}
              placeholder="At least 8 characters"
              helperText="At least 8 characters with a number"
            />

            <PasswordStrength password={password} className="mt-2.5" />

            <div className="flex-1" />

            <div className="flex gap-2.5">
              <BackButton onClick={() => setStep(2)} />
              <div className="flex-1">
                <FullWidthButton
                  enabled={password.length >= 8 && /\d/.test(password)}
                  onClick={() => setStep(4)}
                >
                  Continue
                </FullWidthButton>
              </div>
            </div>
          </>
        )}

        {/* STEP 4: Date of Birth */}
        {step === 4 && (
          <>
            <h1 className="display-screen-title text-echoes-text mb-6">
              When were you born?
            </h1>

            <TextField
              value={dob}
              onChange={setDob}
              placeholder="MM / DD / YYYY"
              helperText={
                isTooYoung
                  ? undefined
                  : "We ask this to keep our community safe."
              }
            />

            {isTooYoung && (
              <p className="ui-meta text-echoes-text-muted mt-2">
                Echoes is designed for people 13 and older. We hope to see you
                when you're ready.
              </p>
            )}

            <div className="flex-1" />

            <div className="flex gap-2.5">
              <BackButton onClick={() => setStep(3)} />
              <div className="flex-1">
                <FullWidthButton
                  enabled={isDobValid && !isTooYoung}
                  onClick={() => setStep(5)}
                >
                  Continue
                </FullWidthButton>
              </div>
            </div>
          </>
        )}

        {/* STEP 5: Region */}
        {step === 5 && (
          <>
            <h1 className="display-screen-title text-echoes-text mb-6">
              Where are you from?
            </h1>

            <div>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-[14px] border-[1.5px] border-echoes-border p-3.5 bg-transparent font-dm-sans text-[15px] text-echoes-text outline-none appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%237A6F63' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: "40px",
                }}
              >
                <option value="">Select your state or region</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <p className="ui-meta text-echoes-text-muted mt-2">
                This helps connect your letters to a place. You can skip this.
              </p>
            </div>

            <div className="flex-1" />

            <div className="flex gap-2.5">
              <button
                onClick={() => navigate("/home")}
                className="px-5 py-3.5 rounded-[14px] border-[1.5px] border-echoes-border text-echoes-text-muted font-dm-sans font-medium text-[14px] hover:bg-echoes-bg-deep/30 transition-colors"
              >
                Skip
              </button>
              <div className="flex-1">
                <FullWidthButton
                  enabled={!!region}
                  onClick={() => navigate("/home")}
                >
                  Continue
                </FullWidthButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
