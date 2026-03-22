import React, { useState } from "react";
import { PillButton } from "@/components/echoes/PillButton";
import { FullWidthButton } from "@/components/echoes/FullWidthButton";
import { BackButton } from "@/components/echoes/BackButton";
import { EmotionPill } from "@/components/echoes/EmotionPill";
import { IntensitySelector } from "@/components/echoes/IntensitySelector";
import { QuestionBlock } from "@/components/echoes/QuestionBlock";
import { WalkthroughDot } from "@/components/echoes/WalkthroughDot";
import { SectionLabel } from "@/components/echoes/SectionLabel";
import {
  PromptCardDynamic,
  PromptCardGeneral,
  PromptCardFreeWrite,
  DeliveryEstimateCard,
  WalkthroughIcon,
  SentIcon,
} from "@/components/echoes/Cards";
import { ContextTextArea, LetterTextArea } from "@/components/echoes/Inputs";

const colorTokens = [
  { name: "Echoes/bg", hex: "#F5EDE4" },
  { name: "Echoes/bg-deep", hex: "#EDE3D7" },
  { name: "Echoes/cream", hex: "#FAF6F1" },
  { name: "Echoes/text", hex: "#3D3228" },
  { name: "Echoes/text-muted", hex: "#7A6F63" },
  { name: "Echoes/terracotta", hex: "#C4784A" },
  { name: "Echoes/sage", hex: "#5E8C6A" },
  { name: "Echoes/sage-muted", hex: "#8BA89A" },
  { name: "Echoes/gold", hex: "#C9A84C" },
  { name: "Echoes/gold-muted", hex: "#D4BA7A" },
  { name: "Echoes/warm", hex: "#E8D5C4" },
  { name: "Echoes/border", hex: "#D6CABD" },
  { name: "Echoes/error", hex: "#C75050" },
  { name: "Echoes/white", hex: "#FFFFFF" },
];

const emotionColors = [
  { name: "joy", hex: "#D4A574" },
  { name: "sadness", hex: "#7A9E8E" },
  { name: "anxiety", hex: "#C4956A" },
  { name: "anger", hex: "#B07156" },
  { name: "loneliness", hex: "#8BA89A" },
  { name: "gratitude", hex: "#C9A84C" },
  { name: "hope", hex: "#A8C4A0" },
  { name: "overwhelm", hex: "#B8907A" },
];

export default function Index() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState("light");
  const [selectedQuestion1, setSelectedQuestion1] = useState<string | null>(null);
  const [selectedQuestion2, setSelectedQuestion2] = useState<string | null>(null);
  const [selectedQuestion3, setSelectedQuestion3] = useState<string | null>(null);
  const [contextValue, setContextValue] = useState("");
  const [letterValue, setLetterValue] = useState("");

  return (
    <div className="min-h-screen bg-echoes-cream">
      {/* Header */}
      <div className="bg-echoes-bg-deep px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="display-app-name text-echoes-text mb-2">Echoes</h1>
          <p className="body-tagline text-echoes-text-muted">
            A mobile wellness design system for emotional expression
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 py-8 space-y-12 max-w-4xl mx-auto pb-16">
        {/* Color Tokens Section */}
        <section>
          <SectionLabel className="mb-6 block">Color Tokens</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {colorTokens.map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                <div
                  style={{ backgroundColor: color.hex }}
                  className="w-[60px] h-[60px] rounded-[8px] border-2 border-echoes-border shadow-sm mb-2"
                />
                <p className="text-xs text-center text-echoes-text-muted font-dm-sans font-medium">
                  {color.name}
                </p>
                <p className="text-xs text-center text-echoes-text-muted opacity-75">
                  {color.hex}
                </p>
              </div>
            ))}
          </div>

          {/* Emotion Colors */}
          <div className="mt-8">
            <h3 className="display-section-title text-echoes-text mb-4">
              Emotion Colors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {emotionColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center">
                  <div
                    style={{ backgroundColor: color.hex }}
                    className="w-[60px] h-[60px] rounded-[8px] border-2 border-echoes-border shadow-sm mb-2"
                  />
                  <p className="text-xs text-center text-echoes-text-muted font-dm-sans font-medium capitalize">
                    {color.name}
                  </p>
                  <p className="text-xs text-center text-echoes-text-muted opacity-75">
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <SectionLabel className="mb-6 block">Typography</SectionLabel>

          <div className="space-y-4">
            <div>
              <p className="ui-section-label text-echoes-terracotta mb-2">
                Display Styles
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="display-app-name text-echoes-text">
                    App Name (Newsreader Light 300, 36px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="display-screen-title text-echoes-text">
                    Screen Title (Newsreader Light 300, 26px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="display-section-title text-echoes-text">
                    Section Title (Newsreader Light 300, 24px)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-2">
                Body Styles
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="body-tagline text-echoes-text">
                    This is a tagline (Newsreader Italic 400, 15px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="body-letter-body text-echoes-text">
                    This is letter body text (Newsreader Regular 400, 15px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="body-prompt-dynamic text-echoes-text">
                    This is a dynamic prompt (Newsreader Italic 400, 14.5px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="body-prompt-general text-echoes-text">
                    This is a general prompt (Newsreader Regular 400, 14px)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-2">
                UI Styles
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="ui-button-primary text-echoes-text">
                    Button Primary (DM Sans Medium 500, 15px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="ui-button-secondary text-echoes-text">
                    Button Secondary (DM Sans Medium 500, 14px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="ui-emotion-label text-echoes-text">
                    Emotion Label (DM Sans Medium 500, 13.5px)
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-echoes-border">
                  <p className="ui-question-label text-echoes-text">
                    Question Label (DM Sans Medium 500, 13px)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <SectionLabel className="mb-6 block">Components / Buttons</SectionLabel>

          <div className="space-y-4">
            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Pill Buttons
              </p>
              <div className="flex flex-wrap gap-3">
                <PillButton variant="primary">Primary</PillButton>
                <PillButton variant="secondary">Secondary</PillButton>
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Full Width Buttons
              </p>
              <div className="space-y-2">
                <FullWidthButton enabled={true}>
                  Enabled Button
                </FullWidthButton>
                <FullWidthButton enabled={false}>
                  Disabled Button
                </FullWidthButton>
                <FullWidthButton variant="sage">Sage Button</FullWidthButton>
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Back Button
              </p>
              <BackButton />
            </div>
          </div>
        </section>

        {/* Emotion Pills Section */}
        <section>
          <SectionLabel className="mb-6 block">Components / EmotionPill</SectionLabel>

          <div className="space-y-4">
            <p className="ui-section-label text-echoes-terracotta mb-3">
              Default State
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(
                [
                  "joy",
                  "sadness",
                  "anxiety",
                  "anger",
                  "loneliness",
                  "gratitude",
                  "hope",
                  "overwhelm",
                ] as const
              ).map((emotion) => (
                <EmotionPill
                  key={emotion}
                  emotion={emotion}
                  selected={false}
                />
              ))}
            </div>

            <p className="ui-section-label text-echoes-terracotta mb-3">
              Selected State
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(
                [
                  "joy",
                  "sadness",
                  "anxiety",
                  "anger",
                  "loneliness",
                  "gratitude",
                  "hope",
                  "overwhelm",
                ] as const
              ).map((emotion) => (
                <EmotionPill
                  key={`selected-${emotion}`}
                  emotion={emotion}
                  selected={true}
                  onClick={() => setSelectedEmotion(emotion)}
                />
              ))}
            </div>

            <p className="text-sm text-echoes-text-muted mt-4">
              {selectedEmotion && `Selected: ${selectedEmotion}`}
            </p>
          </div>
        </section>

        {/* Selectors Section */}
        <section>
          <SectionLabel className="mb-6 block">
            Components / Selectors
          </SectionLabel>

          <div className="space-y-6">
            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Intensity Selector
              </p>
              <IntensitySelector
                selected={selectedIntensity as any}
                onChange={setSelectedIntensity}
              />
              <p className="text-sm text-echoes-text-muted mt-3">
                Selected: {selectedIntensity}
              </p>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Question Block 1
              </p>
              <QuestionBlock
                question="Is this feeling new?"
                options={[
                  { id: "q1-1", icon: "·", label: "Hit me today" },
                  {
                    id: "q1-2",
                    icon: "··",
                    label: "Been building this week",
                  },
                  {
                    id: "q1-3",
                    icon: "···",
                    label: "I've been carrying this",
                  },
                ]}
                accentColor="sadness"
                accentColorHex="#7A9E8E"
                selectedId={selectedQuestion1 || undefined}
                onSelect={setSelectedQuestion1}
              />
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Question Block 2
              </p>
              <QuestionBlock
                question="Are you going through this with support?"
                options={[
                  {
                    id: "q2-1",
                    icon: "◐",
                    label: "I have people around me",
                  },
                  {
                    id: "q2-2",
                    icon: "◑",
                    label: "I'm on my own with this",
                  },
                ]}
                accentColor="sage"
                accentColorHex="#5E8C6A"
                selectedId={selectedQuestion2 || undefined}
                onSelect={setSelectedQuestion2}
              />
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Question Block 3
              </p>
              <QuestionBlock
                question="What would feel good right now?"
                options={[
                  { id: "q3-1", icon: "≈", label: "Someone who gets it" },
                  { id: "q3-2", icon: "↗", label: "Something hopeful" },
                  {
                    id: "q3-3",
                    icon: "↓",
                    label: "Just get this off my chest",
                  },
                ]}
                accentColor="gratitude"
                accentColorHex="#C9A84C"
                selectedId={selectedQuestion3 || undefined}
                onSelect={setSelectedQuestion3}
              />
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Walkthrough Dots
              </p>
              <div className="flex gap-2">
                <WalkthroughDot active={true} />
                <WalkthroughDot active={false} />
                <WalkthroughDot active={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Cards & Inputs Section */}
        <section>
          <SectionLabel className="mb-6 block">
            Components / Cards & Inputs
          </SectionLabel>

          <div className="space-y-6">
            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Prompt Cards
              </p>
              <div className="space-y-3">
                <PromptCardDynamic
                  emotion="sadness"
                  emotionColor="#7A9E8E"
                  emotionSymbol="◯"
                  prompt="If your sadness could speak, what would it want someone to hear?"
                />
                <PromptCardGeneral prompt="What would you tell someone having the exact day you're having?" />
                <PromptCardFreeWrite />
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Text Areas
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-echoes-text-muted mb-2">
                    Context Text Area
                  </p>
                  <ContextTextArea
                    value={contextValue}
                    onChange={setContextValue}
                  />
                </div>
                <div>
                  <p className="text-sm text-echoes-text-muted mb-2">
                    Letter Text Area
                  </p>
                  <LetterTextArea
                    value={letterValue}
                    onChange={setLetterValue}
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Delivery Estimate
              </p>
              <DeliveryEstimateCard />
            </div>

            <div>
              <p className="ui-section-label text-echoes-terracotta mb-3">
                Icons
              </p>
              <div className="flex gap-8 justify-start flex-wrap">
                <WalkthroughIcon icon="✉" />
                <WalkthroughIcon icon="◈" />
                <WalkthroughIcon icon="↻" />
                <SentIcon />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
