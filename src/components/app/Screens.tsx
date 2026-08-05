"use client";

import Image from "next/image";

/*
 * Three in-app mocks, used in exactly one section of the site.
 *
 * Built in DOM rather than as flat images so they stay sharp at any size.
 * When the real screenshots are exported, pass `src` to <PhoneFrame> instead.
 */

function TabBar({ active = 0 }: { active?: number }) {
    const tabs = [
        { label: "Feed", d: "M4 5h16v6H4zM4 14h7v5H4zM14 14h6v5h-6z" },
        { label: "Closet", d: "M4 3h16v18H4zM12 3v18" },
        { label: "Swap", d: "M7 8h13l-3-3M17 16H4l3 3" },
        { label: "You", d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" },
    ];

    return (
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-line-soft bg-white/95 px-3 pb-4 pt-2.5 backdrop-blur">
            <div className="flex items-end justify-around">
                {tabs.map((t, i) => (
                    <div key={t.label} className="flex flex-col items-center gap-1">
                        <svg
                            viewBox="0 0 24 24"
                            className={`h-[15px] w-[15px] ${i === active ? "text-ink" : "text-ink-20"}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d={t.d} />
                        </svg>
                        <span
                            className={`text-[7.5px] font-medium ${i === active ? "text-ink" : "text-ink-30"}`}
                        >
                            {t.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mx-auto mt-2 h-[3px] w-24 rounded-full bg-ink-10" />
        </div>
    );
}

/* ----------------------------------------------------------------- FEED -- */

export function FeedScreen() {
    return (
        <div className="absolute inset-0 flex flex-col bg-white pt-11">
            <div className="flex items-center justify-between px-4 pb-2.5">
                <h3 className="text-[15px] font-medium tracking-[-0.02em] text-ink">Style circle</h3>
                <span className="text-[8.5px] text-ink-30">Campus · 214 online</span>
            </div>

            <div className="flex gap-2 overflow-hidden px-4 pb-3">
                {[
                    "/images/kian_mccaffrey.jpeg",
                    "/images/kian_mccaffrey (1).jpeg",
                    "/images/kian_mccaffrey (2).jpeg",
                    "/images/kian_mccaffrey (3).jpeg",
                    "/images/6.jpeg",
                ].map((src, i) => (
                    <div
                        key={src}
                        className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full ${i === 0 ? "ring-2 ring-accent ring-offset-2 ring-offset-white" : ""
                            }`}
                    >
                        <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                    </div>
                ))}
            </div>

            <div className="relative mx-4 flex-1 overflow-hidden rounded-2xl bg-bg-2">
                <Image src="/images/w-inspo.jpeg" alt="" fill sizes="320px" className="object-cover" />
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-[linear-gradient(180deg,rgba(2,1,8,0.5),transparent)] p-2.5 pb-8">
                    <div className="relative h-6 w-6 overflow-hidden rounded-full">
                        <Image
                            src="/images/kian_mccaffrey (2).jpeg"
                            alt=""
                            fill
                            sizes="24px"
                            className="object-cover"
                        />
                    </div>
                    <span className="text-[9.5px] font-medium text-white">@maya.thrifts</span>
                    <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[7.5px] font-medium text-white backdrop-blur">
                        100% owned
                    </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(2,1,8,0.78))] p-3 pt-10">
                    <div className="flex items-center gap-3 text-white">
                        <span className="text-[10px] font-medium">♥ 248</span>
                        <span className="text-[10px] font-medium">💬 31</span>
                        <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-[8px] font-medium text-ink">
                            Rate this fit
                        </span>
                    </div>
                </div>
            </div>

            <div className="px-4 pb-24 pt-3">
                <div className="flex items-center gap-2 rounded-xl bg-bg-2 p-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-tint text-[11px]">
                        ✦
                    </span>
                    <p className="text-[9px] leading-tight text-ink-64">
                        <span className="font-medium text-ink">Style twin found</span> — 91% wardrobe
                        overlap
                    </p>
                </div>
            </div>

            <TabBar active={0} />
        </div>
    );
}

/* ---------------------------------------------------------------- TODAY -- */

export function TodayScreen() {
    return (
        <div className="absolute inset-0 flex flex-col bg-white pt-11">
            <div className="flex items-start justify-between px-4 pb-3">
                <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-ink-30">
                        Thursday · 24°C
                    </p>
                    <h3 className="mt-1 text-[17px] font-medium leading-none tracking-[-0.025em] text-ink">
                        Today&apos;s look
                    </h3>
                </div>
                <span className="rounded-full bg-bg-2 px-2.5 py-1 text-[8px] font-medium text-ink-64">
                    Class + café
                </span>
            </div>

            <div className="relative mx-4 flex-1 overflow-hidden rounded-2xl bg-bg-2">
                <Image src="/images/m-inspo.jpeg" alt="" fill sizes="320px" className="object-cover" />
                <div className="absolute right-2.5 top-2.5 grid h-10 w-10 place-items-center rounded-full bg-white/95 backdrop-blur">
                    <span className="text-[13px] font-medium tabular-nums tracking-[-0.03em] text-ink">
                        9.2
                    </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(2,1,8,0.75))] p-3 pt-10">
                    <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-white/60">
                        From your closet
                    </p>
                    <p className="mt-1 text-[11.5px] font-medium leading-tight text-white">
                        Linen overshirt · Straight denim · White sneakers
                    </p>
                </div>
            </div>

            <div className="px-4 py-3">
                <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-ink-30">
                    Why it works
                </p>
                <ul className="mt-2 space-y-1.5">
                    {[
                        "Warm neutrals suit your skin tone",
                        "Overshirt unworn for 41 days",
                        "Breathable for 24°C and light wind",
                    ].map((line) => (
                        <li key={line} className="flex items-start gap-1.5">
                            <span className="mt-[4px] h-[3px] w-[3px] shrink-0 rounded-full bg-accent" />
                            <span className="text-[9.5px] leading-tight text-ink-64">{line}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-4 pb-24">
                <div className="rounded-xl bg-ink py-2.5 text-center text-[10px] font-medium text-white">
                    Wear this today
                </div>
            </div>

            <TabBar active={1} />
        </div>
    );
}

/* ----------------------------------------------------------------- SWAP -- */

export function SwapScreen() {
    return (
        <div className="absolute inset-0 flex flex-col bg-white pt-11">
            <div className="flex items-center justify-between px-4 pb-3">
                <h3 className="text-[15px] font-medium tracking-[-0.02em] text-ink">Swap request</h3>
                <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[8px] font-medium text-accent-dark">
                    Incoming
                </span>
            </div>

            <div className="mx-4 rounded-2xl bg-bg-2 p-3">
                <div className="flex items-center gap-2.5 border-b border-line-soft pb-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                            src="/images/kian_mccaffrey.jpeg"
                            alt=""
                            fill
                            sizes="32px"
                            className="object-cover"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10.5px] font-medium text-ink">Maya R.</p>
                        <p className="text-[8px] text-ink-30">Islamabad · 12 swaps · 5.0</p>
                    </div>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[8px] font-medium text-ink">
                        98%
                    </span>
                </div>

                <div className="flex items-center gap-2 py-4">
                    <div className="flex-1">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
                            <Image src="/images/jacket.png" alt="" fill sizes="90px" className="object-cover" />
                        </div>
                        <p className="mt-1.5 text-center text-[8px] font-medium text-ink-50">Yours</p>
                    </div>

                    <span
                        aria-hidden
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5 fill-none stroke-ink"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 8h13l-3-3M17 16H4l3 3" />
                        </svg>
                    </span>

                    <div className="flex-1">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
                            <Image src="/images/pants.jpg" alt="" fill sizes="90px" className="object-cover" />
                        </div>
                        <p className="mt-1.5 text-center text-[8px] font-medium text-ink-50">
                            Maya&apos;s
                        </p>
                    </div>
                </div>

                <div className="rounded-xl bg-white p-2.5">
                    <p className="text-[8.5px] leading-relaxed text-ink-64">
                        Keeps <span className="font-medium text-ink">2 garments</span> in use and avoids
                        about <span className="font-medium text-ink">15 kg CO₂e</span>.
                    </p>
                </div>
            </div>

            <div className="mt-3 space-y-1.5 px-4">
                <div className="rounded-xl bg-ink py-2.5 text-center text-[10px] font-medium text-white">
                    Accept swap
                </div>
                <div className="rounded-xl bg-bg-2 py-2.5 text-center text-[10px] font-medium text-ink-50">
                    Counter-offer
                </div>
            </div>

            <TabBar active={2} />
        </div>
    );
}
