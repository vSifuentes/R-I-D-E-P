import Link from "next/link";
import Card from "@/components/Card";

export const metadata = {
  title: "Contato - RIDEP | Entre em Contato",
  description: "Entre em contato com a RIDEP. Informações de contato e endereço. Universidade gestora UNIUBE.",
  keywords: "RIDEP, contato RIDEP, formulário contato, e-mail RIDEP, UNIUBE, contato institucional",
};

export default function Contato() {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section com gradiente */}
      <section className="bg-gradient-to-br from-[#2A9D8F] to-[#003366] text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Entre em Contato</h1>
          <p className="text-xl text-center text-white/90 max-w-2xl mx-auto">
            Estamos prontos para responder suas dúvidas e receber suas sugestões sobre a RIDEP.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Informações de Contato */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Informações de Contato
          </h2>
          <div className="space-y-6">
            <Card title="RIDEP">
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores</strong>
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:contato@ridep.org" className="text-primary hover:underline">
                    contato@ridep.org
                  </a>
                </p>
              </div>
            </Card>

            <Card title="Instituição Gestora">
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>UNIUBE - Universidade de Uberaba</strong>
                </p>
                <p>
                  A coordenação geral da RIDEP é realizada pela Universidade de Uberaba,
                  que fornece o suporte necessário para o desenvolvimento das atividades da rede.
                </p>
                <p>
                  <strong>Endereço:</strong> Av. Nenê Sabino nº 1801. Bairro Universitário. Uberaba/MG. CEP: 38055-500
                </p>
                <p>
                  <strong>Telefone:</strong> (34) 3319-8831
                </p>
                <p>
                  <strong>E-mail:</strong> ppg.educ@uniube.br
                </p>
              </div>
            </Card>

            <Card title="Horário de Atendimento">
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Navegação */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pesquisadores"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Equipe e Colaborações
            </Link>
            <Link
              href="/"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

