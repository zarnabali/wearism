"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroNew() {
    const textRef = useRef(null);
    const lineRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(textRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
        })
            .from(lineRef.current, {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.8,
            }, "-=0.6")
            .from(subtextRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4")
            .from(buttonRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
            }, "-=0.3");
    }, []);

    return (
        <section className="relative min-h-screen flex items-end pb-32 overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/vid5.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-3xl">
                    {/* Main Headline */}
                    <h1
                        ref={textRef}
                        className="font-hauora font-light text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-6"
                    >
                        Feel confident in the{" "}
                        <span className="font-light">clothes you wear</span>
                    </h1>

                    {/* Decorative Line */}
                    <div
                        ref={lineRef}
                        className="w-46  h-0.5 bg-wearism mb-3"
                    />

                    {/* Subtext */}
                    <p
                        ref={subtextRef}
                        className="font-hauora font-light text-lg md:text-xl text-white/90 max-w-2xl mb-6 leading-relaxed"
                    >
                        Transform your wardrobe with AI-powered styling.
                        <br />
                        Make the most of what you already own.
                    </p>

                    {/* Buttons */}
                    <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
                        <button
                            className="group relative bg-wearism text-white font-hauora font-medium text-base px-10 py-4 rounded-full transition-all duration-300 overflow-hidden"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = 'black';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FF6B35';
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                            Get Started
                        </button>
                        <button
                            className="group relative bg-white/10 backdrop-blur-md text-white border border-white/30 font-hauora font-medium text-base px-10 py-4 rounded-full transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.borderColor = 'white';
                                e.currentTarget.style.color = 'black';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <button
                    className="group relative bg-white/10 backdrop-blur-md text-white border border-white/30 font-hauora font-medium text-sm px-3 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        });
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.borderColor = 'white';
                        e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.color = 'white';
                    }}
                >

                    <svg className="w-4 h-4 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
