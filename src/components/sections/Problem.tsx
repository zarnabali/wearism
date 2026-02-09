"use client";

import Image from "next/image";

export default function Problem() {
    const problems = [
        {
            image: "/images/wardrobe4.jpeg",
            number: "01",
            title: "Wardrobe Overload",
            subtitle: "You buy more, but wear less. The average person wears only 20% of their closet, leading to clutter and textile waste.",
        },
        {
            image: "/images/decision5.png",
            number: "02",
            title: "Decision Fatigue",
            subtitle: "Spending precious morning minutes staring at a full closet, only to pick the same 'safe' outfit you wore last week.",
        },
        {
            image: "/images/lonely.png",
            number: "03",
            title: "The Lonely Closet",
            subtitle: "Great pieces sit gathering dust because there's no easy, secure way to swap them with people who would love them.",
        },
    ];

    return (
        <section className="bg-white py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="max-w-3xl mb-20">
                    <p className="font-hauora font-normal text-xs uppercase tracking-widest text-wearism mb-4">
                        The Problem
                    </p>
                    <h2 className="font-hauora font-light text-5xl md:text-6xl text-gray-900 mb-6 leading-tight">
                        Your closet is full,<br />
                        <span className="font-medium">but you have nothing to wear.</span>
                    </h2>
                </div>

                {/* Problem Grid */}
                <div className="space-y-24">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[3/2.5] rounded-3xl overflow-hidden group shadow-2xl">
                                    <Image
                                        src={problem.image}
                                        alt={problem.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105     "
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="font-hauora font-light text-8xl text-wearism select-none">
                                    {problem.number}
                                </div>
                                <h3 className="font-hauora font-medium text-4xl text-gray-900">
                                    {problem.title}
                                </h3>
                                <p className="font-hauora font-light text-xl text-gray-600 leading-relaxed max-w-md">
                                    {problem.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
