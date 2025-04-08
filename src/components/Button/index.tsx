import { FC } from "react";
import classes from "./index.module.css";
import { BASE_ANIMATIONS } from "@/utils/animations";
import { cn } from "@/utils/tailwind";
import Link from "@/components/Link";
import { WithChildren, WithClassName } from "@/types/react";

type ButtonProps = WithChildren &
    WithClassName & {
        name: string;
        href?: string;
    };

const Button: FC<ButtonProps> = ({ name, href, className, children }) => {
    const baseClasses = cn(
        classes.animated,
        BASE_ANIMATIONS,
        "p-2 font-bold border-2 rounded-lg skewed shadow-lg",
    );
    const styledChildren = <div className="skewed-reverse">{children}</div>;

    if (href) {
        return (
            <Link
                title={name}
                href={href}
                target="_self"
                className={cn(baseClasses, "text-center", className)}
            >
                {styledChildren}
            </Link>
        );
    }

    return (
        <button
            title={name}
            className={cn(baseClasses, className)}
        >
            {styledChildren}
        </button>
    );
};

export default Button;
