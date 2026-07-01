import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Conditions Générales d'Utilisation
          </h1>
          <div className="prose prose-sm text-text-secondary space-y-6">
            <p>
              Les présentes conditions générales d'utilisation régissent
              l&apos;accès et l&apos;utilisation de l&apos;application Liqid
              éditée par Liqid SAS.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              1. Acceptation des conditions
            </h2>
            <p>
              En créant un compte et en utilisant l&apos;application Liqid,
              vous acceptez pleinement et sans réserve les présentes conditions
              générales d&apos;utilisation.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              2. Description du service
            </h2>
            <p>
              Liqid est une application bancaire qui permet d&apos;effectuer
              des virements, de gérer des cartes, d&apos;échanger des devises
              et d&apos;accéder à des services financiers depuis un seul
              interface.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              3. Obligations de l&apos;utilisateur
            </h2>
            <p>
              Vous vous engagez à fournir des informations exactes lors de
              votre inscription et à les maintenir à jour. Vous êtes seul
              responsable de la confidentialité de votre code PIN et de vos
              données biométriques.
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              4. Protection des données
            </h2>
            <p>
              Vos données personnelles sont traitées conformément à notre
              politique de confidentialité et au Règlement Général sur la
              Protection des Données (RGPD).
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">
              5. Contact
            </h2>
            <p>
              Pour toute question relative aux présentes conditions, vous
              pouvez nous contacter à l&apos;adresse suivante :{" "}
              <a href="mailto:support@liqid.app" className="text-accent hover:underline">
                support@liqid.app
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
