import { Children, FC, memo, ReactElement } from "react";
import { WithChildren } from "@/types/react";

const ProjectList: FC<WithChildren> = ({ children }) => {
  return (
    <ul className="mt-2 list-disc list-inside">
      {Children.map(children, (child) => (
        <li
          key={(child as ReactElement)?.key}
          className="skewed-reverse text-sm md:text-base"
        >
          {child}
        </li>
      ))}
    </ul>
  );
};

export default memo(ProjectList);
