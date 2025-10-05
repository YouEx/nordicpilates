import { Instagram } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream py-96">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-light mb-24 text-navy text-center">Kontakt</h1>
        <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
          Vi glæder os til at høre fra dig
        </p>

        <div className="bg-white p-40 md:p-56 rounded-lg shadow-lg">
          <div className="space-y-32">
            <div>
              <h2 className="text-xl font-medium mb-16 text-navy">Email</h2>
              <a 
                href="mailto:hej@nordicpilates.dk" 
                className="text-coral hover:underline text-lg"
              >
                hej@nordicpilates.dk
              </a>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-16 text-navy">Instagram</h2>
              <a 
                href="https://instagram.com/nordicpilatesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coral hover:underline text-lg flex items-center gap-8"
              >
                <Instagram size={48} />
                @nordicpilatesdk
              </a>
              <p className="text-sm text-graphite/60 mt-8">
                Send os en DM – vi svarer typisk inden for 24 timer
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-16 text-navy">Adresse</h2>
              <p className="text-graphite/80">
                Østerbro, København<br/>
                <span className="text-sm text-graphite/60">(Præcis adresse følger ved åbning i januar 2026)</span>
              </p>
            </div>

            <div className="bg-coral/10 border border-coral/20 rounded-lg p-24">
              <h3 className="font-medium mb-12 text-navy">Åbningstider</h3>
              <p className="text-sm text-graphite/80">
                Mandag - Fredag: 06:00 - 21:00<br/>
                Lørdag - Søndag: 08:00 - 18:00
              </p>
              <p className="text-xs text-graphite/60 mt-12">
                Åbner januar 2026
              </p>
            </div>
          </div>

          <div className="mt-40 pt-32 border-t border-fog/30">
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
