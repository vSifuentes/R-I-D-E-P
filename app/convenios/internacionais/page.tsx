import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Convênios Internacionais - RIDEP | Universidades Estrangeiras",
  description: "Convênios estabelecidos pela RIDEP com universidades estrangeiras. Parcerias internacionais para colaboração em pesquisas sobre desenvolvimento profissional docente.",
  keywords: "RIDEP, convênios internacionais, universidades estrangeiras, parcerias internacionais, colaboração internacional, pesquisa educacional",
};

export default function ConveniosInternacionais() {
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
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="Convênios Internacionais" />

        {/* Descrição */}
        <section className="mb-8">
          <p className="text-lg text-gray-900 max-w-3xl">
            A RIDEP mantém convênios com universidades estrangeiras para promover a colaboração
            internacional em pesquisas sobre desenvolvimento profissional de professores.
          </p>
        </section>

        {/* Grid de Cards de Convênios */}
        <section className="mt-8">
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
        </section>
      </div>
    </div>
  );
}

