import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Nossos Objetivos - RIDEP",
};

export default function Objetivos() {
  return (
    <PageContainer
      title="Nossos Objetivos"
      subtitle="A RIDEP busca fortalecer a educação por meio de ações que articulam intercâmbio acadêmico, produção científica e processos formativos em rede."
    >
      <ContentSection title="Finalidades e ações">
        <Card variant="accent">
          <ul className="content-list list-disc">
            <li>
              aprimoramento das práticas educativas nas Instituições de Ensino;
            </li>
            <li>
              promoção de intercâmbio acadêmico entre docentes, discentes e
              pesquisadores;
            </li>
            <li>
              incentivo à produção científica conjunta e à publicação de
              resultados de pesquisa;
            </li>
            <li>
              realização de processos formativos, consultorias e treinamentos;
            </li>
            <li>planejamento e organização de eventos científicos;</li>
            <li>participação em eventos nacionais e internacionais;</li>
            <li>
              incentivo à pesquisa e ao aperfeiçoamento da profissão docente;
            </li>
            <li>fortalecimento dos Programas de Pós-Graduação em Educação;</li>
            <li>
              identificação de objetos de investigação ainda pouco explorados;
            </li>
            <li>
              construção de repositórios, bibliotecas digitais, observatórios e
              outros espaços de sistematização da produção científica.
            </li>
          </ul>
        </Card>
      </ContentSection>
    </PageContainer>
  );
}

