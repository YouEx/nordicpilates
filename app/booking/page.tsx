'use client'

import { useState } from 'react'

type SessionType = 'Nordic Flow' | 'Power Core' | 'Stretch & Restore' | 'Sweat 30'
type Difficulty = 'Begynder' | 'Let øvet' | 'Udfordrende'

interface Session {
  id: string
  time: string
  type: SessionType
  difficulty: Difficulty
  instructor: string
  spotsTotal: number
  spotsBooked: number
  duration: number
}

// Mock data - realistiske sessions gennem dagen
const generateSessions = (): Session[] => {
  const sessions: Session[] = [
    { id: '1', time: '07:00', type: 'Nordic Flow', difficulty: 'Begynder', instructor: 'Emma Jensen', spotsTotal: 12, spotsBooked: 8, duration: 50 },
    { id: '2', time: '08:00', type: 'Power Core', difficulty: 'Let øvet', instructor: 'Marcus Nielsen', spotsTotal: 12, spotsBooked: 11, duration: 50 },
    { id: '3', time: '09:00', type: 'Stretch & Restore', difficulty: 'Begynder', instructor: 'Sofia Hansen', spotsTotal: 10, spotsBooked: 5, duration: 45 },
    { id: '4', time: '10:00', type: 'Nordic Flow', difficulty: 'Begynder', instructor: 'Emma Jensen', spotsTotal: 12, spotsBooked: 7, duration: 50 },
    { id: '5', time: '11:00', type: 'Sweat 30', difficulty: 'Udfordrende', instructor: 'Lars Andersen', spotsTotal: 8, spotsBooked: 6, duration: 30 },
    { id: '6', time: '12:00', type: 'Power Core', difficulty: 'Let øvet', instructor: 'Marcus Nielsen', spotsTotal: 12, spotsBooked: 3, duration: 50 },
    { id: '7', time: '13:00', type: 'Nordic Flow', difficulty: 'Begynder', instructor: 'Sofia Hansen', spotsTotal: 12, spotsBooked: 4, duration: 50 },
    { id: '8', time: '16:00', type: 'Stretch & Restore', difficulty: 'Begynder', instructor: 'Emma Jensen', spotsTotal: 10, spotsBooked: 8, duration: 45 },
    { id: '9', time: '17:00', type: 'Power Core', difficulty: 'Let øvet', instructor: 'Lars Andersen', spotsTotal: 12, spotsBooked: 10, duration: 50 },
    { id: '10', time: '18:00', type: 'Sweat 30', difficulty: 'Udfordrende', instructor: 'Marcus Nielsen', spotsTotal: 8, spotsBooked: 7, duration: 30 },
    { id: '11', time: '19:00', type: 'Nordic Flow', difficulty: 'Begynder', instructor: 'Sofia Hansen', spotsTotal: 12, spotsBooked: 9, duration: 50 },
    { id: '12', time: '20:00', type: 'Stretch & Restore', difficulty: 'Begynder', instructor: 'Emma Jensen', spotsTotal: 10, spotsBooked: 6, duration: 45 },
  ]
  return sessions
}

const difficultyColors = {
  'Begynder': 'bg-ice-blue/20 text-graphite border-ice-blue/30',
  'Let øvet': 'bg-[#C4A582]/20 text-graphite border-[#C4A582]/30',
  'Udfordrende': 'bg-graphite/10 text-graphite border-graphite/30'
}

export default function BookingPage() {
  const [sessions] = useState<Session[]>(generateSessions())
  const [selectedSession, setSelectedSession] = useState<Session | null>(null)
  const [filter, setFilter] = useState<'all' | SessionType>('all')

  const filteredSessions = filter === 'all' 
    ? sessions 
    : sessions.filter(s => s.type === filter)

  const handleBooking = (session: Session) => {
    setSelectedSession(session)
  }

  const confirmBooking = () => {
    // For nu bare lukke modal - senere integration med booking system
    alert(`Booking bekræftet for ${selectedSession?.type} kl. ${selectedSession?.time}!`)
    setSelectedSession(null)
  }

  const spotsRemaining = (session: Session) => session.spotsTotal - session.spotsBooked

  return (
    <main className="min-h-screen bg-porcelain">
      {/* Header */}
      <header className="bg-white border-b border-fog/30 sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-16">
              {/* Logo */}
              <div className="border-[2px] border-[#C4A582] aspect-square flex items-center justify-center p-12 w-[80px]">
                <h1 className="text-[#C4A582] text-center">
                  <span className="block text-lg font-light italic tracking-wide leading-none">nordic</span>
                  <span className="block text-xs uppercase tracking-[0.3em] font-light mt-1 leading-none">PILATES</span>
                </h1>
              </div>
              <div>
                <h1 className="text-2xl font-light text-graphite">Book din session</h1>
                <p className="text-sm text-graphite/60">I dag, {new Date().toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
              </div>
            </div>
            <a href="/" className="text-sm text-graphite hover:text-[#C4A582] transition-colors">
              ← Tilbage til forside
            </a>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-white border-b border-fog/30">
        <div className="container-custom py-24">
          <div className="flex flex-wrap gap-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-20 py-10 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-graphite text-white' 
                  : 'bg-white border border-fog/50 text-graphite hover:border-graphite/30'
              }`}
            >
              Alle sessions
            </button>
            <button
              onClick={() => setFilter('Nordic Flow')}
              className={`px-20 py-10 rounded-full text-sm font-medium transition-all ${
                filter === 'Nordic Flow' 
                  ? 'bg-graphite text-white' 
                  : 'bg-white border border-fog/50 text-graphite hover:border-graphite/30'
              }`}
            >
              Nordic Flow
            </button>
            <button
              onClick={() => setFilter('Power Core')}
              className={`px-20 py-10 rounded-full text-sm font-medium transition-all ${
                filter === 'Power Core' 
                  ? 'bg-graphite text-white' 
                  : 'bg-white border border-fog/50 text-graphite hover:border-graphite/30'
              }`}
            >
              Power Core
            </button>
            <button
              onClick={() => setFilter('Stretch & Restore')}
              className={`px-20 py-10 rounded-full text-sm font-medium transition-all ${
                filter === 'Stretch & Restore' 
                  ? 'bg-graphite text-white' 
                  : 'bg-white border border-fog/50 text-graphite hover:border-graphite/30'
              }`}
            >
              Stretch & Restore
            </button>
            <button
              onClick={() => setFilter('Sweat 30')}
              className={`px-20 py-10 rounded-full text-sm font-medium transition-all ${
                filter === 'Sweat 30' 
                  ? 'bg-graphite text-white' 
                  : 'bg-white border border-fog/50 text-graphite hover:border-graphite/30'
              }`}
            >
              Sweat 30
            </button>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="container-custom py-48">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
          {filteredSessions.map((session) => {
            const remaining = spotsRemaining(session)
            const almostFull = remaining <= 2
            const available = remaining > 0

            return (
              <div
                key={session.id}
                className={`bg-white rounded-lg border overflow-hidden transition-all hover:shadow-subtle ${
                  available ? 'border-fog/30 hover:border-[#C4A582]/30' : 'border-fog/20 opacity-60'
                }`}
              >
                {/* Time Header */}
                <div className="bg-gradient-to-r from-ice-blue/10 to-[#C4A582]/5 p-20 border-b border-fog/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-light text-graphite">{session.time}</div>
                      <div className="text-sm text-graphite/60">{session.duration} min</div>
                    </div>
                    <div className={`px-12 py-6 rounded-full text-xs font-medium border ${difficultyColors[session.difficulty]}`}>
                      {session.difficulty}
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="p-24">
                  <h3 className="text-xl font-medium text-graphite mb-8">{session.type}</h3>
                  <div className="space-y-12 mb-24">
                    <div className="flex items-center gap-8 text-sm text-graphite/70">
                      <svg className="w-4 h-4 text-[#C4A582]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <svg className="w-4 h-4 text-[#C4A582]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className={almostFull ? 'text-[#C4A582] font-medium' : 'text-graphite/70'}>
                        {remaining} {remaining === 1 ? 'plads' : 'pladser'} tilbage af {session.spotsTotal}
                      </span>
                    </div>
                  </div>

                  {/* Booking Button */}
                  <button
                    onClick={() => handleBooking(session)}
                    disabled={!available}
                    className={`w-full py-14 rounded-button text-sm font-medium transition-all ${
                      available
                        ? 'bg-graphite text-white hover:bg-graphite/90 hover:shadow-subtle'
                        : 'bg-fog/30 text-graphite/40 cursor-not-allowed'
                    }`}
                  >
                    {available ? 'Book nu' : 'Udsolgt'}
                  </button>
                  
                  {almostFull && available && (
                    <p className="text-xs text-[#C4A582] text-center mt-8">⚡ Næsten fyldt op</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-96">
            <p className="text-graphite/60">Ingen sessions fundet for denne type.</p>
          </div>
        )}
      </section>

      {/* Booking Confirmation Modal */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-24" onClick={() => setSelectedSession(null)}>
          <div className="bg-white rounded-lg max-w-md w-full p-40 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-light text-graphite mb-24">Bekræft booking</h2>
            
            <div className="space-y-16 mb-32 p-24 bg-porcelain rounded-lg">
              <div>
                <div className="text-sm text-graphite/60 mb-4">Session</div>
                <div className="text-lg font-medium text-graphite">{selectedSession.type}</div>
              </div>
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <div className="text-sm text-graphite/60 mb-4">Tidspunkt</div>
                  <div className="text-graphite">{selectedSession.time}</div>
                </div>
                <div>
                  <div className="text-sm text-graphite/60 mb-4">Varighed</div>
                  <div className="text-graphite">{selectedSession.duration} min</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-graphite/60 mb-4">Instruktør</div>
                <div className="text-graphite">{selectedSession.instructor}</div>
              </div>
              <div>
                <div className="text-sm text-graphite/60 mb-4">Niveau</div>
                <div className={`inline-block px-12 py-6 rounded-full text-xs font-medium border ${difficultyColors[selectedSession.difficulty]}`}>
                  {selectedSession.difficulty}
                </div>
              </div>
            </div>

            <div className="flex gap-12">
              <button
                onClick={() => setSelectedSession(null)}
                className="flex-1 px-24 py-14 border-2 border-fog/50 text-graphite rounded-button font-medium hover:border-graphite/30 transition-all"
              >
                Annuller
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 px-24 py-14 bg-graphite text-white rounded-button font-medium hover:bg-graphite/90 hover:shadow-subtle transition-all"
              >
                Bekræft booking
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
