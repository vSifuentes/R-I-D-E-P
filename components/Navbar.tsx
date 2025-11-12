"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50 w-full">
      <div className="w-full max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo href="/" size="medium" variant="dark" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/organizacao"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Organização
            </Link>
            <Link
              href="/convenios"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Convênios
            </Link>
            <Link
              href="/pesquisadores"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Pesquisadores
            </Link>
            <Link
              href="/contato"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/organizacao"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Organização
            </Link>
            <Link
              href="/convenios"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Convênios
            </Link>
            <Link
              href="/pesquisadores"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pesquisadores
            </Link>
            <Link
              href="/contato"
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

