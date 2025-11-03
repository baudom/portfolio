import {
    ANCHOR_EXPERIENCE,
    ANCHOR_PROJECTS,
    ANCHOR_SKILLS,
    ANCHOR_START,
    AnchorType,
} from "@/utils/anchor";
import {
    IconBook,
    IconBulb,
    IconHammer,
    IconProps,
    IconStack,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent } from "react";

type QuickLinkItem = {
    title: string;
    anchor: AnchorType;
    icon: ForwardRefExoticComponent<IconProps>;
};

const quickLinks: QuickLinkItem[] = [
    {
        title: "Start",
        anchor: ANCHOR_START,
        icon: IconBook,
    },
    {
        title: "Fähigkeiten",
        anchor: ANCHOR_SKILLS,
        icon: IconBulb,
    },
    {
        title: "Erfahrung",
        anchor: ANCHOR_EXPERIENCE,
        icon: IconStack,
    },
    {
        title: "Projekte",
        anchor: ANCHOR_PROJECTS,
        icon: IconHammer,
    },
];

export default quickLinks;
