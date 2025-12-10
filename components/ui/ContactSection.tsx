"use client";

import { motion } from "framer-motion";
import { ContactCard } from "@/components/ui/contact-card";

export default function ContactSection() {
    return (
        <section id="contact" className="section-full contact-section-bg">
            <div className="section-content contact-layout">
                {/* Left Text Block */}
                <motion.div
                    className="contact-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="contact-heading font-science-gothic">
                        GET IN
                        <br />
                        TOUCH
                    </h1>
                    <p className="contact-subtext" style={{ marginBottom: '20px' }}>
                        Have a project in mind? Whether you&apos;re building a brand, developing a product, or elevating your digital presence, I&apos;m here to help bring your ideas to life.
                    </p>
                    <p className="contact-subtext">
                        I&apos;m actively seeking full-time and internship roles where I can contribute to meaningful, high-impact projects. If my skills align with what you&apos;re looking for, I&apos;d be excited to connect and explore how I can add value to your team.
                    </p>
                </motion.div>

                {/* Right Contact Card */}
                <motion.div
                    className="contact-right"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ContactCard />
                </motion.div>
            </div>
        </section>
    );
}
