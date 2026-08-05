"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

/**
 * Hero: full-bleed fashion video, one headline, two actions. Nothing else.
 *
 * The capability names run as a single continuous line beneath — a ticker
 * rather than a grid of cells, so the strip reads as one thought instead of
 * four boxes competing with the headline.
 */

const CAPABILITIES = [
    "Rate a fit",
    "Style your week",
    "Swap with friends",
    "Share the look",
    "Find your style twins",
    "Track every wear",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-dark">
            <video
                autoPlay
                loop
                muted
                playsInline
                aria-hidden
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            >
                <source src="/videos/vid1.mp4" type="video/mp4" />
            </video>

            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,1,8,0.5)_0%,rgba(2,1,8,0.12)_34%,rgba(2,1,8,0.6)_76%,rgba(2,1,8,0.9)_100%)]"
            />

            <div
                className="shell flex flex-1 flex-col justify-end pb-12 md:pb-16"
                style={{ paddingTop: "var(--header-h)" }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
                    className="t-tag mb-4 text-white/65"
                >
                    <span aria-hidden className="tag-dot" />
                    Social styling for the clothes you already own
                </motion.p>

                <h1 className="t-h1 max-w-[16ch] text-white ">
                    <motion.span
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                        className="block "
                    >
                        Feel confident in
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
                        className="t-grad -mt-[0.25em] block pb-2"
                    >
                        the clothes you wear.
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.44, ease: EASE }}
                    className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                    <Link href="/contact" className="btn">
                        Join the waitlist
                    </Link>
                    <Link href="#community" className="btn btn-glass">
                        See the community
                    </Link>
                </motion.div>
            </div>

            {/* One continuous line of capabilities, not a grid of cells */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
                className="relative z-10 border-t border-white/15 py-3 md:py-3.5"
            >
                {/* repeat×3 so one half always exceeds the viewport — otherwise the
                    line scrolls off the left and leaves a gap before it returns */}
                <Marquee duration={46} repeat={3}>
                    {CAPABILITIES.map((c) => (
                        <span key={c} className="flex items-center whitespace-nowrap">
                            <span className="px-6 text-[0.9375rem] font-medium tracking-[-0.012em] text-white/75 md:px-7 md:text-[1rem]">
                                {c}
                            </span>
                            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-accent" />
                        </span>
                    ))}
                </Marquee>
            </motion.div>
        </section>
    );
}
