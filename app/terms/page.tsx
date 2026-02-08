import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Akky Labs - Read our terms and conditions for using our web development services.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16">
                <div className="container max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                        <p className="text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">1. Services</h2>
                            <p className="text-muted-foreground">
                                {personalInfo.brandName} provides web development, website design, mobile app development,
                                and related digital services. The specific scope of work will be defined in individual
                                project agreements.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">2. Project Terms</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Project timelines and deliverables will be agreed upon before starting work</li>
                                <li>Changes to project scope may affect timeline and cost</li>
                                <li>Client is responsible for providing necessary content and feedback in a timely manner</li>
                                <li>Final deliverables will be transferred upon full payment</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">3. Payment Terms</h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Payment terms will be specified in the project proposal</li>
                                <li>A deposit may be required before starting work</li>
                                <li>Late payments may result in project delays</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
                            <p className="text-muted-foreground">
                                Upon full payment, the client receives full ownership of the custom work created
                                specifically for their project. Third-party assets (fonts, images, plugins) may have
                                their own licensing terms.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">5. Support & Maintenance</h2>
                            <p className="text-muted-foreground">
                                Post-launch support duration will be specified in the project agreement.
                                Additional maintenance and updates can be arranged separately.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                {personalInfo.brandName} shall not be liable for any indirect, incidental, or
                                consequential damages arising from the use of our services or deliverables.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold">7. Contact</h2>
                            <p className="text-muted-foreground">
                                For questions about these terms, please contact us at:{" "}
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
