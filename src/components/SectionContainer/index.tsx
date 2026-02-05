import React, { FC } from "react";
import { AnchorType } from "@/utils/anchor";
import { WithChildren, WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";
import Title, { TitleProps } from "@/components/Title";

type SectionContainerProps = WithChildren &
  WithClassName & {
    id: AnchorType;
    title?: TitleProps;
  };

const WIDTH_CLASSES = "w-11/12 md:w-9/12";
// NOTE: keep ~aligned with Carousel width

const SectionContainer: FC<SectionContainerProps> = ({
  id,
  className,
  children,
  title,
}) => (
  <section
    id={id.replace("#", "")}
    className={cn(
      "min-h-screen place-content-center justify-items-center",
      className,
    )}
  >
    <div className={WIDTH_CLASSES}>{title ? <Title {...title} /> : null}</div>
    <div className={WIDTH_CLASSES}>{children}</div>
  </section>
);

export default SectionContainer;
