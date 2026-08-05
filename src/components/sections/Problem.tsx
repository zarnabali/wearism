"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHead } from "@/components/ui/Section";

/*
 * Full-bleed panels that close over one another, matching the reference's
 * `.list__main__slide` block: every panel is viewport height, square-cornered,
 * edge to edge, sticky at top 0 — so the next one slides up and covers the
 * last completely rather than parking below it.
 *
 * Pure position:sticky, so there's no scroll hijacking and nothing to
 * desynchronise from Lenis.
 *
 * Every figure carries a `statLabel`: a bare number explains nothing on its
 * own, and these are the four facts the whole product argument rests on.
 */

const PANELS = [
    {
        n: "01",
        code: "(WD)",
        stat: "80%",
        statLabel: "of your wardrobe never gets worn",
        title: "Your closet is\nmostly decoration.",
        points: ["Only 20% in regular rotation", "The same dozen pieces on repeat"],
        lead: "You paid for all of it.",
        leadMuted: "Four out of five garments sit untouched. You own a full wardrobe and wear a fifth of it.",
        grad: "stack-1",
        images: ["/images/problems/wardrobe/1.png", "/images/problems/wardrobe/2.png"],
        imageAlts: [
            "An overstuffed wardrobe packed with unworn clothing",
            "A full clothing rail seen end-on",
        ],
    },
    {
        n: "02",
        code: "(DF)",
        stat: "17 min",
        statLabel: "spent deciding what to wear, daily",
        title: "Every morning starts\nwith a small defeat.",
        points: ["Over 100 hours a year", "The same outfits anyway"],
        lead: "Seventeen minutes, gone.",
        leadMuted: "Choosing between the same few things.",
        grad: "stack-2",
        images: ["/images/problems/decision/1.jpeg", "/images/problems/decision/2.jpeg"],
        imageAlts: [
            "Someone deciding what to wear at an open wardrobe",
            "Outfit options laid out before choosing",
        ],
    },
    {
        n: "03",
        code: "(TW)",
        stat: "92 million tons",
        statLabel: "of clothing thrown away every year",
        title: "The rest of it\nends up in the ground.",
        points: ["A truckload landfilled every second", "More carbon than aviation"],
        lead: "Most of it still wearable.",
        leadMuted: "Binned not because it wore out, but because nobody remembered owning it.",
        grad: "stack-3",
        images: ["/images/problems/pollution/textile_waste_landfill.png", "/images/problems/pollution/fashion-environment.jpg"],
        imageAlts: [
            "A landfill site filled with discarded textiles",
            "Discarded fast fashion washed up on a shoreline",
        ],
    },
    {
        n: "04",
        code: "(GP)",
        stat: "0",
        statLabel: "apps built around the clothes you already own",
        title: "Nothing works with\nwhat you already have.",
        points: ["Catalogues without intelligence", "Stylists that never see your closet"],
        lead: "Everyone is selling you more.",
        leadMuted: "Not one platform is solving the eighty percent already hanging in your room.",
        grad: "stack-4",
        images: ["/images/problems/app/1.png", "/images/problems/app/2.png"],
        imageAlts: [
            "A wardrobe app screen that only catalogues garments",
            "A styling app giving advice without seeing the user's closet",
        ],
    },
];

export default function Problem() {
    return (
        <section id="problem" className="bg-white">
            <div className="shell section-sm pt-20 md:pt-28">
                <SectionHead
                    tag="The problem"
                    line1="Fashion isn't short"
                    line2="of clothes."
                    body="It's short of intelligence. People own more than any generation before them and feel less able to dress well than ever. Four numbers explain why."
                />
            </div>

            <div className="stack mt-10 md:mt-14">
                {PANELS.map((p) => (
                    <article key={p.n} className={`stack-card ${p.grad}`}>
                        {/* top code marker, centred — the reference's (PB) / (GO) */}
                        <div className="flex justify-center pt-4 md:pt-5">
                            <span className="text-[0.8125rem] tracking-[0.02em] text-white/45">
                                {p.code}
                            </span>
                        </div>

                        {/* The panel is sticky at top:0, so anything past 100svh would sit
                            permanently below the fold. The type is deliberately sized down
                            from the site's h2 to buy that height back for the photographs. */}
                        <div className="shell flex flex-1 flex-col justify-center py-3 md:py-4">
                            <div className="flex items-start justify-between gap-8">
                                <h3 className="max-w-[15ch] whitespace-pre-line text-[clamp(1.875rem,4.2vw,3.5rem)] leading-[0.95] tracking-[-0.03em] text-white">
                                    {p.title}
                                </h3>
                                <span className="t-num shrink-0 text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.8] text-white/95">
                                    {p.n}
                                </span>
                            </div>

                            {/* two-column bullet row, divided like the reference */}
                            <div className="mt-5 grid border-t border-white/25 md:mt-6 md:grid-cols-2">
                                {p.points.map((pt, i) => (
                                    <div
                                        key={pt}
                                        className={`flex items-center gap-2.5 py-3 md:py-3.5 ${i === 0 ? "md:border-r md:border-white/25 md:pr-8" : "md:pl-8"
                                            }`}
                                    >
                                        <span aria-hidden className="h-[7px] w-[7px] shrink-0 bg-white" />
                                        <span className="text-[0.9375rem] font-medium text-white md:text-[1rem]">
                                            {pt}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 grid items-end gap-5 md:mt-6 md:grid-cols-[1fr_auto]">
                                <p className="t-h4 max-w-[26ch] text-white">
                                    {p.lead} <span className="text-white/55">{p.leadMuted}</span>
                                </p>

                                {/* Number + what it measures on the left, action beside it. */}
                                <div className="flex items-center gap-5 md:gap-7">
                                    <div className="min-w-0">
                                        {/* capped so a long figure wraps to two tidy lines
                                            instead of squeezing the paragraph beside it */}
                                        <p className="t-num max-w-[10ch] text-[clamp(2.25rem,4.2vw,3.25rem)] leading-[0.9] text-white">
                                            {p.stat}
                                        </p>
                                        <p className="mt-2 max-w-[22ch] text-[0.9375rem] leading-snug text-white/70">
                                            {p.statLabel}
                                        </p>
                                    </div>

                                    <span
                                        aria-hidden
                                        className="h-16 w-px shrink-0 self-stretch bg-white/25"
                                    />

                                    <Link href="/contact" className="btn btn-light shrink-0">
                                        Get started
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Supporting imagery — square-cornered, and tall enough that the
                            photographs read rather than look cropped into strips. */}
                        <div className="shrink-0 px-[var(--gutter)] pb-5 md:pb-6">
                            <div className="mx-auto grid max-w-[var(--shell)] grid-cols-2 gap-3 md:gap-4">
                                {p.images.map((src, i) => (
                                    <figure
                                        key={src}
                                        className="relative h-[clamp(10rem,35vh,20rem)] overflow-hidden bg-black/15 md:h-[clamp(14rem,44vh,30rem)]"
                                    >
                                        <Image
                                            src={src}
                                            alt={p.imageAlts[i]}
                                            fill
                                            sizes="(max-width: 768px) 46vw, 40vw"
                                            className="object-cover"
                                        />
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="shell section-sm">
                <p className="t-h3 max-w-3xl">
                    None of this is a shopping problem.{" "}
                    <span className="t-mute">
                        It&apos;s a visibility problem and it&apos;s the one we build for.
                    </span>
                </p>
            </div>
        </section>
    );
}
