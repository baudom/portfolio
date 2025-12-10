import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import { ANCHOR_PROJECTS } from "@/utils/anchor";
import {
    IconAffiliate,
    IconBox,
    IconBrandAzure,
    IconBrandCSharp,
    IconBrandGithub,
    IconBrandMantine,
    IconBrandTabler,
    IconCalendarEvent,
    IconClock,
    IconDatabase,
    IconSeo,
    IconTestPipe,
    IconUserHeart,
    IconWorld,
} from "@tabler/icons-react";
import {
    devopsTag,
    nextJsTag,
    tailwindCssTag,
    typescriptTag,
} from "@/types/tag";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import ProjectList from "./ProjectList";
import Image from "next/image";
import {
    SiDotnetHex,
    SiGithub,
    SiGithubHex,
    SiGitlab,
    SiGitlabHex,
    SiI18next,
    SiI18nextHex,
} from "@icons-pack/react-simple-icons";

const ProjectsSection: FC = async () => {
    return (
        <SectionContainer
            hasFullWidthChildren
            id={ANCHOR_PROJECTS}
            title={{
                title: "Projekte",
                anchor: ANCHOR_PROJECTS,
                marginBottom: "small",
            }}
        >
            <Carousel options={{ loop: true }}>
                <ProjectCard
                    key="easytank"
                    title="easytank"
                    icon={
                        <Image
                            alt="Bild von easytank"
                            src="/images/github-easytank.png"
                            width={32}
                            height={32}
                            priority
                        />
                    }
                    links={[
                        {
                            title: "Website öffnen",
                            icon: IconWorld,
                            href: "https://easytank.baudom.de?utm_source=baudom.de&utm_medium=website&utm_campaign=advertise",
                        },
                        {
                            title: "Auf Github öffnen",
                            icon: IconBrandGithub,
                            href: "https://github.com/baudom/easytank",
                        },
                    ]}
                    tags={[
                        nextJsTag,
                        typescriptTag,
                        {
                            name: "Mantine UI",
                            icon: IconBrandMantine,
                            color: "#339AF0",
                        },
                        { name: "SEO", icon: IconSeo },
                        {
                            name: "Internationalisierung",
                            icon: SiI18next,
                            color: SiI18nextHex,
                        },
                        {
                            name: "GitHub",
                            icon: SiGithub,
                            color: SiGithubHex,
                        },
                        devopsTag,
                    ]}
                >
                    <ProjectList>
                        <>
                            <b>Smarte Tankstellensuche</b>, Berechnung der&nbsp;
                            <b>Rentabilität einer Tankfahrt</b>
                        </>
                        Konfiguration deines Autos (Verbrauch, Tank, ...)
                        <>
                            <b>Mobile-First</b>-Ansatz, Verfügbar als&nbsp;
                            <b>PWA</b> für bessere Benutzererfahrung
                        </>
                        <>
                            Support für <b>deutsche und englische</b> Sprache
                        </>
                    </ProjectList>
                </ProjectCard>
                <ProjectCard
                    key="event-planning"
                    title="Eventplanung- und Verwaltung"
                    icon={<IconCalendarEvent />}
                    tags={[
                        {
                            name: "Microsoft Entra ID",
                            icon: IconBrandAzure,
                            color: "#0078D4",
                        },
                        {
                            name: "ASP.NET",
                            icon: IconBrandCSharp,
                            color: SiDotnetHex,
                        },
                        {
                            name: "Quartz.NET",
                            icon: IconClock,
                        },
                        {
                            name: "xUnit",
                            icon: IconTestPipe,
                            color: "#4CAF50",
                        },
                        {
                            name: "TestContainers",
                            icon: IconBox,
                        },
                        {
                            name: "Entity Framework",
                            icon: IconDatabase,
                            color: "#512BD4",
                        },
                        {
                            name: "Microsoft Graph",
                            icon: IconAffiliate,
                            color: "#0078D4",
                        },
                        nextJsTag,
                        {
                            name: "GitLab",
                            icon: SiGitlab,
                            color: SiGitlabHex,
                        },
                        devopsTag,
                        tailwindCssTag,
                    ]}
                >
                    <ProjectList>
                        <>
                            Zentrale <b>Event-Plattform</b> zur Organisation von
                            &nbsp;<b>standortübergreifend</b>en
                            Firmenveranstaltungen
                        </>
                        <>
                            <b>Berechtigungssystem</b> mit&nbsp;
                            <b>Microsoft Entra ID</b>&nbsp;Integration
                        </>
                        Dynamische Umfrageprozesse und automatisiertes
                        Erinnerungssystem
                        <>
                            Hoher <b>Qualitätsanspruch</b> durch&nbsp;
                            <b>umfangreiche automatisierte Tests</b>
                        </>
                        <>
                            Modernes und&nbsp;
                            <b>performantes Frontend mit Next.js</b> und
                            Tailwind CSS, REST-API
                        </>
                    </ProjectList>
                </ProjectCard>
                <ProjectCard
                    key="portfolio"
                    title="Portfolio"
                    icon={<IconUserHeart />}
                    tags={[
                        nextJsTag,
                        tailwindCssTag,
                        typescriptTag,
                        { icon: IconSeo, name: "SEO" },
                        {
                            icon: IconBrandTabler,
                            name: "Tabler Icons",
                            color: "#066fd1",
                        },
                    ]}
                >
                    <p className="mt-2 skewed-reverse md:max-w-xl">
                        Mal eben auf die Schnelle mit irgendeinem&nbsp;
                        <sup className="text-xs">*räuspern*</sup> Text-Editor
                        ein Portfolio hinzaubern?&nbsp;
                        <b>Kein Problem - dachte ich.</b> Well, that escalated
                        quickly -&nbsp;
                        <b>don&#39;t challenge a frontend dev &#128540;</b>
                    </p>
                </ProjectCard>
            </Carousel>
        </SectionContainer>
    );
};

export default ProjectsSection;
