"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Safety ceiling: a full-width footer band needs ~1k dots, never more. */
const MAX_DOTS = 3000;

/**
 * A grid of real dot elements — the same construction as the reference's
 * `.dots-field` — which is what makes per-dot reactions possible.
 *
 * Dots near the pointer brighten and warm to brand orange, falling off with
 * distance. Styles are written straight to the DOM in a rAF loop rather than
 * through React state, so moving the pointer never triggers a re-render.
 *
 * Dot centres are measured once per layout change and cached. Reading
 * getBoundingClientRect per dot per frame would force ~700 synchronous layouts
 * every frame; this does one host measurement instead.
 */
export default function DotsField({
    className = "",
    radius = 130,
}: {
    className?: string;
    radius?: number;
}) {
    const hostRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    const pointer = useRef({ x: -9999, y: -9999 });
    const centres = useRef<{ x: number; y: number }[]>([]);
    const frame = useRef(0);

    /* Fill the container with as many dots as its size allows.
     *
     * --dot-size / --dot-gap are authored in rem, and a custom property comes
     * back from getComputedStyle as its literal token ("0.75rem") — parseFloat
     * alone yields 0.75, which as a pixel cell size asks for ~260k dots and
     * locks the browser. Resolve the unit before doing any grid maths. */
    const measure = useCallback(() => {
        const host = hostRef.current;
        if (!host) return;

        const styles = getComputedStyle(host);
        const rootPx =
            parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        const hostPx = parseFloat(styles.fontSize) || rootPx;

        const toPx = (raw: string, fallback: number) => {
            const value = raw.trim();
            const n = parseFloat(value);
            if (!Number.isFinite(n)) return fallback;
            if (value.endsWith("rem")) return n * rootPx;
            if (value.endsWith("em")) return n * hostPx;
            return n; // px, or unitless
        };

        const size = toPx(styles.getPropertyValue("--dot-size"), 12);
        const gap = toPx(styles.getPropertyValue("--dot-gap"), 12);
        const cell = size + gap;

        if (!(cell > 0.5)) return; // never divide by a degenerate cell

        const cols = Math.max(1, Math.floor((host.clientWidth + gap) / cell));
        const rows = Math.max(1, Math.floor((host.clientHeight + gap) / cell));

        // Hard ceiling so a future styling change can never flood the DOM again.
        setCount(Math.min(cols * rows, MAX_DOTS));
    }, []);

    /* Cache each dot's centre relative to the host box. */
    const cacheCentres = useCallback(() => {
        const host = hostRef.current;
        if (!host) return;

        const dots = host.children;
        const next: { x: number; y: number }[] = new Array(dots.length);

        for (let i = 0; i < dots.length; i++) {
            const d = dots[i] as HTMLElement;
            next[i] = {
                x: d.offsetLeft + d.offsetWidth / 2,
                y: d.offsetTop + d.offsetHeight / 2,
            };
        }
        centres.current = next;
    }, []);

    useEffect(() => {
        measure();
        const host = hostRef.current;
        if (!host) return;

        const ro = new ResizeObserver(() => {
            measure();
            cacheCentres();
        });
        ro.observe(host);
        return () => ro.disconnect();
    }, [measure, cacheCentres]);

    // Re-cache whenever the dot count changes (they've just been rendered).
    useEffect(cacheCentres, [count, cacheCentres]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!count) return;

        const onMove = (e: PointerEvent) => {
            pointer.current = { x: e.clientX, y: e.clientY };
        };
        const onLeave = () => {
            pointer.current = { x: -9999, y: -9999 };
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerleave", onLeave);

        let lit = false;

        const tick = () => {
            const host = hostRef.current;
            const pts = centres.current;

            if (host && pts.length) {
                // One layout read per frame, not one per dot.
                const box = host.getBoundingClientRect();
                const onScreen = box.bottom > -100 && box.top < window.innerHeight + 100;

                if (onScreen) {
                    const px = pointer.current.x - box.left;
                    const py = pointer.current.y - box.top;
                    const dots = host.children;
                    let any = false;

                    for (let i = 0; i < pts.length && i < dots.length; i++) {
                        const dx = pts[i].x - px;
                        const dy = pts[i].y - py;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const t = dist < radius ? 1 - dist / radius : 0;

                        if (t === 0) {
                            // Only touch the DOM if this dot was previously lit.
                            if (lit) {
                                const el = dots[i] as HTMLElement;
                                el.style.opacity = "";
                                el.style.transform = "";
                                el.style.backgroundColor = "";
                            }
                            continue;
                        }

                        any = true;
                        const eased = t * t;
                        const el = dots[i] as HTMLElement;
                        el.style.opacity = `${0.12 + eased * 0.88}`;
                        el.style.transform = `scale(${1 + eased * 0.55})`;
                        el.style.backgroundColor = "var(--accent)";
                    }
                    lit = any;
                }
            }
            frame.current = requestAnimationFrame(tick);
        };

        frame.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            cancelAnimationFrame(frame.current);
        };
    }, [radius, count]);

    return (
        <div ref={hostRef} aria-hidden className={`dots-field ${className}`}>
            {Array.from({ length: count }, (_, i) => (
                <span key={i} className="dot" />
            ))}
        </div>
    );
}
