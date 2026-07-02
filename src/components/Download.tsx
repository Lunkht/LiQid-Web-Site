export default function Download() {
  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Prêt à rejoindre
            <br />
            <span className="gradient-text">Liqid ?</span>
          </h2>

          <p className="text-lg text-text-secondary">
            Téléchargez l&apos;application et créez votre compte en moins de 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-foreground hover:opacity-90 text-background px-7 py-4 rounded-xl font-medium transition-all shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-foreground hover:opacity-90 text-background px-7 py-4 rounded-xl font-medium transition-all shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Google Play
            </a>
          </div>

          <p className="text-xs text-text-tertiary pt-4">
            Gratuit · Aucune carte bancaire requise · 5 minutes suffisent
          </p>
        </div>
      </div>
    </section>
  );
}
