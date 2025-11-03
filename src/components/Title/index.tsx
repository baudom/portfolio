import { FC, memo } from "react";
import { AnchorType } from "@/utils/anchor";
import Link from "@/components/Link";
import { WithClassName } from "@/types/react";

type TitleProps = WithClassName & {
    title: string;
    anchor: AnchorType;
    subTitle?: string;
    cite?: string;
};

const Title: FC<TitleProps> = ({
    title,
    anchor,
    subTitle,
    cite,
    className,
}) => {
    return (
        <div className={className}>
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
