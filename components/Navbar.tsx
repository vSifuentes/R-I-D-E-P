"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSobreOpen, setIsSobreOpen] = useState(false);
  const [isSobreMobileOpen, setIsSobreMobileOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setIsSobreOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSobreOpen(false);
        setIsSobreMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAllMenus = () => {
    setIsSobreOpen(false);
    setIsSobreMobileOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-primary shadow-md z-50 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo href="/" size="medium" variant="dark" useAltLogo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              ref={desktopMenuRef}
              className="relative"
              onMouseEnter={() => setIsSobreOpen(true)}
              onMouseLeave={() => setIsSobreOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-white hover:text-accent transition-colors font-medium"
                aria-haspopup="true"
                aria-expanded={isSobreOpen}
                aria-controls="menu-sobre-desktop"
                onClick={() => setIsSobreOpen((prev) => !prev)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setIsSobreOpen(true);
                  }
                }}
              >
                Sobre nós
                <span className="text-xs">▼</span>
              </button>

              {isSobreOpen && (
                <div
                  id="menu-sobre-desktop"
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                >
                  <Link
                    href="/sobre#historia"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100"
                    onClick={() => setIsSobreOpen(false)}
                  >
                    APRESENTAÇÃO
                  </Link>
                  <Link
                    href="/sobre#objetivos"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100"
                    onClick={() => setIsSobreOpen(false)}
                  >
                    FINALIDADES E AÇÕES
                  </Link>
                  <Link
                    href="/sobre#estrutura"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100"
                    onClick={() => setIsSobreOpen(false)}
                  >
                    NOSSA ESTRUTURA
                  </Link>
                  <Link
                    href="/convenios"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100"
                    onClick={() => setIsSobreOpen(false)}
                  >
                    CONVÊNIOS
                  </Link>
                  <Link
                    href="/pesquisadores"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100"
                    onClick={() => setIsSobreOpen(false)}
                  >
                    PESQUISADORES
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/publicacoes"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Publicações
            </Link>
            <Link
              href="/relatorios"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Relatórios de Pesquisa
            </Link>
            <Link
              href="/seminarios"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Seminários
            </Link>
            <Link
              href="/noticias"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Notícias
            </Link>
            <Link
              href="/contato"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Contatos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal-mobile"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="menu-principal-mobile" className="md:hidden py-4 space-y-2">
            <div className="px-2">
              <button
                type="button"
                className="w-full flex items-center justify-between px-2 py-2 text-white rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsSobreMobileOpen(!isSobreMobileOpen)}
                aria-expanded={isSobreMobileOpen}
                aria-controls="menu-sobre-mobile"
              >
                <span className="font-medium uppercase tracking-wide">
                  Sobre nós
                </span>
                <span className="text-xs">
                  {isSobreMobileOpen ? "▲" : "▼"}
                </span>
              </button>
              {isSobreMobileOpen && (
                <div id="menu-sobre-mobile" className="mt-1 space-y-1 pl-4">
                  <Link
                    href="/sobre#historia"
                    className="block px-2 py-1 text-white hover:bg-white/10 hover:text-white rounded-md text-sm transition-colors"
                    onClick={closeAllMenus}
                  >
                    APRESENTAÇÃO
                  </Link>
                  <Link
                    href="/sobre#objetivos"
                    className="block px-2 py-1 text-white hover:bg-white/10 hover:text-white rounded-md text-sm transition-colors"
                    onClick={closeAllMenus}
                  >
                    FINALIDADES E AÇÕES
                  </Link>
                  <Link
                    href="/sobre#estrutura"
                    className="block px-2 py-1 text-white hover:bg-white/10 hover:text-white rounded-md text-sm transition-colors"
                    onClick={closeAllMenus}
                  >
                    NOSSA ESTRUTURA
                  </Link>
                  <Link
                    href="/convenios"
                    className="block px-2 py-1 text-white hover:bg-white/10 hover:text-white rounded-md text-sm transition-colors"
                    onClick={closeAllMenus}
                  >
                    CONVÊNIOS
                  </Link>
                  <Link
                    href="/pesquisadores"
                    className="block px-2 py-1 text-white hover:bg-white/10 hover:text-white rounded-md text-sm transition-colors"
                    onClick={closeAllMenus}
                  >
                    PESQUISADORES
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/publicacoes"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={closeAllMenus}
            >
              Publicações
            </Link>
            <Link
              href="/relatorios"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={closeAllMenus}
            >
              Relatórios de Pesquisa
            </Link>
            <Link
              href="/seminarios"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={closeAllMenus}
            >
              Seminários
            </Link>
            <Link
              href="/noticias"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={closeAllMenus}
            >
              Notícias
            </Link>
            <Link
              href="/contato"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={closeAllMenus}
            >
              Contatos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

