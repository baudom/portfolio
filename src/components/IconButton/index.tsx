import { FC } from "react";
import { BASE_ANIMATIONS } from "@/utils/animations";
import Link from "@/components/Link";
import { WithChildren, WithClassName, WithOnClick } from "@/types/react";
import { cn } from "@/utils/tailwind";
import { buildTrackingProps, WithTrackId } from "@/types/tracking";

type IconButtonProps = WithChildren &
    WithOnClick &
    WithTrackId &
    WithClassName & {
        name: string;
        href?: string;
    };

const IconButton: FC<IconButtonProps> = ({
    name,
    href,
    onClick,
    className,
    children,
    trackId,
}) => {
    if (href) {
        return (
            <Link
                trackId={trackId}
                title={name}
                href={href}
                className={cn(BASE_ANIMATIONS, className)}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            {...buildTrackingProps(trackId)}
            title={name}
            className={cn(BASE_ANIMATIONS, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
