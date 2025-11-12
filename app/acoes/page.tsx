import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBookOpen, 
  faFlask, 
  faGraduationCap,
  faGlobe,
  faBullhorn,
  faMagnifyingGlass,
  faLightbulb,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Ações - RIDEP | Iniciativas e Atividades",
  description: "Conheça as ações, iniciativas e atividades desenvolvidas pela RIDEP para promover o desenvolvimento profissional de professores. Pesquisas colaborativas, eventos científicos, publicações e formação continuada.",
  keywords: "RIDEP, ações RIDEP, pesquisas colaborativas, eventos científicos, publicações, formação continuada, responsabilidades",
};

export default function Acoes() {
  const acoes = [
    {
      id: 1,
      texto: "Da melhoria das práticas educativas do corpo docente.",
      icon: faBookOpen,
    },
    {
      id: 2,
      texto: "Do incentivo à pesquisa e ao aperfeiçoamento da profissão docente.",
      icon: faFlask,
    },
    {
      id: 3,
      texto: "Da consolidação e fortalecimento dos Programas de Pós-graduação em Educação.",
      icon: faGraduationCap,
    },
    {
      id: 4,
      texto: "Da promoção de intercâmbio acadêmico envolvendo alunos, professores e pesquisadores que possam favorecer a produção conjunta de publicações.",
      icon: faGlobe,
    },
    {
      id: 5,
      texto: "Da participação em reuniões de trabalho, eventos nacionais e internacionais que permitam a divulgação do seu trabalho científico e os resultados das pesquisas realizadas.",
      icon: faBullhorn,
    },
    {
      id: 6,
      texto: "Da identificação de objetos de investigação ainda pouco pesquisados e a contribuição para o seu fortalecimento.",
      icon: faMagnifyingGlass,
    },
    {
      id: 7,
      texto: "Da realização de processos formativos, consultorias e treinamentos.",
      icon: faLightbulb,
    },
    {
      id: 8,
      texto: "De planejamento e realização de eventos científicos.",
      icon: faCalendar,
    },
    {
      id: 9,
      texto: "Da construção de repositórios, bibliotecas digitais, observatórios internacionais e outros espaços onde as produções científicas mais importantes possam ser agrupadas.",
      icon: faBookOpen,
    },
  ];

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="Ações da RIDEP" />

        {/* Descrição Geral */}
        <section className="mb-16">
          <div className="max-w-3xl space-y-6 text-[#0F5E5E]">
            <p className="text-lg font-medium">
              A partir dos pressupostos, propõe ações que possam contribuir para a formação e o desenvolvimento profissional do professor, por meio:
            </p>
          </div>
        </section>

        {/* Grid de Ações 3x3 */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acoes.map((acao) => (
              <Card 
                key={acao.id} 
                className="bg-white border-l-4 border-[#0F5E5E] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all h-full"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#0F5E5E] text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={acao.icon} className="text-base" />
                  </span>
                  <p className="text-[#0F5E5E] flex-1 leading-relaxed">
                    {acao.id === 1 && (
                      <>Da <strong>melhoria das práticas educativas</strong> do <strong>corpo docente</strong>.</>
                    )}
                    {acao.id === 2 && (
                      <>Do <strong>incentivo à pesquisa</strong> e ao <strong>aperfeiçoamento da profissão docente</strong>.</>
                    )}
                    {acao.id === 3 && (
                      <>Da <strong>consolidação e fortalecimento</strong> dos <strong>Programas de Pós-graduação em Educação</strong>.</>
                    )}
                    {acao.id === 4 && (
                      <>Da <strong>promoção de intercâmbio acadêmico</strong> envolvendo alunos, professores e pesquisadores que possam favorecer a <strong>produção conjunta de publicações</strong>.</>
                    )}
                    {acao.id === 5 && (
                      <>Da <strong>participação em reuniões de trabalho</strong>, <strong>eventos nacionais e internacionais</strong> que permitam a <strong>divulgação do trabalho científico</strong> e os <strong>resultados das pesquisas</strong> realizadas.</>
                    )}
                    {acao.id === 6 && (
                      <>Da <strong>identificação de objetos de investigação</strong> ainda pouco pesquisados e a <strong>contribuição para o seu fortalecimento</strong>.</>
                    )}
                    {acao.id === 7 && (
                      <>Da <strong>realização de processos formativos</strong>, <strong>consultorias e treinamentos</strong>.</>
                    )}
                    {acao.id === 8 && (
                      <>De <strong>planejamento e realização de eventos científicos</strong>.</>
                    )}
                    {acao.id === 9 && (
                      <>Da <strong>construção de repositórios</strong>, <strong>bibliotecas digitais</strong>, <strong>observatórios internacionais</strong> e outros espaços onde as <strong>produções científicas</strong> mais importantes possam ser agrupadas.</>
                    )}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Responsabilidades */}
        <section id="responsabilidades" className="mt-16 scroll-mt-24">
          <SectionTitle title="Responsabilidades das Partes" />
          <div className="space-y-6">
            <Card title="Responsabilidades">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Participar das atividades direcionadas pela RIDEP</li>
                <li>Propor melhorias para a realização das atividades</li>
                <li>Participar das reuniões anuais</li>
                <li>Ser beneficiado com as conquistas e produções geradas pela rede</li>
                <li>Fazer parte de comitês editoriais, científicos e organização de eventos</li>
                <li>Desenvolver a pesquisa proposta pela Rede ou propor projetos específicos</li>
                <li>Implementar e gerar resultados científicos a partir do desenvolvimento de pesquisas</li>
                <li>Entregar relatório anual das atividades realizadas na rede</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

