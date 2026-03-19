import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export const metadata = {
  title: "Publicações - RIDEP | Livro, Artigos e Trabalhos",
  description:
    "Publicações da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP): livro, artigos e trabalhos em anais de eventos.",
  keywords:
    "RIDEP, publicações, livro, artigos, trabalhos em anais, formação e desenvolvimento profissional docente",
};

export default function Publicacoes() {
  return (
    <PageContainer
      title="Publicações da RIDEP"
      subtitle="A produção científica da rede reúne livro, artigos e trabalhos apresentados em eventos, evidenciando a continuidade das pesquisas colaborativas desenvolvidas entre instituições parceiras."
    >
      <ContentSection title="Livro">
        <article className="space-y-3">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 md:flex-row md:items-start">
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image
                src="/livros/img_livro.jpg"
                alt="Capa do livro Formação e desenvolvimento profissional docente: discussões em rede"
                width={720}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <a
              href="/livros/16338%20Vania%20Maria%20de%20Oliveira%20Vieira_MIOLO_16x23%20(1).pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity font-medium text-sm w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar PDF
            </a>
          </div>
          <p>
            <strong>VIEIRA, Vania Maria de Oliveira</strong> (org.).{" "}
            <strong>Formação e desenvolvimento profissional docente: discussões em rede</strong>. 1. ed. Curitiba: Appris, 2023. 200 p.
          </p>
        </article>
      </ContentSection>

      <ContentSection title="Artigos">
          <div className="space-y-6">
            <article className="space-y-2">
                <p>
                  <strong>VIEIRA, G. M.; VIEIRA, V. M. O.</strong> <strong>A teoria das representações sociais na pesquisa educacional: possibilidades investigativas.</strong>{" "}
                  <em>Cadernos GPOSSHE On-line</em>, v. 8, p. 1-19, 2025.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://www.researchgate.net/publication/390139233_Teoria_das_Representacoes_Sociais_na_pesquisa_educacional_possibilidades_investigativas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    researchgate.net/publication/390139233_Teoria_das_Representacoes_Sociais_na_pesquisa_educacional_possibilidades_investigativas
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>VIEIRA, G. M.; VIEIRA, V. M. O.</strong> <strong>Formação de professores no ensino superior: a profissionalização docente por meio da
                  pedagogia universitária.</strong> <em>Leia Escola</em>, v. 25, p. 55-67, 2023.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://revistas.editora.ufcg.edu.br/index.php/leia/article/view/2135/2149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    revistas.editora.ufcg.edu.br/index.php/leia/article/view/2135/2149
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>
                    VASHETINA, O. V.; ASAFOVA, E. V.; KAUR, B.; SINGH, B.; SHARMA, P.; LINHARES, M. M. P.; VIEIRA, V. M. O.; PIMENTA, M. A. A.; RESENDE,
                    M. R.; SIBGATULLINA, T. V.
                  </strong>{" "}
                  <strong>Professional development of teachers and future teachers: factors and challenges.</strong> <em>Education and Self Development</em>, v. 17, p.
                  100-117, 2022.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://www.researchgate.net/publication/364593130_Professional_Development_of_Teachers_and_Future_Teachers_Factors_and_Challenges"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    researchgate.net/publication/364593130_Professional_Development_of_Teachers_and_Future_Teachers_Factors_and_Challenges
                  </a>
                </p>
            </article>
          </div>
      </ContentSection>

      <ContentSection title="Trabalhos publicados em anais de eventos">
          <div className="space-y-6">
            <article className="space-y-2">
                <p>
                  <strong>PAIXÃO, Leonice Vieira de Jesus.</strong> <strong>Estado do conhecimento: o que mostram teses e dissertações sobre a temática &quot;PIBID e
                  práticas pedagógicas&quot;.</strong> In: <em>ANAIS DO XII ENCONTRO DE PESQUISA EM EDUCAÇÃO: Direito à Educação: pesquisas, inovações e perspectivas</em>, Uberaba, MG, 04 a 07 out. 2023.
                  Uberaba: Universidade de Uberaba, 2023. Grupo de Trabalho: GT 03 - Formação e Desenvolvimento Profissional Docente; apoio CAPES - PROSUP/TAXA.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>VILAMAIOR, Adriana Giarola.</strong> <strong>Metodologias ativas no ensino técnico profissional: estudo preliminar.</strong> In:{" "}
                  <em>ANAIS DO XII ENCONTRO DE PESQUISA EM EDUCAÇÃO: Direito à Educação: pesquisas, inovações e perspectivas</em>, Uberaba, MG, 04 a 07 out. 2023. Uberaba: Universidade de Uberaba, 2023. Grupo de Trabalho: GT 03 - Formação e Desenvolvimento Profissional Docente; apoio IFMG/Bambuí.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>LIMA, Hariel Regina Dias de.</strong> <strong>Estado do conhecimento: uma análise do conhecimento atual.</strong> In:{" "}
                  <em>ANAIS DO XII ENCONTRO DE PESQUISA EM EDUCAÇÃO: Direito à Educação: pesquisas, inovações e perspectivas</em>, Uberaba, MG, 04 a 07 out. 2023. Uberaba: Universidade de Uberaba, 2023. Grupo de Trabalho: GT 03 - Formação e Desenvolvimento Profissional Docente; apoio CAPES - PROSUP/BOLSA.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    uniube.br/arquivos/2024/abril/anais-xii-epeduc-versao-final.pdf
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>VIEIRA, Vania Maria de Oliveira; MARCOS, Juan José Mena; SILVA, Rejane Dias da.</strong> <strong>Representações sociais sobre o desenvolvimento profissional docente na educação superior: contribuições de estudos em rede.</strong> In: <em>ANAIS DO XIII ENCONTRO DE PESQUISA EM EDUCAÇÃO</em>, Uberaba, MG, 2025. Uberaba: Universidade de Uberaba, 2025. Apoio: CNPq.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://www.even3.com.br/anais/xiiiepeduc/1239928-REPRESENTACOES-SOCIAIS-SOBRE-O-DESENVOLVIMENTO-PROFISSIONAL-DOCENTE-NA-EDUCACAO-SUPERIOR--CONTRIBUICOES-DE-ESTUD/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    even3.com.br/anais/xiiiepeduc/1239928-REPRESENTACOES-SOCIAIS-SOBRE-O-DESENVOLVIMENTO-PROFISSIONAL-DOCENTE-NA-EDUCACAO-SUPERIOR
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>DINIZ, Rosimeire Ferreira; VIEIRA, Vania Maria de Oliveira.</strong> <strong>Representações sociais de docentes iniciantes da UEMG/Frutal sobre formação e desenvolvimento profissional na educação superior.</strong> In: <em>ANAIS DO XIII ENCONTRO DE PESQUISA EM EDUCAÇÃO</em>, Uberaba, MG, 2025. Uberaba: Universidade de Uberaba, 2025. Apoio: Bolsa CAPES/PROSUP/TAXA.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://www.even3.com.br/anais/xiiiepeduc/1237543-REPRESENTACOES-SOCIAIS-DE-DOCENTES-INICIANTES-DA-UEMGFRUTAL-SOBRE-FORMACAO-E-DESENVOLVIMENTO-PROFISSIONAL-NA-E/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    even3.com.br/anais/xiiiepeduc/1237543-REPRESENTACOES-SOCIAIS-DE-DOCENTES-INICIANTES-DA-UEMGFRUTAL
                  </a>
                </p>
            </article>

            <article className="space-y-2">
                <p>
                  <strong>REZENDE, Gerusa Dumont de; VIEIRA, Vania Maria de Oliveira.</strong> <strong>Educação humanizada e práticas pedagógicas: as representações sociais de docentes de Psicologia, de uma IES mineira.</strong> In: <em>ANAIS DO XIII ENCONTRO DE PESQUISA EM EDUCAÇÃO</em>, Uberaba, MG, 2025. Uberaba: Universidade de Uberaba, 2025. Apoio: Bolsa CAPES/PROSUP/TAXA.
                </p>
                <p>
                  <strong>Disponível em:</strong>{" "}
                  <a
                    href="https://www.even3.com.br/anais/xiiiepeduc/1216166-EDUCACAO-HUMANIZADA-E-PRATICAS-PEDAGOGICAS--AS-REPRESENTACOES-SOCIAIS-DE-DOCENTES-DE-PSICOLOGIA-DE-UMA-IES-MINE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    even3.com.br/anais/xiiiepeduc/1216166-EDUCACAO-HUMANIZADA-E-PRATICAS-PEDAGOGICAS
                  </a>
                </p>
            </article>
          </div>
      </ContentSection>
    </PageContainer>
  );
}

