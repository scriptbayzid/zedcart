// layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavTop from "@/components/Navigation/NavTop";
import NavMiddle from "@/components/Navigation/NavMiddle";
import GrocceryNav from "@/components/Navigation/GrocceryNav";
import SliderBox from "@/components/Slider/SliderBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your App Title", // Update to your app title
  description: "A brief description of your app", // Update description as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavTop />
        <NavMiddle />
        <GrocceryNav />
    <SliderBox/>
        {children}
      </body>
    </html>
  );
}
