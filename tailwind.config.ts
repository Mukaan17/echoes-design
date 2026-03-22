import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        light: "300",
      },
      colors: {
        // Echoes base colors
        "echoes-bg": "hsl(var(--echoes-bg))",
        "echoes-bg-deep": "hsl(var(--echoes-bg-deep))",
        "echoes-cream": "hsl(var(--echoes-cream))",
        "echoes-text": "hsl(var(--echoes-text))",
        "echoes-text-muted": "hsl(var(--echoes-text-muted))",
        "echoes-terracotta": "hsl(var(--echoes-terracotta))",
        "echoes-sage": "hsl(var(--echoes-sage))",
        "echoes-sage-muted": "hsl(var(--echoes-sage-muted))",
        "echoes-gold": "hsl(var(--echoes-gold))",
        "echoes-gold-muted": "hsl(var(--echoes-gold-muted))",
        "echoes-warm": "hsl(var(--echoes-warm))",
        "echoes-border": "hsl(var(--echoes-border))",
        "echoes-error": "hsl(var(--echoes-error))",
        "echoes-white": "hsl(var(--echoes-white))",
        
        // Emotion colors
        "emotion-joy": "hsl(var(--emotion-joy))",
        "emotion-sadness": "hsl(var(--emotion-sadness))",
        "emotion-anxiety": "hsl(var(--emotion-anxiety))",
        "emotion-anger": "hsl(var(--emotion-anger))",
        "emotion-loneliness": "hsl(var(--emotion-loneliness))",
        "emotion-gratitude": "hsl(var(--emotion-gratitude))",
        "emotion-hope": "hsl(var(--emotion-hope))",
        "emotion-overwhelm": "hsl(var(--emotion-overwhelm))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
