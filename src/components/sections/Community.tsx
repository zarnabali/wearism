"use client";

import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { SectionHead } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/* A running rail of real outfit posts — the closest thing to showing the feed
   without putting another phone on the page.
   `note` is optional and only set on the rated shots, so the score badge marks
   an actual rating rather than decorating every card. */
const RAIL: { src: string; user: string; note?: string }[] = [
    { src: "/images/socials/social.jpg", user: "@maya.thrifts" },
    { src: "/images/socials/rated.jpg", user: "@jakewears", note: "Rated 9.4" },
    { src: "/images/socials/social-2.jpg", user: "@chloe.b" },
    { src: "/images/socials/rated-2.jpg", user: "@averyrose", note: "Rated 8.8" },
    { src: "/images/socials/social-3.jpg", user: "@ethan.fits" },
    { src: "/images/socials/rated-3.jpg", user: "@zoeharper", note: "Rated 9.1" },
    { src: "/images/socials/social-4.jpg", user: "@masonlee" },
    { src: "/images/socials/creator-2.jpg", user: "@dylan.k" },
];

const PILLARS = [
    {
        title: "Style circles",
        body: "Private groups for your actual friends. Post a fit before you leave and get an honest read in minutes, not a comment section full of strangers.",
    },
    {
        title: "Style twins",
        body: "We match people on wardrobe overlap, not follower count. If someone owns what you own, their outfits are ideas you can genuinely copy tonight.",
    },
    {
        title: "Challenges",
        body: "Monochrome Monday, no-buy September, one-bag week. Campus-level competitions that make wearing your own clothes the interesting move.",
    },
];

export default function Community() {
    return (
        <section id="community" className="section bg-white">
            <div className="shell">
                <SectionHead
                    tag="A community, not a catalogue"
                    line1="Great style is"
                    line2="a group activity."
                    body="Wearism is a social platform first. The wardrobe tools are what make the feed honest, since every look you see was assembled from clothes someone already owns, so it's advice you can actually act on."
                />
            </div>

            {/* Feed rail */}
            <Reveal delay={0.12} className="mt-14 md:mt-20">
                <Marquee duration={70} repeat={2}>
                    {RAIL.map((r) => (
                        <figure
                            key={r.src}
                            className="group relative mr-3 h-[22rem] w-[15rem] shrink-0 overflow-hidden rounded-2xl bg-bg-2 md:h-[27rem] md:w-[19rem]"
                        >
                            <Image
                                src={r.src}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 60vw, 19rem"
                                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(2,1,8,0.8))] p-4 pt-14">
                                <figcaption className="flex items-center justify-between gap-3">
                                    <span className="text-[0.875rem] font-medium text-white">
                                        {r.user}
                                    </span>
                                    {r.note && (
                                        <span className="rounded-full bg-accent px-2.5 py-1 text-[0.6875rem] font-medium text-white">
                                            {r.note}
                                        </span>
                                    )}
                                </figcaption>
                            </div>
                        </figure>
                    ))}
                </Marquee>
            </Reveal>

            <div className="shell">
                <RevealGroup
                    stagger={0.08}
                    className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-12 md:mt-20 md:grid-cols-3"
                >
                    {PILLARS.map((p) => (
                        <RevealItem key={p.title}>
                            <h3 className="t-h4 text-ink">{p.title}</h3>
                            <p className="t-body-sm mt-3">{p.body}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
