import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]): ReturnType<typeof twMerge> => {
  return twMerge(clsx(...classes));
};
