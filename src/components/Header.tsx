"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { setScrollLocked } from "@/components/ui/SmoothScroll";

const NAV = [
    { name: "Community", href: "/#community" },
    { name: "Wardrobe", href: "/#wardrobe" },
    { name: "Swap", href: "/#swap" },
    { name: "The app", href: "/#app" },
    { name: "For brands", href: "/#audiences" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        setScrollLocked(open);
        return () => {
            document.documentElement.style.overflow = "";
            setScrollLocked(false);
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const light = !scrolled && !solid && !open;

    return (
        <>
            <style>{`.quick-nav-link:hover { color: var(--accent) !important; }`}</style>
            <header
                className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${light ? "bg-transparent" : "border-b border-line bg-white/85 backdrop-blur-xl"
                    }`}
                style={{ height: "var(--header-h)" }}
            >
                <div className="shell flex h-full items-center justify-between gap-6">
                    <Link
                        href="/"
                        aria-label="Wearism — home"
                        className="relative z-10 shrink-0"
                        onClick={() => setOpen(false)}
                    >
                        <Image
                            src={light ? "/logo/wearism-w.png" : "/logo/wearism.png"}
                            alt="Wearism"
                            width={280}
                            height={64}
                            priority
                            className="h-7 w-auto md:h-8"
                        />
                    </Link>

                    <nav aria-label="Primary" className="hidden lg:block">
                        <ul className="flex items-center gap-7">
                            {NAV.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`text-[1.0625rem] font-medium tracking-[-0.012em] transition-colors duration-300 quick-nav-link ${light ? "text-white" : "text-ink"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2.5">
                        <Link
                            href="/contact"
                            className={`btn btn-sm ${light ? "btn-light" : ""}`}
                        >
                            Get started
                        </Link>

                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            className={`relative z-10 grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden ${light ? "text-white" : "text-ink"
                                }`}
                        >
                            <span aria-hidden className="relative block h-3 w-[18px]">
                                <span
                                    className={`absolute left-0 block h-[1.5px] w-[18px] bg-current transition-all duration-300 ${open ? "top-[5px] rotate-45" : "top-0.5"
                                        }`}
                                />
                                <span
                                    className={`absolute left-0 block h-[1.5px] w-[18px] bg-current transition-all duration-300 ${open ? "top-[5px] -rotate-45" : "top-2.5"
                                        }`}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="fixed inset-0 z-[99] bg-white lg:hidden"
                    >
                        <div
                            className="shell flex h-full flex-col justify-between pb-10"
                            style={{ paddingTop: "calc(var(--header-h) + 1.5rem)" }}
                        >
                            <nav aria-label="Mobile">
                                <ul>
                                    {NAV.map((item, i) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.04 + i * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="border-b border-line"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="t-h4 block py-4 transition-colors duration-300 quick-nav-link"
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="space-y-3">
                                <Link href="/contact" onClick={() => setOpen(false)} className="btn w-full">
                                    Join the waitlist
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className="btn btn-outline w-full"
                                >
                                    Partner with us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
