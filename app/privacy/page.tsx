import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Akky Labs - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16">
                <div className="container max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                        <p className="text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                            <p className="text-muted-foreground">
                                When you contact us through our website, we may collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Your name and email address</li>
                                <li>Phone number (if provided)</li>
                                <li>Project requirements and messages you send us</li>
                                <li>Usage data and analytics (via Google Analytics)</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Respond to your inquiries and provide services</li>
                                <li>Send project updates and communications</li>
                                <li>Improve our website and services</li>
                                <li>Analyze website traffic and user behavior</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">3. Data Protection</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate security measures to protect your personal information.
                                Your data is stored securely and is only accessible to authorized personnel.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
                            <p className="text-muted-foreground">
                                We may use third-party services like Google Analytics to analyze website traffic.
                                These services have their own privacy policies governing the use of your information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">5. Your Rights</h2>
                            <p className="text-muted-foreground">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">6. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us at:{" "}
                                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                                    {personalInfo.email}
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
