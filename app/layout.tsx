import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yanie Muslimah | Urutan Tradisi Bidan Melayu",
  description:
    "Urutan tradisional, bertungku, rawatan wanita dan pakej pantang di Sitiawan, Manjung. Tempahan melalui WhatsApp Kak Yanie.",
  openGraph: {
    title: "Yanie Muslimah | Urutan Tradisi Bidan Melayu",
    description:
      "Urutan tradisional, bertungku, rawatan wanita dan pakej pantang di Sitiawan, Manjung.",
    type: "website",
    locale: "ms_MY",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
