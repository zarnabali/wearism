"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 26 },
    down: { x: 0, y: -26 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
};

/**
 * One reveal primitive for the whole site, so every section enters with the
 * same physics instead of each component inventing its own timing.
 */
export function Reveal({
    children,
    delay = 0,
    direction = "up",
    duration = 0.75,
    className,
    once = true,
    amount = 0.25,
}: {
    children: ReactNode;
    delay?: number;
    direction?: Direction;
    duration?: number;
    className?: string;
    once?: boolean;
    amount?: number;
}) {
    const { x, y } = offsets[direction];

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({
    children,
    className,
    stagger = 0.08,
    delay = 0,
    amount = 0.2,
    once = true,
}: {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    amount?: number;
    once?: boolean;
}) {
    const variants: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount }}
        >
            {children}
        </motion.div>
    );
}

export function RevealItem({
    children,
    className,
    direction = "up",
}: {
    children: ReactNode;
    className?: string;
    direction?: Direction;
}) {
    const { x, y } = offsets[direction];

    const variants: Variants = {
        hidden: { opacity: 0, x, y },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: EASE } },
    };

    return (
        <motion.div className={className} variants={variants}>
            {children}
        </motion.div>
    );
}

/**
 * Headline that rises line-by-line from behind a mask. Give it text split on
 * `\n` and each line animates independently — the classic editorial entrance.
 */
export function MaskedLines({
    lines,
    className,
    lineClassName,
    delay = 0,
    once = true,
}: {
    lines: ReactNode[];
    className?: string;
    lineClassName?: string;
    delay?: number;
    once?: boolean;
}) {
    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.5 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: delay } } }}
        >
            {lines.map((line, i) => (
                <span key={i} className={`block overflow-hidden ${lineClassName ?? ""}`}>
                    <motion.span
                        className="block"
                        variants={{
                            hidden: { y: "108%" },
                            show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
                        }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}
