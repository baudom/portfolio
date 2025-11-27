import { FC } from "react";
import AboutSection from "@/components/Sections/About";
import ProjectsSection from "@/components/Sections/Projects";

const Page: FC = () => (
    <div className="flex flex-col gap-12">
        <AboutSection />
        <ProjectsSection />
    </div>
);

export default Page;
