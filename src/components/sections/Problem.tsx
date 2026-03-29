"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue
} from "framer-motion";

const problems = [
    {
        image: "/images/wardrobe4.jpeg",
        title: "The Closet Paradox",
        description: "You have a full closet, yet you feel like you have nothing to wear. 80% of your wardrobe sits untouched, while you rotate the same few pieces.",
        stats: "20% Utilization",
    },
    {
        image: "/images/decision5.png",
        title: "Morning Friction",
        description: "The average person wastes 17 minutes every day on decision fatigue. That's over 100 hours a year spent in front of a mirror feeling stuck.",
        stats: "17 Mins Daily",
    },
    {
        image: "/images/textile_waste_landfill.png",
        title: "Environmental Toll",
        description: "Fashion generates 92 million tons of textile waste annually. A garbage truck of clothes is landfilled or incinerated every single second.",
        stats: "92M Tons Waste",
    },
    {
        image: "/images/lonely.png",
        title: "Wearism: The Reset",
        description: "We believe style shouldn't cost the earth. Our AI unlocks the 80% of your wardrobe you're currently ignoring, giving you 100% of your potential.",
        stats: "Circular Style",
    },
];

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Sleek physical simulation for that premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    // Map progress to include an "Intro" phase (-1) where the very first image comes in
    const indexPosition = useTransform(smoothProgress, [0, 1], [-1, 3]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[600vh] bg-[#F7F6F0]"
            id="problem-section"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Narrative Title (Fades out immediately as the first image hits Center) */}
                <motion.div
                    style={{
                        opacity: useTransform(indexPosition, [-1, -0.6], [1, 0]),
                        y: useTransform(indexPosition, [-1, 0], [0, -150]),
                        scale: useTransform(indexPosition, [-1, 0], [1, 0.95])
                    }}
                    className="absolute top-[15%] md:top-[20%] w-full px-6 text-center z-0 overflow-x-hidden"
                >
                    <span className="text-wearism text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase block mb-4 md:mb-6">The Problem</span>
                    <h2 className="text-[#1A1A1A] text-6xl md:text-[7rem] lg:text-[10rem] font-hauora font-medium leading-[0.8] tracking-tighter mix-blend-multiply">
                        The Fashion <br /><span className="text-wearism font-light">Crisis</span>
                    </h2>
                </motion.div>

                {/* The "Stage" for Stacking Cards */}
                <div className="relative w-full h-full flex items-center justify-center z-10 pointer-events-none">
                    {problems.map((problem, i) => (
                        <CardLayer
                            key={i}
                            index={i}
                            problem={problem}
                            indexPosition={indexPosition}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}

function CardLayer({
    index,
    problem,
    indexPosition
}: {
    index: number,
    problem: typeof problems[0],
    indexPosition: MotionValue<number>
}) {
    // Offset measures where this card is along its personal lifecycle
    const offset = useTransform(indexPosition, (v) => v - index);

    // EXACT LOCKING LOGIC: Size locks strictly at exactly 1.0 or 0.2 to match desktop scale
    const scale = useTransform(
        offset,
        [-2, -1.2, -0.8, -0.2, 0.2, 0.8, 1.2, 2],
        [0.2, 0.2, 0.2, 1.0, 1.0, 0.2, 0.2, 0.2]
    );

    // Responsive X paths: Desktop clusters diagonally
    const x = useTransform(
        offset,
        [-2, -1.2, -0.8, -0.2, 0.2, 0.8, 1.2, 2],
        index === 0 ?
            ["0%", "0%", "0%", "0%", "0%", "-70%", "-60%", "-70%"] :
            ["70%", "70%", "62%", "0%", "0%", "-70%", "-70%", "-70%"]
    );

    // Responsive Y paths: Desktop aligns flush with top/bottom edges (40%)
    const y = useTransform(
        offset,
        [-2, -1.2, -0.8, -0.2, 0.2, 0.8, 1.2, 2],
        index === 0 ?
            ["70%", "70%", "70%", "0%", "0%", "-40%", "-40%", "-40%"] :
            ["40%", "40%", "40%", "0%", "0%", "-40%", "-40%", "-40%"]
    );

    // Critical layout fix: Cards fade in when arriving, but NEVER fade out! 
    // They just neatly stack on top of each other in the Top-Left 'discard' pile.
    const opacity = useTransform(
        offset,
        [-1.6, -1.2],
        [0, 1]
    );

    // Text fades in exactly when the card arrives in center
    const textOpacity = useTransform(
        offset,
        [-0.4, -0.1, 0.1, 0.4],
        [0, 1, 1, 0]
    );

    const textY = useTransform(
        offset,
        [-0.4, 0, 0.4],
        [20, 0, -20]
    );

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* The Physical Card - native DOM order handles z-indexing flawlessly here! */}
            <motion.div
                style={{ opacity, scale, x, y }}
                className="relative w-[85vw] md:w-[50vw] xl:w-[45vw] lg:max-w-[500px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/3.7] rounded-xl md:rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] will-change-transform"
            >
                <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    quality={100}
                    className="object-cover pointer-events-auto filter-none"
                    priority={index === 0}
                />

                {/* Minimal Dark Hover Badge */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                    <span className="text-white drop-shadow-md text-[10px] md:text-xs uppercase font-bold tracking-[0.25em] bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        {problem.stats}
                    </span>
                </div>
            </motion.div>

            {/* Premium Typographic Side Panel */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="absolute top-[80%] md:top-1/2 left-[5%] md:left-[calc(50%+250px)] xl:left-[calc(50%+280px)] md:-translate-y-1/2 w-[90%] md:w-[320px] lg:w-[400px] space-y-3 md:space-y-4 px-4 md:px-0 text-left z-20 pointer-events-auto"
            >
                <h4 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-hauora font-medium leading-[1.05] tracking-tight text-balance">
                    {problem.title}
                </h4>
                <p className="text-[#1A1A1A]/70 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-[340px]">
                    {problem.description}
                </p>
                <div className="">
                    <button className="text-[#1A1A1A] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border-b border-[#1A1A1A]/20 pb-1 hover:border-wearism hover:text-wearism transition-all duration-300 opacity-60 hover:opacity-100">
                        Discover Reality
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
