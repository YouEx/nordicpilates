export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream py-96">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light mb-24 text-navy text-center">Vilkår og Betingelser</h1>
        <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
          Sidst opdateret: {new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="bg-white p-40 md:p-56 rounded-lg shadow-lg prose prose-sm max-w-none">
          <h2 className="text-2xl font-medium mb-16 text-navy">1. Medlemskab</h2>
          <p className="text-graphite/80 leading-relaxed mb-24">
            Ved tilmelding til ventelisten accepterer du at modtage information om Nordic Pilates' åbning og medlemskabstilbud. 
            Der er ingen forpligtelser ved tilmelding til ventelisten.
          </p>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">2. Booking og Aflysning</h2>
          <ul className="space-y-12 mb-24 text-graphite/80">
            <li>• Booking sker via vores app eller website</li>
            <li>• Gratis aflysning op til 12 timer før sessionens start</li>
            <li>• Aflysning mindre end 12 timer før eller "no-show" trækkes fra kontingent</li>
            <li>• Vi forbeholder os retten til at aflyse klasser ved sygdom eller for få deltagere (minimum 3 personer)</li>
          </ul>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">3. Betaling</h2>
          <p className="text-graphite/80 leading-relaxed mb-24">
            Medlemskaber faktureres månedligt på den dato du tilmelder dig. Early-bird rabatter gælder kun første måned. 
            Ingen binding første måned – herefter 1 måneds opsigelse.
          </p>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">4. Sikkerhed og Ansvar</h2>
          <p className="text-graphite/80 leading-relaxed mb-24">
            Du træner på eget ansvar. Vi anbefaler at konsultere din læge før du starter, især ved graviditet, 
            skader eller kroniske tilstande. Vores studioguide kan hjælpe med modifikationer, men erstatter ikke medicinsk rådgivning.
          </p>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">5. Adfærdsregler</h2>
          <ul className="space-y-12 mb-24 text-graphite/80">
            <li>• Respektfuld adfærd over for andre medlemmer og personale</li>
            <li>• Skridsikre strømper er påkrævet</li>
            <li>• Mobiltlf på lydløs under sessioner</li>
            <li>• Kom til tiden – forsinkelser påvirker andre</li>
            <li>• Hold studiet rent og tør udstyr af efter brug</li>
          </ul>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">6. Databeskyttelse</h2>
          <p className="text-graphite/80 leading-relaxed mb-24">
            Vi behandler dine personoplysninger i overensstemmelse med GDPR. 
            Se vores <a href="/privacy" className="text-coral hover:underline">privatlivspolitik</a> for detaljer.
          </p>

          <h2 className="text-2xl font-medium mb-16 text-navy mt-40">7. Ændringer</h2>
          <p className="text-graphite/80 leading-relaxed mb-24">
            Vi forbeholder os retten til at ændre disse vilkår med 14 dages varsel via email. 
            Fortsat brug af vores services efter ændringer betyder accept af de nye vilkår.
          </p>

          <div className="mt-48 pt-32 border-t border-fog/30">
            <h3 className="text-lg font-medium mb-16 text-navy">Spørgsmål?</h3>
            <p className="text-graphite/80 mb-16">
              Kontakt os på <a href="mailto:hej@nordicpilates.dk" className="text-coral hover:underline">hej@nordicpilates.dk</a>
            </p>
            <a 
              href="/"
              className="text-coral hover:underline text-sm"
            >
              ← Tilbage til forsiden
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
