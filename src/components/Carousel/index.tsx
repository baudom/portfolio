"use client";

import React, {
    createElement,
    FC,
    memo,
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./index.module.css";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { cn } from "@/utils/tailwind";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import IconButton from "@/components/IconButton";

interface CarouselProps {
    children: ReactNode;
    options?: EmblaOptionsType;
}

const Carousel: FC<CarouselProps> = ({ children, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({
            delay: 10_000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
        }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    );

    const renderIconButton = useCallback(
        (direction: "left" | "right", label: string, onClick: () => void) => (
            <IconButton
                name={label}
                className={`${direction === "left" ? "mr-1 md:mr-2" : "ml-1 md:ml-2"} p-1 skewed rounded-xl hover:bg-foreground hover:text-background`}
                onClick={onClick}
            >
                {createElement(
                    direction === "left" ? IconChevronLeft : IconChevronRight,
                    { className: "skewed-reverse" },
                )}
            </IconButton>
        ),
        [],
    );

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <>
            <div className={styles.embla__dots}>
                {renderIconButton("left", "vorherige Karte", () =>
                    scrollTo(selectedIndex - 1),
                )}
                {scrollSnaps.map((snap, index) => (
                    <button
                        key={snap}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            styles.embla__dot,
                            index === selectedIndex
                                ? styles["embla__dot--selected"]
                                : "",
                        )}
                        aria-label={`Karte ${index + 1} auswählen`}
                    />
                ))}
                {renderIconButton("right", "nächste Karte", () =>
                    scrollTo(selectedIndex + 1),
                )}
            </div>
            <div
                className={styles.embla}
                ref={emblaRef}
            >
                <div className={styles.embla__container}>
                    {React.Children.map(children, (child) => (
                        <div
                            key={(child as ReactElement).key}
                            className={styles.embla__slide}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default memo(Carousel);
