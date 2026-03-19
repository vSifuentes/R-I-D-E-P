import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export const metadata = {
  title: "Relatórios de Pesquisa - RIDEP",
  description:
    "Relatórios de pesquisa produzidos no âmbito da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP).",
  keywords:
    "RIDEP, relatórios de pesquisa, produção científica, desenvolvimento profissional docente",
};

export default function Relatorios() {
  return (
    <PageContainer
      title="Relatórios de Pesquisa"
      subtitle="Os relatórios sistematizam resultados parciais e finais das investigações desenvolvidas pelas instituições participantes da RIDEP."
    >
      <ContentSection title="Relatório em destaque">
        <article className="space-y-3">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-4 md:flex-row md:items-start">
            <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image
                src="/relatorio/img_relatorio.jpg"
                alt="Imagem de destaque dos relatórios da RIDEP"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
              />
            </div>
            <a
              href="/Relat%C3%B3rio%20RIDEP_2026_7%20pesquisas_protected_com%20senha.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity font-medium text-sm w-fit"
            >
              <Image
                src="/relatorio/downloadrelatorio.png"
                alt="Ícone de download"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              Baixar relatório geral
            </a>
          </div>
        </article>
      </ContentSection>
    </PageContainer>
  );
}

