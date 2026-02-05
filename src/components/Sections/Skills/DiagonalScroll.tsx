import { FC, memo } from "react";
import { BrandTagType } from "@/types/tag";

type DiagonalScrollProps = {
  skills: BrandTagType[];
};

const IconGrid: FC<{ skills: BrandTagType[] }> = ({ skills }) => {
  const gridSkills: BrandTagType[] = [];
  let gridSize = 3;

  if (skills.length > 0) {
    gridSize = Math.max(3, Math.ceil(Math.sqrt(skills.length)));
    const minItems = gridSize * gridSize;

    const repeatCount = Math.ceil(minItems / skills.length);
    for (let i = 0; i < repeatCount; i++) {
      gridSkills.push(...skills);
    }

    while (gridSkills.length < minItems) {
      gridSkills.push(...skills);
    }

    if (gridSkills.length > minItems) {
      gridSkills.length = minItems;
    }
  }

  return (
    <div
      className="grid gap-4 p-2 w-full h-full opacity-40"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {gridSkills.map((skill) => {
        return (
          <div
            key={`${skill.name}-${Math.random()}`}
            className="flex flex-col items-center justify-center skewed-reverse"
          >
            {skill.icon && (
              <skill.icon
                color={skill.color}
                className="text-background w-4 h-4 shrink-0"
              />
            )}
            <span className="text-[10px] md:text-xs text-center">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const DiagonalScroll: FC<DiagonalScrollProps> = ({ skills }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-foreground via-transparent to-foreground opacity-75" />

      <div className="absolute inset-0 w-[300%] h-[300%] -left-[100%] -top-[100%] flex flex-col motion-safe:animate-diagonal-scroll">
        {new Array(3).fill("").map((_, row) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={row}
            className="flex w-full h-1/3"
          >
            <div className="w-1/3 h-full">
              <IconGrid skills={skills} />
            </div>
            <div className="w-1/3 h-full">
              <IconGrid skills={skills} />
            </div>
            <div className="w-1/3 h-full">
              <IconGrid skills={skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DiagonalScroll);
