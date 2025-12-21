import { FC, HTMLAttributeAnchorTarget } from "react";
import { WithChildren, WithClassName, WithOnClick } from "@/types/react";
import { buildTrackingProps, WithTrackId } from "@/types/tracking";

type LinkProps = WithChildren &
    WithOnClick &
    WithTrackId &
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
    trackId,
}) => (
    <a
        {...buildTrackingProps(trackId)}
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
