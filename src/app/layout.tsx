import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Variable-Latin.woff2",
  variable: "--font-geist",
  weight: "100 900",
});

const hedvigLettersSans = localFont({
  src: "./fonts/HedvigLettersSerif-Regular-Latin.woff2",
  variable: "--font-hedvig-letters-sans",
});

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular-Latin.woff2", weight: "400" },
    { path: "./fonts/Poppins-Medium-Latin.woff2", weight: "500" },
    { path: "./fonts/Poppins-SemiBold-Latin.woff2", weight: "600" },
    { path: "./fonts/Poppins-Bold-Latin.woff2", weight: "700" },
  ],
  variable: "--font-poppins",
});

const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-Variable-Latin.woff2",
  variable: "--font-bricolage",
  weight: "700 800",
});

const dmSans = localFont({
  src: "./fonts/DMSans-Variable-Latin.woff2",
  variable: "--font-dm-sans",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Bloom",
  description:
    "Launch your personal storefront in minutes with Bloom. Sell digital products, courses, and services — all from one simple link. Empowering creators and small businesses to own their market.",
  icons: {
    icon: "/icons/logo.webp",
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
        className={`${hedvigLettersSans.variable} ${poppins.variable} ${bricolage.variable} ${dmSans.variable} ${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
