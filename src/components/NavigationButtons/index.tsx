"use client";

import { FC, useEffect, useState } from "react";
import quickLinks from "@/utils/quick-links";
import { ANCHOR_START } from "@/utils/anchor";
import { buildTrackingProps } from "@/types/tracking";

// minimum percentage threshold a section needs to be visible
const VISIBILITY_THRESHOLD = 0.5;

const NavigationButtons: FC = () => {
    const [navShown, setNavShown] = useState(false);
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id]"));
        const sectionById = new Map(sections.map((s, i) => [s.id, i]));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (`#${entry.target.id}`.endsWith(ANCHOR_START)) {
                        setNavShown(
                            entry.intersectionRatio < VISIBILITY_THRESHOLD,
                        );
                        if (
                            entry.isIntersecting &&
                            entry.intersectionRatio >= 1
                        ) {
                            window.history.replaceState(
                                null,
                                "",
                                window.location.pathname,
                            );
                        }
                    }

                    if (
                        entry.isIntersecting &&
                        entry.intersectionRatio >= VISIBILITY_THRESHOLD
                    ) {
                        const index = sectionById.get(entry.target.id);
                        if (index !== undefined) {
                            setActiveIdx(index);
                        }
                    }
                });
            },
            {
                threshold: [0, VISIBILITY_THRESHOLD, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed transition-all duration-300 ease-in-out z-50 p-4 pb-2 lg:p-4 rounded-lg backdrop-blur-sm bg-glass-panel ${
                navShown
                    ? "opacity-100 -translate-x-1/2 lg:translate-x-0"
                    : "opacity-0 pointer-events-none -translate-x-1/2 translate-y-20 lg:translate-x-20 lg:translate-y-0"
            } bottom-4 lg:bottom-8 left-1/2 lg:left-auto lg:right-8`}
            aria-label="Navigation"
        >
            <div className="flex flex-row lg:flex-col gap-12 lg:gap-4">
                {quickLinks.map((link, idx) => (
                    <a
                        {...buildTrackingProps(`Navigation > ${link.title}`)}
                        key={link.title}
                        href={link.anchor}
                        className="flex flex-col items-center gap-1 group"
                        aria-current={activeIdx === idx ? "page" : undefined}
                    >
                        <div
                            className={
                                `flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-md transition-all duration-300 ease-in-out shadow-md group-hover:shadow-lg group-hover:scale-105 ` +
                                (activeIdx === idx
                                    ? "bg-secondary text-white"
                                    : "bg-glass text-card-body group-hover:bg-glass-hover")
                            }
                        >
                            <link.icon />
                        </div>
                        <span
                            className={`text-xs lg:hidden font-bold ${
                                activeIdx === idx
                                    ? "text-secondary"
                                    : "text-muted"
                            }`}
                        >
                            {link.title}
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavigationButtons;
