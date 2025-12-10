"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeSection() {
    return (
        <section id="home" className="section-full home-section-bg">
            <div className="section-content">
                {/* Left Content */}
                <motion.div
                    className="home-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="hero-title font-science-gothic">
                        DEEPAK
                        <br />
                        NANAVENI
                    </h1>
                    <p className="hero-subtitle">FULL STACK DEVELOPER</p>

                    {/* CTA Button */}
                    <motion.a
                        href="#projects"
                        className="view-work-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Profile Image with Orange Container */}
                <motion.div
                    className="home-right"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="profile-box">
                        <Image
                            src="/profile.png"
                            alt="Deepak Nanaveni"
                            width={450}
                            height={600}
                            className="profile-img"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
