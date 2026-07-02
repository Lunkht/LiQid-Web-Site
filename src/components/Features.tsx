import ScrollReveal from "@/components/ScrollReveal";

const FEATURES = [
  {
    title: "Virements instantanés",
    description:
      "Envoyez de l'argent en France et à l'international en quelques secondes. IBAN, email ou numéro de téléphone.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Réception & Paiements",
    description:
      "Recevez des virements et payez en ligne avec vos cartes virtuelles ou physiques. Paiements sans contact inclus.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
  },
  {
    title: "Change de devises",
    description:
      "Convertissez entre plus de 15 devises au taux réel. EUR, USD, GBP, CHF, JPY et bien plus.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M8 8h6a2 2 0 010 4H8" />
      </svg>
    ),
  },
  {
    title: "Crypto-monnaies",
    description:
      "Achetez, vendez et conservez Bitcoin, Ethereum, Solana et d'autres crypto-actifs directement depuis l'app.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <path d="M12 19v4" />
        <path d="M8 23h8" />
      </svg>
    ),
  },
  {
    title: "Cartes premium",
    description:
      "Cartes Standard, Premium et Metal avec limites personnalisables, contrôle des paiements et design exclusif.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <path d="M1 10h22" />
        <path d="M6 14h4" />
      </svg>
    ),
  },
  {
    title: "Recharge téléphone",
    description:
      "Rechargez vos crédits téléphoniques et ceux de vos proches dans plus de 150 pays depuis l'application.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest">
            Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tout ce dont vous avez besoin,
            <br />
            <span className="gradient-text">sans compromis</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Une application bancaire complète qui réunit tous les services
            financiers essentiels au même endroit.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <ScrollReveal key={feature.title} className="group relative p-7 rounded-2xl border border-card-border bg-card-bg hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-accent mb-5 group-hover:from-accent/20 group-hover:to-accent/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
