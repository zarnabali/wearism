import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { cabinetGrotesk, switzer, hauora, oswald } from "./fonts";

export const metadata: Metadata = {
  title: "Wearism Website",
  description: "Wearism - Setup with Next.js",
  icons: {
    icon: '/logo/logo.jpeg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/logo/logo.jpeg" />
      </head>
      <body
        className={`${cabinetGrotesk.variable} ${switzer.variable} ${hauora.variable} ${oswald.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
