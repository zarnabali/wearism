"use client";

import Image from "next/image";

export default function Sustainability() {
    return (
        <section id="sustainability" className="bg-gradient-to-br from-green-50 to-emerald-50 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-green-100 rounded-full text-green-700 font-hauora text-sm font-medium mb-6">
                        <span>🌍</span> Sustainable Future
                    </div>
                    <h2 className="font-hauora font-light text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                        Fashion without the footprint
                    </h2>
                    <p className="font-hauora font-light text-xl text-gray-600 max-w-3xl mx-auto">
                        <span className="font-medium text-gray-900">10% of global carbon emissions</span> come from fashion manufacturing.
                        We're changing that by keeping clothes in circulation longer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: How Swapping Works */}
                    <div className="space-y-12">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-100/50">
                            <h3 className="font-hauora font-medium text-2xl text-gray-900 mb-6">The Secure Swap Process</h3>
                            <ul className="space-y-8 relative">
                                {/* Vertical line */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-green-100"></div>

                                <li className="flex gap-6 relative z-10">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-green-200 rounded-full flex items-center justify-center font-bold text-green-700">1</div>
                                    <div>
                                        <h4 className="font-hauora font-medium text-lg text-gray-900">Digital Closet Match</h4>
                                        <p className="font-hauora font-light text-gray-600 text-sm">Our AI finds friends with items that fit your style and size.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 relative z-10">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-green-200 rounded-full flex items-center justify-center font-bold text-green-700">2</div>
                                    <div>
                                        <h4 className="font-hauora font-medium text-lg text-gray-900">Request & Approval</h4>
                                        <p className="font-hauora font-light text-gray-600 text-sm">Send a swap request. Both parties agree on terms (temporary or permanent).</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 relative z-10">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-green-200 rounded-full flex items-center justify-center font-bold text-green-700">3</div>
                                    <div>
                                        <h4 className="font-hauora font-medium text-lg text-gray-900">Verification & Exchange</h4>
                                        <p className="font-hauora font-light text-gray-600 text-sm">Secure verification ensures you get exactly what you swapped for. No fraud, just fashion.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Impact Visual - Outgoing Request */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 relative z-10 w-full max-w-md mx-auto">
                            {/* Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm relative">
                                        <Image src="/images/kian_mccaffrey.jpeg" alt="Friend" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-hauora font-bold text-gray-900 leading-tight">Alex M.</h4>
                                        <p className="text-xs text-gray-500 font-hauora">Active 2m ago</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">98% Style Match</span>
                            </div>

                            {/* Item Comparison */}
                            <div className="flex items-center justify-between gap-4 mb-8">
                                <div className="text-center group relative">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full font-hauora z-10">You</span>
                                    <div className="w-28 h-36 bg-gray-100 rounded-xl overflow-hidden shadow-sm rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300 relative">
                                        <Image src="/images/jacket.png" alt="Your Jacket" fill className="object-cover" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-2 text-green-500">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center animate-pulse">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center group relative">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full font-hauora z-10">Alex</span>
                                    <div className="w-28 h-36 bg-gray-100 rounded-xl overflow-hidden shadow-sm rotate-[2deg] group-hover:rotate-0 transition-transform duration-300 relative">
                                        <Image src="/images/pants.jpg" alt="Their Item" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Context */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100 text-left">
                                <p className="text-sm text-gray-600 font-hauora leading-relaxed">
                                    <span className="font-bold text-gray-900">Alex</span> is looking for a <span className="text-gray-900 font-medium">Leather Jacket</span>.
                                    Your item is a perfect match for their wishlist!
                                </p>
                            </div>

                            {/* Action Button */}
                            <button className="w-full py-3.5 bg-gray-900 text-white rounded-full font-hauora font-medium text-sm hover:bg-black transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 group">
                                <span>Send Swap Request</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3 font-hauora">Free shipping included for your first 3 swaps</p>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -top-12 -right-12 w-72 h-72 bg-green-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
