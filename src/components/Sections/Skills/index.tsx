import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import { ANCHOR_SKILLS } from "@/utils/anchor";
import Card from "@/components/Card";
import DiagonalScroll from "./DiagonalScroll";
import skillCategories from "./skills";

const SkillsSection: FC = () => {
    return (
        <SectionContainer
            id={ANCHOR_SKILLS}
            title={{
                title: "Skills",
                anchor: ANCHOR_SKILLS,
                marginBottom: "medium",
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="h-full lg:last:odd:col-span-2 lg:last:odd:w-1/2 lg:last:odd:justify-self-center"
                    >
                        <Card className="h-full relative overflow-hidden">
                            <DiagonalScroll skills={category.skills} />
                            <div className="flex flex-col h-full relative z-20 gap-2">
                                <div className="skewed-reverse flex flex-row items-center gap-4 border-b border-white/50 pb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg skewed bg-white/50 text-gray-700 shadow-sm backdrop-blur-sm">
                                        <category.icon className="skewed-reverse" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight text-black">
                                            {category.title}
                                        </h3>
                                        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            {category.headline}
                                        </span>
                                    </div>
                                </div>
                                <span className="skewed-reverse text-sm backdrop-blur-sm rounded-md p-1">
                                    {category.description}
                                </span>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default SkillsSection;
