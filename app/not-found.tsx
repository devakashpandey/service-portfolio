import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Mail } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="container max-w-2xl mx-auto px-6 text-center">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-extrabold text-primary/10 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">🔍</span>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="gap-2 rounded-xl">
                        <Link href="/">
                            <Home className="w-4 h-4" />
                            Go to Homepage
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl">
                        <Link href="/#contact">
                            <Mail className="w-4 h-4" />
                            Contact Us
                        </Link>
                    </Button>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Or explore these pages:</p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <Link href="/#services" className="text-primary hover:underline">
                            Our Services
                        </Link>
                        <span className="text-border">•</span>
                        <Link href="/#portfolio" className="text-primary hover:underline">
                            Portfolio
                        </Link>
                        <span className="text-border">•</span>
                        <Link href="/about" className="text-primary hover:underline">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
