import {
  ANCHOR_EXPERIENCE,
  ANCHOR_PROJECTS,
  ANCHOR_SKILLS,
  ANCHOR_START,
  AnchorType,
} from "@/utils/anchor";
import {
  IconBriefcase,
  IconCode,
  IconHome,
  IconProps,
  IconRocket,
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
    icon: IconHome,
  },
  {
    title: "Skills",
    anchor: ANCHOR_SKILLS,
    icon: IconCode,
  },
  {
    title: "Erfahrung",
    anchor: ANCHOR_EXPERIENCE,
    icon: IconBriefcase,
  },
  {
    title: "Projekte",
    anchor: ANCHOR_PROJECTS,
    icon: IconRocket,
  },
];

export default quickLinks;
