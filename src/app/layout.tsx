import type { Metadata } from "next";
import {
    Bitter as Serif,
    Fira_Code as Code,
    Open_Sans as Sans,
} from "next/font/google";
import "./globals.css";
import { FC } from "react";
import Footer from "@/components/Footer";
import { WithChildren } from "@/types/react";

const sansFont = Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

const monoFont = Code({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mono",
});

const serifFont = Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-serif",
});

export async function generateMetadata(): Promise<Metadata> {
    const name = "Dominik Baurecht",
        title = `Dominik Baurecht | Full-Stack Software Entwickler`,
        description =
            "Portfolio von Dominik Baurecht - Full-Stack Software-Entwickler aus Augsburg mit Fokus auf React, ASP.NET, Java und DevOps.",
        descriptionShort =
            "Portfolio von Dominik Baurecht - Full-Stack Entwicklung & DevOps.";

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
        title: {
            default: title,
            template: `%s | ${name}`, // for any other upcoming sub paths
        },
        description,
        keywords: [
            name,
            "Full-Stack Developer",
            "Software Entwickler",
            "React",
            "Next.js",
            "TypeScript",
            "C#",
            ".NET",
            "Java",
            "Augsburg",
            "Portfolio",
            "Web Development",
        ],
        authors: [{ name }],
        creator: name,
        openGraph: {
            type: "website",
            locale: "de_DE",
            url: "/",
            title,
            description,
            siteName: `Portfolio von ${name}`,
            images: [
                {
                    url: "/images/GalaxyAvatar.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Avatar von ${name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: descriptionShort,
            images: ["/images/GalaxyAvatar.jpg"],
        },
        icons: {
            icon: "/images/GalaxyAvatar.jpg",
            apple: "/images/GalaxyAvatar.jpg",
        },
    };
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dominik Baurecht",
    jobTitle: "Full-Stack Software Entwickler",
    url: process.env.NEXT_PUBLIC_URL,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Augsburg",
        addressRegion: "Bayern",
        addressCountry: "DE",
    },
    sameAs: [
        "https://github.com/baudom",
        "https://de.linkedin.com/in/dominik-baurecht",
    ],
};

const RootLayout: FC<WithChildren> = ({ children }) => {
    return (
        <html lang="de">
            <head>
                <meta
                    name="theme-color"
                    content="#283C5F"
                />
                <meta
                    name="google-site-verification"
                    content="JBdXXNbmm6hJtSinX04PadGHcmkjxjt9-BtMrPGivDk"
                />
                <script
                    defer
                    src={process.env.TRACKING_API_HOST}
                    data-website-id={process.env.TRACKING_API_KEY}
                    data-auto-track="false"
                />
            </head>
            <body
                className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
