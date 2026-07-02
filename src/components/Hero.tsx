import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center pt-24 overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-[#ff6b35]/30" />
        <div className="absolute inset-0 hero-grid" />
      </div>
      <div className="absolute inset-0 hero-gradient" />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <ScrollReveal className="max-w-3xl text-left lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Bientôt disponible sur iOS et Android
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Sécurité bancaire renforcée · 256-bit
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
              La banque qui
              <br />
              <span className="gradient-text">évolue avec vous</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Virements internationaux, crypto-monnaies, cartes premium et
              change de devises. Tout ce dont vous avez besoin, sans frontières.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
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
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                En savoir plus
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-10">
              <div className="text-left">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-sm text-white/60">Pays couverts</p>
              </div>
              <div className="w-px h-12 bg-white/15 self-center" />
              <div className="text-left">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-white/60">Devises supportées</p>
              </div>
              <div className="w-px h-12 bg-white/15 self-center" />
              <div className="text-left">
                <p className="text-3xl font-bold text-white">99.9%</p>
                <p className="text-sm text-white/60">Disponibilité</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative">
            <div className="section-float glass-panel rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-4 -right-4 rounded-full border border-accent/20 bg-accent/15 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                Live analytics
              </div>
              <div className="rounded-[24px] bg-slate-950/85 p-5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Solde principal</p>
                    <p className="mt-1 text-3xl font-semibold text-white">12 480 €</p>
                  </div>
                  <div className="rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent">
                    + 8.4%
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { label: "Virements instantanés", value: "24/7" },
                    { label: "Carte premium", value: "Active" },
                    { label: "Change de devises", value: "15+" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-sm text-white/70">{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
