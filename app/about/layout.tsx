import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Akky Labs - Professional software developer and web solutions provider. We transform businesses with premium digital experiences.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
