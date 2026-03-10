import Link from "next/link";
import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Contato - RIDEP | Entre em Contato",
  description: "Entre em contato com a RIDEP. Informações de contato e endereço. Universidade gestora UNIUBE.",
  keywords: "RIDEP, contato RIDEP, formulário contato, e-mail RIDEP, UNIUBE, contato institucional",
};

export default function Contato() {
  return (
    <PageContainer
      title="Entre em Contato"
      subtitle="A coordenação da RIDEP está disponível para atender dúvidas, receber sugestões e orientar contatos institucionais relacionados às atividades da rede."
      className="bg-[#FFF8E6]"
    >
      <ContentSection title="Informações de contato" className="max-w-4xl">
          <div className="space-y-6">
            <Card title="RIDEP" variant="accent" className="border-l-4 border-l-[#003366]">
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

            <Card title="Instituição Gestora" variant="accent">
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

            <Card title="Horário de Atendimento" variant="soft">
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </Card>
          </div>
      </ContentSection>

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
    </PageContainer>
  );
}

