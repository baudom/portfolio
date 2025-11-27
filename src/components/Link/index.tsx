import { FC, HTMLAttributeAnchorTarget } from "react";
import { WithChildren, WithClassName, WithOnClick } from "@/types/react";

type LinkProps = WithChildren &
    WithOnClick &
    WithClassName & {
        title?: string;
        href: string;
        target?: HTMLAttributeAnchorTarget;
    };

const Link: FC<LinkProps> = ({
    title,
    href,
    onClick,
    target = "_blank",
    className,
    children,
}) => (
    <a
        title={title}
        href={href}
        target={target}
        className={className}
        onClick={onClick}
    >
        {children}
    </a>
);

export default Link;
