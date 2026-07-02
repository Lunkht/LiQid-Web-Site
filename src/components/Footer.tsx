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
    <footer className="bg-[#cc0000] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#cc0000] font-bold text-sm">
                L
              </div>
              <span className="text-lg font-semibold text-white">Liqid</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Banque intelligente sans frontières. Liqid SAS — Paris, France.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.href}>
                    <a
                      href={typeof link === 'string' ? '#' : link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {typeof link === 'string' ? link : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Liqid. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-white/60 hover:text-white transition-colors"
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
