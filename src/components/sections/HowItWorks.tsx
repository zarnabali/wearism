"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValueEvent
} from "framer-motion";

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll through the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth the scroll progress for that premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Change step based on scroll position - tuned for mobile/desktop balance
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (latest < 0.25) setActiveStep(0);
        else if (latest < 0.65) setActiveStep(1);
        else setActiveStep(2);
    });

    const steps = [
        {
            title: "Snap & Digitize",
            description: "Upload photos of your clothes. Our AI automatically tags color, style, and fabric. No manual entry needed.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
            )
        },
        {
            title: "Get AI Styled",
            description: "Receive daily outfit combinations based on your wardrobe, the weather, and your specific occasion.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            )
        },
        {
            title: "Swap & Save",
            description: "Bored of an item? Match with friends or locals and swap it securely. Reduce waste and save money.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            )
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-white">
            {/* Header: Now scrolls naturally to free up space for mobile content */}
            <div className="relative max-w-7xl mx-auto w-full px-4 md:px-6 pt-24 pb-12 md:pt-32 md:pb-24 z-10">
                <div className="text-center">
                    <p className="font-hauora font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-3 md:mb-4">
                        Simple, Smart, Sustainable
                    </p>
                    <h2 className="font-hauora font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">
                        Unlock your wardrobe's <br className="hidden md:block" />
                        <span className="font-medium text-wearism">full potential</span>
                    </h2>
                </div>
            </div>

            <div className="sticky top-0 h-screen flex flex-col justify-center px-4 md:px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                        {/* Left: Content Area (Sticky on Desktop, Scrolling on Mobile) */}
                        <div className="w-full space-y-4 md:space-y-6">
                            {/* Mobile View: Professional Sticky Story Layout */}
                            <div className="lg:hidden flex flex-col items-center">
                                {/* Pinned Mobile Step Indicators */}
                                <div className="flex justify-between w-full max-w-sm px-2 mb-8 border-b border-[#1A1A1A]/5 pb-4">
                                    {steps.map((_, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 group" onClick={() => {
                                            const scrollTarget = containerRef.current!.offsetTop + (i * (containerRef.current!.offsetHeight / 3.5));
                                            window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                                        }}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${activeStep === i
                                                ? 'bg-wearism text-white shadow-lg shadow-wearism/30'
                                                : 'bg-[#F7F6F0] text-[#1A1A1A]/30'
                                                }`}>
                                                0{i + 1}
                                            </div>
                                            <span className={`text-[8px] uppercase tracking-widest font-bold transition-colors duration-500 ${activeStep === i ? 'text-wearism' : 'text-[#1A1A1A]/30'}`}>
                                                {steps[i].title.split(" ")[0]}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Central Story Card (Mobile) */}
                                <div className="w-full relative h-[420px] sm:h-[480px] md:h-[550px] mb-6 md:mb-8">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full max-w-[320px] h-full">
                                            <StepVisual activeStep={activeStep} />
                                        </div>
                                    </div>
                                </div>

                                {/* Active Step Description (Mobile) */}
                                <div className="text-center px-4 max-w-sm">
                                    <h3 className="font-hauora font-medium text-xl text-[#1A1A1A] mb-3 transition-all duration-500">
                                        {steps[activeStep].title}
                                    </h3>
                                    <p className="font-hauora font-light text-sm leading-relaxed text-[#1A1A1A]/60">
                                        {steps[activeStep].description}
                                    </p>
                                </div>
                            </div>

                            {/* Desktop View: Interactive Steps (Same as before but refined) */}
                            <div className="hidden lg:block space-y-6">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`relative p-8 rounded-[32px] transition-all duration-700 cursor-pointer border ${activeStep === index
                                            ? "bg-white border-[1.5px] border-wearism shadow-[0_30px_60px_-15px_rgba(255,80,0,0.15)] scale-[1.04] z-10"
                                            : "bg-[#F7F6F0] border border-[#1A1A1A]/5 opacity-60 scale-95"
                                            }`}
                                        onClick={() => {
                                            const scrollTarget = containerRef.current!.offsetTop + (index * (containerRef.current!.offsetHeight / 3.5));
                                            window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                                        }}
                                    >
                                        <div className="flex items-start gap-6 ">
                                            <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${activeStep === index
                                                ? 'bg-wearism text-white shadow-lg shadow-wearism/30 scale-110'
                                                : 'bg-white border border-[#1A1A1A]/5 text-[#1A1A1A]/30 '
                                                }`}>
                                                {step.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`font-hauora font-medium text-2xl mb-2 transition-colors duration-500 ${activeStep === index ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'
                                                    }`}>
                                                    {step.title}
                                                </h3>
                                                <div className={`grid transition-all duration-500 ${activeStep === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                                    <p className="font-hauora font-light text-base leading-relaxed overflow-hidden text-[#1A1A1A]/70">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Dynamic Visual (Desktop Only) */}
                        <div className="hidden lg:flex w-full relative h-[720px] bg-[#F7F6F0]/40 rounded-[3rem] overflow-hidden items-center justify-center p-8 border border-[#1A1A1A]/5 shadow-inner">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F7F6F0] via-white/50 to-transparent" />
                            <div className="relative z-10 w-full max-w-sm h-full max-h-[660px]">
                                <StepVisual activeStep={activeStep} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepVisual({ activeStep }: { activeStep: number }) {
    return (
        <div className="w-full h-full relative">
            <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
            >
                {activeStep === 0 && (
                    <div className="flex flex-col h-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_30px_60px_-15px_rgba(255,80,0,0.25),0_15px_40px_-20px_rgba(0,0,0,0.1)] overflow-hidden ring-1 ring-wearism/10">
                        {/* Main Image Area */}
                        <div className="relative flex-[1.1] bg-[#F7F6F0] group">
                            <Image src="/images/1.jpeg" alt="Full Outfit" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                            {/* Scanning Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wearism/10 to-transparent animate-scan" style={{ height: '30%', top: '-30%' }} />

                            {/* Detection Pulse */}
                            <div className="absolute top-[30%] left-[20%] w-8 h-8 border border-white rounded-full animate-ping opacity-75" />
                            <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white rounded-full shadow-lg shadow-black/20" />

                            <div className="absolute bottom-[40%] right-[30%] w-8 h-8 border border-white rounded-full animate-ping opacity-75 animation-delay-500" />
                            <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full shadow-lg shadow-black/20" />
                        </div>

                        {/* Bottom Sheet Results */}
                        <div className="bg-white p-4 md:p-6 flex-[1] flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm font-bold text-[#1A1A1A]">AI Analysis</p>
                                    <p className="text-[10px] md:text-xs text-[#1A1A1A]/40">4 items detected</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-wearism/10 flex items-center justify-center text-wearism">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                {[
                                    { name: "Oversized Wool Blazer", tag: "Outerwear", img: "/images/blazers.jpg" },
                                    { name: "Pleated Trousers", tag: "Bottom", img: "/images/trousers.jpg" },
                                    { name: "Heels", tag: "Footwear", img: "/images/heels.jpeg" },
                                    { name: "Silk Tie", tag: "Accessories", img: "/images/tie.jpg" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-1.5 hover:bg-[#F7F6F0]/40 rounded-lg transition-colors cursor-pointer group">
                                        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden bg-[#F7F6F0] flex-shrink-0 border border-[#1A1A1A]/5">
                                            <Image src={item.img} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[10px] md:text-xs font-semibold text-[#1A1A1A] truncate">{item.name}</h4>
                                            <span className="text-[8px] md:text-[9px] text-[#1A1A1A]/40">{item.tag}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeStep === 1 && (
                    <div className="flex flex-col h-full justify-center">
                        <div className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_30px_60px_-15px_rgba(255,80,0,0.25),0_15px_40px_-20px_rgba(0,0,0,0.1)] border border-wearism/5 p-6 space-y-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <span className="block text-sm font-bold text-[#1A1A1A]">Curated Look</span>
                                    <span className="text-[10px] md:text-xs text-[#1A1A1A]/40 tracking-tight">Friday Date Night • Clear</span>
                                </div>
                                <span className="text-[10px] font-mono bg-[#F7F6F0] px-2.5 py-1 rounded-full text-[#1A1A1A]/70">18°C</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="aspect-[3/5.5] bg-[#F7F6F0] rounded-2xl relative overflow-hidden group shadow-sm">
                                    <Image src="/images/w-inspo.jpeg" alt="Top" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <span className="absolute bottom-3 left-3 text-[10px] text-white font-medium">Top Match</span>
                                </div>
                                <div className="aspect-[3/5.5] bg-[#F7F6F0] rounded-2xl relative overflow-hidden group shadow-sm">
                                    <Image src="/images/m-inspo.jpeg" alt="Bottom" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <span className="absolute bottom-3 left-3 text-[10px] text-white font-medium">Bottom Match</span>
                                </div>
                            </div>
                            <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:bg-wearism transition-colors shadow-lg shadow-black/10">
                                Wear this Look
                            </button>
                        </div>
                    </div>
                )}

                {activeStep === 2 && (
                    <div className="flex flex-col h-full justify-center">
                        <div className="w-full bg-white rounded-[24px] md:rounded-[32px] shadow-[0_30px_60px_-15px_rgba(255,80,0,0.25),0_15px_40px_-20px_rgba(0,0,0,0.1)] border border-wearism/5 p-6 space-y-8">
                            <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/5">
                                <span className="text-sm font-bold text-[#1A1A1A]">Swap Request</span>
                                <span className="text-[9px] font-bold text-wearism bg-wearism/10 px-2.5 py-1 rounded-full uppercase tracking-widest">Incoming</span>
                            </div>

                            <div className="flex items-center justify-between gap-4 py-4">
                                {/* Your Side */}
                                <div className="flex-1 text-center space-y-3">
                                    <div className="relative mx-auto w-10 md:w-12 h-10 md:h-12 rounded-full ring-2 ring-[#F7F6F0] p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
                                            <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-sm">Y</div>
                                        </div>
                                    </div>
                                    <div className="aspect-[3/4] w-full bg-[#F7F6F0] rounded-2xl overflow-hidden relative shadow-md">
                                        <Image src="/images/jacket.png" alt="Your Jacket" fill className="object-cover mix-blend-multiply" />
                                    </div>
                                    <p className="text-[9px] md:text-[10px] font-semibold text-[#1A1A1A]">Your Side</p>
                                </div>

                                {/* Swap Icon */}
                                <div className="flex flex-col items-center justify-center gap-2 text-wearism">
                                    <div className="w-10 h-10 rounded-full bg-[#F7F6F0] flex items-center justify-center border border-[#1A1A1A]/5 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Their Side */}
                                <div className="flex-1 text-center space-y-3">
                                    <div className="relative mx-auto w-10 md:w-12 h-10 md:h-12 rounded-full ring-2 ring-[#F7F6F0] p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
                                            <div className="w-full h-full bg-wearism flex items-center justify-center text-white font-bold text-sm">M</div>
                                        </div>
                                    </div>
                                    <div className="aspect-[3/4] w-full bg-[#F7F6F0] rounded-2xl overflow-hidden relative shadow-md">
                                        <Image src="/images/pants.jpg" alt="Mark's Pants" fill className="object-cover" />
                                    </div>
                                    <p className="text-[9px] md:text-[10px] font-semibold text-[#1A1A1A]">Their Side</p>
                                </div>
                            </div>

                            <button className="w-full bg-wearism text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition-colors shadow-lg shadow-wearism/20">
                                Send Proposal
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
