import ContentSection from "@/components/ContentSection";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

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
    imagem: "/seminario/seminario1.png",
  },
  {
    titulo:
      "II Seminário da Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores: Pesquisas Concluídas e Perspectivas de Continuidade",
    imagem: "/seminario/seminario2.png",
  },
];

export default function Seminarios() {
  return (
    <PageContainer
      title="Seminários da RIDEP"
      subtitle="Os seminários constituem momentos de socialização das pesquisas, diálogo entre instituições e planejamento das próximas etapas de trabalho em rede."
    >
      <ContentSection title="Sobre os seminários">
          <p className="text-gray-600 leading-relaxed">
            Os seminários da RIDEP são momentos de encontro entre pesquisadores e instituições parceiras para discutir resultados de pesquisas, compartilhar
            experiências e planejar novas ações colaborativas.
          </p>
      </ContentSection>

      <ContentSection title="Edições realizadas">
          <div className="space-y-6">
          {seminarios.map((seminario) => (
            <article key={seminario.titulo} className="space-y-3">
              <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src={seminario.imagem}
                  alt={seminario.titulo}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#003366]">{seminario.titulo}</h3>
            </article>
          ))}
          </div>
      </ContentSection>
    </PageContainer>
  );
}

