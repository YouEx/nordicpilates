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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
