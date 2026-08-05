"use client";

import type { ReactNode } from "react";

/**
 * Infinite ticker.
 *
 * The track holds two identical halves and translates -50%, so the loop is
 * seamless *provided one half is at least as wide as the container* — if it
 * isn't, the content scrolls off the left and leaves a visible gap before the
 * duplicate arrives. `repeat` sets how many times the children are rendered
 * inside each half; raise it for short content on wide screens.
 *
 * Pauses on hover.
 */
export default function Marquee({
    children,
    duration = 42,
    reverse = false,
    repeat = 1,
    className = "",
}: {
    children: ReactNode;
    duration?: number;
    reverse?: boolean;
    repeat?: number;
    className?: string;
}) {
    const half = (
        <div className="flex shrink-0 items-center">
            {Array.from({ length: Math.max(1, repeat) }, (_, i) => (
                <div key={i} className="flex shrink-0 items-center">
                    {children}
                </div>
            ))}
        </div>
    );

    return (
        <div className={`marquee-host fade-x relative flex overflow-hidden ${className}`}>
            <div
                className="animate-marquee flex shrink-0 items-center"
                style={{
                    ["--marquee-duration" as string]: `${duration}s`,
                    animationDirection: reverse ? "reverse" : "normal",
                }}
            >
                {half}
                <div aria-hidden>{half}</div>
            </div>
        </div>
    );
}
