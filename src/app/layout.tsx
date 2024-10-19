import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/iconImg.png"
  },
  title: "Daly Games - Descubra jogos incríveis para se divertir.",
  description: "Mais de 10 mil jogos separados e organizados",
  keywords: ["games", "jogos", "steam"],
  openGraph: {
    images: [
      {
        url: `${process.env.PROJECT_URL}/preview.png`
      }
    ],
    title: "Daly Games"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
