import { FC } from "react";
import SectionContainer from "@/components/SectionContainer";
import Button from "@/components/Button";
import { IconMapPin } from "@tabler/icons-react";
import IconButton from "@/components/IconButton";
import quickLinks from "@/utils/quick-links";
import profileLinks from "./profile-links";
import { ANCHOR_START } from "@/utils/anchor";
import Image from "next/image";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";

const AboutSection: FC = () => {
  return (
    <SectionContainer id={ANCHOR_START}>
      <Reveal>
        <Card className="overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-16 items-center md:items-start">
            <div className="flex flex-1 flex-col justify-between text-center md:text-start gap-8">
              <div className="skewed-reverse flex flex-col gap-2">
                <h1 className="text-4xl md:text-6xl font-black text-card-heading leading-tight">
                  Dominik Baurecht
                </h1>
                <h2 className="text-lg md:text-2xl font-bold text-card-body uppercase tracking-wider">
                  Full-Stack Software Entwickler
                </h2>
                <cite className="text-muted">Probably centering your div</cite>
              </div>

              <div className="skewed-reverse flex flex-col items-center md:items-start gap-8">
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <span className="flex items-center gap-2 text-card-highlight font-semibold">
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

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                  {quickLinks.slice(1).map((a) => (
                    <Button
                      key={a.title}
                      href={a.anchor}
                    >
                      <span className="flex items-center gap-2">
                        <a.icon size="1.25rem" />
                        {a.title}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="justify-items-center md:justify-items-end mb-4 md:mb-0 pointer-events-none select-none">
              <div className="relative">
                <p className="z-10 absolute motion-safe:animate-[wiggle_2s_infinite] -top-8 -left-8 text-7xl">
                  &#128075;
                </p>
                <div className="overflow-hidden rounded-xl border-4 border-highlight shadow-2xl">
                  <Image
                    alt="Avatar von Dominik Baurecht"
                    src="/images/GalaxyAvatar.jpg"
                    className="object-cover skewed-reverse scale-105"
                    width={256}
                    height={256}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </SectionContainer>
  );
};

export default AboutSection;
