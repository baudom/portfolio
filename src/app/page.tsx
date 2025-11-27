import { FC } from "react";
import AboutSection from "@/components/Sections/About";
import ProjectsSection from "@/components/Sections/Projects";
import NavigationButtons from "@/components/NavigationButtons";

const Page: FC = () => (
    <div className="flex flex-col gap-12">
        <AboutSection />
        <ProjectsSection />
        <NavigationButtons />
    </div>
);

export default Page;
