import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";
import LifeQRProvider from "@/components/lifeqr-provider";
import PassportProvider from "@/components/passport-provider";
import StrokeTimerProvider from "@/components/stroke-timer-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyHealth - Your care package.",
  description: "",
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
            <StrokeTimerProvider>
              <TopNav />
              <main className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-white">
                {children}
              </main>
            </StrokeTimerProvider>
          </LifeQRProvider>
        </PassportProvider>
      </body>
    </html>
  );
}
