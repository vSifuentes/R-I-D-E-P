import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisadores - RIDEP | Membros da Rede",
  description: "Conheça os pesquisadores que integram a RIDEP, suas respectivas instituições e países. Pesquisadores dedicados ao desenvolvimento profissional de professores.",
  keywords: "RIDEP, pesquisadores, membros RIDEP, pesquisadores educação, desenvolvimento profissional, instituições parceiras",
};

export default function PesquisadoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

