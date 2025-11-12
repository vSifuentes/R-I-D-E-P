import Link from "next/link";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

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
    <div className="pt-16 pb-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="Gestão e Organização" />
        
        {/* Programa e Instituição Gestora */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Programa e Instituição Gestora</h2>
          <Card title="Programa de Pós-Graduação em Educação - Universidade de Uberaba (UNIUBE)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <p className="font-semibold mb-2 text-gray-900">Instituição:</p>
                <p>Universidade de Uberaba (UNIUBE)</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Programa:</p>
                <p>Programa de Pós-Graduação em Educação</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Reitor:</p>
                <p>Dr. Marcelo Palmério</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Pró-Reitor:</p>
                <p>Dr. André Luís Teixeira Fernandes</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Coordenadora do Programa:</p>
                <p>Profª. Drª Sálua Cecílio</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Endereço:</p>
                <p>Av. Nenê Sabino nº 1801. Bairro Universitário. Uberaba/MG. CEP: 38055-500</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Telefone:</p>
                <p>(34) 3319-8831</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">E-mail:</p>
                <p>ppg.educ@uniube.br</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Coordenação Geral */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Coordenação Geral</h2>
          <Card title="Coordenação Geral da RIDEP">
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-semibold mb-2 text-gray-900">Coordenadora Geral:</p>
                <p>Profª. Drª Vania Maria de Oliveira Vieira</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">Instituição:</p>
                <p>UNIUBE</p>
              </div>
              <div>
                <p className="font-semibold mb-2 text-gray-900">E-mail:</p>
                <p>vaniacamila@uol.com.br</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Responsabilidades */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Responsabilidades das Partes</h2>
          <Card className="bg-white">
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              {responsabilidades.map((responsabilidade, index) => (
                <li key={index}>{responsabilidade}</li>
              ))}
            </ul>
          </Card>
        </div>

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
      </div>
    </div>
  );
}

