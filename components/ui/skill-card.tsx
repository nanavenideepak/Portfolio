"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    techIcons: string[];
    tags?: string[];
    index?: number;
}

// Animation variants for the card
const cardVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
};

// Simple icon fetcher component with individual hover
function TechIcon({ slug, isCardHovered }: { slug: string; isCardHovered: boolean }) {
    const [icon, setIcon] = useState<SimpleIcon | null>(null);
    const [isIconHovered, setIsIconHovered] = useState(false);

    useEffect(() => {
        fetchSimpleIcons({ slugs: [slug] })
            .then((result) => {
                if (result.simpleIcons[slug]) {
                    setIcon(result.simpleIcons[slug]);
                }
            })
            .catch(() => { });
    }, [slug]);

    // Don't render if icon not found
    if (!icon) {
        return null;
    }

    return (
        <motion.div
            className="tech-icon-item"
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            animate={{
                y: isIconHovered ? -8 : isCardHovered ? -4 : 0,
                scale: isIconHovered ? 1.2 : isCardHovered ? 1.05 : 1,
            }}
            transition={{
                duration: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ cursor: "pointer" }}
        >
            <motion.div
                animate={{
                    filter: isIconHovered
                        ? "drop-shadow(0 0 10px rgba(255, 140, 66, 0.7))"
                        : isCardHovered
                            ? "drop-shadow(0 0 4px rgba(255, 140, 66, 0.3))"
                            : "drop-shadow(0 0 0px rgba(255, 140, 66, 0))",
                }}
                transition={{ duration: 0.25 }}
            >
                <span title="">
                    {renderSimpleIcon({
                        icon: icon,
                        size: 36,
                        aProps: {
                            href: undefined,
                            title: "",
                            style: { cursor: "pointer", pointerEvents: "none" },
                            onClick: (e: React.MouseEvent) => e.preventDefault(),
                        },
                    })}
                </span>
            </motion.div>
        </motion.div>
    );
}

export function SkillCard({
    icon,
    title,
    description,
    badge,
    techIcons,
    tags = [],
    index = 0,
}: SkillCardProps) {
    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <motion.div
            className="skill-category-card group"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            onHoverStart={() => setIsCardHovered(true)}
            onHoverEnd={() => setIsCardHovered(false)}
            whileHover={{
                scale: 1.01,
                y: -4,
            }}
        >
            {/* Card Header */}
            <div className="skill-card-header">
                {/* Left: Icon + Title + Description */}
                <div className="skill-card-left">
                    <motion.div
                        className="skill-icon-box"
                        animate={{
                            boxShadow: isCardHovered
                                ? "0 0 25px rgba(255, 140, 66, 0.4)"
                                : "0 0 0px rgba(255, 140, 66, 0)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {icon}
                    </motion.div>
                    <div className="skill-card-text">
                        <h3 className="skill-card-title">{title}</h3>
                        <p className="skill-card-description">{description}</p>
                    </div>
                </div>

                {/* Right: Badge */}
                {badge && (
                    <motion.div
                        className="skill-badge"
                        animate={{
                            scale: isCardHovered ? 1.05 : 1,
                            backgroundColor: isCardHovered
                                ? "rgba(255, 140, 66, 0.15)"
                                : "rgba(255, 255, 255, 0.05)",
                            borderColor: isCardHovered
                                ? "rgba(255, 140, 66, 0.4)"
                                : "rgba(255, 255, 255, 0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {badge}
                    </motion.div>
                )}
            </div>

            {/* Tech Stack Icons Row */}
            <motion.div
                className="tech-icons-row"
                animate={{
                    y: isCardHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {techIcons.map((slug, i) => (
                    <TechIcon key={slug + i} slug={slug} isCardHovered={isCardHovered} />
                ))}
            </motion.div>

            {/* Tags Row */}
            {tags.length > 0 && (
                <motion.div
                    className="skill-tags-row"
                    animate={{
                        opacity: isCardHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {tags.map((tag, i) => (
                        <span key={tag + i} className="skill-tag">
                            #{tag}
                        </span>
                    ))}
                </motion.div>
            )}

            {/* Hover Glow Effect */}
            <motion.div
                className="skill-card-glow"
                animate={{
                    opacity: isCardHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}
