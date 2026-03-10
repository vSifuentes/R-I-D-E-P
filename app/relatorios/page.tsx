import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Relatórios de Pesquisa - RIDEP",
  description:
    "Relatórios de pesquisa produzidos no âmbito da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP).",
  keywords:
    "RIDEP, relatórios de pesquisa, produção científica, desenvolvimento profissional docente",
};

const relatorios = [
  { label: "Relatório Universidade Federal de Uberlândia (UFU)", pdf: null },
  { label: "Relatório Universidade Federal do Triângulo Mineiro (UFTM)", pdf: null },
  { label: "Relatório Universidade de Uberaba (UNIUBE)", pdf: "/Relat%C3%B3rio%20RIDEP_2026_7%20pesquisas_protected_com%20senha.pdf" },
  { label: "Relatório Universidade de Sorocaba (UNISO)", pdf: null },
  { label: "Relatório Universidad de Sancti Spíritus (UNISS)", pdf: null },
  { label: "Relatório Universidade Estadual de Goiás (UEG) - Unidade Universitária de Itapuranga", pdf: null },
  { label: "Relatório Universidade do Estado de Minas Gerais (UEMG) - Unidade Frutal", pdf: null },
];

export default function Relatorios() {
  return (
    <PageContainer
      title="Relatórios de Pesquisa"
      subtitle="Os relatórios sistematizam resultados parciais e finais das investigações desenvolvidas pelas instituições participantes da RIDEP."
    >
     

      <ContentSection title="Relatórios por instituição">
          <div className="content-grid content-grid--three">
            {relatorios.map((item) => (
              <Card key={item.label} variant="soft" className="h-full" contentClassName="space-y-3">
                <p className="text-gray-600">{item.label}</p>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    download
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-md hover:opacity-90 transition-opacity font-medium text-xs w-fit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Baixar PDF
                  </a>
                )}
              </Card>
            ))}
          </div>

      
      </ContentSection>
    </PageContainer>
  );
}

