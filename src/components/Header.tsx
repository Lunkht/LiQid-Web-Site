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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/icon.svg" alt="Liqid" className="w-8 h-8" />
          <span className="text-lg font-semibold text-foreground">Liqid</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="text-sm text-text-secondary hover:text-foreground transition-colors px-4 py-2"
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
          className="md:hidden p-2 text-text-secondary"
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
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-foreground transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-card-border" />
            <a href="#download" className="text-sm text-text-secondary py-2">
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
