import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";
import LifeQRProvider from "@/components/lifeqr-provider";
import PassportProvider from "@/components/passport-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyHealth - Proactive Care for Every Nagueño",
  description: "Civic health platform for Naga City: Heart health, Dengue watch, and Emergency LifeQR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-slate-50 to-white`}>
        <PassportProvider>
          <LifeQRProvider>
            <TopNav />
            <main className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-white">
              {children}
            </main>
          </LifeQRProvider>
        </PassportProvider>
      </body>
    </html>
  );
}
