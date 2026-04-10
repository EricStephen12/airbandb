import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Properties in Lagos",
  description: "Browse luxury short-term rental apartments across Lagos. Filter by area - Victoria Island, Lekki, Ikoyi, Banana Island, Eko Atlantic, Ikeja GRA and more.",
  openGraph: {
    title: "Explore Properties in Lagos | LuxStay Corporate",
    description: "Browse luxury short-term rental apartments across Lagos.",
  },
};

export default function ListingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
