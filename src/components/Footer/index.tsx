import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="p-1.5 md:p-4 pb-4 text-center">
            <div className="flex justify-center gap-2">
                <p>&copy;</p>
                <code>{new Date().getFullYear()} Dominik Baurecht</code>
            </div>
            <code className="italic font-light text-xs md:text-sm">
                &#123;/* version: {process.env.NEXT_PUBLIC_VERSION}, build with
                React and Next.js */&#125;
            </code>
        </footer>
    );
};

export default Footer;
