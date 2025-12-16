import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconProps,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent } from "react";

type ProfileLink = {
    icon: ForwardRefExoticComponent<IconProps>;
    name: string;
    href: string;
};

const profileLinks: ProfileLink[] = [
    {
        icon: IconBrandGithub,
        name: "GitHub",
        href: "https://github.com/baudom",
    },
    {
        icon: IconBrandLinkedin,
        name: "Linkedin",
        href: "https://de.linkedin.com/in/dominik-baurecht",
    },
    {
        icon: IconMail,
        name: "Kontakt",
        href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_MAIL}`,
    },
];

export default profileLinks;
