import { FC } from "react";
import Link from "@/components/Link";
import { ANCHOR_START } from "@/utils/anchor";

const Footer: FC = () => (
    <footer className="py-4 text-center">
        <div className="flex justify-center gap-2 md:gap-4">
            <div className="flex justify-center">
                &copy;&nbsp;{new Date().getFullYear()} Dominik Baurecht
            </div>
            &middot;
            <Link
                title="Impressum"
                href="/impressum"
                target="_self"
            >
                {/* TODO */}
                Impressum
            </Link>
            &middot;
            <Link
                title="Kontakt"
                href={ANCHOR_START}
                target="_self"
            >
                Kontakt
            </Link>
        </div>
        <code className="italic font-light text-xs md:text-sm">
            &#123;/* version: {process.env.NEXT_PUBLIC_VERSION}, build with
            React and Next.js */&#125;
        </code>
    </footer>
);

export default Footer;
