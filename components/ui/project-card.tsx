"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

interface ProjectCardProps {
    title: string;
    description: string;
    iconSlugs: string[];
    illustration: React.ReactNode;
    index?: number;
}

// Animation variants for the card
const cardVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    hover: {
        y: -8,
        scale: 1.02,
    },
};

export function ProjectCard({
    title,
    description,
    iconSlugs,
    illustration,
    index = 0,
}: ProjectCardProps) {
    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <motion.div
            className="project-showcase-card"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onHoverStart={() => setIsCardHovered(true)}
            onHoverEnd={() => setIsCardHovered(false)}
        >
            {/* Top Visual Area with Icon Cloud */}
            <div className="project-illustration-area">
                <motion.div
                    className="project-glow"
                    animate={{
                        scale: isCardHovered ? 1.4 : 1,
                        opacity: isCardHovered ? 0.9 : 0.5,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Interactive Icon Cloud - 3D rotating tech stack */}
                <motion.div
                    className="icon-cloud-wrapper"
                    animate={{
                        scale: isCardHovered ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <IconCloud iconSlugs={iconSlugs} />
                </motion.div>

                {/* Fallback illustration behind cloud */}
                <div className="project-illustration-bg">
                    {illustration}
                </div>
            </div>

            {/* Card Content */}
            <div className="project-card-content">
                <motion.h3
                    className="project-showcase-title"
                    animate={{
                        color: isCardHovered ? "#ff6b35" : "#1a1a1a",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h3>
                <p className="project-showcase-description">{description}</p>
            </div>
        </motion.div>
    );
}
