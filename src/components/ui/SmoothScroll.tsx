"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
    interface Window {
        __lenis?: Lenis;
    }
}

/**
 * Scroll to an absolute document offset, going through Lenis when it's running
 * so programmatic jumps don't fight the smooth-scroll loop.
 */
export function scrollToY(top: number) {
    const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
    if (lenis) {
        lenis.scrollTo(top, { duration: 1 });
    } else {
        window.scrollTo({ top, behavior: "smooth" });
    }
}

/** Absolute document offset of an element, independent of offsetParent. */
export function documentTop(el: HTMLElement) {
    return el.getBoundingClientRect().top + window.scrollY;
}

/** Pause/resume smooth scrolling (used when a full-screen overlay opens). */
export function setScrollLocked(locked: boolean) {
    const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
    if (locked) lenis?.stop();
    else lenis?.start();
}

/**
 * Lenis-powered smooth scrolling.
 *
 * Mounted once in the root layout. Respects prefers-reduced-motion by simply
 * not initialising — native scrolling takes over, and every scroll-linked
 * animation on the page still works because they all read window scroll.
 */
export default function SmoothScroll() {
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (reduced.matches) return;

        const lenis = new Lenis({
            duration: 1.05,
            // Gentle exponential ease-out: fast pickup, long soft landing.
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.6,
            wheelMultiplier: 1,
        });

        window.__lenis = lenis;

        let frame = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        // In-page anchors go through Lenis so they land smoothly and in sync.
        const onClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement | null)?.closest?.<HTMLAnchorElement>('a[href*="#"]');
            if (!anchor) return;

            const url = new URL(anchor.href, window.location.href);
            if (url.pathname !== window.location.pathname || !url.hash) return;

            const target = document.querySelector(url.hash);
            if (!target) return;

            e.preventDefault();
            lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 });
            history.pushState(null, "", url.hash);
        };

        document.addEventListener("click", onClick);

        return () => {
            document.removeEventListener("click", onClick);
            cancelAnimationFrame(frame);
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return null;
}
