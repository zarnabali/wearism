"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const navigation = {
        product: [
            { name: "Features", href: "#features" },
            { name: "How it Works", href: "#how-it-works" },
            { name: "Sustainability", href: "#sustainability" },
            { name: "Partners", href: "#brand-connections" },
        ],
        company: [
            { name: "About", href: "#about" },
            { name: "Waitlist", href: "#final-cta" },
            { name: "Contact", href: "mailto:wearismfashion@gmail.com" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Terms of Service", href: "#terms" },
        ],
        social: [
            {
                name: "Twitter",
                href: "#",
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                )
            },
            {
                name: "Instagram",
                href: "#",
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                )
            },
            {
                name: "LinkedIn",
                href: "#",
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                )
            },
        ],
    };

    return (
        <footer className="bg-[#FBFDFA] py-16 md:py-24 border-t border-gray-100 relative overflow-hidden">
            {/* Subtle Gradient Detail */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-wearism/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
                    
                    {/* Brand & Newsletter (Centered on Mobile) */}
                    <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-8">
                        <Link href="/" className="block">
                            <Image
                                src="/logo/wearism-b.png"
                                alt="Wearism"
                                width={140}
                                height={28}
                                className="mb-2"
                            />
                        </Link>
                        <p className="font-hauora font-light text-sm text-[#1A1A1A]/50 leading-relaxed max-w-sm">
                            The intelligent wardrobe ecosystem. Helping you shop less, swap more, and style effortless looks every day.
                        </p>

                        <div className="w-full max-w-xs space-y-3">
                            <p className="font-hauora font-bold text-[10px] text-wearism uppercase tracking-[0.2em]">Join the Waitlist</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-white border border-gray-200 text-[#1A1A1A] text-sm rounded-xl block w-full p-3 placeholder-[#1A1A1A]/20 font-hauora font-light focus:outline-none focus:ring-1 focus:ring-wearism/30 transition-all"
                                />
                                <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-wearism">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
                        <h3 className="font-hauora font-bold text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]">Product</h3>
                        <ul className="space-y-4">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-hauora font-light text-sm text-[#1A1A1A]/60 hover:text-wearism transition-colors duration-300 block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
                        <h3 className="font-hauora font-bold text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]">Company</h3>
                        <ul className="space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-hauora font-light text-sm text-[#1A1A1A]/60 hover:text-wearism transition-colors duration-300 block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
                        <h3 className="font-hauora font-bold text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]">Connect</h3>
                        <div className="flex sm:flex-col gap-6 sm:gap-4 flex-wrap justify-center sm:justify-start">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-hauora font-light text-sm text-[#1A1A1A]/60 hover:text-wearism transition-colors duration-300 flex items-center gap-3 group"
                                >
                                    <item.icon className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <span className="hidden sm:inline">{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-hauora font-light text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.1em]">
                        © {new Date().getFullYear()} Wearism Inc.
                    </p>
                    <div className="flex gap-8">
                        {navigation.legal.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="font-hauora font-light text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.1em] hover:text-wearism transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
