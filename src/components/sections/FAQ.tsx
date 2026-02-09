"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does the 'Smart Swap' logistics work?",
            answer: "Currently, we offer a self-shipping model where users share tracking IDs directly in the app. We verify every tracking number. In the future, we'll integrate directly with couriers like DHL to provide prepaid shipping labels for a seamless experience."
        },
        {
            question: "Is my wardrobe data shared with brands?",
            answer: "No. Your privacy is our top priority. We use a 'privacy-first' matching system. Vendors never see your raw data or photos. Our AI matches their offers to your specific wardrobe gaps (e.g., 'missing a black smart jacket') anonymously."
        },
        {
            question: "What features are free vs. premium?",
            answer: "The core experience—digitizing your closet, basic AI outfit generation, and up to 5 swaps per month—is completely free. Our Premium plan (€4.99/mo) unlocks unlimited swaps, advanced weather-based styling, and exclusive vendor deals."
        },
        {
            question: "How accurate is the AI digitization?",
            answer: "Very accurate! Our AI is trained on diverse datasets to recognize fabrics, cuts, and colors in various lighting conditions. It automatically tags your items so you don't have to enter data manually. You can always make manual edits if needed."
        },
        {
            question: "How do you prevent fraud in swapping?",
            answer: "We have a strict 3-layer security process: 1) Mandatory tracking number verification. 2) Photo confirmation upon receipt. 3) A user trust/rating score system. We also hold deposits for high-value items until the swap is successfully completed."
        },
        {
            question: "Can I use this just for organizing without swapping?",
            answer: "Absolutely. Many users use Wearism solely as a digital wardrobe organizer and AI stylist to plan their daily outfits and track what they wear (and what they don't)."
        }
    ];

    return (
        <section id="faq" className="bg-white py-32 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-hauora font-light text-4xl lg:text-5xl text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-hauora font-light text-xl text-gray-600">
                        Transparency is key. Here's how we protect your data and your wardrobe.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-hauora font-medium text-lg text-gray-900">
                                    {faq.question}
                                </span>
                                <span className={`transform transition-transform duration-300 text-wearism ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 font-hauora font-light text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
