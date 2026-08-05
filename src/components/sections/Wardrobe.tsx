"use client";

import Image from "next/image";
import { SectionHead } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/*
 * Mirrors the reference's "one product, every variation" grid — except the
 * variations here are outfits generated from a single wardrobe rather than
 * renders of a single product.
 */

const LOOKS = [
    { src: "/images/outfits/lecture.png", label: "Lecture", score: "9.1" },
    { src: "/images/outfits/coffee-run.png", label: "Coffee run", score: "8.7" },
    { src: "/images/outfits/presentation.png", label: "Presentation", score: "9.4" },
    { src: "/images/outfits/weekend.png", label: "Weekend", score: "8.9" },
    { src: "/images/outfits/dinner.png", label: "Dinner", score: "9.2" },
    { src: "/images/outfits/interview.png", label: "Interview", score: "9.6" },
];

const NOTES = [
    {
        k: "Auto-tagged",
        v: "Post one photo. The AI separates every garment and tags category, colour, season and formality on its own.",
    },
    {
        k: "Cost per wear",
        v: "Every item carries its real price the jacket that cost $120 and has been worn twice has nowhere to hide.",
    },
    {
        k: "Gap analysis",
        v: "It tells you what's genuinely missing from your closet, which is almost never what's on sale.",
    },
];

export default function Wardrobe() {
    return (
        <section id="wardrobe" className="section bg-white">
            <div className="shell">
                <SectionHead
                    tag="Your wardrobe, working"
                    line1="One closet."
                    line2="Every outfit in it."
                    body="Wearism reads what you own, then keeps finding combinations inside it — matched to the weather, the occasion and the way you actually dress. No new purchases involved."
                />

                <RevealGroup
                    stagger={0.06}
                    className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-4"
                >
                    {LOOKS.map((l) => (
                        <RevealItem key={l.src}>
                            <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-bg-2">
                                <Image
                                    src={l.src}
                                    alt={`Outfit suggestion for ${l.label.toLowerCase()}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                                />
                                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 md:p-4">
                                    <span className="rounded-full bg-white/92 px-3 py-1.5 text-[0.8125rem] font-medium text-ink backdrop-blur">
                                        {l.label}
                                    </span>
                                    <span className="rounded-full bg-accent px-2.5 py-1.5 text-[0.75rem] font-medium tabular-nums text-white">
                                        {l.score}
                                    </span>
                                </figcaption>
                            </figure>
                        </RevealItem>
                    ))}
                </RevealGroup>

                <RevealGroup
                    stagger={0.08}
                    className="mt-14 grid gap-x-10 gap-y-8 border-t border-line pt-12 md:mt-20 md:grid-cols-3"
                >
                    {NOTES.map((n) => (
                        <RevealItem key={n.k}>
                            <h3 className="t-tag text-accent">{n.k}</h3>
                            <p className="t-body-sm mt-2.5">{n.v}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
