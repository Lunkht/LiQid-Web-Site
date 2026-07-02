export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="380" stroke="#ff6b35" strokeWidth="2" />
          <circle cx="400" cy="400" r="300" stroke="#ff6b35" strokeWidth="1.5" />
          <circle cx="400" cy="400" r="220" stroke="#ff6b35" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card-bg/80 text-xs text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Bientôt disponible sur iOS et Android
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-foreground">
            La banque qui
            <br />
            <span className="gradient-text">évolue avec vous</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Virements internationaux, crypto-monnaies, cartes premium et
            change de devises. Tout ce dont vous avez besoin, sans frontières.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25"
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

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">150+</p>
              <p className="text-sm text-text-tertiary">Pays couverts</p>
            </div>
            <div className="w-px h-12 bg-card-border self-center" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm text-text-tertiary">Devises supportées</p>
            </div>
            <div className="w-px h-12 bg-card-border self-center" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">99.9%</p>
              <p className="text-sm text-text-tertiary">Disponibilité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
