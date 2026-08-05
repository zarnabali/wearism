"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * The reference's section header shape: a small tag, then one very large
 * headline where the first line is full-ink and the second drops to a light
 * grey, then a short paragraph. Used verbatim across every section so the
 * page reads as one system.
 */
export function SectionHead({
    tag,
    line1,
    line2,
    body,
    align = "left",
    tone = "light",
    action,
    className = "",
}: {
    tag?: string;
    line1: ReactNode;
    line2?: ReactNode;
    body?: ReactNode;
    align?: "left" | "center";
    tone?: "light" | "dark";
    action?: ReactNode;
    className?: string;
}) {
    const dark = tone === "dark";
    const centered = align === "center";

    return (
        <div className={`${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}>
            {tag && (
                <Reveal>
                    <p className="t-tag mb-5 text-accent">
                        <span aria-hidden className="tag-dot" />
                        {tag}
                    </p>
                </Reveal>
            )}

            <Reveal delay={0.05}>
                <h2 className={`t-h2 ${dark ? "text-white" : "text-ink"}`}>
                    <span className="block">{line1}</span>
                    {line2 && (
                        <span className={`block ${dark ? "text-white/35" : "text-ink-30"}`}>
                            {line2}
                        </span>
                    )}
                </h2>
            </Reveal>

            {body && (
                <Reveal delay={0.1}>
                    <p
                        className={`t-body mt-6 max-w-xl ${centered ? "mx-auto" : ""} ${dark ? "!text-white/55" : ""
                            }`}
                    >
                        {body}
                    </p>
                </Reveal>
            )}

            {action && (
                <Reveal delay={0.15}>
                    <div className={`mt-8 ${centered ? "flex justify-center" : ""}`}>{action}</div>
                </Reveal>
            )}
        </div>
    );
}
