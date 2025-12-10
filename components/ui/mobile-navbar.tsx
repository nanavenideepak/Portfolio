"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "HOME", href: "#home", index: "01" },
        { name: "ABOUT", href: "#about", index: "02" },
        { name: "PROJECTS", href: "#projects", index: "03" },
        { name: "SKILLS", href: "#skills", index: "04" },
        { name: "CONTACT", href: "#contact", index: "05" },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Header Bar - Only visible on mobile */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-[1000] bg-[#1c1c1c] flex md:hidden items-center justify-between min-h-[65px]"
                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Left: Profile Image and Name */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <span className="text-white text-[17px] font-medium tracking-wide">
                        Nanaveni Deepak
                    </span>
                </div>

                {/* Right: Animated Hamburger/Close Button */}
                <button
                    onClick={toggleMenu}
                    className="text-white p-2 relative w-10 h-10 flex items-center justify-center"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                        <motion.span
                            className="absolute w-6 h-[2px] bg-white rounded-full origin-center"
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 0 : -6,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1],
                                y: { duration: 0.2, delay: isOpen ? 0 : 0.2 },
                                rotate: { duration: 0.3, delay: isOpen ? 0.15 : 0 }
                            }}
                        />
                        <motion.span
                            className="absolute w-6 h-[2px] bg-white rounded-full"
                            animate={{
                                opacity: isOpen ? 0 : 1,
                                scaleX: isOpen ? 0 : 1,
                            }}
                            transition={{
                                duration: 0.25,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        />
                        <motion.span
                            className="absolute w-6 h-[2px] bg-white rounded-full origin-center"
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? 0 : 6,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1],
                                y: { duration: 0.2, delay: isOpen ? 0 : 0.2 },
                                rotate: { duration: 0.3, delay: isOpen ? 0.15 : 0 }
                            }}
                        />
                    </div>
                </button>
            </motion.header>

            {/* Full-Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[2000] bg-black flex flex-col md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between min-h-[65px]" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            {/* Left: Profile and Name */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                                    <Image
                                        src="/profile.png"
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <span className="text-white text-[17px] font-medium tracking-wide">
                                    Nanaveni Deepak
                                </span>
                            </div>

                            {/* Right: Close Button - White bg with black X */}
                            <button
                                onClick={toggleMenu}
                                className="bg-white rounded-full p-3 hover:bg-gray-200 transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={28} className="text-black" />
                            </button>
                        </div>

                        {/* Centered Navigation Links */}
                        <nav className="flex-1 flex flex-col items-center justify-center gap-10">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="group flex flex-col items-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                                >
                                    <span className="text-white text-3xl font-bold tracking-wider relative">
                                        {link.name}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-orange-500 group-hover:w-full transition-all duration-300 ease-out" />
                                    </span>
                                    <span className="text-white/40 text-xs mt-1 tracking-widest">
                                        {link.index}
                                    </span>
                                </motion.a>
                            ))}
                        </nav>

                        {/* Bottom Copyright */}
                        <motion.div
                            className="text-center"
                            style={{ marginBottom: '80px' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <p className="text-white/40 text-xs tracking-wide">
                                © 2025 Nanaveni Deepak.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
