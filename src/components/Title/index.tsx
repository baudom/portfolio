import { FC, memo } from "react";
import { AnchorType } from "@/utils/anchor";
import Link from "@/components/Link";
import { SizeType, WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";
import { ClassNameValue } from "tailwind-merge";

export type TitleProps = WithClassName & {
    title: string;
    anchor: AnchorType;
    marginBottom?: SizeType;
};

const mapSpacingType = (value?: SizeType): ClassNameValue => {
    if (!value) return;

    switch (value) {
        case "small":
            return "mb-1 md:mb-2";
        case "medium":
            return "mb-4 md:mb-8";
    }
};

const Title: FC<TitleProps> = ({ title, anchor, className, marginBottom }) => {
    return (
        <div
            className={cn(mapSpacingType(marginBottom), "max-w-fit", className)}
        >
            <Link
                href={anchor}
                target="_self"
            >
                <h2 className="text-5xl md:text-6xl font-black tracking-wider uppercase">
                    {title}
                </h2>
            </Link>
        </div>
    );
};

export default memo(Title);
