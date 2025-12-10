"use client";

import { motion } from "framer-motion";
import { Home, Video, FileSearch, ExternalLink, Github } from "lucide-react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { useState } from "react";

const projectsData = [
    {
        title: "StaySphere",
        subtitle: "Property Rental Platform",
        description: "A scalable Airbnb-style rental platform with 10+ dynamic routes, secure authentication, real-time bookings, and optimized MongoDB queries reducing search time by 40%.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        iconSlugs: ["react", "nodedotjs", "mongodb", "express", "javascript", "html5", "css3"],
        extraCount: 2,
        icon: <Home size={48} strokeWidth={1.5} />,
        iconBg: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
        liveLink: "https://airbnb-project-rpsf.onrender.com",
        githubLink: "https://github.com/nanavenideepak/airbnb-project",
    },
    {
        title: "ConnectLive",
        subtitle: "Real-Time Video Platform",
        description: "A full-stack WebRTC + Socket.IO conferencing system enabling real-time video/audio, dynamic rooms, peer-to-peer signaling, and 95% connection reliability.",
        techStack: ["React", "WebRTC", "Socket.IO", "Node.js"],
        iconSlugs: ["react", "webrtc", "socketdotio", "nodedotjs", "javascript", "typescript"],
        extraCount: 1,
        icon: <Video size={48} strokeWidth={1.5} />,
        iconBg: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
        liveLink: null,
        githubLink: "https://github.com/nanavenideepak/ConnectLive",
    },
    {
        title: "Multi-PDF RAG Chatbot",
        subtitle: "Intelligent Query Engine",
        description: "An advanced RAG chatbot that allows users to have intelligent conversations with multiple PDF documents. Built with LangChain, Gemini Pro, and FAISS vector store.",
        techStack: ["Python", "Gemini Pro", "LangChain", "FAISS"],
        iconSlugs: ["python", "google", "langchain", "streamlit", "pytorch"],
        extraCount: 1,
        icon: <FileSearch size={48} strokeWidth={1.5} />,
        iconBg: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
        liveLink: null,
        githubLink: "https://github.com/nanavenideepak/MultiPDF-RAG-Chatbot",
    },
];

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="project-card-new"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Icon Cloud Illustration Area */}
            <div className="project-illustration">
                <motion.div
                    className="project-glow-effect"
                    animate={{
                        opacity: isHovered ? 0.8 : 0.3,
                        scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                />

                <motion.div
                    className="project-icon-cloud-container"
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <IconCloud iconSlugs={project.iconSlugs} />
                </motion.div>

                <motion.div
                    className="project-icon-center"
                    style={{ background: project.iconBg }}
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        boxShadow: isHovered ? "0 20px 50px rgba(0, 0, 0, 0.25)" : "0 15px 40px rgba(0, 0, 0, 0.15)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {project.icon}
                </motion.div>
            </div>

            <div className="project-card-body">
                <motion.h3
                    className="project-card-title"
                    animate={{ color: isHovered ? "#ff6b35" : "#1a1a1a" }}
                    transition={{ duration: 0.3 }}
                >
                    {project.title}
                </motion.h3>
                <p className="project-card-description">{project.description}</p>

                <div className="project-tech-tags">
                    {project.techStack.map((tech, i) => (
                        <motion.span
                            key={tech}
                            className="project-tech-tag"
                            animate={{
                                y: isHovered ? -3 : 0,
                                boxShadow: isHovered ? "0 6px 20px rgba(255, 140, 66, 0.25)" : "0 2px 6px rgba(0, 0, 0, 0.05)",
                            }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                    {project.extraCount > 0 && (
                        <span className="project-tech-tag extra">+{project.extraCount}</span>
                    )}
                </div>

                <div className="project-actions">
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn live"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </motion.a>
                    )}
                    {project.githubLink && (
                        <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn github"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={14} />
                            GitHub
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="section-full projects-section-bg">
            <div className="section-content projects-layout">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="projects-label">FEATURED WORK</span>
                    <h1 className="projects-main-title font-science-gothic">Projects</h1>
                    <p className="projects-subtitle">
                        A collection of projects showcasing my skills in full-stack development and AI.
                    </p>
                </motion.div>

                <div className="projects-grid-new">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
