const FEATURES = [
  {
    icon: "↑",
    title: "Virements instantanés",
    description:
      "Envoyez de l'argent en France et à l'international en quelques secondes. IBAN, email ou numéro de téléphone.",
  },
  {
    icon: "↓",
    title: "Réception & Paiements",
    description:
      "Recevez des virements et payez en ligne avec vos cartes virtuelles ou physiques. Paiements sans contact inclus.",
  },
  {
    icon: "⇄",
    title: "Change de devises",
    description:
      "Convertissez entre plus de 15 devises au taux réel. EUR, USD, GBP, CHF, JPY et bien plus.",
  },
  {
    icon: "₿",
    title: "Crypto-monnaies",
    description:
      "Achetez, vendez et conservez Bitcoin, Ethereum, Solana et d'autres crypto-actifs directement depuis l'app.",
  },
  {
    icon: "💳",
    title: "Cartes premium",
    description:
      "Cartes Standard, Premium et Metal avec limites personnalisables, contrôle des paiements et design exclusif.",
  },
  {
    icon: "📱",
    title: "Recharge téléphone",
    description:
      "Rechargez vos crédits téléphoniques et ceux de vos proches dans plus de 150 pays depuis l'application.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tout ce dont vous avez besoin,
            <br />
            <span className="gradient-text">sans compromis</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Une application bancaire complète qui réunit tous les services
            financiers essentiels au même endroit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f0f1f5] flex items-center justify-center text-xl mb-4 group-hover:bg-accent/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
