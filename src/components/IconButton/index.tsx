import { FC } from "react";
import { BASE_ANIMATIONS } from "@/utils/animations";
import Link from "@/components/Link";
import { WithChildren, WithClassName, WithOnClick } from "@/types/react";
import { cn } from "@/utils/tailwind";
import { buildTrackingProps, WithTrackingProps } from "@/types/tracking";

type IconButtonProps = WithChildren &
    WithOnClick &
    WithTrackingProps &
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
    tracking,
}) => {
    if (href) {
        return (
            <Link
                tracking={tracking}
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
            {...buildTrackingProps(tracking)}
            title={name}
            className={cn(BASE_ANIMATIONS, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default IconButton;
