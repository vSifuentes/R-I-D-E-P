import Logo from "@/components/Logo";

export const metadata = {
  description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores. Promovendo pesquisas colaborativas e inovadoras em nível internacional para o desenvolvimento profissional docente.",
  keywords: "RIDEP, desenvolvimento profissional, professores, pesquisa educacional, UNIUBE, educação, formação docente",
  openGraph: {
    description: "Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#FFF8E6] py-24 md:py-32 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl space-y-6">
            <div className="pointer-events-none w-[400px]">
              <Logo size="large" variant="light" showFullName={true} />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366]">
              Conectando pesquisas, professores e o futuro da educação.
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl text-gray-600">
              A RIDEP busca reunir pesquisadores da área da educação que investigam temáticas relativas à formação e ao desenvolvimento profissional de professores da Educação Básica e do Ensino Superior. Visa contribuir com a construção de conhecimentos científicos promovendo o contato entre pesquisadores de diferentes instituições brasileiras e internacionais, constituindo-se em um espaço de interação e cooperação acadêmica sem ônus e fins lucrativos.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
