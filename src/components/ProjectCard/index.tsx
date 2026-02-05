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
    <Card
      className={cn(
        "flex flex-col md:h-full lg:!skew-x-0", // "!" needed to overwrite skewed class
        className,
      )}
    >
      <div className="flex justify-between">
        <div className="skewed-reverse text-card-heading flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl skewed bg-glass text-card-highlight">
            <div className="skewed-reverse">{icon}</div>
          </div>
          <h3>{title}</h3>
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
      <div className="flex-1 text-sm md:text-base text-card-body mt-4">
        {children}
      </div>
      {tags?.length ? (
        <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
          {tags.map((t) => (
            <div
              key={t.name}
              className="skewed-reverse"
            >
              <div className="skewed px-2 py-1 rounded-xl bg-tag flex items-center gap-2 select-none">
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
    </Card>
  );
};

export default memo(ProjectCard);
