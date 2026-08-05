"use client";

import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/ui/Counter";
import { SectionHead } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/*
 * The reference uses side-by-side "before / after" pairs. Here the pair is a
 * swap: your item on the left, theirs on the right — the same visual rhythm,
 * carrying the feature that actually differentiates Wearism.
 */

const SWAPS = [
    {
        mine: "/images/jacket.png",
        theirs: "/images/pants.jpg",
        who: "Maya R.",
        where: "Same campus",
        saved: "15 kg",
    },
    {
        mine: "/images/blazers.jpg",
        theirs: "/images/trousers.jpg",
        who: "Ethan K.",
        where: "Same dorm",
        saved: "11 kg",
    },
    {
        mine: "/images/heels.jpeg",
        theirs: "/images/tie.jpg",
        who: "Chloe S.",
        where: "Style circle",
        saved: "6 kg",
    },
];

const STATS = [
    { value: 4.2, decimals: 1, suffix: "×", label: "more wear from a swapped garment" },
    { value: 0, suffix: " $", label: "cost to refresh a wardrobe" },
    { value: 100, suffix: "%", label: "of swaps tracked and confirmed" },
];

export default function Swap() {
    return (
        <section id="swap" className="section bg-dark text-white">
            <div className="shell">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                    <SectionHead
                        tone="dark"
                        tag="Swap, don't buy"
                        line1="The cheapest new"
                        line2="thing you can wear."
                        body="Borrow a jacket for one night or trade it for good. Wearism matches people on size and taste inside circles they already trust, tracks both sides of the exchange, and shows the impact it avoided."
                        action={
                            <Link href="/contact" className="btn btn-light">
                                Join the waitlist
                            </Link>
                        }
                    />

                    <Reveal direction="left" delay={0.1}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/3.4]">
                            <Image
                                src="/images/swap-event.jpeg"
                                alt="People browsing rails at a community clothing swap"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* swap pairs */}
                <RevealGroup
                    stagger={0.08}
                    className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-5"
                >
                    {SWAPS.map((s) => (
                        <RevealItem key={s.who}>
                            <article className="h-full rounded-2xl bg-dark-2 p-4 md:p-5">
                                <div className="flex items-stretch gap-2">
                                    <div className="relative aspect-[3/4] flex-1 overflow-hidden rounded-xl bg-white/5">
                                        <Image
                                            src={s.mine}
                                            alt=""
                                            fill
                                            sizes="150px"
                                            className="object-cover"
                                        />
                                        <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[0.6875rem] font-medium text-white backdrop-blur">
                                            Yours
                                        </span>
                                    </div>

                                    <div className="flex shrink-0 items-center">
                                        <span
                                            aria-hidden
                                            className="grid h-8 w-8 place-items-center rounded-full bg-white/10"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-4 w-4 fill-none stroke-white"
                                                strokeWidth={1.7}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M7 8h13l-3-3M17 16H4l3 3" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="relative aspect-[3/4] flex-1 overflow-hidden rounded-xl bg-white/5">
                                        <Image
                                            src={s.theirs}
                                            alt=""
                                            fill
                                            sizes="150px"
                                            className="object-cover"
                                        />
                                        <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-0.5 text-[0.6875rem] font-medium text-white">
                                            Theirs
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-baseline justify-between gap-3">
                                    <div>
                                        <p className="t-tag text-white">{s.who}</p>
                                        <p className="mt-0.5 text-[0.8125rem] text-white/40">{s.where}</p>
                                    </div>
                                    <p className="text-right text-[0.8125rem] text-white/40">
                                        <span className="block text-[1.0625rem] font-medium text-white">
                                            {s.saved}
                                        </span>
                                        CO₂e avoided
                                    </p>
                                </div>
                            </article>
                        </RevealItem>
                    ))}
                </RevealGroup>

                <RevealGroup
                    stagger={0.08}
                    className="mt-16 grid gap-8 border-t border-dark-line pt-12 md:mt-24 md:grid-cols-3"
                >
                    {STATS.map((s) => (
                        <RevealItem key={s.label}>
                            <p className="t-num text-[3rem] leading-none text-accent-light">
                                <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                            </p>
                            <p className="t-body-sm mt-3 !text-white/45">{s.label}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
