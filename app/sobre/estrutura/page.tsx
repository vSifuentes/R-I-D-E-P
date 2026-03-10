import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Nossa Estrutura - RIDEP",
};

export default function Estrutura() {
  return (
    <PageContainer
      title="Nossa Estrutura"
      subtitle="A organização da RIDEP está apoiada na instituição gestora, na coordenação acadêmica e em compromissos compartilhados entre os integrantes da rede."
    >
      <ContentSection title="Instituição gestora e coordenação">
          <Card variant="accent">
            <div className="content-copy">
              <p>
                <strong>Instituição gestora:</strong> Universidade de Uberaba
                (UNIUBE) e Programa de Pós-Graduação em Educação.
              </p>
              <p>
                <strong>Reitor:</strong> Dr. Marcelo Palmério.
              </p>
              <p>
                <strong>Pró-Reitor de Pesquisa, Pós-Graduação e Extensão:</strong>{" "}
                Dr. André Luís Teixeira Fernandes.
              </p>
              <p>
                <strong>Coordenador do PPGE/UNIUBE:</strong> Prof. Dr. Tiago
                Zanquêta de Souza.
              </p>
              <p>
                <strong>Endereço:</strong> Av. Nenê Sabino nº 1801, Bairro
                Universitário, Uberaba/MG, CEP 38055-500.
              </p>
              <p>
                <strong>Telefone:</strong> (34) 3319-8831 |{" "}
                <strong>E-mail:</strong> ppg.educ@uniube.br
              </p>
            </div>
          </Card>
      </ContentSection>

      <ContentSection title="Coordenadora da rede">
          <Card variant="accent">
            <div className="content-copy">
              <p>
                <strong>Nome:</strong> Vania Maria de Oliveira Vieira
              </p>
              <p>
                <strong>E-mail:</strong> vania.vieira@uniube.br
              </p>
            </div>
          </Card>
      </ContentSection>

      <ContentSection title="Responsabilidades dos integrantes">
          <Card variant="accent">
            <ul className="content-list list-disc">
              <li>Participar das atividades direcionadas pela RIDEP;</li>
              <li>Propor melhorias para a realização das atividades;</li>
              <li>Participar das reuniões anuais;</li>
              <li>
                Ser beneficiado com as conquistas e produções geradas pela rede;
              </li>
              <li>
                Fazer parte de comités editoriais, científicos, organização de
                eventos e outras atividades acadêmicas;
              </li>
              <li>
                Desenvolver a pesquisa proposta pela Rede ou propor projetos
                específicos dentro da temática formação e desenvolvimento
                profissional de professores;
              </li>
              <li>
                Implementar e gerar resultados científicos a partir do
                desenvolvimento de pesquisas;
              </li>
              <li>Entregar relatório anual das atividades realizadas na rede.</li>
            </ul>
          </Card>
      </ContentSection>

      <ContentSection title="Acesso, permanência e vigência na rede">
          <Card variant="accent">
            <div className="content-copy">
              <p>
                A participação na RIDEP dá-se por adesão voluntária de
                pesquisadores e Programas de Pós-Graduação em Educação que
                desenvolvam projetos vinculados à temática Formação e
                Desenvolvimento Profissional Docente.
              </p>
              <p>
                A vinculação à rede ocorre por prazo indeterminado, não estando
                sujeita a renovação periódica. A permanência está condicionada
                ao desenvolvimento de atividades acadêmicas e científicas
                coerentes com seus objetivos e pressupostos.
              </p>
              <p>
                O desligamento poderá ocorrer a qualquer tempo, por
                manifestação expressa do integrante ou da instituição, sem
                prejuízo às atividades acadêmicas e científicas já em andamento.
              </p>
            </div>
          </Card>
      </ContentSection>
    </PageContainer>
  );
}

