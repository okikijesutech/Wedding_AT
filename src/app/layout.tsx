import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-wedding-site.com"),
  title: "Àjìbọ́lá & Olúwadárasími | Our Wedding",
  description: "Join us in celebrating our wedding day. A cinematic journey of our love story.",
  openGraph: {
    title: "Àjìbọ́lá & Olúwadárasími | Our Wedding",
    description: "Join us in celebrating our wedding day. A cinematic journey of our love story.",
    url: "https://your-wedding-site.com",
    siteName: "Àjìbọ́lá & Olúwadárasími Wedding",
    images: [
      {
        url: "/images/og-image.jpg", // The user should add this or I can generate one if asked
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Àjìbọ́lá & Olúwadárasími | Our Wedding",
    description: "Join us in celebrating our wedding day. A cinematic journey of our love story.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-ivory text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
