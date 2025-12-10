"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Terminal, Wrench } from "lucide-react";
import { SkillCard } from "@/components/ui/skill-card";

const skillCategories = [
    {
        icon: <Brain size={24} color="white" />,
        title: "AI & Machine Learning",
        description: "Advanced AI frameworks, machine learning libraries, and data science tools for building intelligent applications.",
        badge: "Specialized",
        techIcons: ["langchain", "numpy", "pandas", "streamlit"],
        tags: ["AI", "ML", "Data Science"],
    },
    {
        icon: <Code2 size={24} color="white" />,
        title: "Full-Stack Development",
        description: "Modern web technologies for building scalable applications from frontend to backend.",
        badge: "Hands on Knowledge",
        techIcons: ["react", "nodedotjs", "mongodb", "javascript", "html5", "css3"],
        tags: ["Frontend", "Backend", "Web"],
    },
    {
        icon: <Terminal size={24} color="white" />,
        title: "Programming Languages",
        description: "Strong foundations in multiple programming paradigms and languages.",
        badge: "Proficient",
        techIcons: ["c", "python", "openjdk", "mysql"],
        tags: ["Languages", "OOP", "DSA"],
    },
    {
        icon: <Wrench size={24} color="white" />,
        title: "Developer Tools",
        description: "Proficient with modern development workflows and tooling.",
        badge: "Great Experience",
        techIcons: ["git", "github", "postman"],
        tags: ["DevOps", "Tools", "Workflow"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="section-full skills-section-bg">
            <div className="section-content skills-layout">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="skills-big-title font-science-gothic">SKILLS</h1>
                    <p className="skills-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((skill, index) => (
                        <SkillCard key={skill.title} {...skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
