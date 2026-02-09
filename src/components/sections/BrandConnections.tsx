"use client";

import Image from "next/image";

export default function BrandConnections() {
    return (
        <section className="bg-white py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-hauora text-sm font-medium">
                            <span>🛍️</span> For Brands & Vendors
                        </div>

                        <h2 className="font-hauora font-light text-5xl lg:text-6xl text-gray-900 leading-tight">
                            Connect with customers who <br />
                            <span className="font-medium text-wearism">actually need your products</span>
                        </h2>

                        <p className="font-hauora font-light text-xl text-gray-600 leading-relaxed">
                            Stop guessing. Wearism connects you with users who have specific gaps in their wardrobe, ensuring higher conversion and fewer returns.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-wearism/10 rounded-xl flex items-center justify-center text-2xl">
                                    🎯
                                </div>
                                <div>
                                    <h3 className="font-hauora font-medium text-xl text-gray-900 mb-1">Precision Targeting</h3>
                                    <p className="font-hauora font-light text-gray-600">Reach users actively looking for items that complete their outfits.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-wearism/10 rounded-xl flex items-center justify-center text-2xl">
                                    ↩️
                                </div>
                                <div>
                                    <h3 className="font-hauora font-medium text-xl text-gray-900 mb-1">Drastically Reduce Returns</h3>
                                    <p className="font-hauora font-light text-gray-600">When users buy for a specific need and outfit, they keep what they buy.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-wearism/10 rounded-xl flex items-center justify-center text-2xl">
                                    📊
                                </div>
                                <div>
                                    <h3 className="font-hauora font-medium text-xl text-gray-900 mb-1">Real Wardrobe Insights</h3>
                                    <p className="font-hauora font-light text-gray-600">Understand what your customers actually own and wear, not just what they buy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative order-1 lg:order-2">
                        <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10">
                            {/* Brand Dashboard Mockup */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                                    <h4 className="font-hauora font-medium text-lg text-gray-900">Brand Insight Dashboard</h4>
                                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">+24% Conversion</span>
                                </div>

                                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                    <p className="text-xs text-gray-500 font-hauora mb-2 uppercase tracking-wide">Top User Wardrobe Gap</p>
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-lg font-medium text-gray-900">Structured Black Blazers</h5>
                                        <span className="text-wearism font-bold">High Demand</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                                        <div className="bg-wearism h-full w-3/4 rounded-full"></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">1,240 users need this item to complete 5+ outfits.</p>
                                </div>

                                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                    <p className="text-xs text-gray-500 font-hauora mb-2 uppercase tracking-wide">Campaign Performance</p>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-700">Fall Collection Recommendation</span>
                                        <span className="text-sm font-bold text-green-600">4.8% CTR</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">Generic Email Blast</span>
                                        <span className="text-sm font-medium text-gray-400">0.9% CTR</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
