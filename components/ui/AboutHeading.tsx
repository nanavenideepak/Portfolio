"use client";

import { motion } from "framer-motion";

interface AboutHeadingProps {
    text?: string;
}

export default function AboutHeading({
    text = "A developer who designs, and a designer who codes."
}: AboutHeadingProps) {
    return (
        <motion.div
            className="about-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h1 className="about-hero-title">
                {text}
            </h1>
        </motion.div>
    );
}
