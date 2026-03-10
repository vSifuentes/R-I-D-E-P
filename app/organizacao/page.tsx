import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Gestão e Organização - RIDEP | Coordenação e Responsabilidades",
  description: "Informações sobre a gestão e organização da RIDEP. Instituição gestora UNIUBE, coordenação geral e responsabilidades das partes envolvidas na rede.",
  keywords: "RIDEP, gestão, organização, coordenação, UNIUBE, responsabilidades, instituição gestora",
};

export default function Organizacao() {
  // Responsabilidades
  const responsabilidades = [
    "Participar das atividades direcionadas pela RIDEP",
    "Propor melhorias para a realização das atividades",
    "Participar das reuniões anuais",
    "Ser beneficiado com as conquistas e produções geradas pela rede",
    "Fazer parte de comitês editoriais, científicos e organização de eventos",
    "Desenvolver a pesquisa proposta pela Rede ou propor projetos específicos",
    "Implementar e gerar resultados científicos a partir do desenvolvimento de pesquisas",
    "Entregar relatório anual das atividades realizadas na rede",
  ];

  return (
    <PageContainer
      title="Gestão e Organização"
      subtitle="A estrutura institucional da RIDEP articula a instituição gestora, a coordenação acadêmica e as responsabilidades assumidas pelos integrantes da rede."
    >
      <ContentSection title="Programa e instituição gestora">
        <Card title="Programa de Pós-Graduação em Educação - Universidade de Uberaba (UNIUBE)" variant="accent" className="border-l-4 border-l-[#003366]">
          <div className="info-grid">
            <div className="info-item"><p className="info-label">Instituição</p><p className="info-value">Universidade de Uberaba (UNIUBE)</p></div>
            <div className="info-item"><p className="info-label">Programa</p><p className="info-value">Programa de Pós-Graduação em Educação</p></div>
            <div className="info-item"><p className="info-label">Reitor</p><p className="info-value">Dr. Marcelo Palmério</p></div>
            <div className="info-item"><p className="info-label">Pró-Reitor</p><p className="info-value">Dr. André Luís Teixeira Fernandes</p></div>
            <div className="info-item"><p className="info-label">Coordenadora do Programa</p><p className="info-value">Profª. Drª Sálua Cecílio</p></div>
            <div className="info-item"><p className="info-label">Endereço</p><p className="info-value">Av. Nenê Sabino nº 1801. Bairro Universitário. Uberaba/MG. CEP: 38055-500</p></div>
            <div className="info-item"><p className="info-label">Telefone</p><p className="info-value">(34) 3319-8831</p></div>
            <div className="info-item"><p className="info-label">E-mail</p><p className="info-value">ppg.educ@uniube.br</p></div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection title="Coordenação geral">
        <Card title="Coordenação Geral da RIDEP" variant="accent">
          <div className="info-grid">
            <div className="info-item"><p className="info-label">Coordenadora Geral</p><p className="info-value">Profª. Drª Vania Maria de Oliveira Vieira</p></div>
            <div className="info-item"><p className="info-label">Instituição</p><p className="info-value">UNIUBE</p></div>
            <div className="info-item"><p className="info-label">E-mail</p><p className="info-value">vaniacamila@uol.com.br</p></div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection
        title="Responsabilidades das partes"
        intro="Os integrantes da rede assumem atribuições relacionadas à participação acadêmica, à proposição de melhorias e à produção de resultados científicos."
      >
        <Card variant="accent">
          <ul className="content-list list-disc list-inside">
            {responsabilidades.map((responsabilidade) => (
              <li key={responsabilidade}>{responsabilidade}</li>
            ))}
          </ul>
        </Card>
      </ContentSection>

        {/* Navegação */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/sobre"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Sobre a Rede
            </Link>
            <Link
              href="/"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Voltar ao Início
            </Link>
            <Link
              href="/convenios"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              Instituições Parceiras →
            </Link>
          </div>
        </div>
    </PageContainer>
  );
}

