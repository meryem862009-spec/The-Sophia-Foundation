import "@/app/globals.css";
import { brand } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.tagline,
  openGraph: { title: brand.name, description: brand.tagline }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-pink-soft/30 text-neutral-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
