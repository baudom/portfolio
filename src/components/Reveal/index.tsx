"use client";

import { CSSProperties, FC, useRef } from "react";
import { WithChildren } from "@/types/react";
import { useOnScreen } from "@/hooks/useOnScreen";
import { cn } from "@/utils/tailwind";

type RevealProps = WithChildren & {
  className?: string;
  delay?: number;
  duration?: number;
};

const Reveal: FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 1000,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-90",
        className,
      )}
      style={
        {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Reveal;
