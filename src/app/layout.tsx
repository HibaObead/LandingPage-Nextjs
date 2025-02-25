import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./component/Home/Navbar/ResponsiveNav";
import Footer from "./component/Home/Footer/Footer";
import ScrolToTop from "./component/Helper/ScrolToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create LandingPage",
  description: "Create a landing page with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrolToTop />
      </body>
    </html>
  );
}
