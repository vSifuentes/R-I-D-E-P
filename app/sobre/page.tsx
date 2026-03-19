import Link from "next/link";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Sobre a RIDEP - Rede Internacional de Pesquisas",
  description:
    "Saiba mais sobre a RIDEP: instituição gestora, coordenação, apresentação, finalidades, responsabilidades, acesso à rede, convênios e pesquisadores.",
  keywords:
    "RIDEP, sobre a rede, desenvolvimento profissional de professores, formação docente, convênios, pesquisadores",
};

export default function Sobre() {
  return (
    <PageContainer
      title="Sobre a RIDEP"
      subtitle="A RIDEP é uma rede acadêmica interinstitucional e internacional dedicada à formação e ao desenvolvimento profissional de professores, com atuação baseada em cooperação científica e intercâmbio entre instituições."
    >
      <ContentSection id="historia" title="Apresentação">
          <div className="content-copy text-lg">
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
              de conhecimentos científicos, por meio da interação, da
              cooperação acadêmica e do intercâmbio entre pesquisadores
              vinculados a diferentes instituições nacionais e internacionais.
              Trata-se de uma rede de natureza acadêmica, sem fins lucrativos
              e sem ônus financeiro para as partes envolvidas.
            </p>
          </div>
      </ContentSection>

      <ContentSection
        id="principios"
        title="Pressupostos da rede"
        intro="De caráter interinstitucional, a RIDEP agrega linhas e grupos de pesquisa de diferentes programas de pós-graduação, considerando entre seus pressupostos que:"
      >
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
      </ContentSection>

      <ContentSection
        id="objetivos"
        title="Finalidades e ações"
        intro="A RIDEP contribui para o fortalecimento da educação em seus diferentes níveis e modalidades por meio das seguintes frentes de trabalho:"
      >
          <ul className="content-list list-disc">
            <li>
              aprimoramento das práticas educativas nas Instituições de
              Ensino;
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
              construção de repositórios, bibliotecas digitais, observatórios
              e outros espaços de sistematização da produção científica.
            </li>
          </ul>
      </ContentSection>

      <ContentSection id="estrutura" title="Estrutura da rede">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold text-[#003366] mb-3">Instituição gestora e coordenação</h3>
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
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#003366] mb-3">Coordenadora da rede</h3>
              <div className="content-copy">
                <p>
                  <strong>Nome:</strong> Vania Maria de Oliveira Vieira
                </p>
                <p>
                  <strong>E-mail:</strong> vania.vieira@uniube.br
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#003366] mb-3">Responsabilidades dos integrantes</h3>
              <ul className="content-list list-disc">
                <li>Participar das atividades direcionadas pela RIDEP;</li>
                <li>Propor melhorias para a realização das atividades;</li>
                <li>Participar das reuniões anuais;</li>
                <li>
                  Ser beneficiado com as conquistas e produções geradas pela
                  rede;
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
            </section>

            <section>
              <h3 className="text-lg font-semibold text-[#003366] mb-3">Acesso, permanência e vigência na rede</h3>
              <div className="content-copy">
                <p>
                  A participação na RIDEP dá-se por adesão voluntária de
                  pesquisadores e Programas de Pós-Graduação em Educação que
                  desenvolvam projetos vinculados à temática Formação e
                  Desenvolvimento Profissional Docente.
                </p>
                <p>
                  A vinculação à rede ocorre por prazo indeterminado, não
                  estando sujeita a renovação periódica. A permanência está
                  condicionada ao desenvolvimento de atividades acadêmicas e
                  científicas coerentes com seus objetivos e pressupostos.
                </p>
                <p>
                  O desligamento poderá ocorrer a qualquer tempo, por
                  manifestação expressa do integrante ou da instituição, sem
                  prejuízo às atividades acadêmicas e científicas já em
                  andamento.
                </p>
              </div>
            </section>

            <div className="content-grid">
              <section className="pt-3">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Convênios com programas de pós-graduação</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A RIDEP mantém convênios com Programas de Pós-Graduação de
                  universidades brasileiras e estrangeiras, fortalecendo a
                  cooperação acadêmica e a produção científica conjunta.
                </p>
                <Link
                  href="/convenios"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition"
                >
                  Ver instituições parceiras →
                </Link>
              </section>

              <section className="pt-3">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Pesquisadores integrantes</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A rede reúne pesquisadoras e pesquisadores de diferentes
                  instituições, países e áreas de atuação, comprometidos com a
                  formação e o desenvolvimento profissional de professores.
                </p>
                <Link
                  href="/pesquisadores"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition"
                >
                  Conhecer pesquisadores da RIDEP →
                </Link>
              </section>
            </div>
          </div>
      </ContentSection>
    </PageContainer>
  );
}
