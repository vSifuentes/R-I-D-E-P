import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "APRESENTAÇÃO - RIDEP",
};

export default function Apresentacao() {
  return (
    <PageContainer
      title="Apresentação"
      subtitle="A RIDEP constitui-se como um espaço acadêmico interinstitucional e internacional voltado à produção, à socialização e à circulação de conhecimentos sobre formação e desenvolvimento profissional docente."
    >
      <ContentSection title="Identidade da rede">
        <Card variant="accent" className="border-l-4 border-l-[#003366]">
          <div className="text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              A Rede Internacional de Pesquisas sobre o Desenvolvimento
              Profissional de Professores (RIDEP) constitui-se como um espaço
              acadêmico interinstitucional e internacional que reúne
              pesquisadores da área da Educação interessados em investigações
              relacionadas à formação e ao desenvolvimento profissional de
              professores da Educação Básica e do Ensino Superior.
            </p>
            <p>
              A RIDEP tem como finalidade promover a produção e a socialização
              de conhecimentos científicos, por meio da interação, da cooperação
              acadêmica e do intercâmbio entre pesquisadores vinculados a
              diferentes instituições nacionais e internacionais. Trata-se de
              uma rede de natureza acadêmica, sem fins lucrativos e sem ônus
              financeiro para as partes envolvidas.
            </p>
          </div>
        </Card>

      </ContentSection>

      <ContentSection title="Pressupostos da rede">
          <Card variant="accent">
            <ul className="content-list list-disc">
              <li>
                a educação é um bem público e um processo que se desenvolve ao
                longo da vida;
              </li>
              <li>
                a formação e o desenvolvimento profissional docente estão
                diretamente relacionados à inserção dos professores em pesquisas
                científicas;
              </li>
              <li>
                a cooperação entre profissionais e instituições é condição
                necessária para o enfrentamento de problemas comuns no campo
                educacional;
              </li>
              <li>
                as redes acadêmicas constituem importantes instrumentos de
                cooperação científica e formativa;
              </li>
              <li>
                o trabalho em rede favorece o desenvolvimento profissional
                docente e os processos formativos de estudantes.
              </li>
            </ul>
          </Card>
      </ContentSection>
    </PageContainer>
  );
}

