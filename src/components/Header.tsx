"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Télécharger", href: "#download" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/20">
            L
          </div>
          <span className="text-lg font-semibold text-white">Liqid</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2"
          >
            Connexion
          </a>
          <a
            href="#download"
            className="text-sm font-medium bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl transition-colors"
          >
            Ouvrir un compte
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-card-border" />
            <a href="#download" className="text-sm text-white/70 py-2">
              Connexion
            </a>
            <a
              href="#download"
              className="text-sm font-medium bg-accent text-white px-5 py-3 rounded-xl text-center"
            >
              Ouvrir un compte
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
