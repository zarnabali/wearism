import Image from "next/image";

export default function Founder() {
    return (
        <section className="bg-white py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Founder Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                            {/* Placeholder - replace with actual image */}
                            <div className="w-full h-full bg-gradient-to-br from-wearism/10 to-purple-500/10 flex items-center justify-center">
                                <span className="font-hauora text-9xl text-wearism/30">W</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Story */}
                    <div className="space-y-6">
                        <p className="font-hauora font-normal text-xs uppercase tracking-widest text-gray-400">
                            The Story
                        </p>

                        <h2 className="font-hauora font-light text-4xl lg:text-5xl text-gray-900 leading-tight">
                            Built by someone who gets it
                        </h2>

                        <div className="w-16 h-0.5 bg-wearism" />

                        <p className="font-hauora font-light text-lg text-gray-600 leading-relaxed">
                            Created by a software engineer who got tired of owning clothes he never wore.
                            After realizing the closet wasn't the problem—decision fatigue was—Wearism was born.
                        </p>

                        <p className="font-hauora font-light text-lg text-gray-600 leading-relaxed">
                            Now we're helping people rediscover their wardrobes and feel confident in what they wear.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
