import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import Button from "@/components/Button";
import { IconMapPin } from "@tabler/icons-react";
import IconButton from "@/components/IconButton";
import quickLinks from "@/utils/quick-links";
import profileLinks from "./profile-links";
import { ANCHOR_START } from "@/utils/anchor";
import Title from "@/components/Title";
import Image from "next/image";
import Card from "@/components/Card";

const AboutSection: FC = () => (
    <SectionContainer id={ANCHOR_START}>
        <Card>
            <div className="flex flex-col-reverse md:flex-row mb-8 md:mb-12">
                <div className="flex flex-1 flex-col justify-between text-center md:text-start">
                    <Title
                        anchor={ANCHOR_START}
                        title="Dominik Baurecht"
                        subTitle="Full-Stack Software Entwickler"
                        cite="Probably centering your div"
                        className="skewed-reverse"
                    />
                    <div className="skewed-reverse justify-items-center md:justify-items-start mt-8 md:mt-0">
                        <span className="flex items-center gap-2 mb-2">
                            <IconMapPin />
                            <p>Augsburg, Bayern</p>
                        </span>
                        <div className="flex items-center gap-4">
                            {profileLinks.map((link) => (
                                <IconButton
                                    key={link.name}
                                    {...link}
                                >
                                    <link.icon />
                                </IconButton>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="justify-items-center md:justify-items-end mb-4 md:mb-0 pointer-events-none select-none">
                    <div className="relative">
                        <p className="z-10 absolute motion-safe:animate-[wiggle_2s_infinite] -top-6 -left-6 text-6xl">
                            &#128075;
                        </p>
                        <div className="overflow-hidden rounded-lg border-4 border-white">
                            <Image
                                alt="Avatar von Dominik Baurecht"
                                src="/images/GalaxyAvatar.jpg"
                                className="scale-110 object-cover skewed-reverse"
                                width={225}
                                height={225}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="skewed-reverse grid gap-2 md:gap-4 w-full grid-cols-1 md:grid-cols-3">
                {quickLinks.slice(1).map((a) => (
                    <Button
                        key={a.title}
                        href={a.anchor}
                        variant="outline"
                    >
                        {a.title}
                    </Button>
                ))}
            </div>
        </Card>
    </SectionContainer>
);

export default AboutSection;
