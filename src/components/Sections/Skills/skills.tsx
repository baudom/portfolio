import {
    IconApi,
    IconBrandApple,
    IconBrandAzure,
    IconBrandCSharp,
    IconBrandTabler,
    IconDeviceDesktop,
    IconRocket,
    IconServer,
} from "@tabler/icons-react";
import { ReactElement } from "react";
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
} from "@icons-pack/react-simple-icons";
import {
    BrandTagType,
    nextJsTag,
    tailwindCssTag,
    typescriptTag,
} from "@/types/tag";

export type SkillCategory = {
    icon: IconType;
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
    { name: "Tabler", icon: IconBrandTabler, color: "#066fd1" },
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
];

const skillCategories: SkillCategory[] = [
    {
        icon: IconDeviceDesktop,
        title: "Frontend",
        headline: "User Interfaces & Experience",
        skills: frontendSkills,
        description: (
            <>
                <b>Daten</b> aufbereiten kann (fast) jeder, diese aber auch dem
                Nutzer&nbsp;<b>intuitiv und modern</b> darzustellen - schon
                weniger. Hier kann ich meiner <b>Kreativität vollen Lauf</b>
                &nbsp;lassen.
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
                Von Mock-Daten zu Realen? Genau darin sehe ich die&nbsp;
                <b>Herausforderung</b> - Spezial-Logik für&nbsp;
                <b>individuelle Anwendungsfälle und performant</b>
                &nbsp;auf allen Ebenen!
            </>
        ),
    },
    {
        icon: IconRocket,
        title: "DevOps & More",
        headline: "Automation & Infrastructure",
        skills: devopsSkills,
        description: (
            <>
                Der gesamte <b>Weg von lokaler Spielwiese</b> bis hin zur
                skalierten und <b>automatisierten Anwendung</b> fasziniert mich
                tagtäglich auf&#39;s Neue.
                <br />
                Das <b>Setup sowie die Integration</b>
                &nbsp;von <b>(Open-Source)-Tooling&#39;s</b> runden das
                Gesamtergebnis ab. <br /> <br />
                <code>#HätteManIn5MinutenManuellMachenKönnen #SelfHosted</code>
            </>
        ),
    },
];

export default skillCategories;
