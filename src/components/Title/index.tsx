import { FC, memo } from "react";
import { AnchorType } from "@/utils/anchor";
import Link from "@/components/Link";
import { WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";

export type TitleProps = WithClassName & {
    title: string;
    anchor: AnchorType;
    subTitle?: string;
    cite?: string;
    withMarginBottom?: boolean;
};

const Title: FC<TitleProps> = ({
    title,
    anchor,
    subTitle,
    cite,
    className,
    withMarginBottom,
}) => {
    return (
        <div className={cn(withMarginBottom ? "mb-2 md:mb-4" : "", className)}>
            <Link
                href={anchor}
                target="_self"
            >
                <h1>{title}</h1>
            </Link>
            {subTitle ? <h2>{subTitle}</h2> : null}
            {cite ? <cite>&bdquo;{cite}&rdquo;</cite> : null}
        </div>
    );
};

export default memo(Title);
