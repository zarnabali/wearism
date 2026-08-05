"use client";

import Link from "next/link";

/*
 * The reference's "AI that / Makes videos / Stays on-brand" band: a fixed
 * label on the left, and a column of very large capability lines running past
 * it on the right, each on its own hairline row, fading out at both ends.
 *
 * The loop and the falloff are pure CSS — a vertical marquee under a mask —
 * so there's nothing scroll-linked to desynchronise.
 */

const LINES = [
    "Rates your fit",
    "Styles your week",
    "Swaps with friends",
    "Tracks every wear",
    "Finds your style twins",
    "Reads your closet",
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="border-y border-line bg-white">
            <div className="shell grid gap-6 py-14 md:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] md:gap-10 md:py-20">
                <div className="flex md:items-center">
                    <h2 className="t-h2 text-ink">
                        An app
                        <br />
                        that
                    </h2>
                </div>

                <div className="marquee-host fade-y relative h-[13rem] overflow-hidden md:h-[19rem]">
                    <div className="animate-marquee-y" style={{ ["--marquee-duration" as string]: "24s" }}>
                        {[0, 1].map((pass) => (
                            <div key={pass} aria-hidden={pass === 1}>
                                {LINES.map((line) => (
                                    <div
                                        key={line}
                                        className="flex h-[4.25rem] items-center border-t border-line md:h-[6.25rem]"
                                    >
                                        <span className="t-h3 whitespace-nowrap text-ink">{line}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="shell flex flex-wrap items-center justify-between gap-5 border-t border-line py-6">
                <p className="t-body-sm max-w-md">
                    One app for the whole loop: the closet, the stylist, the feed and the swap.
                </p>
                <Link href="#how-it-works" className="btn btn-outline">
                    See how it works
                </Link>
            </div>
        </section>
    );
}
