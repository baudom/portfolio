import { FC, HTMLAttributeAnchorTarget } from "react";
import { WithChildren, WithClassName } from "@/types/react";

type LinkProps = WithChildren &
    WithClassName & {
        title?: string;
        href: string;
        target?: HTMLAttributeAnchorTarget;
    };

const Link: FC<LinkProps> = ({
    title,
    href,
    target = "_blank",
    className,
    children,
}) => (
    <a
        title={title}
        href={href}
        target={target}
        className={className}
    >
        {children}
    </a>
);

export default Link;
