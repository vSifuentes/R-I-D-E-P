import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Notícias - RIDEP",
  description:
    "Notícias e atualizações da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP).",
  keywords:
    "RIDEP, notícias, atualizações, eventos, publicações, desenvolvimento profissional docente",
};

export default function Noticias() {
  return (
    <PageContainer
      title="Notícias da RIDEP"
      subtitle="Este espaço reunirá comunicados, eventos, conquistas e atualizações institucionais relacionadas às atividades da rede e de seus integrantes."
    >
      <ContentSection title="Atualizações institucionais">
          <Card variant="accent">
            <p className="text-gray-600 leading-relaxed">
              Este espaço será dedicado à divulgação de notícias, eventos, conquistas e demais informações relevantes sobre a atuação da RIDEP e de seus
              integrantes. As atualizações serão inseridas à medida que novas ações forem realizadas.
            </p>
          </Card>
      </ContentSection>
    </PageContainer>
  );
}

