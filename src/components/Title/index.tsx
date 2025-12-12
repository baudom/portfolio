import { FC, memo } from "react";
import { AnchorType } from "@/utils/anchor";
import Link from "@/components/Link";
import { SizeType, WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";
import { ClassNameValue } from "tailwind-merge";

export type TitleProps = WithClassName & {
    title: string;
    anchor: AnchorType;
    subTitle?: string;
    cite?: string;
    marginBottom?: SizeType;
};

const mapSpacingType = (value?: SizeType): ClassNameValue => {
    if (!value) return;

    switch (value) {
        case "small":
            return "mb-2 md:mb-4";
        case "medium":
            return "mb-4 md:mb-8";
    }
};

const Title: FC<TitleProps> = ({
    title,
    anchor,
    subTitle,
    cite,
    className,
    marginBottom,
}) => {
    return (
        <div
            className={cn(mapSpacingType(marginBottom), "max-w-fit", className)}
        >
            <Link
                href={anchor}
                target="_self"
            >
                <h1 className="font-black tracking-wider uppercase">{title}</h1>
            </Link>
            {subTitle ? <h2>{subTitle}</h2> : null}
            {cite ? <cite>&bdquo;{cite}&rdquo;</cite> : null}
        </div>
    );
};

export default memo(Title);
