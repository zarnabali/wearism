"use client";

import Image from "next/image";
import { SectionHead } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/*
 * Four numbered steps, matching the reference's "From idea to assets in four
 * steps" block. Static and readable — the old pinned/sticky version cost three
 * screens of scroll to say the same thing.
 */

const STEPS = [
    {
        n: "01",
        title: "Add your clothes",
        body: "Post an outfit photo or connect Instagram. The AI separates every garment and tags it on its own.",
        meta: "No manual entry",
        image: "/images/wardrobe1.jpeg",
        alt: "A rail of hanging clothes being catalogued",
    },
    {
        n: "02",
        title: "Get outfits back",
        body: "Combinations you own but never tried, scored on fit and colour, matched to the weather and the occasion.",
        meta: "Explained, not guessed",
        image: "/images/styling-session.jpg",
        alt: "A styling session laying out coordinated pieces",
    },
    {
        n: "03",
        title: "Post and get read",
        body: "Share the fit to your circle. Honest feedback from people who know you, before you walk out.",
        meta: "Private or public",
        image: "/images/community-meetup.jpg",
        alt: "A group of friends meeting up in styled outfits",
    },
    {
        n: "04",
        title: "Swap what's stale",
        body: "Trade the piece you're bored of with someone nearby. Tracked both ways, with the impact shown.",
        meta: "Loan or keep",
        image: "/images/socials/swap-host.jpg",
        alt: "Clothes laid out at a community swap",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section bg-white">
            <div className="shell">
                <SectionHead
                    tag="How it works"
                    line1="From closet to outfit"
                    line2="in four steps."
                />

                <RevealGroup
                    stagger={0.07}
                    className="mt-14 grid gap-x-5 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4"
                >
                    {STEPS.map((s) => (
                        <RevealItem key={s.n}>
                            <article className="h-full">
                                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-bg-2">
                                    <Image
                                        src={s.image}
                                        alt={s.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="mt-5 flex items-baseline gap-3">
                                    <span className="text-[0.9375rem] font-medium tabular-nums text-accent">
                                        {s.n}
                                    </span>
                                    <h3 className="t-h4 text-ink">{s.title}</h3>
                                </div>

                                <p className="t-body-sm mt-2.5">{s.body}</p>
                                <p className="mt-4 inline-flex chip">{s.meta}</p>
                            </article>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
