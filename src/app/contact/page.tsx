"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const email = "wearsismfashion@gmail.com";
    const subject = "Wearism Inquiry - Collaborative Fashion";
    const body = "Hello Wearism Team,\n\nI'm reaching out because I'm interested in...";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        purpose: "Brand Collaboration / Partnership",
        organization: "",
        archetype: "Curator (Styling & Organization)",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    purpose: "Brand Collaboration / Partnership",
                    organization: "",
                    archetype: "Curator (Styling & Organization)",
                    message: ""
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    const socials = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/wearism/?viewAsMember=true",
            label: "Wearism Inc.",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/wearismfashion/",
            label: "@wearismfashion",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "https://x.com/Wearismfashion",
            label: "@Wearismfashion",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <Header forceBlack={true} />
            <main className="min-h-screen bg-[#F7F6F0] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-wearism/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-wearism/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
                
                <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Left: Content Area (Lg: 7 columns) */}
                        <div className="lg:col-span-7 space-y-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="space-y-6"
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-wearism/10 border border-wearism/20 rounded-full text-wearism text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
                                    Direct Access
                                </span>
                                <h1 className="text-[#1A1A1A] text-5xl md:text-7xl lg:text-8xl font-hauora font-medium leading-[0.95] tracking-tighter">
                                    Let's build <br />
                                    <span className="text-wearism italic">the future</span> <br />
                                    together.
                                </h1>
                                <p className="text-[#1A1A1A]/60 text-lg md:text-xl font-hauora font-light max-w-xl leading-relaxed">
                                    Whether you're a potential partner, an early adopter, or just curious about our ecosystem, we'd love to hear from you.
                                </p>
                            </motion.div>

                            {/* Social Cards Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {socials.map((social, idx) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                        className="group relative p-8 bg-white rounded-[32px] border border-[#1A1A1A]/5 shadow-sm hover:shadow-xl hover:shadow-wearism/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-wearism/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative z-10 space-y-4">
                                            <div className="text-wearism group-hover:scale-110 transition-transform duration-500 origin-left">
                                                {social.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-[#1A1A1A]/40 text-[10px] uppercase font-bold tracking-widest">{social.name}</h3>
                                                <p className="text-[#1A1A1A] font-medium transition-colors group-hover:text-wearism">{social.label}</p>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="pt-8 border-t border-[#1A1A1A]/5"
                            >
                                <p className="text-[#1A1A1A]/40 text-xs uppercase tracking-widest font-bold mb-4">Official Inquiry</p>
                                <a 
                                    href={mailtoLink}
                                    className="text-2xl md:text-4xl font-hauora text-[#1A1A1A] hover:text-wearism transition-colors duration-300 underline underline-offset-8 decoration-wearism/30"
                                >
                                    {email}
                                </a>
                            </motion.div>
                        </div>

                        {/* Right: The Premium Form (Lg: 5 columns) */}
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="sticky top-40 bg-white p-8 md:p-12 rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden"
                            >
                                {/* Decorative Glow inside form */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-wearism/10 rounded-full blur-3xl -z-10" />
                                
                                <div className="space-y-10">
                                    <div>
                                        <h2 className="text-3xl font-hauora font-medium text-[#1A1A1A] mb-3">Early Adopter Portal</h2>
                                        <p className="text-[#1A1A1A]/60 text-base font-hauora font-light">Join the 100+ visionaries currently on our waitlist. We release access in limited batches.</p>
                                    </div>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Identity</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your Name"
                                                    required
                                                    className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none transition-all duration-300"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Email</label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    required
                                                    className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Inquiry Purpose</label>
                                            <div className="relative group">
                                                <select 
                                                    name="purpose"
                                                    value={formData.purpose}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none appearance-none transition-all duration-500 cursor-pointer group-hover:bg-[#EFEEE7] group-hover:shadow-sm"
                                                >
                                                    <option>Brand Collaboration / Partnership</option>
                                                    <option>Business Inquiry (B2B)</option>
                                                    <option>Join Waiting List (Customer)</option>
                                                    <option>Media & Press</option>
                                                    <option>Other</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-wearism transition-transform duration-300 group-hover:scale-125">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Organization / Brand Name (Optional)</label>
                                            <input 
                                                type="text" 
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                placeholder="e.g. Wearism Inc."
                                                className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none transition-all duration-300"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Preferred Archetype</label>
                                            <div className="relative group">
                                                <select 
                                                    name="archetype"
                                                    value={formData.archetype}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none appearance-none transition-all duration-500 cursor-pointer group-hover:bg-[#EFEEE7] group-hover:shadow-sm"
                                                >
                                                    <option>Curator (Styling & Organization)</option>
                                                    <option>Collector (Inventory Tracking)</option>
                                                    <option>Contributor (Sustainability & Swapping)</option>
                                                    <option>Creator (Brand Partnerships)</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-wearism transition-transform duration-300 group-hover:scale-125">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase font-bold text-wearism tracking-[0.2em] ml-1">Message</label>
                                            <textarea 
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us more about your interests..."
                                                rows={4}
                                                className="w-full bg-[#F7F6F0] border border-transparent rounded-[20px] px-6 py-5 text-sm font-hauora focus:bg-white focus:ring-2 focus:ring-wearism/20 focus:border-wearism/10 outline-none transition-all duration-300 resize-none"
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit"
                                            disabled={status === "loading"}
                                            className={`group relative w-full ${status === "success" ? "bg-emerald-500" : "bg-[#1A1A1A]"} text-white py-6 rounded-[24px] font-hauora font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-wearism/30 active:scale-95 disabled:opacity-50`}
                                        >
                                            <span className="relative z-10">
                                                {status === "loading" ? "Processing..." : 
                                                 status === "success" ? "Success! Saved to Sheet" : 
                                                 status === "error" ? "Error! Try Again" : 
                                                 "Send Request"}
                                            </span>
                                            <div className="absolute inset-0 bg-wearism translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        </button>
                                        
                                        {status === "success" && (
                                            <p className="text-center text-emerald-600 text-xs font-hauora animate-pulse mt-2">
                                                Data has been added to the master ledger.
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
