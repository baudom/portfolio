import { FC, HTMLAttributeAnchorTarget } from "react";
import { WithChildren, WithClassName, WithOnClick } from "@/types/react";
import { buildTrackingProps, WithTrackingProps } from "@/types/tracking";

type LinkProps = WithChildren &
    WithOnClick &
    WithTrackingProps &
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
    tracking,
}) => (
    <a
        {...buildTrackingProps(tracking)}
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
