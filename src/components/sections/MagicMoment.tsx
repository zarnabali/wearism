"use client";

import Image from "next/image";

export default function MagicMoment() {
    return (
        <section id="features" className="bg-gray-50 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Large Image */}
                    <div className="relative group">
                        <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                            >
                                <source src="/videos/2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-hauora font-light text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                                The moment it clicks
                            </h2>
                            <p className="font-hauora font-light text-xl text-gray-600 leading-relaxed">
                                When you see an AI-generated outfit that makes perfect sense—from pieces you already own.
                            </p>
                        </div>

                        {/* Why it works */}
                        <div className="space-y-4">
                            <h3 className="font-hauora font-medium text-lg text-wearism uppercase tracking-wide">
                                Why this works
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { label: "Perfect fit", desc: "Tailored blazer balances casual denim" },
                                    { label: "Color harmony", desc: "Navy and earth tones complement your skin tone" },
                                    { label: "Occasion-ready", desc: "Smart casual, perfect for coffee meetings" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 font-hauora">
                                        <span className="text-wearism mt-1">→</span>
                                        <span className="text-gray-700">
                                            <span className="font-medium">{item.label}:</span> {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AI Insight */}
                        <div className="bg-wearism/5 border-l-4 border-wearism rounded-r-xl p-6">
                            <p className="font-hauora font-light text-base text-gray-700 italic">
                                "You haven't worn this blazer in 6 months. Pair it with your favorite jeans instead of dress pants."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
