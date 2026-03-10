import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RIDEP - Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    template: "%s | RIDEP",
  },
  description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores - RIDEP. Promovendo pesquisas colaborativas e inovadoras em nível internacional.",
  keywords: "RIDEP, desenvolvimento profissional, professores, pesquisa educacional, UNIUBE, educação, formação docente, rede internacional",
  authors: [{ name: "RIDEP" }],
  creator: "RIDEP - UNIUBE",
  publisher: "UNIUBE - Universidade de Uberaba",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ridep.org",
    siteName: "RIDEP",
    title: "RIDEP - Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} min-h-screen flex flex-col bg-[#FFF8E6] text-gray-700 antialiased`}>
        <ScrollHandler />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
