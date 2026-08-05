"use client";

import Image from "next/image";
import Link from "next/link";
import DotsField from "@/components/ui/DotsField";

const NAV = {
    product: [
        { name: "Community", href: "/#community" },
        { name: "The problem", href: "/#problem" },
        { name: "Wardrobe", href: "/#wardrobe" },
        { name: "Swap", href: "/#swap" },
        { name: "The app", href: "/#app" },
    ],
    business: [
        { name: "How it works", href: "/#how-it-works" },
        { name: "For students", href: "/#audiences" },
        { name: "For brands", href: "/#audiences" },
        { name: "Licensing", href: "/#audiences" },
        { name: "FAQ", href: "/#faq" },
    ],
};

const SOCIAL = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/wearismfashion/",
        path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/wearism/",
        path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
        name: "X",
        href: "https://x.com/Wearismfashion",
        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z",
    },
];

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-dark text-white">
            {/* Dots span the whole footer and sit behind everything. They react
                to the pointer and warm to brand orange. */}
            <DotsField className="absolute inset-0 h-full w-full text-white" />

            <div className="shell relative z-10 py-16 md:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <Link href="/" aria-label="Wearism — home" className="inline-block">
                            <Image
                                src="/logo/wearism-w.png"
                                alt="Wearism"
                                width={240}
                                height={56}
                                className="h-7 w-auto"
                            />
                        </Link>

                        <p className="t-body-sm mt-6 max-w-xs !text-white/45">
                            The social styling app for the clothes you already own. Wear more of what
                            you have, swap the rest.
                        </p>

                        <Link href="/contact" className="btn btn-light mt-7">
                            Join the waitlist
                        </Link>
                    </div>

                    <nav aria-label="Product">
                        <h2 className="text-[0.8125rem] font-medium text-white/35">Product</h2>
                        <ul className="mt-5 space-y-3">
                            {NAV.product.map((i) => (
                                <li key={i.name}>
                                    <Link
                                        href={i.href}
                                        className="text-[0.9375rem] text-white/65 transition-colors hover:text-white"
                                    >
                                        {i.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Business">
                        <h2 className="text-[0.8125rem] font-medium text-white/35">Business</h2>
                        <ul className="mt-5 space-y-3">
                            {NAV.business.map((i) => (
                                <li key={i.name}>
                                    <Link
                                        href={i.href}
                                        className="text-[0.9375rem] text-white/65 transition-colors hover:text-white"
                                    >
                                        {i.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-[0.8125rem] font-medium text-white/35">Contact</h2>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a
                                    href="mailto:wearismfashion@gmail.com"
                                    className="text-[0.9375rem] text-white/65 transition-colors hover:text-white"
                                >
                                    wearismfashion@gmail.com
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[0.9375rem] text-white/65 transition-colors hover:text-white"
                                >
                                    Contact form
                                </Link>
                            </li>
                        </ul>

                        <ul className="mt-6 flex gap-3">
                            {SOCIAL.map((s) => (
                                <li key={s.name}>
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        className="grid h-9 w-9 place-items-center rounded-full bg-white/8 transition-colors hover:bg-white hover:text-ink"
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                                            <path d={s.path} />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-dark-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[0.8125rem] text-white/30">
                        © {new Date().getFullYear()} Wearism. The future of styling. Est. 2025.
                    </p>
                    <p className="text-[0.8125rem] text-white/30">
                        Islamabad, Pakistan
                    </p>
                </div>
            </div>
        </footer>
    );
}
