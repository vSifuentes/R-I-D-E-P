import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-6 md:gap-8 mb-8 items-start justify-center">
          {/* Sobre */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-base font-bold mb-2">Sobre a RIDEP</h3>
            <p className="text-sm text-white/90 mb-2 max-w-xs mx-auto">
              Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores.
            </p>
          </div>

          {/* Contato */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-base font-bold mb-2">Contato</h3>
            <div className="text-sm text-white/90">
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:contato@ridep.org" className="hover:text-white transition-colors">
                  contato@ridep.org
                </a>
              </p>
              <p>
                <strong>Telefone:</strong> (34) 3319-8831
              </p>
            </div>
          </div>

          {/* Instituição Gestora */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-base font-bold mb-2">Instituição Gestora</h3>
            <div className="text-sm text-white/90">
              <p>
                <strong>UNIUBE</strong> - Universidade de Uberaba
              </p>
              <p>Av. Nenê Sabino nº 1801, Bairro Universitário</p>
              <p>Uberaba/MG - CEP: 38055-500</p>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} RIDEP — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}


