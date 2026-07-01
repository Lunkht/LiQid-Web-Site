export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <img
          src="/icon.svg"
          alt=""
          className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]"
          aria-hidden="true"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg text-xs text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-success" />
              Application disponible
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
              La banque qui
              <br />
              <span className="gradient-text">évolue avec vous</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-md leading-relaxed">
              Virements internationaux, crypto-monnaies, cartes premium et
              change de devises. Tout ce dont vous avez besoin, sans frontières.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-xl transition-colors"
              >
                Télécharger l&apos;app
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-card-border text-foreground font-medium px-8 py-4 rounded-xl hover:bg-card-bg transition-colors"
              >
                En savoir plus
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-text-tertiary">Pays couverts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-text-tertiary">Devises supportées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-text-tertiary">Disponibilité</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-[300px] h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-[48px]" />
              <div className="relative w-full h-full rounded-[48px] border border-[#2a2a35] bg-[#121218] overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold text-sm">
                    L
                  </div>
                  <div>
                    <p className="text-xs text-[#6b7280]">Solde total</p>
                    <p className="text-2xl font-light text-white">00 €</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-8">
                  {[["Envoyer", "↑"], ["Recevoir", "↓"], ["Échanger", "⇄"], ["Recharger", "+"]].map(([label, icon]) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-[#2a2a35] flex items-center justify-center text-sm text-[#9ca3af]">
                        {icon}
                      </div>
                      <span className="text-[10px] text-[#6b7280]">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1 rounded-xl bg-[#2a2a35]/50 p-4">
                  <p className="text-xs text-[#6b7280] mb-3">Transactions récentes</p>
                  {[["Netflix", "−15,99 €"], ["Amazon", "−89,90 €"], ["Virement reçu", "+500,00 €"]].map(([name, amount]) => (
                    <div key={name} className="flex items-center justify-between py-2">
                      <span className="text-sm text-white">{name}</span>
                      <span className={`text-sm ${amount.startsWith("+") ? "text-success" : "text-white"}`}>
                        {amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
