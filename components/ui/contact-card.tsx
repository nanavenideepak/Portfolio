"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ExternalLink, Check, Copy } from "lucide-react";
import { useState } from "react";

interface ContactRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
    isEmail?: boolean;
    isDownload?: boolean;
}

function ContactRow({ icon, label, value, href, isEmail, isDownload }: ContactRowProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (isEmail) {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const content = (
        <motion.div
            className="contact-row"
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="contact-row-left">
                <div className="contact-row-icon">{icon}</div>
                <div className="contact-row-text">
                    <span className="contact-row-label">{label}</span>
                    <span className="contact-row-value">{value}</span>
                </div>
            </div>
            <div className="contact-row-action">
                {isEmail ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopy();
                        }}
                        className="copy-btn"
                        title={copied ? "Copied!" : "Copy email"}
                    >
                        {copied ? (
                            <Check size={16} className="text-green-500" />
                        ) : (
                            <Copy size={16} />
                        )}
                    </button>
                ) : isDownload ? (
                    <Download size={16} />
                ) : (
                    <ExternalLink size={16} />
                )}
            </div>
        </motion.div>
    );

    if (isDownload) {
        return (
            <a href={href} download className="contact-row-link">
                {content}
            </a>
        );
    }

    if (href && !isEmail) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="contact-row-link">
                {content}
            </a>
        );
    }

    if (isEmail) {
        return (
            <a href={`mailto:${value}`} className="contact-row-link">
                {content}
            </a>
        );
    }

    return content;
}

export function ContactCard() {
    const contactItems = [
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "nanavenideepak456@gmail.com",
            isEmail: true,
        },
        {
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/deepak-nanaveni-2ab860200/",
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            value: "View my repositories",
            href: "https://github.com/nanavenideepak",
        },
        {
            icon: <Download size={20} />,
            label: "Resume",
            value: "Download my resume",
            href: "/DEEPAK -RESUME1.pdf",
            isDownload: true,
        },
    ];

    return (
        <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
            {/* Card Header */}
            <div className="contact-card-header">
                <h3 className="contact-card-title">Say Hello</h3>
                <p className="contact-card-subtitle">
                    Let's start a conversation — reach out anytime!
                </p>
            </div>

            {/* Contact Rows */}
            <div className="contact-rows">
                {contactItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                        <ContactRow {...item} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
