"use client";

import { cn } from "@/lib/utils";
import { Home, Video, FileSearch } from "lucide-react";

export function ProjectsSection() {
    const projects = [
        {
            title: "StaySphere – Property Rental Platform",
            description:
                "A scalable Airbnb-style rental platform with 10+ dynamic routes, secure authentication, real-time bookings, and optimized MongoDB queries reducing search time by 40%.",
            icon: <Home />,
        },
        {
            title: "ConnectLive – Real-Time Video Communication Platform",
            description:
                "A full-stack WebRTC + Socket.IO conferencing system enabling real-time video/audio, dynamic rooms, peer-to-peer signaling, and 95% connection reliability.",
            icon: <Video />,
        },
        {
            title: "Multi-PDF RAG System – Intelligent PDF Query Engine",
            description:
                "A multi-PDF question-answering engine using FAISS, LangChain, PyPDF2, and Gemini LLM, supporting 10K-character context retrieval with real-time semantic search.",
            icon: <FileSearch />,
        },
    ];

    return (
        <div className="min-h-screen w-full bg-neutral-950 py-20">
            <div className="w-full max-w-[1600px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-5xl font-bold text-white mb-16 text-center">
                    Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 relative z-10">
                    {projects.map((project, index) => (
                        <Project key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Project = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-16 px-4 relative group/feature border-neutral-800 flex-1",
                index === 0 && "lg:border-l border-neutral-800",
                "lg:border-b border-neutral-800"
            )}
        >
            {/* Hover gradient overlay */}
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />

            {/* Icon */}
            <div className="mb-6 relative z-10 px-10 text-neutral-200">
                <div className="w-14 h-14">{icon}</div>
            </div>

            {/* Title */}
            <div className="text-xl font-bold mb-4 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                    {title}
                </span>
            </div>

            {/* Description */}
            <p className="text-base text-neutral-300 max-w-md relative z-10 px-10 leading-relaxed">
                {description}
            </p>
        </div>
    );
};
