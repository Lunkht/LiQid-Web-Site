export default function Download() {
  return (
    <section id="download" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent" />
          <div className="absolute inset-0 bg-[#f0f1f5]" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center p-8 md:p-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Prêt à rejoindre
                <br />
                <span className="gradient-text">Liqid ?</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-md">
                Téléchargez l&apos;application dès maintenant et découvrez une
                nouvelle façon de gérer votre argent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/60">Télécharger sur</span>
                    <span className="text-base font-semibold -mt-1">App Store</span>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/60">Télécharger sur</span>
                    <span className="text-base font-semibold -mt-1">Google Play</span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white text-xs font-bold border-2 border-[#f0f1f5]"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-tertiary">
                  +10 000 utilisateurs déjà inscrits
                </p>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-[220px] h-[440px]">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent rounded-[36px]" />
                <div className="relative w-full h-full rounded-[36px] border border-[#2a2a35] bg-[#121218] overflow-hidden p-5 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white text-2xl font-bold mb-4">
                    L
                  </div>
                  <p className="text-white font-semibold text-lg">Liqid</p>
                  <p className="text-[#6b7280] text-xs mt-1">Banque intelligente</p>

                  <div className="mt-8 flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2a2a35]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
