"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export default function FinalCTA() {
    return (
        <section id="waitlist" className="relative isolate overflow-hidden bg-dark">
            <Image
                src="/images/fewer-clothes.jpg"
                alt=""
                fill
                sizes="100vw"
                className="-z-20 object-cover opacity-30"
            />
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,1,8,0.82),rgba(2,1,8,0.92))]"
            />

            <div className="shell section relative z-10 text-center">
                <Reveal>
                    <p className="t-tag text-white/45">Waitlist open · Launching in United States first</p>
                </Reveal>

                <Reveal delay={0.06}>
                    <h2 className="t-h1 mx-auto mt-6 max-w-[16ch] text-white">
                        <span className="block">Open your closet.</span>
                        <span className="t-grad block">Not your wallet.</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <p className="t-body mx-auto mt-7 max-w-lg !text-white/55">
                        Get early access when the beta opens, or talk to us about launching as a vendor
                        or licensing the engine.
                    </p>
                </Reveal>

                <Reveal delay={0.18}>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link href="/contact" className="btn btn-light">
                            Join the waitlist
                        </Link>
                        <Link href="/contact" className="btn btn-glass">
                            Partner or license
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
