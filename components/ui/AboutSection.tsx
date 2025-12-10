"use client";

import { motion } from "framer-motion";
import FancyRightBox from "./FancyRightBox";

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="about-bg-container">
                {/* Left Content - Heading and Text */}
                <motion.div
                    className="about-left-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Big "ABOUT ME" Heading */}
                    <h1 className="about-main-heading font-science-gothic">
                        ABOUT
                        <br />
                        ME
                    </h1>

                    {/* Hero Heading */}
                    <h2 className="about-hero-heading">
                        A coder who creates <span className="highlight">solutions</span>,
                        <br />
                        and a builder who turns <span className="highlight">ideas</span>
                        <br />
                        into reality.
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="about-paragraphs">
                        <p className="about-paragraph">
                            I&apos;m Nanaveni Deepak, a Computer Science undergrad who loves building fast, intuitive,
                            and meaningful digital experiences. I work at the intersection of full-stack development
                            and AI, creating systems like real-time video platforms and intelligent RAG engines that
                            solve real-world problems.
                        </p>
                        <p className="about-paragraph">
                            I enjoy turning complex tech into simple, elegant solutions — whether it&apos;s designing
                            smooth user interfaces, crafting efficient backend logic, or experimenting with AI
                            workflows. With hands-on experience in React, Node.js, MongoDB, Python, LangChain,
                            and more, I&apos;m always exploring new ways to blend performance with good design.
                        </p>
                        <p className="about-paragraph">
                            Driven, curious, and competitive, I&apos;m constantly learning and pushing myself through
                            projects, challenges, and late-night debugging sessions. My goal is simple: build products
                            that are useful, thoughtful, and a joy to use.
                        </p>
                    </div>
                </motion.div>

                {/* Right Content - Design, Develop, Deploy Box */}
                <motion.div
                    className="about-right-box"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <FancyRightBox />
                </motion.div>
            </div>
        </section>
    );
}
