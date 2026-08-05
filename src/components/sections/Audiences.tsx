"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const AUDIENCES = [
    {
        id: "students",
        tab: "Students",
        title: "A great wardrobe and no budget.",
        body: "You already own more than you wear, and you're not buying your way out of it. Wearism turns your room, your dorm and your campus into one shared closet.",
        points: [
            "Free tier covers the whole daily loop",
            "Swap with people you'll actually run into",
            "Cost-per-wear on everything you own",
            "Tomorrow's outfit planned tonight",
        ],
        cta: "Join the waitlist",
        image: "/images/target-audience/student.jpg",
        alt: "A student in an everyday styled outfit",
        stat: { k: "Free tier", v: "$0" },
    },
    {
        id: "creators",
        tab: "Creators",
        title: "A feed backed by a real wardrobe.",
        body: "Every look you post is already itemised, so followers see exactly what's in it. Build an audience around a closet instead of a haul.",
        points: [
            "Auto-itemised posts, no manual tagging",
            "Style twins matched on wardrobe overlap",
            "Host circles and community challenges",
            "Attribution when a follower buys",
        ],
        cta: "Apply as a founding creator",
        image: "/images/target-audience/creators.jpg",
        alt: "A creator photographing an outfit for their feed",
        stat: { k: "Tagging", v: "Automatic" },
    },
    {
        id: "brands",
        tab: "Brands & vendors",
        title: "Advertise to gaps, not demographics.",
        body: "You currently pay to reach people who look like buyers. We show you closets provably missing your category: anonymised, aggregated, and attached to real intent.",
        points: [
            "Live wardrobe-gap dashboard by category",
            "Placements inside recommendations",
            "5% commission you pay on outcomes",
            "Return-risk scores before you spend",
        ],
        cta: "Become a launch vendor",
        image: "/images/target-audience/vendors.jpg",
        alt: "A retail rail of curated brand clothing",
        stat: { k: "Commission", v: "5%" },
    },
    {
        id: "licensing",
        tab: "Licensing",
        title: "Our engine, inside your product.",
        body: "Large retailers don't need another app. They need the intelligence layer: license the recommendation engine and recognition models, tuned to your catalogue.",
        points: [
            "White-label recommendation engine",
            "Garment recognition and tagging models",
            "Occasion- and weather-aware styling",
            "Annual licence on volume and depth",
        ],
        cta: "Talk about licensing",
        image: "/images/target-audience/licensing.jpg",
        alt: "A retail interior where a styling engine would be deployed",
        stat: { k: "Delivery", v: "API / white-label" },
    },
];

export default function Audiences() {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        const last = AUDIENCES.length - 1;
        let next: number | null = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = last;
        if (next !== null) {
            e.preventDefault();
            setActive(next);
            tabRefs.current[next]?.focus();
        }
    };

    const a = AUDIENCES[active];

    return (
        <section id="audiences" className="section bg-white">
            <div className="shell">
                <SectionHead
                    tag="Who it's for"
                    line1="One platform,"
                    line2="four kinds of user."
                    body="Consumers make the wardrobe data. The wardrobe data makes the demand signal. The demand signal is what brands have never been able to buy."
                />

                <Reveal delay={0.12}>
                    <div
                        role="tablist"
                        aria-label="Audience segments"
                        onKeyDown={onKeyDown}
                        className="no-bar mt-12 flex gap-2 overflow-x-auto pb-1"
                    >
                        {AUDIENCES.map((item, i) => (
                            <button
                                key={item.id}
                                ref={(el) => {
                                    tabRefs.current[i] = el;
                                }}
                                role="tab"
                                id={`aud-tab-${item.id}`}
                                aria-selected={active === i}
                                aria-controls={`aud-panel-${item.id}`}
                                tabIndex={active === i ? 0 : -1}
                                onClick={() => setActive(i)}
                                className={`shrink-0 rounded-full px-5 py-2.5 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-300 ${active === i
                                    ? "text-white [background-image:var(--grad-accent-diag)]"
                                    : "bg-bg-2 text-ink-64 hover:text-ink"
                                    }`}
                            >
                                {item.tab}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="relative mt-5 min-h-[32rem] md:min-h-[26rem]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={a.id}
                            role="tabpanel"
                            id={`aud-panel-${a.id}`}
                            aria-labelledby={`aud-tab-${a.id}`}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="grid overflow-hidden rounded-2xl bg-bg-2 md:grid-cols-[1.1fr_0.9fr]"
                        >
                            <div className="p-7 md:p-10">
                                <h3 className="t-h3 text-ink">{a.title}</h3>
                                <p className="t-body mt-4 max-w-xl">{a.body}</p>

                                <ul className="mt-8 space-y-3 border-t border-line pt-7">
                                    {a.points.map((p) => (
                                        <li key={p} className="flex items-start gap-3">
                                            <svg
                                                viewBox="0 0 20 20"
                                                aria-hidden
                                                className="mt-[5px] h-3 w-3 shrink-0 fill-accent"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.7 4.2a.75.75 0 0 1 .14 1.05l-8 10.5a.75.75 0 0 1-1.13.07l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.9 3.89 7.48-9.81a.75.75 0 0 1 1.05-.14Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-[0.9375rem] leading-relaxed text-ink-64">
                                                {p}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="btn mt-8">
                                    {a.cta}
                                </Link>
                            </div>

                            <div className="relative min-h-[17rem]">
                                <Image
                                    src={a.image}
                                    alt={a.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(2,1,8,0.7))] p-6 pt-16">
                                    <p className="text-[0.8125rem] text-white/60">{a.stat.k}</p>
                                    <p className="t-num mt-1 text-[1.75rem] text-white">{a.stat.v}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
