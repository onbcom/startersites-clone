import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Flowgrid – Launch & Sell Your Framer Templates Effortlessly",
  description:
    "Build and launch your Framer template store in minutes. Flowgrid is a sleek, conversion-optimized template designed for creators to showcase and sell Framer templates with ease.",
  icons: {
    icon: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
