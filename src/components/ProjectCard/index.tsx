import { FC, ForwardRefExoticComponent, memo, ReactNode } from "react";
import IconButton from "@/components/IconButton";
import { IconProps } from "@tabler/icons-react";
import { cn } from "@/utils/tailwind";
import Card from "@/components/Card";
import { WithChildren } from "@/types/react";
import { BrandTagType } from "@/types/tag";

export type ProjectCardLinkProps = {
    title: string;
    icon: ForwardRefExoticComponent<IconProps>;
    href: string;
};

export type ProjectCardProps = WithChildren & {
    className?: string;
    icon?: ReactNode;
    title: string;
    tags?: BrandTagType[];
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
                <div className="skewed-reverse text-card-heading flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg skewed bg-glass text-card-highlight shadow-sm backdrop-blur-sm">
                        <div className="skewed-reverse">{icon}</div>
                    </div>
                    <h3>{title}</h3>
                </div>
                {links?.length ? (
                    <div className="skewed-reverse flex gap-4">
                        {links.map((link) => (
                            <IconButton
                                trackId={`ProjectCard > ${title} > Icon > ${link.title}`}
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
                <div className="flex-1 text-sm md:text-base text-card-body">
                    {children}
                </div>
                {tags?.length ? (
                    <div className="flex-1 flex flex-wrap gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 mt-4 md:mt-0 md:justify-center md:content-center">
                        {tags.map((t) => (
                            <div
                                key={t.name}
                                className="skewed-reverse"
                            >
                                <div className="skewed px-2 py-1 rounded-md bg-tag flex items-center gap-2 select-none">
                                    <t.icon
                                        size="1.25rem"
                                        className="skewed-reverse"
                                        color={t.color}
                                    />
                                    <p className="text-xs md:text-sm font-mono skewed-reverse">
                                        {t.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </Card>
    );
};

export default memo(ProjectCard);
