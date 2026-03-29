"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sustainability() {
    return (
        <section id="sustainability" className="relative bg-[#FBFDFA] py-16 md:py-24 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/2 -right-20 w-[500px] h-[500px] bg-mint-100/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Context & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100/50 rounded-full text-emerald-700 font-hauora text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Social Fashion Hub
                        </div>

                        <h2 className="font-hauora font-light text-5xl lg:text-7xl text-[#1A1A1A] leading-[1.1] tracking-tighter">
                            Own Less, <br />
                            <span className="font-medium text-emerald-600">Style More.</span>
                        </h2>

                        <p className="font-hauora font-light text-lg text-[#1A1A1A]/60 leading-relaxed max-w-xl text-balance">
                            Every second, a garbage truck of textiles is landfilled. We’re changing that by
                            turning your social circle into a private, sustainable boutique. Swap securely, save the planet.
                        </p>

                        {/* Bento Stats Section */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white p-5 rounded-3xl border border-emerald-100/50 shadow-sm flex flex-col justify-between h-32 hover:border-emerald-200 transition-colors">
                                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#1A1A1A]/30">CO2 Diverted</span>
                                <div className="text-3xl font-light text-[#1A1A1A]">1.2<span className="text-xl ml-1 text-emerald-600 font-medium">T</span></div>
                            </div>
                            <div className="bg-white p-5 rounded-3xl border border-emerald-100/50 shadow-sm flex flex-col justify-between h-32 hover:border-emerald-200 transition-colors">
                                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#1A1A1A]/30">Water Saved</span>
                                <div className="text-3xl font-light text-[#1A1A1A]">840<span className="text-xl ml-1 text-emerald-600 font-medium">K</span></div>
                            </div>
                            <div className="col-span-2 bg-[#1A1A1A] p-5 rounded-3xl shadow-xl flex items-center justify-between h-20 group cursor-default">
                                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-white/40">Circular Economy Rate</span>
                                <div className="text-3xl font-light text-white mr-4">4.2<span className="text-xl ml-1 text-emerald-400 font-medium">x</span></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Enhanced Swap Request Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-[40px] p-6 md:p-8 shadow-[0_40px_100px_-20px_rgba(16,185,129,0.2)] border border-[#F7FCFB] relative z-10 w-full max-w-[440px] mx-auto overflow-hidden group"
                        >
                            {/* Glass background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white/40 to-white/40 backdrop-blur-3xl -z-10" />

                            {/* Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-emerald-100/30 mb-8">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative flex-shrink-0">
                                        <Image src="/images/kian_mccaffrey.jpeg" alt="Alex" fill className="object-cover" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h4 className="font-hauora font-bold text-[#1A1A1A] text-base md:text-lg leading-none">Alex M.</h4>
                                        <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-[0.1em]">Active in Your Circle</p>
                                    </div>
                                </div>
                                <div className="px-2 md:px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] md:text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-widest whitespace-nowrap">
                                    98% Match
                                </div>
                            </div>

                            {/* Swap Visualizer */}
                            <div className="flex items-center justify-between gap-3 sm:gap-6 mb-10 relative">
                                {/* Connecting Path (Animated) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] border-b border-dashed border-emerald-200/50 -z-10" />

                                <div className="text-center space-y-3 group/item">
                                    <div className="relative w-24 h-32 sm:w-28 sm:h-40 bg-[#F7F6F0] rounded-2xl overflow-hidden shadow-md transition-transform duration-500 group-hover/item:-rotate-3 group-hover/item:scale-105">
                                        <Image src="/images/jacket.png" alt="Your Item" fill className="object-cover" />
                                        <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/50 backdrop-blur-md text-white text-[7px] md:text-[8px] font-bold uppercase rounded-md tracking-widest">Your Side</span>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 z-20 flex-shrink-0"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>
                                </motion.div>

                                <div className="text-center space-y-3 group/item">
                                    <div className="relative w-24 h-32 sm:w-28 sm:h-40 bg-[#F7F6F0] rounded-2xl overflow-hidden shadow-md transition-transform duration-500 group-hover/item:rotate-3 group-hover/item:scale-105">
                                        <Image src="/images/pants.jpg" alt="Alex's Item" fill className="object-cover" />
                                        <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-emerald-500 backdrop-blur-md text-white text-[7px] md:text-[8px] font-bold uppercase rounded-md tracking-widest">Alex's Side</span>
                                    </div>
                                </div>
                            </div>

                            {/* Insight & Action */}
                            <div className="bg-[#F7FCFB] rounded-2xl p-4 sm:p-5 mb-8 border border-emerald-100 flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.984-1.133 4.753 4.753 0 0 1 5.223 0 .75.75 0 0 1-.984 1.133Zm-4.256 4.13a.75.75 0 1 0-1.244 1.25.75.75 0 0 0 1.244-1.25Zm5.5 0a.75.75 0 1 0-1.244 1.25.75.75 0 0 0 1.244-1.25ZM7.5 15.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] sm:text-xs font-hauora text-[#1A1A1A]/70 leading-relaxed">
                                        Alex wants your <span className="text-[#1A1A1A] font-bold">Leather Jacket</span>. Swapping this item saves <span className="text-emerald-600 font-bold">15kg of CO<sub>2</sub></span> emissions.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full py-3.5 sm:py-4 bg-[#1A1A1A] text-white rounded-2xl font-hauora font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-2xl transition-all duration-300 hover:bg-emerald-600 hover:scale-[1.02] active:scale-95">
                                Send Swap Proposal
                            </button>
                        </motion.div>

                        {/* Background Accents (Blurred Spheres) */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-100 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
