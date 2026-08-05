"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts up to `value` once it scrolls into view. Numbers that animate read as
 * evidence; static ones read as decoration.
 */
export default function Counter({
    value,
    decimals = 0,
    duration = 1600,
    prefix = "",
    suffix = "",
    className = "",
}: {
    value: number;
    decimals?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplay(value);
            return;
        }

        let frame = 0;
        const start = performance.now();

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out-expo so it decelerates into the final number
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            setDisplay(value * eased);
            if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value, duration]);

    return (
        <span ref={ref} className={`t-num ${className}`}>
            {prefix}
            {display.toLocaleString("en-US", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}
            {suffix}
        </span>
    );
}
