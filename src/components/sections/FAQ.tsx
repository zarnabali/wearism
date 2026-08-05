"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
    {
        q: "Do I have to photograph everything I own?",
        a: "No — that's the barrier that kills every other wardrobe app. Post a normal outfit photo and the AI separates each garment out of it. You can also bulk-upload a batch, or connect Instagram and let it read your existing posts to build the wardrobe backwards.",
    },
    {
        q: "What's free and what costs money?",
        a: "The core loop is free: digitising your wardrobe, daily outfit suggestions, and the community. Premium is $1.79 a month for unlimited AI recommendations, occasion and weather styling, wardrobe analytics, the planner and private circles.",
    },
    {
        q: "How does swapping actually work?",
        a: "You browse wardrobes inside your circle, propose a trade, and both sides confirm. Shipping is self-arranged for now with mandatory tracking numbers shared in-app, photo confirmation on receipt, and a trust score on every account. Swaps can be temporary loans or permanent.",
    },
    {
        q: "Is my wardrobe data sold to brands?",
        a: "No. Brands never see your photos, your identity or your raw wardrobe. They see aggregated, anonymised gap data — that a few thousand closets in a region are missing lightweight tailoring, for instance. Matching happens on our side. Image uploads are opt-in and encrypted.",
    },
    {
        q: "How accurate is the AI, honestly?",
        a: "Age estimation classifies to about 85% accuracy on range, and clothing classification covers 50+ categories trained on DeepFashion. It isn't perfect — you can correct any tag by hand, and low-confidence predictions get flagged rather than presented as fact.",
    },
    {
        q: "Can I use it without the social side?",
        a: "Yes. Plenty of people will only ever want the digital closet and the daily stylist. Circles, feeds and swapping are all opt-in, and the app is useful on day one with an audience of exactly one.",
    },
    {
        q: "I run a brand. What do I get?",
        a: "A demand dashboard of live wardrobe gaps, promoted placements inside outfit recommendations rather than beside them, return-risk scoring before you spend, and conversion analytics. Onboarding is a one-time $179 fee and we take 5% on attributed sales.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="section bg-bg-2">
            <div className="shell">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <SectionHead
                            tag="FAQ"
                            line1="Real answers."
                            line2="Not AI ones."
                            action={
                                <Link href="/contact" className="btn btn-outline">
                                    Ask us something else
                                </Link>
                            }
                        />
                    </div>

                    <Reveal delay={0.08}>
                        <dl>
                            {FAQS.map((f, i) => {
                                const isOpen = open === i;
                                return (
                                    <div key={f.q} className="border-b border-line first:border-t">
                                        <dt>
                                            <button
                                                type="button"
                                                onClick={() => setOpen(isOpen ? null : i)}
                                                aria-expanded={isOpen}
                                                aria-controls={`faq-a-${i}`}
                                                className="group flex w-full items-start gap-6 py-6 text-left"
                                            >
                                                <span className="flex-1 text-[1.0625rem] font-medium leading-snug tracking-[-0.018em] text-ink md:text-[1.25rem]">
                                                    {f.q}
                                                </span>
                                                <span
                                                    aria-hidden
                                                    className={`relative mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full transition-all duration-400 ${isOpen ? "rotate-45 bg-accent text-white" : "bg-white text-ink"
                                                        }`}
                                                >
                                                    <span className="absolute h-[10px] w-px bg-current" />
                                                    <span className="absolute h-px w-[10px] bg-current" />
                                                </span>
                                            </button>
                                        </dt>
                                        <dd
                                            id={`faq-a-${i}`}
                                            className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="t-body-sm max-w-2xl pb-6 pr-12">{f.a}</p>
                                            </div>
                                        </dd>
                                    </div>
                                );
                            })}
                        </dl>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
