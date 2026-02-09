export default function Traction() {
    const stats = [
        { number: "500+", label: "Beta users" },
        { number: "2.3K", label: "Waitlist signups" },
        { number: "12", label: "Outfits/week avg" },
    ];

    return (
        <section className="section-dark py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground-dark uppercase mb-4">
                        Built with real users
                    </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="font-oswald font-bold text-6xl md:text-7xl text-wearism mb-2">
                                {stat.number}
                            </div>
                            <div className="font-hauora text-xl text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-8">
                        <p className="font-hauora text-lg text-gray-300 mb-4 italic">
                            "This actually helped me stop impulse buying. I realized I already had everything I needed."
                        </p>
                        <div className="font-hauora text-sm text-gray-500">
                            — Beta user, Week 3
                        </div>
                    </div>

                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-8">
                        <p className="font-hauora text-lg text-gray-300 mb-4 italic">
                            "I'm wearing clothes I forgot I owned. The AI combinations are surprisingly good."
                        </p>
                        <div className="font-hauora text-sm text-gray-500">
                            — Early adopter
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
