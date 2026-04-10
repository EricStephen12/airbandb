import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Terms of service, privacy policy, and other legal information for LuxStay Corporate.",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
