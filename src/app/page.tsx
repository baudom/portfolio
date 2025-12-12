import { FC } from "react";
import AboutSection from "@/components/Sections/About";
import SkillsSection from "@/components/Sections/Skills";
import ExperienceSection from "@/components/Sections/Experience";
import ProjectsSection from "@/components/Sections/Projects";
import NavigationButtons from "@/components/NavigationButtons";

const Page: FC = () => (
    <div className="flex flex-col gap-12">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <NavigationButtons />
    </div>
);

export default Page;
