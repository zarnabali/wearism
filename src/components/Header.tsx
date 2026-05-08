"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ forceBlack = false }: { forceBlack?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
                        src={isScrolled || forceBlack ? "/logo/wearism.png" : "/logo/wearism-w.png"}
                        alt="Wearism"
                        width={160}
                        height={32}
                        className="h-8 md:h-10 w-auto"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`font-hauora font-medium transition-colors duration-300 ${isScrolled || forceBlack
                                ? "text-black"
                                : "text-white"
                                }`}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#FF6B35';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = (isScrolled || forceBlack) ? 'black' : 'white';
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="font-hauora font-medium md:font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-full transition-all duration-300 inline-block"
                    style={{
                        backgroundColor: (isScrolled || forceBlack) ? '#FF6B35' : 'white',
                        color: (isScrolled || forceBlack) ? 'white' : '#111827'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                        if (isScrolled || forceBlack) {
                            e.currentTarget.style.backgroundColor = '#FF6B35';
                            e.currentTarget.style.color = 'white';
                        } else {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#111827';
                        }
                    }}
                >
                    Get Started
                </Link>
            </nav>
        </header>
    );
}
