import Link from "next/link";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBookOpen, 
  faFlask, 
  faHandshake, 
  faLink, 
  faBriefcase,
  faGraduationCap,
  faGlobe,
  faBullhorn,
  faMagnifyingGlass,
  faLightbulb,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Sobre a Rede - RIDEP | Objetivos, Pressupostos e Ações",
  description: "Conheça os objetivos, pressupostos e ações da RIDEP. Uma rede internacional dedicada ao desenvolvimento profissional de professores através de pesquisas colaborativas.",
  keywords: "RIDEP, objetivos, pressupostos, ações, desenvolvimento profissional, professores, pesquisa educacional",
};

export default function Sobre() {
  // Pressupostos
  const pressupostos = [
    {
      id: 1,
      texto: "A educação é um bem público e deve ocorrer ao longo da vida",
      icon: faBookOpen,
    },
    {
      id: 2,
      texto: "A formação e o desenvolvimento profissional de professores dependem, muito, da inserção em pesquisas científicas, que buscam a melhoria da educação.",
      icon: faFlask,
    },
    {
      id: 3,
      texto: "A união e a cooperação de profissionais em torno da solução de problemas comuns auxiliam processos de formação e desenvolvimento profissional de professores.",
      icon: faHandshake,
    },
    {
      id: 4,
      texto: "A criação de redes podem constituir-se em instrumentos de cooperação efetiva e espaço para discussões e reflexões de problemas comuns relativos às necessidades formativas dos professores.",
      icon: faLink,
    },
    {
      id: 5,
      texto: "Permite também um trabalho comum entre os participantes, a partir da realização de reuniões acadêmicas científicas, que possibilita o enriquecimento mútuo, a aperfeiçoamento profissional docente.",
      icon: faBriefcase,
    },
  ];

  // Ações da RIDEP
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
    <div className="pt-16 pb-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="Sobre a Rede" />
        
        {/* Objetivo */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0F5E5E] mb-4">Objetivo</h2>
          <Card className="bg-white border-l-4 border-[#0F5E5E] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
            <p className="text-[#0F5E5E] text-lg leading-relaxed">
              Oportunizar <strong>estudos e investigações</strong> que tratam da <strong>formação e do desenvolvimento profissional</strong> de professores.
            </p>
          </Card>
        </div>

        {/* Pressupostos */}
        <div>
          <h2 className="text-2xl font-bold text-[#0F5E5E] mb-4">Pressupostos</h2>
          <p className="text-[#0F5E5E]/80 mb-8 max-w-3xl">
            Os pressupostos da RIDEP formam um ciclo interdependente que fundamenta a atuação da rede:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pressupostos.map((pressuposto) => (
              <Card
                key={pressuposto.id}
                className="bg-white border-l-4 border-[#0F5E5E] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all h-full"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#0F5E5E] text-white rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={pressuposto.icon} className="text-base" />
                  </span>
                  <p className="text-[#0F5E5E] flex-1 leading-relaxed">
                    {pressuposto.id === 1 && (
                      <>A <strong>educação</strong> é um <strong>bem público</strong> e deve ocorrer <strong>ao longo da vida</strong>.</>
                    )}
                    {pressuposto.id === 2 && (
                      <>A <strong>formação e o desenvolvimento profissional</strong> de professores dependem, muito, da <strong>inserção em pesquisas científicas</strong>, que buscam a <strong>melhoria da educação</strong>.</>
                    )}
                    {pressuposto.id === 3 && (
                      <>A <strong>união e a cooperação</strong> de profissionais em torno da <strong>solução de problemas comuns</strong> auxiliam processos de <strong>formação e desenvolvimento profissional</strong> de professores.</>
                    )}
                    {pressuposto.id === 4 && (
                      <>A <strong>criação de redes</strong> podem constituir-se em <strong>instrumentos de cooperação efetiva</strong> e espaço para <strong>discussões e reflexões</strong> de problemas comuns relativos às <strong>necessidades formativas</strong> dos professores.</>
                    )}
                    {pressuposto.id === 5 && (
                      <>Permite também um <strong>trabalho comum</strong> entre os participantes, a partir da realização de <strong>reuniões acadêmicas científicas</strong>, que possibilita o <strong>enriquecimento mútuo</strong>, a <strong>aperfeiçoamento profissional docente</strong>.</>
                    )}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ações */}
        <div className="mb-16 mt-16">
          <h2 className="text-2xl font-bold text-[#0F5E5E] mb-6">Ações</h2>
          <p className="text-[#0F5E5E]/80 mb-8 max-w-3xl">
            A partir dos pressupostos, a RIDEP propõe ações que contribuem para a formação e o desenvolvimento profissional do professor, por meio:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>

        {/* Impacto */}
        <div className="mb-16 mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Impacto da Pesquisa e da Formação Docente</h2>
          <Card className="bg-gradient-to-r from-[#2A9D8F]/10 to-[#003366]/10 border-l-4 border-[#003366]">
            <p className="text-gray-700 text-lg leading-relaxed">
              A RIDEP promove a melhoria contínua da educação através da pesquisa colaborativa e do desenvolvimento profissional docente. Nossas ações impactam diretamente a qualidade do ensino, fortalecendo programas de pós-graduação, incentivando intercâmbios acadêmicos e construindo uma comunidade científica internacional comprometida com a excelência educacional.
            </p>
          </Card>
        </div>

        {/* Como Atuamos */}
        <div id="como-atuamos" className="mb-16 mt-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Como Atuamos</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl text-center mx-auto">
            A RIDEP desenvolve suas atividades através de ciclos integrados de formação, pesquisa e cooperação acadêmica.
          </p>

          {/* Ciclo da Formação Docente */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-primary mb-8 text-center">Ciclo da Formação Docente</h3>
            <div className="bg-gradient-to-br from-[#2A9D8F]/10 to-[#003366]/10 rounded-2xl p-8 md:p-12">
              <div className="relative">
                {/* Ciclo visual - versão desktop */}
                <div className="hidden md:flex items-center justify-center gap-4 mb-8 flex-wrap">
                  {[
                    { num: "1", texto: "Educação ao longo da vida", style: { background: "linear-gradient(135deg, #E63946 0%, #F4A261 100%)" } },
                    { num: "2", texto: "Pesquisas científicas", style: { background: "linear-gradient(135deg, #F4A261 0%, #F9C80E 100%)" } },
                    { num: "3", texto: "Cooperação de profissionais", style: { background: "linear-gradient(135deg, #F9C80E 0%, #2A9D8F 100%)" } },
                    { num: "4", texto: "Criação de redes", style: { background: "linear-gradient(135deg, #2A9D8F 0%, #003366 100%)" } },
                    { num: "5", texto: "Trabalho comum e reuniões", style: { background: "linear-gradient(135deg, #003366 0%, #003366 100%)" } },
                  ].map((etapa, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-3"
                          style={etapa.style}
                        >
                          {etapa.num}
                        </div>
                        <p className="text-center text-gray-700 font-medium text-xs max-w-[120px]">{etapa.texto}</p>
                      </div>
                      {index < 4 && (
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#2A9D8F] to-[#003366] mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Versão mobile - lista vertical */}
                <div className="md:hidden space-y-6">
                  {[
                    { num: "1", texto: "Educação ao longo da vida", style: { background: "linear-gradient(135deg, #E63946 0%, #F4A261 100%)" } },
                    { num: "2", texto: "Pesquisas científicas", style: { background: "linear-gradient(135deg, #F4A261 0%, #F9C80E 100%)" } },
                    { num: "3", texto: "Cooperação de profissionais", style: { background: "linear-gradient(135deg, #F9C80E 0%, #2A9D8F 100%)" } },
                    { num: "4", texto: "Criação de redes", style: { background: "linear-gradient(135deg, #2A9D8F 0%, #003366 100%)" } },
                    { num: "5", texto: "Trabalho comum e reuniões", style: { background: "linear-gradient(135deg, #003366 0%, #003366 100%)" } },
                  ].map((etapa, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                        style={etapa.style}
                      >
                        {etapa.num}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-700 font-medium">{etapa.texto}</p>
                      </div>
                      {index < 4 && (
                        <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-[#2A9D8F] to-[#003366]"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">Ciclo contínuo e interdependente de desenvolvimento profissional</p>
              </div>
            </div>
          </div>

          {/* Ações de Pesquisa e Cooperação */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-primary mb-8 text-center">Ações de Pesquisa e Cooperação</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-t-4 border-[#2A9D8F] text-center shadow-md">
                <div className="mb-4 flex justify-center items-center h-16">
                  <FontAwesomeIcon icon={faFlask} className="text-3xl text-[#2A9D8F]" style={{ width: '3rem', height: '3rem' }} />
                </div>
                <h4 className="text-xl font-bold text-[#2A9D8F] mb-3">Pesquisa Científica</h4>
                <p className="text-gray-700">
                  Desenvolvimento de pesquisas colaborativas sobre formação e desenvolvimento profissional docente
                </p>
              </Card>
              <Card className="bg-white border-t-4 border-[#E63946] text-center shadow-md">
                <div className="mb-4 flex justify-center items-center h-16">
                  <FontAwesomeIcon icon={faHandshake} className="text-3xl text-[#E63946]" style={{ width: '3rem', height: '3rem' }} />
                </div>
                <h4 className="text-xl font-bold text-[#E63946] mb-3">Cooperação Acadêmica</h4>
                <p className="text-gray-700">
                  Intercâmbios, eventos científicos e produção conjunta de publicações entre instituições parceiras
                </p>
              </Card>
              <Card className="bg-white border-t-4 border-[#003366] text-center shadow-md">
                <div className="mb-4 flex justify-center items-center h-16">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-[#003366]" style={{ width: '3rem', height: '3rem' }} />
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-3">Formação Continuada</h4>
                <p className="text-gray-700">
                  Processos formativos, consultorias, treinamentos e fortalecimento de programas de pós-graduação
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/organizacao"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition"
            >
              ← Gestão e Organização
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

