"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { FeedScreen, SwapScreen, TodayScreen } from "@/components/app/Screens";
import { SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The one section on the site where the device appears. Three screens, one
 * row, then it's done — the rest of the page stays image- and type-led.
 */

const SCREENS = [
    { Screen: FeedScreen, label: "The community feed, where looks get posted and rated" },
    { Screen: TodayScreen, label: "A daily outfit generated from the user's own wardrobe" },
    { Screen: SwapScreen, label: "An incoming swap request between two students" },
];

export default function AppShowcase() {
    return (
        <section id="app" className="section overflow-hidden bg-bg-2">
            <div className="shell">
                <SectionHead
                    align="center"
                    tag="iOS and Android"
                    line1="It lives in your"
                    line2="pocket, not a tab."
                    body="Wearism is a mobile app. The feed, the closet, the stylist and the swaps all happen on the phone that already takes the photos."
                    action={
                        <Link href="/contact" className="btn">
                            Get early access
                        </Link>
                    }
                />

                <div className="mt-16 flex items-end justify-center gap-4 md:mt-20 md:gap-7">
                    {SCREENS.map(({ Screen, label }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.85, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-[42vw] max-w-[16.5rem] shrink-0 md:w-[15rem] lg:w-[17rem] ${
                                // centre device sits slightly proud, outer two recede
                                i === 1 ? "" : "hidden md:block md:pb-10 md:opacity-90"
                                }`}
                        >
                            <PhoneFrame label={label}>
                                <Screen />
                            </PhoneFrame>
                        </motion.div>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <p className="mx-auto mt-12 max-w-md text-center text-[0.8125rem] text-ink-30">
                        Interface shown is representative of the build currently in testing.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
