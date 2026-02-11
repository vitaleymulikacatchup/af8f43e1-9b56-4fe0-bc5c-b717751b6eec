"use client";

import ReactLenis from "lenis/react";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    return (
        <ThemeProvider
            defaultButtonVariant="expand-hover"
            defaultTextAnimation="background-highlight"
            borderRadius="soft"
            contentWidth="medium"
            sizing="largeSizeMediumTitles"
            background="circleGradient"
            cardStyle="outline"
            primaryButtonStyle="gradient"
            secondaryButtonStyle="radial-glow"
            headingFontWeight="normal"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleApple
                        brandName="Ymnik"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "About", id: "about" },
                            { name: "Features", id: "features" },
                            { name: "Team", id: "team" },
                            { name: "Contact", id: "contact" },
                            { name: "Join", id: "hero" }
                        ]}
                    />
                </div>

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <div id="blog" data-section="blog">
                        <BlogCardOne
                            blogs={posts}
                            title="Latest Articles"
                            description="Discover insights, tutorials, and updates from our team"
                            textboxLayout="default"
                            useInvertedBackground="noInvert"
                            carouselMode="buttons"
                            animationType="slide-up"
                            tag="Blog"
                        />
                    </div>
                )}

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Ymnik"
                        leftLink={{ text: "Privacy Policy", href: "#" }}
                        rightLink={{ text: "Terms of Service", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}