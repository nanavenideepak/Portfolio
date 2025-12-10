"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FancyRightBox() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse movement for rotating border light
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const box = boxRef.current;
        if (!box) return;
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        // Calculate angle and adjust by -90 degrees so 0° points up, then offset for gradient start
        const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
        setRotation(angle);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation(0);
    };

    return (
        <motion.div
            ref={boxRef}
            className="fancy-right-box-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                "--border-rotation": `${rotation}deg`,
                "--border-opacity": isHovered ? 1 : 0.5,
            } as React.CSSProperties}
        >
            {/* Rotating Border Glow */}
            <div className="rotating-border-glow"></div>

            {/* Inner Box Container */}
            <div className="fancy-right-box">
                {/* Animated Gradient Blob */}
                <div className="gradient-blob"></div>

                {/* Glassy Background Overlay */}
                <div className="glassy-overlay"></div>

                {/* Corner accents */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>

                {/* Content */}
                <div className="fancy-box-content">
                    <motion.h3
                        className="fancy-line"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Design<span className="accent-dot">.</span>
                    </motion.h3>
                    <motion.h3
                        className="fancy-line"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Develop<span className="accent-dot">.</span>
                    </motion.h3>
                    <motion.h3
                        className="fancy-line"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Deploy<span className="accent-dot">.</span>
                    </motion.h3>
                    <motion.div
                        className="fancy-pill-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <span className="fancy-pill">Create!</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}


