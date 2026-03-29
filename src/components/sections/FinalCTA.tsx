"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section id="final-cta" className="relative bg-[#FBFDFA] py-24 md:py-32 lg:py-40 px-6 overflow-hidden">
            {/* Minimalistic Orange Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wearism/5 rounded-full blur-[140px] -z-10" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-hauora font-light text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] mb-8 leading-[1.05] tracking-tight"
                >
                    Ready to transform <br className="hidden md:block" />
                    your <span className="text-wearism font-medium">wardrobe?</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-hauora font-light text-xl md:text-2xl text-[#1A1A1A]/50 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Join early adopters who are rediscovering their style with AI-powered outfit suggestions. 
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        className="group relative bg-[#1A1A1A] text-white font-hauora font-bold text-xs uppercase tracking-[0.2em] px-12 py-5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 mb-8"
                    >
                        <span className="relative z-10">Request Early Access</span>
                        <div className="absolute inset-0 bg-wearism translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden ring-1 ring-black/5" />
                            ))}
                        </div>
                        <p className="font-hauora font-medium text-xs text-[#1A1A1A]/40 uppercase tracking-widest">
                            Join <span className="text-wearism">500+</span> on the waitlist
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
