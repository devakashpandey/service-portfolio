import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "View our portfolio of successful web development and app projects. From e-commerce to custom business solutions.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
