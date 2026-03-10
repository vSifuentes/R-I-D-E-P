import Card from "@/components/Card";
import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Seminários - RIDEP",
  description:
    "Seminários da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP).",
  keywords:
    "RIDEP, seminários, eventos científicos, desenvolvimento profissional docente",
};

const seminarios = [
  {
    titulo:
      "I Seminário da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    descricao:
      "Evento dedicado à apresentação e discussão das pesquisas desenvolvidas no âmbito da rede, fortalecendo a cooperação entre as instituições participantes.",
  },
  {
    titulo:
      "II Seminário da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores: Pesquisas Concluídas e Perspectivas de Continuidade",
    descricao:
      "Seminário voltado à socialização de pesquisas concluídas e ao delineamento de novas etapas e perspectivas de continuidade das investigações em rede.",
  },
];

export default function Seminarios() {
  return (
    <PageContainer
      title="Seminários da RIDEP"
      subtitle="Os seminários constituem momentos de socialização das pesquisas, diálogo entre instituições e planejamento das próximas etapas de trabalho em rede."
    >
      <ContentSection title="Sobre os seminários">
          <Card variant="accent">
            <p className="text-gray-600 leading-relaxed">
              Os seminários da RIDEP são momentos de encontro entre pesquisadores e instituições parceiras para discutir resultados de pesquisas, compartilhar
              experiências e planejar novas ações colaborativas.
            </p>
          </Card>
      </ContentSection>

      <ContentSection title="Edições realizadas">
          <div className="space-y-6">
          {seminarios.map((seminario) => (
            <Card key={seminario.titulo} title={seminario.titulo} variant="soft">
              <p className="text-gray-600 leading-relaxed">{seminario.descricao}</p>
            </Card>
          ))}
          </div>
      </ContentSection>
    </PageContainer>
  );
}

