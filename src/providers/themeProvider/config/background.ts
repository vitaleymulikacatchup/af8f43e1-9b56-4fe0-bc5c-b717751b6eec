import CircleGradientBackground from "@/components/background/CircleGradientBackground";
import AuroraBackground from "@/components/background/AuroraBackground";
import FloatingGradientBackground from "@/components/background/floatingGradientBackground/FloatingGradientBackground";
import type { BackgroundType } from "./types";

interface BackgroundComponentProps {
  className?: string;
}

export const backgroundComponents: Record<BackgroundType, React.ComponentType<BackgroundComponentProps> | null> = {
  none: null,
  circleGradient: CircleGradientBackground,
  aurora: AuroraBackground,
  floatingGradient: FloatingGradientBackground,
};
