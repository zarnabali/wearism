"use client";

import Image from "next/image";
import type { ReactNode } from "react";

/**
 * The device shell used everywhere the product is shown.
 *
 * Pass `src` to drop in a real app screenshot (that's the swap-in point once
 * the frontend screens are exported), or pass `children` to compose a live
 * mock. `label` renders a screen-reader-only description of the screen.
 */
export default function PhoneFrame({
    children,
    src,
    alt = "",
    label,
    className = "",
    priority = false,
    statusBar = true,
    time = "9:41",
}: {
    children?: ReactNode;
    src?: string;
    alt?: string;
    label?: string;
    className?: string;
    priority?: boolean;
    statusBar?: boolean;
    time?: string;
}) {
    return (
        <div className={`phone ${className}`}>
            <div className="phone-notch" aria-hidden />
            <div className="phone-screen">
                {label && <span className="sr-only">{label}</span>}

                {statusBar && <StatusBar time={time} />}

                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 78vw, 340px"
                        className="object-cover"
                        priority={priority}
                    />
                ) : (
                    children
                )}
            </div>

            {/* Side buttons — small detail, big realism payoff */}
            <span
                aria-hidden
                className="absolute -left-[2px] top-[22%] h-9 w-[3px] rounded-l-full bg-[#1a1a1c]"
            />
            <span
                aria-hidden
                className="absolute -left-[2px] top-[32%] h-14 w-[3px] rounded-l-full bg-[#1a1a1c]"
            />
            <span
                aria-hidden
                className="absolute -right-[2px] top-[27%] h-20 w-[3px] rounded-r-full bg-[#1a1a1c]"
            />
        </div>
    );
}

export function StatusBar({ time = "9:41", dark = false }: { time?: string; dark?: boolean }) {
    const tone = dark ? "text-white" : "text-ink";
    return (
        <div
            aria-hidden
            className={`absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold ${tone}`}
        >
            <span className="tabular-nums">{time}</span>
            <span className="flex items-center gap-1">
                <svg viewBox="0 0 18 12" className="h-2.5 w-4 fill-current">
                    <rect x="0" y="7" width="3" height="5" rx="1" />
                    <rect x="4.5" y="5" width="3" height="7" rx="1" />
                    <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
                    <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.35" />
                </svg>
                <svg viewBox="0 0 24 12" className="h-2.5 w-4 fill-none stroke-current">
                    <rect x="0.5" y="1" width="19" height="10" rx="3" strokeWidth="1.2" opacity="0.5" />
                    <rect x="2" y="2.5" width="14" height="7" rx="1.6" className="fill-current stroke-none" />
                    <path d="M21.5 4.5v3" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
            </span>
        </div>
    );
}

