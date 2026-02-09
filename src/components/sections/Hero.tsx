"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(headlineRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
        })
            .from(subheadlineRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
            }, "-=0.4")
            .from(ctaRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
            }, "-=0.3");
    }, []);

    return (
        <section className="section-light min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 bg-wearism rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-wearism rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <Image
                        src="/logo/wearism.png"
                        alt="Wearism"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                    />
                </div>

                {/* Headline */}
                <h1
                    ref={headlineRef}
                    className="font-oswald font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground-light mb-6 uppercase"
                >
                    Your AI stylist that uses<br />
                    <span className="text-wearism">the clothes you already own</span>
                </h1>

                {/* Sub-headline */}
                <p
                    ref={subheadlineRef}
                    className="font-hauora text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Stop overbuying. Start dressing better with what's in your wardrobe.
                </p>

                {/* CTA */}
                <div ref={ctaRef}>
                    <button className="bg-wearism hover:bg-wearism-dark text-white font-hauora font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        Get Early Access
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}
