import type { ReactNode } from "react";
import { cn } from "../utils/cn";

// Structural hooks only. The animation implementation lives in index.html.
export function Reveal({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
  amount?: number;
}) {
  return (
    <div data-rv-direction={direction} className={cn("reveal-hook", className)}>
      {children}
    </div>
  );
}

// Backgrounds and progress are added to the rendered page by vanilla JS.
export function SectionTexture(_: {
  motif?: "dots" | "waves" | "orbits" | "grid";
  side?: "left" | "right" | "center";
  dark?: boolean;
  className?: string;
}) {
  return null;
}