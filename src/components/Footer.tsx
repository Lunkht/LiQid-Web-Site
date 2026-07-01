const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "CGU", href: "/terms" },
  { label: "Confidentialité", href: "/privacy" },
  { label: "Cookies", href: "#" },
  { label: "Mentions légales", href: "#" },
];

const FOOTER_LINKS: { title: string; links: string[] | typeof LEGAL_LINKS }[] = [
  {
    title: "Produit",
    links: ["Virements", "Cartes", "Crypto", "Change", "Plans"],
  },
  {
    title: "Entreprise",
    links: ["À propos", "Blog", "Presse", "Carrières", "Contact"],
  },
  {
    title: "Support",
    links: ["Centre d'aide", "Communauté", "Statut", "Sécurité"],
  },
  {
    title: "Légal",
    links: LEGAL_LINKS,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold text-sm">
                L
              </div>
              <span className="text-lg font-semibold text-foreground">Liqid</span>
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Banque intelligente sans frontières. Liqid SAS — Paris, France.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.href}>
                    <a
                      href={typeof link === 'string' ? '#' : link.href}
                      className="text-sm text-text-secondary hover:text-foreground transition-colors"
                    >
                      {typeof link === 'string' ? link : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Liqid. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-text-tertiary hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
