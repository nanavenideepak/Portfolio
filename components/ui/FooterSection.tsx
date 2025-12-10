"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function FooterSection() {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/deepak-nanaveni-2ab860200/", label: "LinkedIn", color: "#0A66C2" },
        { icon: <Github size={20} />, href: "https://github.com/nanavenideepak", label: "GitHub", color: "#333333" },
        { icon: <Mail size={20} />, href: "mailto:nanavenideepak456@gmail.com", label: "Gmail", color: "#EA4335" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/deepak_yadav_v18?igsh=MTkwamNkdnh1NmhlaA==", label: "Instagram", color: "#E4405F" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id="footer" className="section-full footer-section-bg">
            <div className="section-content footer-layout">
                {/* Left Block - Stay Connected */}
                <motion.div
                    className="footer-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="footer-label">STAY CONNECTED.</span>
                    <h2 className="footer-email font-science-gothic">
                        Deepak Nanaveni
                    </h2>
                    <p className="footer-signature">
                        <span className="signature-highlight">Full Stack Developer</span>
                    </p>
                </motion.div>

                {/* Middle Block - Navigation */}
                <motion.div
                    className="footer-middle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="footer-heading">Quick Links</h3>
                    <nav className="footer-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="footer-nav-link"
                                onClick={(e) => scrollToSection(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </motion.div>

                {/* Right Block - Social Media */}
                <motion.div
                    className="footer-right"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="footer-heading">Social Media</h3>
                    <div className="footer-social">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                style={{ '--hover-color': social.color } as React.CSSProperties}
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Brand Signature */}
            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <p className="footer-copyright">
                    ©2025 Deepak Nanaveni. All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
}
