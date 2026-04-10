import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InspirationSection from "@/components/InspirationSection";
import BottomNav from "@/components/BottomNav";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    default: "LuxStay Corporate | Premium Short-Term Stays in Lagos",
    template: "%s | LuxStay Corporate",
  },
  description: "Find luxury short-term rental apartments in Lagos. Victoria Island, Lekki, Ikoyi, Banana Island and more. Book corporate stays with fast WiFi, security, and backup power.",
  keywords: ["Lagos apartments", "short-term rentals Lagos", "Victoria Island stays", "corporate housing Lagos", "Lekki apartments", "Ikoyi rentals", "luxury stays Nigeria"],
  openGraph: {
    title: "LuxStay Corporate | Premium Short-Term Stays in Lagos",
    description: "Find luxury short-term rental apartments across Lagos.",
    type: "website",
    locale: "en_NG",
    siteName: "LuxStay Corporate",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxStay Corporate | Premium Short-Term Stays in Lagos",
    description: "Find luxury short-term rental apartments across Lagos.",
  },
  robots: {
    index: true,
    follow: true,
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
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-navy-dark">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Breadcrumbs />
          {children}
        </main>
        <InspirationSection />
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
