import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects | Akky Labs Portfolio",
    description: "Explore Akky Labs portfolio for premium web development, AI solutions, and full-stack apps. Delivering high-performance digital success for global businesses.",
    openGraph: {
        title: "All Projects | Akky Labs Portfolio",
        description: "Explore our premium portfolio of web development, AI solutions, and full-stack apps. Delivering high-performance digital success.",
        url: "https://www.akkylabs.com/projects/all-projects",
        siteName: "Akky Labs",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Akky Labs Projects",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
