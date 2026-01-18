import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PolaroidProps extends React.HTMLAttributes<HTMLDivElement> {
    rotation: number;
    img: string;
    caption?: string;
    date?: string;
    children?: React.ReactNode;
    showTape?: boolean;
    showScratches?: boolean;
    showBloodStain?: boolean;
}
const Polaroid = React.forwardRef<HTMLDivElement, PolaroidProps>(
    ({ rotation, img, caption, date, children, className, showTape = true, showScratches = true, showBloodStain = false, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                {...rest}
                className={cn("group relative cursor-pointer transition-all duration-500 hover:z-10", className)}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Polaroid frame */}
                <div
                    className="relative bg-[#f5f1e6] p-2 md:p-3 pb-12 md:pb-16 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0"
                    style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.1)',
                    }}
                >
                    {/* Photo */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden">
                        <Image
                            width={100}
                            height={100}
                            src={img || "assets/default-bg-blog.jpg"}
                            alt={caption ?? "Polaroid image"}
                            className="w-full h-full object-cover sepia contrast-125 brightness-90"
                        />

                        {/* Scratches overlay */}
                        {showScratches && (
                            <div
                                className="absolute inset-0 opacity-30 mix-blend-overlay"
                                style={{
                                    background: `
                      linear-gradient(90deg, transparent 48%, rgba(255,255,255,0.3) 50%, transparent 52%),
                      linear-gradient(45deg, transparent 45%, rgba(0,0,0,0.1) 50%, transparent 55%)
                    `,
                                }}
                            />
                        )}

                        {/* VHS distortion on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 static-bg opacity-30" />
                            <div className="absolute top-1/3 left-0 right-0 h-4 bg-blood/20 animate-pulse" />
                        </div>

                        {/* Blood stain */}
                        {showBloodStain && (
                            <div className="absolute bottom-2 right-2 w-8 md:w-12 h-12 md:h-16 bg-blood/60 rounded-full blur-sm"
                                style={{ clipPath: 'polygon(20% 0%, 80% 10%, 100% 50%, 90% 100%, 10% 80%, 0% 40%)' }}
                            />
                        )}
                    </div>

                    {/* Tape effect */}
                    {showTape && (
                        <div
                            className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-12 md:w-16 h-4 md:h-6 bg-[#d4c5a9]/80 rotate-2"
                            style={{
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            }}
                        />
                    )}

                    {/* Caption area */}
                    {(caption || date) && (
                        <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3">
                            {caption && (
                                <p
                                    className="font-typewriter text-[10px] md:text-xs text-[#1a1a1a] mb-1 tracking-wide"
                                    style={{ fontFamily: "'Special Elite', monospace" }}
                                >
                                    {caption}
                                </p>
                            )}
                            {date && (
                                <p className="font-typewriter text-[8px] md:text-[10px] text-[#666] tracking-widest">
                                    {date}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Aged corners */}
                    <div className="absolute top-0 left-0 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-[#d4c5a9] to-transparent" />
                    <div className="absolute top-0 right-0 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-bl from-[#d4c5a9] to-transparent" />
                    <div className="absolute bottom-0 left-0 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-tr from-[#c9bda3] to-transparent" />
                    <div className="absolute bottom-0 right-0 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-tl from-[#c9bda3] to-transparent" />

                    {children}
                </div>

                {/* Shadow under polaroid */}
                <div className="absolute inset-0 bg-black/50 blur-lg -z-10 translate-y-4" />
            </div>
        );
    }
);

Polaroid.displayName = "Polaroid";

export { Polaroid };
