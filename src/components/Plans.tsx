const PLANS = [
  {
    name: "Standard",
    price: "0",
    period: "/mois",
    description: "Pour commencer simplement",
    color: "from-zinc-500 to-zinc-400",
    features: [
      "Carte virtuelle gratuite",
      "Virements SEPA gratuits",
      "Change de devises au taux réel",
      "1 carte physique incluse",
      "Limite : 10 000 €/mois",
      "Support par email",
    ],
  },
  {
    name: "Premium",
    price: "7,99",
    period: "/mois",
    description: "Pour les utilisateurs actifs",
    popular: true,
    color: "from-[#ff6b35] to-[#ff8c42]",
    features: [
      "Tout le Standard +",
      "Carte physique Premium",
      "Paiements sans contact",
      "Assurance voyage incluse",
      "Limite : 20 000 €/mois",
      "Support prioritaire 24/7",
      "Retraits gratuits (500 €/mois)",
    ],
  },
  {
    name: "Metal",
    price: "14,99",
    period: "/mois",
    description: "Pour les experts",
    color: "from-zinc-400 to-zinc-300",
    features: [
      "Tout le Premium +",
      "Carte Metal exclusive",
      "1% de cashback partout",
      "Assurance premium + annulation",
      "Limite : 50 000 €/mois",
      "Conciergerie dédiée",
      "Retraits illimités gratuits",
      "Accès salons d'aéroport",
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Le plan qui vous
            <br />
            <span className="gradient-text">correspond</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Évoluez à votre rythme. Changez de plan à tout moment sans frais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-accent/50 bg-card-bg glow scale-105 md:scale-105"
                  : "border-card-border bg-card-bg hover:border-card-border/80"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-xs font-semibold text-white">
                  Le plus populaire
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price} €
                    </span>
                    <span className="text-sm text-text-tertiary">{plan.period}</span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-success shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`block text-center font-medium px-6 py-3 rounded-xl transition-colors ${
                    plan.popular
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "border border-card-border text-foreground hover:bg-[#f0f1f5]"
                  }`}
                >
                  {plan.price === "0" ? "Commencer" : "Souscrire"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
