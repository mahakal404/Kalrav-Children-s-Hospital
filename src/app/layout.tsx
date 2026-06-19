import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import UnregisterSW from "@/components/UnregisterSW";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalrav Children's Hospital | Trusted Pediatric Care",
  description: "Led by Dr. Kartik Bhadra, Kalrav Children's Hospital provides compassionate, expert medical care for infants, children, and adolescents with 27+ years of trust.",
  keywords: ["Pediatrician", "Children's Hospital", "Dr. Kartik Bhadra", "NICU", "Vaccination", "Child care", "Killa-pardi", "Valsad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <UnregisterSW />
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

