"use client";

export default function FinalCTA() {
    return (
        <section className="bg-gradient-to-br from-gray-900 to-black py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-hauora font-light text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                    Ready to transform your wardrobe?
                </h2>

                <p className="font-hauora font-light text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join early adopters who are rediscovering their style with AI-powered outfit suggestions.
                </p>

                <button
                    className="bg-wearism text-white font-hauora font-medium text-lg px-12 py-5 rounded-full transition-all duration-300 mb-6"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF6B35';
                        e.currentTarget.style.color = 'white';
                    }}
                >
                    Request Early Access
                </button>

                <p className="font-hauora font-light text-sm text-gray-400">
                    No credit card required • Early access is free
                </p>
            </div>
        </section>
    );
}
