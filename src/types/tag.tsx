import { ForwardRefExoticComponent } from "react";
import { IconAutomation, IconProps } from "@tabler/icons-react";
import {
    IconType,
    SiNextdotjs,
    SiNextdotjsHex,
    SiTailwindcss,
    SiTailwindcssHex,
    SiTypescript,
    SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

export type BrandTagType = {
    name: string;
    icon: ForwardRefExoticComponent<IconProps> | IconType;
    color?: string;
};

export const devopsTag: BrandTagType = {
    name: "DevOps",
    icon: IconAutomation,
    color: "#000",
};

export const nextJsTag: BrandTagType = {
    name: "Next.js",
    icon: SiNextdotjs,
    color: SiNextdotjsHex,
};

export const tailwindCssTag: BrandTagType = {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: SiTailwindcssHex,
};

export const typescriptTag: BrandTagType = {
    name: "TypeScript",
    icon: SiTypescript,
    color: SiTypescriptHex,
};
