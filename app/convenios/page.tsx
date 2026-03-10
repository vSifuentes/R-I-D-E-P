import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Convênios - RIDEP | Parcerias Nacionais e Internacionais",
  description: "Convênios estabelecidos pela RIDEP com universidades nacionais e internacionais. Parcerias para pesquisas colaborativas, intercâmbios e eventos científicos.",
  keywords: "RIDEP, convênios, parcerias universitárias, universidades nacionais, universidades internacionais, colaboração acadêmica",
};

export default function Convenios() {
  // Dados completos de convênios nacionais
  const conveniosNacionais = [
    {
      instituicao: "Universidade Federal de Uberlândia (UFU)",
      local: "Uberlândia/MG",
      dirigente: "Valder Steffen Júnior",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Elenita Pinheiro de Queiroz Silva",
      representante: "Geovana Ferreira Melo Teixeira",
    },
    {
      instituicao: "Universidade Federal do Triângulo Mineiro (UFTM)",
      local: "Uberaba/MG",
      dirigente: "Ana Lúcia de Assis Simões",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Marinalva Vieira Barbosa",
      representante: "Martha Maria Prata Linhares",
    },
    {
      instituicao: "Universidade de Sorocaba (UNISO)",
      local: "Sorocaba/SP",
      dirigente: "Fernando de Sá Del Fiol",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Wilson Sandano",
      representante: "Maria Alzira de Almeida Pimenta",
    },
    {
      instituicao: "Universidade Cidade de São Paulo (UNICID)",
      local: "São Paulo/SP",
      dirigente: "Luiz Henrique Amaral",
      programa: "Mestrado Acadêmico em Educação / Mestrado Profissional em Formação de Gestores Educacionais",
      coordenador: "Ecleide Cunico Furlanetto / Ângela Maria Martins",
      representante: "Adelina de Oliveira Novaes",
    },
    {
      instituicao: "Universidade Federal de Pernambuco (UFPE)",
      local: "Pernambuco",
      dirigente: "Alfredo Macedo Gomes",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Luciana Rosa Marques",
      representante: "Rejane Dias da Silva",
    },
  ];

  // Dados completos de convênios internacionais
  const conveniosInternacionais = [
    {
      instituicao: "Universidad de Sancti Spiritus (UNISS)",
      local: "Cuba",
      dirigente: "Servando Martínez Hernández",
      programa: "Centro de Estudios de la Educación Superior (Cecess)",
      coordenador: "Servando Martínez Hernández",
      representante: "Alberto Matias Gonzales",
    },
    {
      instituicao: "University of Salamanca",
      local: "Espanha",
      dirigente: "-",
      programa: "Departamento de Didáctica, Organización y Métodos de Investigación",
      coordenador: "María Cruz Sánchez Gómez",
      representante: "Juan José Mena",
    },
    {
      instituicao: "Universidad Antonio Ruiz de Montoya (UARM)",
      local: "Peru",
      dirigente: "Ernesto Cavassa Canessa",
      programa: "Escuela de Posgrado",
      coordenador: "Aldo Várguez",
      representante: "Patrícia Medina Zuta",
    },
  ];

  return (
    <PageContainer
      title="Instituições Parceiras"
      subtitle="A RIDEP mantém convênios com universidades nacionais e internacionais para ampliar a cooperação acadêmica, a produção científica conjunta e a circulação de pesquisadores."
    >
      <ContentSection title="Convênios com universidades brasileiras">
        <div className="content-grid content-grid--three">
          {conveniosNacionais.map((convenio) => (
            <Card
              key={convenio.instituicao}
              title={convenio.instituicao}
              subtitle={convenio.local}
              variant="accent"
              className="h-full"
              contentClassName="space-y-3 text-sm"
            >
              <div><p className="info-label">Programa</p><p className="info-value">{convenio.programa}</p></div>
              <div><p className="info-label">Dirigente</p><p className="info-value">{convenio.dirigente}</p></div>
              <div><p className="info-label">Coordenador</p><p className="info-value">{convenio.coordenador}</p></div>
              <div><p className="info-label">Representante</p><p className="info-value text-primary">{convenio.representante}</p></div>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Convênios com universidades estrangeiras">
        <div className="content-grid content-grid--three">
          {conveniosInternacionais.map((convenio) => (
            <Card
              key={convenio.instituicao}
              title={convenio.instituicao}
              subtitle={convenio.local}
              variant="accent"
              className="h-full"
              contentClassName="space-y-3 text-sm"
            >
              <div><p className="info-label">Programa</p><p className="info-value">{convenio.programa}</p></div>
              {convenio.dirigente !== "-" && (
                <div><p className="info-label">Dirigente</p><p className="info-value">{convenio.dirigente}</p></div>
              )}
              <div><p className="info-label">Coordenador</p><p className="info-value">{convenio.coordenador}</p></div>
              <div><p className="info-label">Representante</p><p className="info-value text-primary">{convenio.representante}</p></div>
            </Card>
          ))}
        </div>
      </ContentSection>

        {/* Navegação */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/organizacao"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Gestão e Organização
            </Link>
            <Link
              href="/"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Voltar ao Início
            </Link>
            <Link
              href="/pesquisadores"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              Equipe e Colaborações →
            </Link>
          </div>
        </div>
    </PageContainer>
  );
}

