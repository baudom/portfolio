import { CSSProperties, FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import { ANCHOR_EXPERIENCE } from "@/utils/anchor";
import workingSteps from "./workingSteps";
import Card from "@/components/Card";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/utils/tailwind";

const ExperienceSection: FC = () => {
    return (
        <SectionContainer
            id={ANCHOR_EXPERIENCE}
            title={{
                title: "Erfahrung",
                anchor: ANCHOR_EXPERIENCE,
                marginBottom: "medium",
            }}
        >
            <div className="relative flex flex-col">
                <div className="flex w-full flex-col gap-8 md:gap-16">
                    {workingSteps.map((step, index) => {
                        return (
                            <div
                                key={step.title}
                                className={
                                    "relative flex flex-col w-full md:max-w-[40vw] ml-0 md:ml-[var(--step-margin)]"
                                }
                                style={
                                    {
                                        "--step-margin":
                                            workingSteps.length > 1
                                                ? `calc((100% - 40vw) * ${index / (workingSteps.length - 1)})`
                                                : "0px",
                                    } as CSSProperties
                                }
                            >
                                <Card className="relative overflow-hidden backdrop-blur-sm">
                                    <div className="absolute -top-2.5 md:-top-3.5 -right-2 md:-right-3 text-5xl md:text-6xl font-black text-white/50 select-none pointer-events-none">
                                        {step.duration}
                                    </div>

                                    <div className="relative z-10 flex flex-col gap-4 p-2">
                                        <div className="skewed-reverse flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-600 uppercase tracking-widest">
                                                <span>{step.company}</span>
                                            </div>

                                            <h3 className="font-black text-black leading-tight">
                                                {step.title}
                                            </h3>
                                        </div>

                                        <ul className="flex flex-col gap-2">
                                            {step.descriptions.map((d) => (
                                                <li
                                                    key={d.key}
                                                    className="skewed-reverse flex items-center gap-2"
                                                >
                                                    <IconCheck
                                                        className="text-secondary shrink-0"
                                                        size="1.25rem"
                                                    />
                                                    <span className="text-sm md:text-base text-gray-600">
                                                        {d}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* TODO improve styling if needed someday */}
                                        {step.certificates?.length ? (
                                            <div className="mt-4 border-t border-white/50">
                                                <p className="skewed-reverse my-2 text-xs font-medium text-gray-600 uppercase tracking-widest">
                                                    Zertifikate
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {step.certificates.map(
                                                        (c) => (
                                                            <div
                                                                key={c.name}
                                                                className="skewed-reverse"
                                                            >
                                                                <div
                                                                    className={cn(
                                                                        "skewed px-2 py-1 rounded-md bg-gray-100 border text-gray-600",
                                                                    )}
                                                                >
                                                                    <p className="skewed-reverse text-xs md:text-sm">
                                                                        {c.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionContainer>
    );
};

export default ExperienceSection;
