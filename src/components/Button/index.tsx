import { FC } from "react";
import classes from "./index.module.css";
import { BASE_ANIMATIONS } from "@/utils/animations";
import { cn } from "@/utils/tailwind";
import Link from "@/components/Link";
import { WithChildren, WithClassName } from "@/types/react";

type ButtonProps = WithChildren &
    WithClassName & {
        href: string;
    };

const Button: FC<ButtonProps> = ({ href, className, children }) => {
    return (
        <Link
            href={href}
            target="_self"
            className={cn(
                BASE_ANIMATIONS,
                classes.animated,
                "skewed min-w-32 text-background bg-white/40 border-2 border-gray-400 p-2 font-semibold rounded-lg justify-items-center",
                "hover:bg-white/80",
                className,
            )}
        >
            <div className="skewed-reverse">{children}</div>
        </Link>
    );
};

export default Button;
