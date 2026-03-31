"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section id="final-cta" className="relative bg-black py-16 md:py-24 px-6 overflow-hidden">
            {/* Prominent Orange Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-wearism/25 -z-10" />
            
            {/* Vibrant Decorative Corner Glow */}
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-wearism/40 rounded-full blur-[140px] -z-10" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-hauora font-light text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] tracking-tight"
                >
                    Ready to transform <br className="hidden md:block" />
                    your <span className="text-wearism font-medium italic">wardrobe?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-hauora font-light text-lg md:text-xl text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Join early adopters who are rediscovering their style with AI-powered outfit suggestions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <button
                        className="group relative bg-white text-black font-hauora font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 mb-8"
                    >
                        <span className="relative z-10">Request Early Access</span>
                        <div className="absolute inset-0 bg-wearism translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800 overflow-hidden" />
                            ))}
                        </div>
                        <p className="font-hauora font-medium text-[10px] text-white/30 uppercase tracking-[0.1em]">
                            Join <span className="text-white">100+</span> on the waitlist
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
