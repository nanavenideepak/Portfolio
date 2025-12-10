"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "PROJECTS", href: "#projects" },
        { name: "SKILLS", href: "#skills" },
        { name: "CONTACT", href: "#contact" },
    ];

    // Detect which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "skills", "contact"];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] hidden md:block">
            <motion.nav
                className="navbar-pill"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Logo/Avatar */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="nav-logo cursor-pointer"
                >
                    <div className="nav-logo-inner">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            width={45}
                            height={45}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </a>

                {/* Nav Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`nav-link group ${activeSection === link.href.slice(1) ? "active" : ""}`}
                        >
                            <span className="relative">
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current group-hover:w-full group-hover:transition-all group-hover:duration-200 group-hover:ease-out" />
                            </span>
                        </a>
                    ))}
                </div>
            </motion.nav>
        </div>
    );
}
