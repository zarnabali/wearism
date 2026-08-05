import localFont from 'next/font/local';

/**
 * SF Pro Display — the typeface used on fourmula.ai, at the same two weights
 * they ship (400 regular, 500 medium). Helvetica Neue is kept as the local
 * fallback because it is metrically close and already bundled in this repo.
 *
 * Only load families that are actually rendered: next/font executes every
 * localFont() call in an imported module with no tree-shaking, so an unused
 * family here still preloads its files on every page.
 */
export const sfPro = localFont({
    src: [
        { path: '../../public/fonts/sf-pro-display/SF-Pro-Display-Regular.otf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/sf-pro-display/SF-Pro-Display-Medium.otf', weight: '500', style: 'normal' },
    ],
    variable: '--font-sf',
    display: 'swap',
    fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
});
