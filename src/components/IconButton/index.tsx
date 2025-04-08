import { FC } from "react";
import { BASE_ANIMATIONS } from "@/utils/animations";
import Link from "@/components/Link";
import { WithChildren, WithClassName } from "@/types/react";
import { cn } from "@/utils/tailwind";

type IconButtonProps = WithChildren &
    WithClassName & {
        name: string;
        href?: string;
    };

const IconButton: FC<IconButtonProps> = ({
    name,
    href,
    className,
    children,
}) => {
    if (href) {
        return (
            <Link
                title={name}
                href={href}
                className={cn(BASE_ANIMATIONS, className)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            title={name}
            className={cn(BASE_ANIMATIONS, className)}
        >
            {children}
        </button>
    );
};

export default IconButton;
