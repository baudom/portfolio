import type { Metadata } from "next";
import {
    Bitter as Serif,
    Fira_Code as Code,
    Open_Sans as Sans,
} from "next/font/google";
import "./globals.css";
import { FC, ReactNode } from "react";
import Footer from "@/components/Footer";

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
    return {
        title: "Dominik Baurecht",
        description:
            "Full-Stack Software-Entwickler mit Fokus auf React, ASP.NET und Java bis hin zu DevOps - Dein Schweizer Taschenmesser unter den Entwicklern!",
    };
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="de">
            <head>
                <meta
                    name="theme-color"
                    content="#283C5F"
                />
            </head>
            <body
                className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable} antialiased`}
            >
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
