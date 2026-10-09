import type { Metadata } from "next";
import { Geist, Geist_Mono, Hedvig_Letters_Serif, Poppins, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hedvigLettersSans = Hedvig_Letters_Serif({
  weight: "400",
  variable: "--font-hedvig-letters-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-Playfair_Display",
  subsets: ["latin"],
  weight: ["400", "500"]
})

const grotesk = Space_Grotesk({
  variable: "--font-Space_grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bloom",
  description:
    "Launch your personal storefront in minutes with Bloom. Sell digital products, courses, and services — all from one simple link. Empowering creators and small businesses to own their market.",
  icons: {
    icon: "/icons/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} ${geistMono.variable} ${grotesk.variable} ${hedvigLettersSans.variable} ${poppins.variable} antialiased`}      >
        {children}
      </body>
    </html>
  );
}
