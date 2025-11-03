import React, { FC } from "react";
import { AnchorType } from "@/utils/anchor";
import { WithChildren, WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";

type SectionContainerProps = WithChildren &
    WithClassName & {
        id: AnchorType;
    };

const SectionContainer: FC<SectionContainerProps> = ({
    id,
    className,
    children,
}) => (
    <section
        id={id.replace("#", "")}
        className={cn(
            "min-h-screen place-content-center justify-items-center",
            className,
        )}
    >
        <div className="w-11/12 md:w-9/12">{children}</div>
    </section>
);

export default SectionContainer;
