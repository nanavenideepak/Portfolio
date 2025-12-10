"use client";

import Navbar from "@/components/ui/Navbar";
import MobileNavbar from "@/components/ui/mobile-navbar";
import HomeSection from "@/components/ui/HomeSection";
import AboutSection from "@/components/ui/AboutSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import SkillsSection from "@/components/ui/SkillsSection";
import ContactSection from "@/components/ui/ContactSection";
import FooterSection from "@/components/ui/FooterSection";

export default function Home() {
    return (
        <>
            {/* Fixed Centered Navigation - Desktop */}
            <Navbar />
            {/* Mobile Navigation */}
            <MobileNavbar />

            {/* Main scrollable content */}
            <main className="single-page-container">
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
                <FooterSection />
            </main>
        </>
    );
}
