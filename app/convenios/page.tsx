import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

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
      logo: "/logos/ufu.png",
      local: "Uberlândia, Minas Gerais, Brasil",
      dirigente: "Valder Steffen Júnior",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Elenita Pinheiro de Queiroz Silva",
      representante: "Geovana Ferreira Melo Teixeira",
    },
    {
      instituicao: "Universidade Federal do Triângulo Mineiro (UFTM)",
      logo: "/logos/uftm.png",
      local: "Uberaba, Minas Gerais, Brasil",
      dirigente: "Ana Lúcia de Assis Simões",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Marinalva Vieira Barbosa",
      representante: "Martha Maria Prata Linhares",
    },
    {
      instituicao: "Universidade de Uberaba (UNIUBE)",
      logo: "/logos/uniube.png",
      local: "Uberaba, Minas Gerais, Brasil",
      dirigente: "Marcelo Palmério",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Sálua Cecílio",
      representante: "Vania Maria de Oliveira Vieira",
    },
    {
      instituicao: "Universidade de Sorocaba (UNISO)",
      logo: "/logos/uniso.png",
      local: "Sorocaba, São Paulo, Brasil",
      dirigente: "Fernando de Sá Del Fiol",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Wilson Sandano",
      representante: "Maria Alzira de Almeida Pimenta",
    },
    {
      instituicao: "Universidade Cidade de São Paulo (UNICID)",
      local: "São Paulo, São Paulo, Brasil",
      dirigente: "Luiz Henrique Amaral",
      programa: "Mestrado Acadêmico em Educação / Mestrado Profissional em Formação de Gestores Educacionais",
      coordenador: "Ecleide Cunico Furlanetto / Ângela Maria Martins",
      representante: "Adelina de Oliveira Novaes",
    },
    {
      instituicao: "Universidade Federal de Pernambuco (UFPE)",
      logo: "/logos/ufpe.jpg",
      local: "Recife, Pernambuco, Brasil",
      dirigente: "Alfredo Macedo Gomes",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "Luciana Rosa Marques",
      representante: "Rejane Dias da Silva",
    },
    {
      instituicao: "Universidade Estadual de Goiás (UEG)",
      logo: "/logos/ueg.png",
      local: "Unidade Universitária de Itapuranga - Itapuranga, Goiás, Brasil",
      dirigente: "-",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "-",
      representante: "Lais Moraes de Oliveira Porfírio",
    },
    {
      instituicao: "Universidade do Estado de Minas Gerais (UEMG)",
      logo: "/logos/uemg.png",
      local: "Unidade Frutal - Frutal, Minas Gerais, Brasil",
      dirigente: "-",
      programa: "Programa de Pós-Graduação em Educação",
      coordenador: "-",
      representante: "Rosimeire Ferreira Diniz",
    },
  ];

  // Dados completos de convênios internacionais
  const conveniosInternacionais = [
    {
      instituicao: "Universidad de Sancti Spíritus (UNISS)",
      logo: "/logos/uniss.png",
      local: "Sancti Spíritus, província de Sancti Spíritus, Cuba",
      dirigente: "Servando Martínez Hernández",
      programa: "Centro de Estudios de la Educación Superior (Cecess)",
      coordenador: "Servando Martínez Hernández",
      representante: "Alberto Matias Gonzales",
    },
    {
      instituicao: "University of Salamanca",
      local: "Salamanca, Comunidade Autônoma de Castela e Leão, Espanha",
      dirigente: "-",
      programa: "Departamento de Didáctica, Organización y Métodos de Investigación",
      coordenador: "María Cruz Sánchez Gómez",
      representante: "Juan José Mena",
    },
    {
      instituicao: "Universidad Antonio Ruiz de Montoya (UARM)",
      logo: "/logos/UARM.jpeg",
      local: "Lima, distrito de Pueblo Libre, Peru",
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
            <article
              key={convenio.instituicao}
              className="h-full space-y-3 text-sm"
            >
              <div className="flex h-14 items-center">
                {convenio.logo ? (
                  <Image
                    src={convenio.logo}
                    alt={`Logo da instituição ${convenio.instituicao}`}
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain"
                  />
                ) : null}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#003366]">{convenio.instituicao}</h3>
                <p className="text-sm text-gray-500">{convenio.local}</p>
              </div>
              <div><p className="info-label">Programa</p><p className="info-value">{convenio.programa}</p></div>
              {convenio.dirigente !== "-" && (
                <div><p className="info-label">Dirigente</p><p className="info-value">{convenio.dirigente}</p></div>
              )}
              {convenio.coordenador !== "-" && (
                <div><p className="info-label">Coordenador</p><p className="info-value">{convenio.coordenador}</p></div>
              )}
              <div><p className="info-label">Representante</p><p className="info-value text-primary">{convenio.representante}</p></div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Convênios com universidades estrangeiras">
        <div className="content-grid content-grid--three">
          {conveniosInternacionais.map((convenio) => (
            <article
              key={convenio.instituicao}
              className="h-full space-y-3 text-sm"
            >
              <div className="flex h-14 items-center">
                {convenio.logo ? (
                  <Image
                    src={convenio.logo}
                    alt={`Logo da instituição ${convenio.instituicao}`}
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain"
                  />
                ) : null}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#003366]">{convenio.instituicao}</h3>
                <p className="text-sm text-gray-500">{convenio.local}</p>
              </div>
              <div><p className="info-label">Programa</p><p className="info-value">{convenio.programa}</p></div>
              {convenio.dirigente !== "-" && (
                <div><p className="info-label">Dirigente</p><p className="info-value">{convenio.dirigente}</p></div>
              )}
              <div><p className="info-label">Coordenador</p><p className="info-value">{convenio.coordenador}</p></div>
              <div><p className="info-label">Representante</p><p className="info-value text-primary">{convenio.representante}</p></div>
            </article>
          ))}
        </div>
      </ContentSection>
    </PageContainer>
  );
}

