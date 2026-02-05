import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import { ANCHOR_SKILLS } from "@/utils/anchor";
import Card from "@/components/Card";
import DiagonalScroll from "./DiagonalScroll";
import skillCategories from "./skills";
import Reveal from "@/components/Reveal";

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
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.title}
            className="h-full lg:last:odd:col-span-2 lg:last:odd:w-1/2 lg:last:odd:justify-self-center"
            delay={index * 200}
          >
            <Card className="h-full relative overflow-hidden">
              <DiagonalScroll skills={category.skills} />
              <div className="flex flex-col h-full relative z-20 gap-2">
                <div className="skewed-reverse flex flex-row items-center gap-4 border-b border-glass pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl skewed bg-glass text-card-highlight backdrop-blur-sm">
                    <category.icon className="skewed-reverse" />
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      {category.headline}
                    </span>
                  </div>
                </div>
                <span className="skewed-reverse text-sm p-1 backdrop-blur-sm rounded-xl">
                  {category.description}
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
