"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandConnections() {
    return (
        <section id="brand-connections" className="relative bg-white py-16 px-6 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wearism/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F7F6F0] rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

                    {/* Left: B2B Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#F7F6F0] border border-[#1A1A1A]/5 rounded-full text-[#1A1A1A]/60 font-hauora text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wearism opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-wearism"></span>
                            </span>
                            For Partners & Retailers
                        </div>

                        <h2 className="font-hauora font-light text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] tracking-tighter">
                            The intelligence layer <br className="hidden md:block" />
                            <span className="font-medium text-wearism">between your brand</span> <br className="hidden md:block" />
                            and their closet.
                        </h2>

                        <p className="font-hauora font-light text-base md:text-lg text-[#1A1A1A]/60 leading-relaxed max-w-xl text-balance">
                            Stop guessing. Wearism uses <span className="text-[#1A1A1A] font-medium italic">Zero-Knowledge AI</span> to identify
                            the exact gaps in your customers' physical wardrobes, delivering high-utility
                            recommendations without ever seeing their personal data.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
                            <div className="space-y-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-wearism/10 flex items-center justify-center text-wearism">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 4.608 4.608 0 0 1-1.008-2.516A3.375 3.375 0 0 0 12 18Z" />
                                    </svg>
                                </div>
                                <h3 className="font-hauora font-bold text-[#1A1A1A] text-xs md:text-sm uppercase tracking-widest leading-none">Gap discovery</h3>
                                <p className="font-hauora font-light text-xs md:text-sm text-[#1A1A1A]/50">Know the hidden voids in real wardrobes before planning your next collection.</p>
                            </div>

                            <div className="space-y-3">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-wearism/10 flex items-center justify-center text-wearism">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6.119c0 5.592 3.82 10.29 9.002 11.622a11.959 11.959 0 0 1 9.002-11.622 11.959 11.959 0 0 1-8.402-4.155Z" />
                                    </svg>
                                </div>
                                <h3 className="font-hauora font-bold text-[#1A1A1A] text-xs md:text-sm uppercase tracking-widest leading-none">Privacy vault</h3>
                                <p className="font-hauora font-light text-xs md:text-sm text-[#1A1A1A]/50">Target by utility, not identity. Connecting your catalog anonymously to high-intent users.</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded-2xl overflow-hidden shadow-2xl shadow-black/10 transition-all duration-300 hover:scale-105 active:scale-95">
                                <span className="relative z-10 font-hauora font-bold text-xs uppercase tracking-[0.2em]">Join the Network</span>
                                <div className="absolute inset-0 bg-wearism translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: The Brand Intelligence Dashboard (High Fidelity Mockup) */}
                    <div className="relative mt-8 md:mt-0">
                        {/* Main Glass Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotateY: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ perspective: "1000px" }}
                            className="relative z-10 w-full min-h-[460px] md:aspect-[4/3] bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[32px] md:rounded-[40px] shadow-[0_50px_100px_-20px_rgba(255,80,0,0.15)] p-5 md:p-8 overflow-hidden"
                        >
                            {/* Decorative Grid Lines */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                            <div className="h-full flex flex-col space-y-5 md:space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                                    <div className="space-y-1">
                                        <h4 className="font-hauora font-bold text-[#1A1A1A] text-base md:text-lg tracking-tight">Demand Dashboard</h4>
                                        <p className="text-[9px] md:text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.15em] font-bold">Real-Time Wardrobe Gap Metrics</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 self-start sm:self-auto px-2 md:px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-green-500/10">
                                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Privacy Active
                                    </div>
                                </div>

                                {/* Metric Cards */}
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="bg-white/80 rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-sm border border-white space-y-1.5 md:space-y-2">
                                        <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Predicted CTR</span>
                                        <div className="text-2xl md:text-3xl font-light text-[#1A1A1A]">8.4<span className="text-wearism font-medium">%</span></div>
                                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "84%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-white/80 rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-sm border border-white space-y-1.5 md:space-y-2">
                                        <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">Return Risk</span>
                                        <div className="text-2xl md:text-3xl font-light text-[#1A1A1A]">&lt;1.8<span className="text-wearism font-medium">%</span></div>
                                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: "100%" }}
                                                whileInView={{ width: "12%" }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-wearism"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Trending Gap Card */}
                                <div className="flex-1 bg-gradient-to-br from-white/90 to-white/40 rounded-2xl md:rounded-3xl border border-white shadow-sm p-4 md:p-6 space-y-3 md:space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-wearism">Primary Wardrobe Gap</span>
                                        <span className="text-[8px] md:text-[9px] font-medium text-[#1A1A1A]/30">Live Analysis</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                                        <div className="relative w-16 h-20 md:w-20 md:h-24 bg-[#F7F6F0] rounded-xl md:rounded-2xl overflow-hidden ring-1 ring-[#1A1A1A]/5 flex-shrink-0">
                                            <Image src="/images/blazers.jpg" alt="Gap Item" fill className="object-cover opacity-60 grayscale" />
                                            <div className="absolute inset-0 bg-wearism/10 backdrop-none" />
                                        </div>
                                        <div className="flex-1 space-y-1.5 md:space-y-2">
                                            <h5 className="font-hauora font-medium text-lg md:text-xl text-[#1A1A1A] leading-tight">Relaxed Linen Tailoring</h5>
                                            <p className="text-[10px] md:text-xs text-[#1A1A1A]/50 leading-relaxed font-light">
                                                4,230 users require this silhouette to complete <span className="text-wearism font-bold">28,000+</span> potential outfits.
                                            </p>
                                        </div>
                                    </div>
                                    <button className="w-full py-2.5 md:py-3 bg-white border border-wearism/20 text-wearism rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-wearism/5 transition-colors">
                                        View Category Intelligence
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Status Badge Positioned more reliably */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 z-20 px-3 md:px-5 py-2 md:py-3 bg-[#1A1A1A] text-white rounded-xl md:rounded-[20px] shadow-xl flex items-center gap-2 md:gap-3"
                        >
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-wearism flex items-center justify-center text-[9px] md:text-[10px]">AI</div>
                            <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">Auto-Targeting Enabled</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
