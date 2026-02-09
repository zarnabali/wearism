import localFont from 'next/font/local';

export const cabinetGrotesk = localFont({
    src: [
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Thin.otf', weight: '100', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Extralight.otf', weight: '200', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Light.otf', weight: '300', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Regular.otf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Medium.otf', weight: '500', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Bold.otf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Extrabold.otf', weight: '800', style: 'normal' },
        { path: '../../public/fonts/cabinet-grotesk/CabinetGrotesk-Black.otf', weight: '900', style: 'normal' },
    ],
    variable: '--font-cabinet',
    display: 'swap',
});

export const switzer = localFont({
    src: [
        { path: '../../public/fonts/switzer/Switzer-Thin.otf', weight: '100', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-ThinItalic.otf', weight: '100', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Extralight.otf', weight: '200', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-ExtralightItalic.otf', weight: '200', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Light.otf', weight: '300', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-LightItalic.otf', weight: '300', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Regular.otf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-Italic.otf', weight: '400', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Medium.otf', weight: '500', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-MediumItalic.otf', weight: '500', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Semibold.otf', weight: '600', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-SemiboldItalic.otf', weight: '600', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Bold.otf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-BoldItalic.otf', weight: '700', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Extrabold.otf', weight: '800', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-ExtraboldItalic.otf', weight: '800', style: 'italic' },
        { path: '../../public/fonts/switzer/Switzer-Black.otf', weight: '900', style: 'normal' },
        { path: '../../public/fonts/switzer/Switzer-BlackItalic.otf', weight: '900', style: 'italic' },
    ],
    variable: '--font-switzer',
    display: 'swap',
});

export const hauora = localFont({
    src: '../../public/fonts/hauora_sans/fonts/variable/HauoraGX.ttf',
    variable: '--font-hauora',
    display: 'swap',
});

export const oswald = localFont({
    src: [
        { path: '../../public/fonts/oswald-4/Oswald-ExtraLight.ttf', weight: '200', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-Extra-LightItalic.ttf', weight: '200', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-Light.ttf', weight: '300', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-LightItalic.ttf', weight: '300', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-RegularItalic.ttf', weight: '400', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-Medium.ttf', weight: '500', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-MediumItalic.ttf', weight: '500', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-DemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-Demi-BoldItalic.ttf', weight: '600', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-BoldItalic.ttf', weight: '700', style: 'italic' },
        { path: '../../public/fonts/oswald-4/Oswald-Heavy.ttf', weight: '800', style: 'normal' },
        { path: '../../public/fonts/oswald-4/Oswald-HeavyItalic.ttf', weight: '800', style: 'italic' },
    ],
    variable: '--font-oswald',
    display: 'swap',
});
