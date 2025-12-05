import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LA Café Sutton | Award-Winning Bistro & Artisan Coffee",
  description:
    "Multi-award-winning bistro-style café in Sutton serving Michelin-inspired food. Good Food Award Gold Seal winner 2023-2025. Signature white truffle breakfast, artisan coffee, homemade desserts.",
  keywords: [
    "LA Cafe Sutton",
    "cafe sutton",
    "brunch sutton",
    "breakfast sutton",
    "best cafe south london",
    "artisan coffee",
    "bistro sutton",
  ],
  openGraph: {
    title: "LA Café Sutton | Award-Winning Bistro & Artisan Coffee",
    description:
      "Multi-award-winning bistro serving Michelin-inspired food in a relaxed setting. Good Food Award Gold Seal 2023-2025.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
