"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

// Metadata será definida em um componente separado se necessário
// Por enquanto, o Next.js 13+ App Router permite metadata apenas em Server Components
export default function Pesquisadores() {
  // Dados do JSON: formato "Nome (Instituição)" ou "Nome (Instituição – País)"
  const pesquisadoresRaw = [
    "Vania Maria de Oliveira Vieira (UNIUBE)",
    "Marilene Ribeiro Resende (UNIUBE)",
    "Valeska Guimarães Rezende da Cunha (UNIUBE)",
    "Orlando Fernández Aquino (UNIUBE)",
    "Camilla de Oliveira Vieira (UNIUBE)",
    "José Humberto Rodrigues dos Anjos (UNIFIMES)",
    "Monaliza Angélica Santana (UNIPAM)",
    "Geovana Ferreira Melo Teixeira (UFU)",
    "Martha Maria Prata Linhares (UFTM)",
    "Adelina de Oliveira Novaes (UNICID)",
    "Maria Alzira de Almeida Pimenta (UNISO)",
    "Alberto Matias Gonzales (UNISS – Cuba)",
    "Juan José Mena (Universidade de Salamanca – Espanha)",
    "Patrícia Medina Zuta (UARM – Peru)",
    "Rejane Dias da Silva (UFPE)"
  ];

  // Processar os dados para extrair nome, instituição e país
  const pesquisadores = pesquisadoresRaw.map((item) => {
    const match = item.match(/^(.+?)\s*\((.+?)(?:\s*–\s*(.+?))?\)$/);
    if (match) {
      const nome = match[1].trim();
      const instituicao = match[2].trim();
      const pais = match[3] ? match[3].trim() : "Brasil";
      return { nome, instituicao, pais };
    }
    // Fallback caso o formato não seja o esperado
    return { nome: item, instituicao: "", pais: "Brasil" };
  });

  const [filtroInstituicao, setFiltroInstituicao] = useState("");

  // Obter lista única de instituições
  const instituicoes = Array.from(
    new Set(pesquisadores.map((p) => p.instituicao))
  ).sort();

  // Filtrar pesquisadores
  const pesquisadoresFiltrados = pesquisadores.filter((pesquisador) => {
    if (!filtroInstituicao) return true;
    return pesquisador.instituicao === filtroInstituicao;
  });

  return (
    <PageContainer
      title="Pesquisadores da RIDEP"
      subtitle="A rede reúne pesquisadoras e pesquisadores vinculados a diferentes instituições e países, com atuação dedicada à formação e ao desenvolvimento profissional de professores."
      className="bg-[#FFF8E6]"
    >
      <ContentSection title="Consulta por instituição" intro="Use o filtro para visualizar rapidamente a composição da rede por vínculo institucional.">
        <div className="max-w-md">
            <label
              htmlFor="filtro-instituicao"
              className="block text-sm font-medium text-[#003366] mb-2"
            >
              Filtrar por Instituição
            </label>
            <select
              id="filtro-instituicao"
              value={filtroInstituicao}
              onChange={(e) => setFiltroInstituicao(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Todas as instituições</option>
              {instituicoes.map((instituicao) => (
                <option key={instituicao} value={instituicao}>
                  {instituicao}
                </option>
              ))}
            </select>
          </div>
      </ContentSection>

      <ContentSection title="Integrantes da rede">
        <div className="content-grid content-grid--three">
            {pesquisadoresFiltrados.map((pesquisador) => (
              <Card
                key={`${pesquisador.nome}-${pesquisador.instituicao}`}
                title={pesquisador.nome}
                subtitle={pesquisador.instituicao}
                variant="soft"
                className="h-full"
              >
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {pesquisador.pais}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {pesquisadoresFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Nenhum pesquisador encontrado para a instituição selecionada.
              </p>
            </div>
          )}
      </ContentSection>

        {/* Navegação */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/convenios"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Instituições Parceiras
            </Link>
            <Link
              href="/"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Voltar ao Início
            </Link>
            <Link
              href="/contato"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              Contato →
            </Link>
          </div>
        </div>
    </PageContainer>
  );
}

