import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative w-48 h-14 cursor-pointer overflow-hidden rounded-full border-2 border-orange-400/60 bg-white/90 font-semibold backdrop-blur-xl shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 transition-all duration-300",
                className,
            )}
            {...props}
        >
            {/* Default state text */}
            <span className="absolute inset-0 flex items-center justify-center text-gray-800 text-base tracking-wide transition-all duration-300 group-hover:opacity-0">
                {text}
            </span>

            {/* Hover state text with arrow */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-base tracking-wide">{text}</span>
                <ArrowRight size={18} strokeWidth={2.5} />
            </div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

