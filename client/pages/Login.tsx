import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";
import { TextField } from "@/components/echoes/AuthInputs";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const isFormValid = email.includes("@") && password.length > 0;

  const handleLogin = () => {
    // Simulate login attempt
    if (email === "demo@echoes.com" && password === "password") {
      setLoginError(false);
      navigate("/home");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="min-h-screen bg-echoes-cream">
      <div className="px-7 py-7 flex flex-col h-screen">
        {/* Header */}
        <SectionLabel className="mb-1 block">WELCOME BACK</SectionLabel>
        <h1 className="display-screen-title text-echoes-text mb-6">
          Sign in
        </h1>

        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@email.com"
        />

        {/* Password Field */}
        <div className="mt-3" />
        <TextField
          label="Password"
          type="password"
          showToggle
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />

        {/* Error Message */}
        {loginError && (
          <div
            className="mt-4 mb-4 rounded-[12px] p-3 px-4 border-[1px]"
            style={{
              backgroundColor: "hsl(var(--echoes-error) / 0.08)",
              borderColor: "hsl(var(--echoes-error) / 0.2)",
            }}
          >
            <p className="ui-subtitle text-echoes-error">
              That email and password don't match. Try again?
            </p>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Sign In Button */}
        <FullWidthButton
          enabled={isFormValid}
          onClick={handleLogin}
        >
          Sign in
        </FullWidthButton>

        {/* Forgot Password Link */}
        <button
          onClick={() => navigate("/forgot-password")}
          className="mt-4 ui-button-secondary text-echoes-text-muted hover:text-echoes-text transition-colors w-full text-center"
        >
          Forgot password?
        </button>
      </div>
    </div>
  );
}
