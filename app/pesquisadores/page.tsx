"use client";

import { useState } from "react";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

// Metadata será definida em um componente separado se necessário
// Por enquanto, o Next.js 13+ App Router permite metadata apenas em Server Components
export default function Pesquisadores() {
  // Dados do JSON: formato "Nome (Instituição)" ou "Nome (Instituição – País)"
  const pesquisadoresRaw = [
    "Adelina de Oliveira Novaes (UNICID)",
    "Adriana Giarola Vilamaior (IFMG)",
    "Alberto Matias Gonzales (UNISS – Cuba)",
    "Ana Carolina Vieira Oliveira (UNIUBE)",
    "Camilla de Oliveira Vieira (UNIUBE)",
    "Edson Rodrigo de Almeida (UFV)",
    "Geovana Ferreira Melo Teixeira (UFU)",
    "Gerusa Dumont de Rezende (UNIUBE)",
    "José Humberto Rodrigues dos Anjos (UNIFIMES)",
    "Juan José Mena (Universidade de Salamanca – Espanha)",
    "Lais Moraes de Oliveira Porfírio (UEG)",
    "Leonice Vieira de Jesus Paixão (UNIMONTES)",
    "Marcelle Zanquêta de Souza (UNIUBE)",
    "Maria Alzira de Almeida Pimenta (UNISO)",
    "Marianna Centeno M. de Gouvea (UNIUBE)",
    "Marilene Ribeiro Resende (UNIUBE)",
    "Martha Maria Prata Linhares (UFTM)",
    "Monaliza Angélica Santana (UNIPAM)",
    "Orlando Fernández Aquino (UNIUBE)",
    "Pablo Calegário (UNIUBE)",
    "Patrícia Medina Zuta (UARM – Peru)",
    "Rejane Dias da Silva (UFPE)",
    "Rosimeire Ferreira Diniz (UEMG)",
    "Valeska Guimarães Rezende da Cunha (UNIUBE)",
    "Vania Maria de Oliveira Vieira (UNIUBE)"
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
              <article
                key={`${pesquisador.nome}-${pesquisador.instituicao}`}
                className="h-full space-y-2"
              >
                <h3 className="text-base font-semibold text-[#003366]">{pesquisador.nome}</h3>
                <p className="text-sm text-gray-500">{pesquisador.instituicao}</p>
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {pesquisador.pais}
                  </span>
                </div>
              </article>
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
    </PageContainer>
  );
}

