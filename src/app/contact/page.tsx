"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";

const EMAIL = "wearismfashion@gmail.com";

const PURPOSES = [
    "Join the waitlist (I want the app)",
    "Become a launch vendor / brand partner",
    "Enterprise licensing enquiry",
    "Creator or stylist collaboration",
    "Investment / pre-seed",
    "Media & press",
    "Something else",
];

const ARCHETYPES = [
    "Curator (styling & organisation)",
    "Collector (inventory & analytics)",
    "Contributor (swapping & sustainability)",
    "Creator (community & partnerships)",
];

const SOCIALS = [
    {
        name: "Instagram",
        label: "@wearismfashion",
        href: "https://www.instagram.com/wearismfashion/",
        path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    },
    {
        name: "LinkedIn",
        label: "Wearism",
        href: "https://www.linkedin.com/company/wearism/",
        path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
        name: "X",
        label: "@Wearismfashion",
        href: "https://x.com/Wearismfashion",
        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z",
    },
];

const EMPTY = {
    name: "",
    email: "",
    purpose: PURPOSES[0],
    organization: "",
    archetype: ARCHETYPES[0],
    message: "",
};

const field =
    "w-full rounded-xl border border-line bg-bg-2 px-4 py-3.5 text-[0.9375rem] text-ink outline-none transition-all duration-300 placeholder:text-ink-30 focus:border-ink focus:bg-white focus:ring-4 focus:ring-ink-10";

const labelCls = "mb-2 block text-[0.75rem] font-medium tracking-tight text-ink-64";

export default function ContactPage() {
    const [form, setForm] = useState(EMPTY);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const result = await res.json();

            if (result.success) {
                setStatus("success");
                setForm(EMPTY);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            <Header solid />

            <main id="main" className="relative overflow-hidden bg-white">

                <div
                    className="shell pb-24"
                    style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}
                >
                    <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
                        {/* --------------------------------------------------- left */}
                        <div>
                            <Reveal>
                                <p className="t-tag text-ink-30">Get in touch</p>
                            </Reveal>

                            <Reveal delay={0.06}>
                                <h1 className="t-h1 mt-6 text-ink">
                                    Let&apos;s talk
                                    <br />
                                    about clothes.
                                </h1>
                            </Reveal>

                            <Reveal delay={0.12}>
                                <p className="t-body mt-7 max-w-lg">
                                    Whether you want early access, want to sell into a room full of
                                    verified wardrobe gaps, or want to license the engine — this form
                                    reaches the founders directly.
                                </p>
                            </Reveal>

                            <Reveal delay={0.18}>
                                <div className="mt-12 border-t border-line pt-8">
                                    <p className="t-tag text-ink-64">Direct email</p>
                                    <a
                                        href={`mailto:${EMAIL}?subject=${encodeURIComponent("Wearism enquiry")}`}
                                        className="mt-3 inline-block text-[clamp(1.25rem,2.6vw,1.75rem)] font-medium tracking-tight text-ink transition-colors hover:text-accent"
                                    >
                                        {EMAIL}
                                    </a>
                                </div>
                            </Reveal>

                            <Reveal delay={0.24}>
                                <div className="mt-10">
                                    <p className="t-tag text-ink-64">Elsewhere</p>
                                    <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                                        {SOCIALS.map((s) => (
                                            <li key={s.name}>
                                                <a
                                                    href={s.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex h-full flex-col gap-3 bg-white p-5 transition-colors duration-300 hover:bg-accent-tint"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        aria-hidden
                                                        className="h-5 w-5 fill-ink/40 transition-colors duration-300 group-hover:fill-ink"
                                                    >
                                                        <path d={s.path} />
                                                    </svg>
                                                    <span>
                                                        <span className="t-mono block text-ink-64">
                                                            {s.name.toUpperCase()}
                                                        </span>
                                                        <span className="mt-1 block text-[0.8125rem] font-medium text-ink">
                                                            {s.label}
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <p className="t-mono mt-10 text-ink-64">
                                    ISLAMABAD, PAKISTAN · PRE-SEED
                                </p>
                            </Reveal>
                        </div>

                        {/* -------------------------------------------------- form */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:sticky lg:top-28 lg:self-start"
                        >
                            <div className="card p-7 md:p-9">
                                <h2 className="t-h3 text-ink">Send us a message</h2>
                                <p className="t-body mt-2">
                                    We read everything and reply to what we can. Fields marked with an
                                    asterisk are required.
                                </p>

                                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className={labelCls}>
                                                Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                autoComplete="name"
                                                value={form.name}
                                                onChange={onChange}
                                                placeholder="Zara Ahmed"
                                                className={field}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className={labelCls}>
                                                Email *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={form.email}
                                                onChange={onChange}
                                                placeholder="you@example.com"
                                                className={field}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="purpose" className={labelCls}>
                                            What&apos;s this about? *
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="purpose"
                                                name="purpose"
                                                value={form.purpose}
                                                onChange={onChange}
                                                className={`${field} cursor-pointer appearance-none pr-11`}
                                            >
                                                {PURPOSES.map((p) => (
                                                    <option key={p}>{p}</option>
                                                ))}
                                            </select>
                                            <svg
                                                aria-hidden
                                                viewBox="0 0 24 24"
                                                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-ink"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m19 9-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="organization" className={labelCls}>
                                            Organisation or brand{" "}
                                            <span className="text-ink-64">(optional)</span>
                                        </label>
                                        <input
                                            id="organization"
                                            name="organization"
                                            type="text"
                                            autoComplete="organization"
                                            value={form.organization}
                                            onChange={onChange}
                                            placeholder="Where you're writing from"
                                            className={field}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="archetype" className={labelCls}>
                                            Which part interests you most?
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="archetype"
                                                name="archetype"
                                                value={form.archetype}
                                                onChange={onChange}
                                                className={`${field} cursor-pointer appearance-none pr-11`}
                                            >
                                                {ARCHETYPES.map((a) => (
                                                    <option key={a}>{a}</option>
                                                ))}
                                            </select>
                                            <svg
                                                aria-hidden
                                                viewBox="0 0 24 24"
                                                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-ink"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m19 9-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={labelCls}>
                                            Message <span className="text-ink-64">(optional)</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={form.message}
                                            onChange={onChange}
                                            placeholder="A sentence or two on what you're after."
                                            className={`${field} resize-none`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="btn btn-accent w-full disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "loading" ? "Sending…" : "Send message"}
                                    </button>

                                    {/* Announced to assistive tech, not just shown */}
                                    <p
                                        role="status"
                                        aria-live="polite"
                                        className={`text-center text-[0.8125rem] ${status === "success"
                                            ? "text-ink"
                                            : status === "error"
                                                ? "text-accent-dark"
                                                : "sr-only"
                                            }`}
                                    >
                                        {status === "success" &&
                                            "Thanks — we've got it. You'll hear from us soon."}
                                        {status === "error" &&
                                            `Something went wrong sending that. Please email us directly at ${EMAIL}.`}
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
