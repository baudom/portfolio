import { FC, memo } from "react";
import { WithChildren } from "@/types/react";
import { cn } from "@/utils/tailwind";

type CardProps = WithChildren & {
    className?: string;
};

const Card: FC<CardProps> = ({ className, children }) => {
    return (
        <div
            className={cn(
                "p-8 md:p-12 rounded-lg shadow-xl bg-foreground text-background skewed",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default memo(Card);
