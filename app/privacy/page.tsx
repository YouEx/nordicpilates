export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-80">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-48">Privatlivspolitik</h1>
        
        <section className="mb-48">
          <h2 className="mb-24">Dataindsamling</h2>
          <p className="mb-16 text-graphite/80">
            Vi indsamler kun dit navn og din e-mailadresse, når du tilmelder dig vores venteliste. 
            Disse oplysninger bruges udelukkende til at informere dig om vores studiets åbning.
          </p>
        </section>

        <section className="mb-48">
          <h2 className="mb-24">Dine rettigheder</h2>
          <p className="mb-16 text-graphite/80">
            Du har til enhver tid ret til at få indsigt i, ændre eller slette dine oplysninger. 
            Du kan framelde dig vores mailliste ved at klikke på linket i bunden af enhver e-mail 
            fra os.
          </p>
        </section>

        <section className="mb-48">
          <h2 className="mb-24">Databeskyttelse</h2>
          <p className="mb-16 text-graphite/80">
            Alle data opbevares sikkert i EU/EEA-regionen i overensstemmelse med GDPR. 
            Vi videregiver aldrig dine oplysninger til tredjeparter uden dit samtykke.
          </p>
        </section>

        <section className="mb-48">
          <h2 className="mb-24">Kontakt</h2>
          <p className="text-graphite/80">
            Hvis du har spørgsmål om vores håndtering af dine personoplysninger, 
            er du velkommen til at kontakte os på{' '}
            <a href="mailto:privacy@nordicpilates.dk" className="underline hover:text-ice-blue">
              privacy@nordicpilates.dk
            </a>
          </p>
        </section>

        <div className="mt-64">
          <a href="/" className="text-graphite/60 hover:text-graphite transition-colors">
            ← Tilbage til forsiden
          </a>
        </div>
      </div>
    </main>
  )
}
