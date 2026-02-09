"use client";

import { useState } from "react";
import Image from "next/image";

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Snap & Digitize",
            description: "Upload photos of your clothes. Our AI automatically tags color, style, and fabric. No manual entry needed.",
            image: "/images/closet-org.png",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
            )
        },
        {
            title: "Get AI Styled",
            description: "Receive daily outfit combinations based on your wardrobe, the weather, and your specific occasion.",
            image: "/images/ai-style.png",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            )
        },
        {
            title: "Swap & Save",
            description: "Bored of an item? Match with friends or locals and swap it securely. Reduce waste and save money.",
            image: "/images/swap-ui.png",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white py-32 px-6" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <p className="font-hauora font-normal text-xs uppercase tracking-widest text-gray-400 mb-4">
                        Simple, Smart, Sustainable
                    </p>
                    <h2 className="font-hauora font-light text-5xl lg:text-6xl text-gray-900 mb-6">
                        Unlock your wardrobe's <br />
                        <span className="font-medium text-wearism">full potential</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Interactive Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer border-2 ${activeStep === index
                                    ? `${step.bgColor} ${step.borderColor} shadow-lg scale-[1.02]`
                                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-md"
                                    }`}
                                onClick={() => setActiveStep(index)}
                                onMouseEnter={() => {
                                    if (typeof window !== 'undefined' && window.innerWidth >= 1024) setActiveStep(index);
                                }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-white shadow-sm ${activeStep === index ? 'scale-110 transition-transform' : ''}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-hauora font-medium text-xl mb-2 ${activeStep === index ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`font-hauora font-light leading-relaxed ${activeStep === index ? 'text-gray-600' : 'text-gray-400'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Visual */}
                    <div className="relative h-[800px] bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-3xl" />

                        {/* Placeholder for Dynamic UI */}
                        <div className="relative z-10 w-full max-w-sm h-full max-h-[700px]">
                            {activeStep === 0 && (
                                <div className="animate-fade-in flex flex-col h-full bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
                                    {/* Main Image Area - Takes full flex */}
                                    <div className="relative flex-1 bg-gray-100 group">
                                        <Image src="/images/1.jpeg" alt="Full Outfit" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                                        {/* Scanning Overlay Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wearism/10 to-transparent animate-scan" style={{ height: '30%', top: '-30%' }} />

                                        {/* Detection Pulse */}
                                        <div className="absolute top-[30%] left-[20%] w-8 h-8 border border-white rounded-full animate-ping opacity-75" />
                                        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white rounded-full shadow-lg" />

                                        <div className="absolute bottom-[40%] right-[30%] w-8 h-8 border border-white rounded-full animate-ping opacity-75 animation-delay-500" />
                                        <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-white rounded-full shadow-lg" />
                                    </div>

                                    {/* Bottom Sheet Results */}
                                    <div className="bg-white p-5 border-t border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">AI Analysis Complete</p>
                                                <p className="text-xs text-gray-500">4 items identified & tagged</p>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {/* Item 1 */}
                                            <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                                                    <Image src="/images/blazers.jpg" alt="Jacket" fill className="object-cover scale-150 origin-top" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-wearism transition-colors">Oversized Wool Blazer</h4>
                                                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Outerwear</span>
                                                    </div>
                                                    <div className="flex gap-1 mt-1.5 overflow-x-auto pb-1">
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Black</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Wool Blend</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Formal</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Item 2 */}
                                            <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                                                    <Image src="/images/trousers.jpg" alt="Pants" fill className="object-cover scale-150 origin-bottom" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-wearism transition-colors">Pleated Trousers</h4>
                                                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Bottom</span>
                                                    </div>
                                                    <div className="flex gap-1 mt-1.5 overflow-x-auto pb-1">
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Black</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Cotton</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Relaxed</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Item 3 */}
                                            <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                                                    <Image src="/images/heels.jpeg" alt="Pants" fill className="object-cover scale-150 origin-bottom" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-wearism transition-colors">Heels</h4>
                                                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Footwear</span>
                                                    </div>
                                                    <div className="flex gap-1 mt-1.5 overflow-x-auto pb-1">
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Black</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Leather</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Formal</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Item 4 */}
                                            <div className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                                                    <Image src="/images/tie.jpg" alt="Pants" fill className="object-cover scale-150 origin-bottom" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start">
                                                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-wearism transition-colors">Tie</h4>
                                                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Accessories</span>
                                                    </div>
                                                    <div className="flex gap-1 mt-1.5 overflow-x-auto pb-1">
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Pattern</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Formal</span>
                                                        <span className="text-[10px] border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full whitespace-nowrap">Stripes</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeStep === 1 && (
                                <div className="animate-fade-in flex flex-col h-full justify-center">
                                    <div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <span className="block text-sm font-medium text-gray-900">Friday Date Night</span>
                                                <span className="text-xs text-gray-500">Based on weather & occasion</span>
                                            </div>
                                            <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">18°C • Clear</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="aspect-[3/5.5] bg-gray-100 rounded-xl relative overflow-hidden group">
                                                <Image src="/images/w-inspo.jpeg" alt="Top" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            </div>
                                            <div className="aspect-[3/5.5] bg-gray-100 rounded-xl relative overflow-hidden group">
                                                <Image src="/images/m-inspo.jpeg" alt="Bottom" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            </div>
                                        </div>
                                        <button className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-medium hover:bg-gray-900 transition-colors shadow-lg shadow-black/10">
                                            Wear this Look
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeStep === 2 && (
                                <div className="animate-fade-in flex flex-col h-full justify-center">
                                    <div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 space-y-6">
                                        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                                            <span className="text-sm font-medium text-gray-900">New Swap Request</span>
                                            <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Pending</span>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            {/* Your Side */}
                                            <div className="flex-1 text-center space-y-3">
                                                <div className="relative mx-auto w-12 h-12 rounded-full ring-2 ring-gray-100 p-0.5">
                                                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden relative">
                                                        <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">P</div>
                                                    </div>
                                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="aspect-[3/4] w-full bg-gray-100 rounded-xl overflow-hidden relative shadow-sm">
                                                    <Image src="/images/jacket.png" alt="Your Jacket" fill className="object-cover" />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-medium">
                                                        You Offer
                                                    </div>
                                                </div>
                                                <p className="text-xs font-medium text-gray-900">Your Jacket</p>
                                            </div>

                                            {/* Swap Icon */}
                                            <div className="flex flex-col items-center justify-center gap-1 text-wearism">
                                                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                                    </svg>
                                                </div>
                                                <div className="h-full w-px bg-orange-100 dotted-border" />
                                            </div>

                                            {/* Their Side */}
                                            <div className="flex-1 text-center space-y-3">
                                                <div className="relative mx-auto w-12 h-12 rounded-full ring-2 ring-gray-100 p-0.5">
                                                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden relative">
                                                        <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">M</div>
                                                    </div>
                                                </div>
                                                <div className="aspect-[3/4] w-full bg-gray-100 rounded-xl overflow-hidden relative shadow-sm">
                                                    <Image src="/images/pants.jpg" alt="Mark's Pants" fill className="object-cover" />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-medium">
                                                        Mark Offers
                                                    </div>
                                                </div>
                                                <p className="text-xs font-medium text-gray-900">Mark's Pants</p>
                                            </div>
                                        </div>

                                        <button className="w-full bg-wearism text-white py-3.5 rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                                            Send Proposel
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
