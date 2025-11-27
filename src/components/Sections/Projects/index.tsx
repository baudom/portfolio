import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import { ANCHOR_PROJECTS } from "@/utils/anchor";
import {
    IconBox,
    IconBrandAzure,
    IconBrandCSharp,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandMantine,
    IconBrandNextjs,
    IconBrandTabler,
    IconBrandTailwind,
    IconBrandTypescript,
    IconCalendarEvent,
    IconClock,
    IconDatabase,
    IconGitCommit,
    IconGraph,
    IconLanguage,
    IconSeo,
    IconTestPipe,
    IconTools,
    IconUserHeart,
    IconWorld,
} from "@tabler/icons-react";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import List from "@/components/List";
import Image from "next/image";

const ProjectsSection: FC = async () => {
    return (
        <SectionContainer
            hasFullWidthChildren
            id={ANCHOR_PROJECTS}
            title={{
                title: "Projekte",
                anchor: ANCHOR_PROJECTS,
                withMarginBottom: true,
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
                            width={24}
                            height={24}
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
                        {
                            name: "Next.js",
                            icon: IconBrandNextjs,
                            brandColor: "#000000",
                        },
                        {
                            name: "Mantine UI",
                            icon: IconBrandMantine,
                            brandColor: "#339AF0",
                        },
                        { name: "SEO", icon: IconSeo },
                        {
                            name: "Internationalisierung",
                            icon: IconLanguage,
                            brandColor: "#26A69A",
                        },
                        {
                            name: "Semantic Versioning",
                            icon: IconGitCommit,
                        },
                        {
                            name: "DevOps",
                            icon: IconTools,
                        },
                    ]}
                >
                    <List>
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
                    </List>
                </ProjectCard>
                <ProjectCard
                    key="event-planning"
                    title="Eventplanung- und Verwaltung"
                    icon={<IconCalendarEvent />}
                    tags={[
                        {
                            name: "Microsoft Entra ID",
                            icon: IconBrandAzure,
                            brandColor: "#0078D4",
                        },
                        {
                            name: "ASP.NET",
                            icon: IconBrandCSharp,
                            brandColor: "#512BD4",
                        },
                        {
                            name: "Quartz.NET",
                            icon: IconClock,
                        },
                        {
                            name: "xUnit",
                            icon: IconTestPipe,
                            brandColor: "#4CAF50",
                        },
                        {
                            name: "TestContainers",
                            icon: IconBox,
                        },
                        {
                            name: "Entity Framework",
                            icon: IconDatabase,
                        },
                        {
                            name: "Microsoft Graph",
                            icon: IconGraph,
                            brandColor: "#0078D4",
                        },
                        {
                            name: "Next.js",
                            icon: IconBrandNextjs,
                            brandColor: "#000000",
                        },
                        {
                            name: "GitLab DevOps",
                            icon: IconBrandGitlab,
                            brandColor: "#FCA121",
                        },
                        {
                            name: "Tailwind CSS",
                            icon: IconBrandTailwind,
                            brandColor: "#06B6D4",
                        },
                    ]}
                >
                    <List>
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
                    </List>
                </ProjectCard>
                <ProjectCard
                    key="portfolio"
                    title="Portfolio"
                    icon={<IconUserHeart />}
                    tags={[
                        {
                            icon: IconBrandNextjs,
                            name: "Next.js",
                            brandColor: "#000000",
                        },
                        {
                            icon: IconBrandTailwind,
                            name: "Tailwind CSS",
                            brandColor: "#06B6D4",
                        },
                        {
                            icon: IconBrandTypescript,
                            name: "TypeScript",
                            brandColor: "#3178C6",
                        },
                        { icon: IconSeo, name: "SEO" },
                        {
                            icon: IconBrandTabler,
                            name: "Tabler Icons",
                            brandColor: "#066fd1",
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
