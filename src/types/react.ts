import { ReactNode } from "react";

export type WithChildren = {
    children?: ReactNode;
};

export type WithClassName = {
    className?: string;
};

export type WithOnClick = {
    onClick?: () => void;
};

export type SizeType = "small" | "medium";
