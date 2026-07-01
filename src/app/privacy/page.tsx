import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>
          <div className="prose prose-sm text-text-secondary space-y-6">
            <p>
              Liqid SAS accorde une grande importance à la protection de vos
              données personnelles. La présente politique de confidentialité
              vous informe de la manière dont nous collectons, utilisons et
              protégeons vos informations.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              1. Données collectées
            </h2>
            <p>
              Nous collectons les données suivantes : nom, prénom, adresse
              email, numéro de téléphone, documents d&apos;identité,
              informations de localisation et données d&apos;utilisation de
              l&apos;application.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              2. Finalités du traitement
            </h2>
            <p>
              Vos données sont utilisées pour : la création et la gestion de
              votre compte, la détection de votre devise locale, la prévention
              de la fraude, l&apos;amélioration de nos services et la
              communication avec vous.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              3. Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement,
              l&apos;exécution du contrat qui vous lie à Liqid, et le respect
              de nos obligations légales.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              4. Conservation des données
            </h2>
            <p>
              Vos données sont conservées pendant la durée de votre compte et
              jusqu&apos;à cinq ans après sa clôture, conformément aux
              obligations légales en matière de lutte contre le blanchiment
              d&apos;argent.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              5. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification, d&apos;effacement et de portabilité de vos
              données, ainsi que du droit de limiter ou d&apos;opposer au
              traitement.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              6. Contact DPO
            </h2>
            <p>
              Pour exercer vos droits ou pour toute question, contactez notre
              Délégué à la Protection des Données :{" "}
              <a href="mailto:dpo@liqid.app" className="text-accent hover:underline">
                dpo@liqid.app
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
