import { FC } from "react";
import classes from "./index.module.css";
import { BASE_ANIMATIONS } from "@/utils/animations";
import { cn } from "@/utils/tailwind";
import Link from "@/components/Link";
import { WithChildren, WithClassName } from "@/types/react";

type ButtonVariant = "primary" | "secondary" | "secondary-outline";

type ButtonProps = WithChildren &
    WithClassName & {
        href?: string;
        variant?: ButtonVariant;
    };

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-background text-foreground",
    secondary: "bg-foreground text-background",
    "secondary-outline": "bg-foreground text-background border-background",
};

const Button: FC<ButtonProps> = ({
    variant = "primary",
    href,
    className,
    children,
}) => {
    const baseClasses = cn(
        classes,
        BASE_ANIMATIONS,
        variantClasses[variant],
        "p-2 font-bold border-2 rounded-lg skewed",
    );
    const styledChildren = <div className="skewed-reverse">{children}</div>;

    if (href) {
        return (
            <Link
                href={href}
                target="_self"
                className={cn(baseClasses, "text-center", className)}
            >
                {styledChildren}
            </Link>
        );
    }

    return (
        <button className={cn(baseClasses, className)}>{styledChildren}</button>
    );
};

export default Button;
