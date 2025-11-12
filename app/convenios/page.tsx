import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

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
    <div className="pt-16 pb-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="Instituições Parceiras" />
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          A RIDEP mantém convênios com universidades nacionais e internacionais para promover pesquisas colaborativas e fortalecer o desenvolvimento profissional docente em diferentes contextos.
        </p>

        {/* Convênios Nacionais */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Convênios com Universidades Brasileiras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conveniosNacionais.map((convenio, index) => (
              <Card
                key={index}
                title={convenio.instituicao}
                subtitle={convenio.local}
                className="hover:shadow-xl transition-all h-full flex flex-col border-2 border-[#F9C80E] hover:border-[#F9C80E]/80"
              >
                <div className="space-y-3 text-sm text-gray-600 flex-grow">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Programa:</p>
                    <p>{convenio.programa}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Dirigente:</p>
                    <p>{convenio.dirigente}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Coordenador:</p>
                    <p>{convenio.coordenador}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Representante:</p>
                    <p className="text-primary">{convenio.representante}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Convênios Internacionais */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Convênios com Universidades Estrangeiras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conveniosInternacionais.map((convenio, index) => (
              <Card
                key={index}
                title={convenio.instituicao}
                subtitle={convenio.local}
                className="hover:shadow-xl transition-all h-full flex flex-col border-2 border-[#F9C80E] hover:border-[#F9C80E]/80"
              >
                <div className="space-y-3 text-sm text-gray-600 flex-grow">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Programa:</p>
                    <p>{convenio.programa}</p>
                  </div>
                  {convenio.dirigente !== "-" && (
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Dirigente:</p>
                      <p>{convenio.dirigente}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Coordenador:</p>
                    <p>{convenio.coordenador}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Representante:</p>
                    <p className="text-primary">{convenio.representante}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

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
      </div>
    </div>
  );
}

