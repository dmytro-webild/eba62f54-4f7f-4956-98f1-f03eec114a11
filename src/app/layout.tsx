import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoThread - Sustainable Fashion Marketplace India",
  description: "Buy affordable eco-friendly clothing or sell your gently used clothes on EcoThread. India's trusted circular fashion platform with UPI, Net Banking, and multiple payment options.",
  keywords: "sustainable fashion India, recycled clothing, eco-friendly clothes, second-hand fashion, UPI payments, Indian fashion",
  metadataBase: new URL("https://ecothread.com"),
  alternates: {
    canonical: "https://ecothread.com",
  },
  openGraph: {
    title: "EcoThread - Sustainable Fashion Marketplace",
    description: "Shop sustainable fashion and resell your clothes. India's most affordable circular fashion platform.",
    url: "https://ecothread.com",
    siteName: "EcoThread",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/beautiful-young-woman-smiling_23-2148349500.jpg",
        alt: "EcoThread Sustainable Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoThread - Sustainable Fashion Marketplace India",
    description: "Buy eco-friendly clothing or earn by selling your gently used clothes on EcoThread.",
    images: ["http://img.b2bpic.net/free-photo/beautiful-young-woman-smiling_23-2148349500.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}