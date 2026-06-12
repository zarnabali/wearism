"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ forceBlack = false }: { forceBlack?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    // Ref always holds the latest value so mouse event handlers never read stale closures
    const isScrolledRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            isScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "How it Works", href: "/#how-it-works" },
        { name: "Sustainability", href: "/#sustainability" },
        { name: "FAQ", href: "/#faq" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 md:w-[95%] max-w-7xl rounded-full transition-all duration-300 ${isScrolled || forceBlack
                ? "bg-white shadow-lg"
                : "bg-white/10 backdrop-blur-md border border-white/20"
                }`}
        >
            <nav className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo/wearism-short-w.png"
                        alt="Wearism"
                        width={300}
                        height={72}
                        className="h-14 md:h-16 w-auto"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`font-hauora font-medium transition-colors duration-300 hover:text-[#FF6B35] ${isScrolled || forceBlack
                                ? "text-black"
                                : "text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className={`font-hauora font-medium md:font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-full transition-all duration-300 inline-block ${isScrolled || forceBlack
                        ? 'bg-[#FF6B35] text-white hover:bg-white hover:text-black'
                        : 'bg-white text-[#111827] hover:bg-white/90 hover:text-black'
                    }`}
                >
                    Get Started
                </Link>
            </nav>
        </header>
    );
}
