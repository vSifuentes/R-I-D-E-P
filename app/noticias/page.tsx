import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export const metadata = {
  title: "Notícias - RIDEP",
  description:
    "Notícias e atualizações da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP).",
  keywords:
    "RIDEP, notícias, atualizações, eventos, publicações, desenvolvimento profissional docente",
};

const noticias = [
  {
    imagem: "/noticia/noticia1.png",
  },
];

export default function Noticias() {
  return (
    <PageContainer
      title="Notícias da RIDEP"
      subtitle="Este espaço reunirá comunicados, eventos, conquistas e atualizações institucionais relacionadas às atividades da rede e de seus integrantes."
    >
      <ContentSection title="Atualizações institucionais">
          <div className="space-y-6">
            {noticias.map((noticia) => (
              <article key={noticia.imagem} className="space-y-3">
                <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src={noticia.imagem}
                    alt="Notícia RIDEP"
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
      </ContentSection>
    </PageContainer>
  );
}

