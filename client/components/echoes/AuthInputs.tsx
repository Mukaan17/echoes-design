import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  step: number;
  total?: number;
  className?: string;
}

export const ProgressBar = ({
  step,
  total = 5,
  className,
}: ProgressBarProps) => {
  const percentage = (step / total) * 100;

  return (
    <div
      className={cn(
        "w-full h-1 rounded-[2px] bg-echoes-border overflow-hidden",
        className
      )}
    >
      <div
        style={{
          width: `${percentage}%`,
        }}
        className="h-full bg-echoes-terracotta transition-all duration-300"
      />
    </div>
  );
};

interface TextFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password";
  label?: string;
  error?: string;
  helperText?: string;
  showToggle?: boolean;
  className?: string;
}

export const TextField = ({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
  error,
  helperText,
  showToggle = false,
  className,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  const borderColor = error
    ? "border-echoes-error"
    : isFocused
      ? "border-echoes-sage-muted"
      : "border-echoes-border";

  return (
    <div className={className}>
      {label && (
        <label className="ui-question-label text-echoes-text-muted mb-1.5 block">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full rounded-[14px] border-[1.5px] p-3.5 bg-transparent outline-none font-dm-sans text-[15px] text-echoes-text placeholder-echoes-text-muted/50 transition-colors",
            borderColor,
            showToggle && type === "password" ? "pr-12" : ""
          )}
        />

        {showToggle && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-echoes-text-muted hover:text-echoes-text transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <span className="text-[20px]">{showPassword ? "👁" : "👁‍🗨"}</span>
          </button>
        )}
      </div>

      {error ? (
        <p className="ui-meta text-echoes-error mt-2">{error}</p>
      ) : helperText ? (
        <p className="ui-meta text-echoes-text-muted mt-2">{helperText}</p>
      ) : null}
    </div>
  );
};

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export const PasswordStrength = ({
  password,
  className,
}: PasswordStrengthProps) => {
  const hasMinLength = password.length >= 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);

  const dots = [hasMinLength, hasLetters, hasNumbers];

  return (
    <div className={cn("flex gap-1.5", className)}>
      {dots.map((isFilled, idx) => (
        <div
          key={idx}
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-colors",
            isFilled ? "bg-echoes-terracotta" : "bg-echoes-border"
          )}
        />
      ))}
    </div>
  );
};
