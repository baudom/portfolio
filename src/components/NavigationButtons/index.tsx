"use client";

import { FC, useEffect, useState } from "react";
import quickLinks from "@/utils/quick-links";
import { ANCHOR_START } from "@/utils/anchor";

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
            className={`fixed justify-items-center right-4 bottom-16 transition-all duration-300 ease-in-out ${
                navShown
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
            }`}
            aria-label="Navigation"
        >
            <div className="flex flex-col gap-2">
                {quickLinks.map((link, idx) => (
                    <a
                        key={link.title}
                        title={link.title}
                        href={link.anchor}
                        className={`ease-linear rounded-lg skewed duration-300 p-1 md:p-2 ${
                            activeIdx === idx
                                ? "scale-100 bg-secondary"
                                : "scale-75"
                        }`}
                        aria-current={activeIdx === idx ? "page" : undefined}
                    >
                        <link.icon className="skewed-reverse text-white" />
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavigationButtons;
