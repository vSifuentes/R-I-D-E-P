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
            <section className="space-y-4 text-gray-600">
              <h3 className="text-lg font-semibold text-[#003366]">RIDEP</h3>
              <p>
                <strong>Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores</strong>
              </p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:contato@ridep.org" className="text-primary hover:underline">
                  contato@ridep.org
                </a>
              </p>
            </section>

            <section className="space-y-4 text-gray-600">
              <h3 className="text-lg font-semibold text-[#003366]">Instituição Gestora</h3>
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
            </section>

            <section className="space-y-2 text-gray-600">
              <h3 className="text-lg font-semibold text-[#003366]">Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </section>
          </div>
      </ContentSection>
    </PageContainer>
  );
}

