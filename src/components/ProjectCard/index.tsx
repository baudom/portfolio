import { FC, ForwardRefExoticComponent, memo, ReactNode } from "react";
import IconButton from "@/components/IconButton";
import { IconProps } from "@tabler/icons-react";
import { cn } from "@/utils/tailwind";
import Card from "@/components/Card";
import { WithChildren } from "@/types/react";

export type ProjectCardLinkProps = {
    title: string;
    icon: ForwardRefExoticComponent<IconProps>;
    href: string;
};

export type ProjectTag = {
    icon?: ForwardRefExoticComponent<IconProps>;
    brandColor?: string;
    name: string;
};

export type ProjectCardProps = WithChildren & {
    className?: string;
    icon?: ReactNode;
    title: string;
    tags?: ProjectTag[];
    links?: ProjectCardLinkProps[];
};

const ProjectCard: FC<ProjectCardProps> = ({
    className,
    icon,
    title,
    children,
    tags,
    links,
}) => {
    return (
        <Card className={cn("flex flex-col md:h-full", className)}>
            <div className="flex justify-between">
                <div className="skewed-reverse flex items-center gap-2">
                    {icon || null}
                    <h2 className="font-bold">{title}</h2>
                </div>
                {links?.length ? (
                    <div className="skewed-reverse flex gap-4">
                        {links.map((link) => (
                            <IconButton
                                key={link.title}
                                name={link.title}
                                href={link.href}
                            >
                                <link.icon size="1.25rem" />
                            </IconButton>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">{children}</div>
                {tags?.length ? (
                    <div className="flex-1 md:flex md:flex-col md:justify-center">
                        <div
                            className={cn(
                                "flex flex-wrap",
                                "gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 mt-4 md:mt-0 md:justify-center",
                            )}
                        >
                            {tags.map((t) => (
                                <div
                                    key={t.name}
                                    className="border-2 rounded-md"
                                    style={{
                                        color: t.brandColor,
                                        borderColor: t.brandColor,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            "skewed-reverse flex items-center select-none gap-2",
                                            "px-2 py-1 md:px-1 md:py-0",
                                        )}
                                    >
                                        {t.icon && <t.icon size="1rem" />}
                                        <p className="text-xs md:text-base">
                                            {t.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </Card>
    );
};

export default memo(ProjectCard);
