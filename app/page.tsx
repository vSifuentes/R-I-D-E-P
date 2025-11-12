import Link from "next/link";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import Logo from "@/components/Logo";

export const metadata = {
  title: "RIDEP - Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
  description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores. Promovendo pesquisas colaborativas e inovadoras em nível internacional para o desenvolvimento profissional docente.",
  keywords: "RIDEP, desenvolvimento profissional, professores, pesquisa educacional, UNIUBE, educação, formação docente",
  openGraph: {
    title: "RIDEP - Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="pt-16 w-full">
      {/* Hero Section */}
      <section className="bg-gradient-ridep text-white py-24 md:py-32 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/90 to-[#003366]/80"></div>
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <Logo href={undefined} size="large" variant="dark" showFullName={true} />
            </div>
            <p className="text-xl md:text-2xl mb-6 font-medium text-white">
              Conectando pesquisas, professores e o futuro da educação.
            </p>
            <p className="text-lg mb-10 leading-relaxed max-w-3xl text-white/90">
              A RIDEP busca reunir pesquisadores da área da educação que investigam temáticas relativas à formação e ao desenvolvimento profissional de professores da Educação Básica e do Ensino Superior. Visa contribuir com a construção de conhecimentos científicos promovendo o contato entre pesquisadores de diferentes instituições brasileiras e internacionais, constituindo-se em um espaço de interação e cooperação acadêmica sem ônus e fins lucrativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sobre"
                className="bg-[#F9C80E] text-[#003366] rounded-full px-8 py-4 font-semibold hover:bg-[#F9C80E]/90 transition-all inline-block text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Conheça a Rede
              </Link>
              <Link
                href="/contato"
                className="bg-transparent border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all inline-block text-center"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Navegação */}
      <section className="py-20 bg-secondary w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SectionTitle title="Explore a RIDEP" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Link href="/sobre">
              <Card title="Sobre a Rede" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Conheça os objetivos, pressupostos e ações da RIDEP, uma rede internacional dedicada ao desenvolvimento profissional de professores.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>

            <Link href="/organizacao">
              <Card title="Gestão e Organização" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Informações sobre a instituição gestora, coordenação geral e responsabilidades das partes envolvidas na rede.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>

            <Link href="/convenios">
              <Card title="Instituições Parceiras" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Explore os convênios estabelecidos com universidades nacionais e internacionais para fortalecer a rede.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>

            <Link href="/pesquisadores">
              <Card title="Equipe e Colaborações" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Conheça os pesquisadores que integram a RIDEP e suas respectivas instituições e países.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>

            <Link href="/sobre#como-atuamos">
              <Card title="Como Atuamos" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Descubra os ciclos de formação docente e as ações de pesquisa e cooperação desenvolvidas pela rede.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>

            <Link href="/contato">
              <Card title="Contato" className="rounded-xl hover:shadow-lg transition cursor-pointer h-full">
                <p className="mb-4 leading-relaxed text-gray-600">
                  Entre em contato conosco através do formulário ou pelos dados de contato da instituição gestora.
                </p>
                <div className="text-primary hover:text-accent font-semibold inline-flex items-center gap-2 transition">
                  Saiba mais
                  <span>→</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
