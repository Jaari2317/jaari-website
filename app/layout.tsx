import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JaaRi | AI Reliability & Vibration Solutions",
  description: "Industrial AI-driven reliability hardware and software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add suppressHydrationWarning here to block browser injection crashes! */}
      <body className={inter.className} suppressHydrationWarning>
        <Navbar /> 
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}