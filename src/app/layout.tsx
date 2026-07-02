import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liqid – Banque intelligente, sans frontières",
  description:
    "LiQid est l'application bancaire qui vous suit partout. Virements, crypto, cartes, change de devises — le tout dans une seule app. Disponible sur iOS et Android.",
  openGraph: {
    title: "LiQid – Banque intelligente, sans frontières",
    description:
      "Virements, crypto, cartes, change de devises — le tout dans une seule app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
