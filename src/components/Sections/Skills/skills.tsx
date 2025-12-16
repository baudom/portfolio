import {
    IconApi,
    IconBrandApple,
    IconBrandAzure,
    IconBrandCSharp,
    IconCloud,
    IconDeviceDesktop,
    IconProps,
    IconServer,
} from "@tabler/icons-react";
import { ForwardRefExoticComponent, ReactElement } from "react";
import {
    IconType,
    SiCypress,
    SiCypressHex,
    SiDocker,
    SiDockerHex,
    SiDotnetHex,
    SiFigma,
    SiFigmaHex,
    SiFirebase,
    SiFirebaseHex,
    SiGit,
    SiGitHex,
    SiGithub,
    SiGithubHex,
    SiGitlab,
    SiGitlabHex,
    SiGoogleanalytics,
    SiGoogleanalyticsHex,
    SiGradle,
    SiGradleHex,
    SiGraphql,
    SiGraphqlHex,
    SiI18next,
    SiI18nextHex,
    SiK6,
    SiK6Hex,
    SiLinux,
    SiLinuxHex,
    SiMacosHex,
    SiMantine,
    SiMantineHex,
    SiMaterialdesign,
    SiMaterialdesignHex,
    SiMongodb,
    SiMongodbHex,
    SiMysql,
    SiMysqlHex,
    SiNodedotjs,
    SiNodedotjsHex,
    SiPostgresql,
    SiPostgresqlHex,
    SiReact,
    SiReactHex,
    SiRedis,
    SiRedisHex,
    SiSentry,
    SiSentryHex,
    SiStorybook,
    SiStorybookHex,
    SiTimescale,
    SiTimescaleHex,
    SiUmami,
    SiUmamiHex,
} from "@icons-pack/react-simple-icons";
import {
    BrandTagType,
    nextJsTag,
    tailwindCssTag,
    typescriptTag,
} from "@/types/tag";

export type SkillCategory = {
    icon: ForwardRefExoticComponent<IconProps> | IconType;
    title: string;
    headline: string;
    skills: BrandTagType[];
    description: ReactElement;
};

const frontendSkills: BrandTagType[] = [
    typescriptTag,
    { name: "React", icon: SiReact, color: SiReactHex },
    nextJsTag,
    { name: "Cypress", icon: SiCypress, color: SiCypressHex },
    { name: "Storybook", icon: SiStorybook, color: SiStorybookHex },
    tailwindCssTag,
    { name: "Mantine UI", icon: SiMantine, color: SiMantineHex },
    {
        name: "Material Design",
        icon: SiMaterialdesign,
        color: SiMaterialdesignHex,
    },
    { name: "Figma", icon: SiFigma, color: SiFigmaHex },
    { name: "i18next", icon: SiI18next, color: SiI18nextHex },
];

const backendSkills: BrandTagType[] = [
    { name: ".NET", icon: IconBrandCSharp, color: SiDotnetHex },
    { name: "Node.js", icon: SiNodedotjs, color: SiNodedotjsHex },
    { name: "Java & Gradle", icon: SiGradle, color: SiGradleHex },
    { name: "GraphQL", icon: SiGraphql, color: SiGraphqlHex },
    { name: "REST", icon: IconApi, color: "#000" },
    { name: "SQL", icon: SiMysql, color: SiMysqlHex },
    { name: "MongoDB", icon: SiMongodb, color: SiMongodbHex },
    { name: "PostgreSQL", icon: SiPostgresql, color: SiPostgresqlHex },
    { name: "Timescale", icon: SiTimescale, color: SiTimescaleHex },
    { name: "Redis", icon: SiRedis, color: SiRedisHex },
    { name: "Firebase", icon: SiFirebase, color: SiFirebaseHex },
];

const devopsSkills: BrandTagType[] = [
    { name: "Docker", icon: SiDocker, color: SiDockerHex },
    { name: "Git", icon: SiGit, color: SiGitHex },
    { name: "GitLab", icon: SiGitlab, color: SiGitlabHex },
    { name: "GitHub", icon: SiGithub, color: SiGithubHex },
    { name: "Azure", icon: IconBrandAzure, color: "#0078D4" },
    { name: "Linux", icon: SiLinux, color: SiLinuxHex },
    { name: "macOS", icon: IconBrandApple, color: SiMacosHex },
    {
        name: "Analytics",
        icon: SiGoogleanalytics,
        color: SiGoogleanalyticsHex,
    },
    { name: "Sentry", icon: SiSentry, color: SiSentryHex },
    { name: "k6", icon: SiK6, color: SiK6Hex },
    { name: "Umami", icon: SiUmami, color: SiUmamiHex },
];

const skillCategories: SkillCategory[] = [
    {
        icon: IconDeviceDesktop,
        title: "Frontend",
        headline: "User Interfaces & Experience",
        skills: frontendSkills,
        description: (
            <>
                <b>Skizzieren, Pixel schubsen</b> und Daten aufbereiten ist das
                eine, das <b>Gesamtpaket</b> dem Benutzer aber auch in
                einer&nbsp;
                <b>intuitiven und modernen</b> Benutzeroberfläche darzustellen
                das andere - Hier kann ich meiner <b>Kreativität vollen Lauf</b>
                &nbsp; lassen.
            </>
        ),
    },
    {
        icon: IconServer,
        title: "Backend",
        headline: "Business Logic & Data",
        skills: backendSkills,
        description: (
            <>
                <b>Wie es unter der Haube aussieht?</b> Gerade in der
                Backend-Entwicklung sehe ich die&nbsp;
                <b>Herausforderung in Spezial-Logik</b> für&nbsp;
                <b>individuelle Anwendungsfälle</b>, zugleich <b>performant</b>
                &nbsp;auf allen Ebenen!
            </>
        ),
    },
    {
        icon: IconCloud,
        title: "DevOps & More",
        headline: "Automation & Infrastructure",
        skills: devopsSkills,
        description: (
            <>
                Der Weg von <b>lokaler Spielwiese</b> bis hin zur&nbsp;
                <b>automatisierten und skalierten Anwendung</b> fasziniert mich
                täglich aufs Neue - Begriffe wie&nbsp;
                <cite className="font-bold">Work&#39;s on my machine</cite> und
                &nbsp;<cite>localhost</cite> gehören schon längst der
                Vergangenheit an.
                <br />
                Die <b>Integration von weiterem Tooling</b> rundet für mich das
                Gesamtergebnis ab.
                <br /> <br />
                <code>#HätteManIn5MinutenManuellMachenKönnen #SelfHosted</code>
            </>
        ),
    },
];

export default skillCategories;
