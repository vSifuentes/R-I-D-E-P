import Link from "next/link";
import Card from "@/components/Card";
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
          <Card variant="accent" className="border-l-4 border-l-[#003366]">
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
          </Card>
      </ContentSection>

      <ContentSection
        id="principios"
        title="Pressupostos da rede"
        intro="De caráter interinstitucional, a RIDEP agrega linhas e grupos de pesquisa de diferentes programas de pós-graduação, considerando entre seus pressupostos que:"
      >
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

      <ContentSection
        id="objetivos"
        title="Finalidades e ações"
        intro="A RIDEP contribui para o fortalecimento da educação em seus diferentes níveis e modalidades por meio das seguintes frentes de trabalho:"
      >
          <Card variant="accent">
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
          </Card>
      </ContentSection>

      <ContentSection id="estrutura" title="Estrutura da rede">
          <div className="space-y-6">
            <Card title="Instituição gestora e coordenação" variant="accent" className="border-l-4 border-l-[#003366]">
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

            <Card title="Coordenadora da rede" variant="accent">
              <div className="content-copy">
                <p>
                  <strong>Nome:</strong> Vania Maria de Oliveira Vieira
                </p>
                <p>
                  <strong>E-mail:</strong> vania.vieira@uniube.br
                </p>
              </div>
            </Card>

            <Card title="Responsabilidades dos integrantes" variant="accent">
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
            </Card>

            <Card title="Acesso, permanência e vigência na rede" variant="accent">
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
            </Card>

            <div className="content-grid">
            <Card title="Convênios com programas de pós-graduação" variant="soft" className="border-t-4 border-t-[#003366]">
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
            </Card>

            <Card title="Pesquisadores integrantes" variant="soft" className="border-t-4 border-t-[#2A9D8F]">
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
            </Card>
          </div>
          </div>
      </ContentSection>

        {/* Navegação inferior */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Voltar ao Início
            </Link>
            <Link
              href="/organizacao"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              Gestão e Organização →
            </Link>
          </div>
        </div>
    </PageContainer>
  );
}
