'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Clock, User, Users, Zap, ArrowLeft } from 'lucide-react'
import Logo from '@/components/Logo'

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
        <div className="container-custom py-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-20">
              <Logo size="sm" />
              <div>
                <h1 className="text-xl font-light text-graphite">Book din session</h1>
                <p className="text-sm text-graphite/60">I dag, {new Date().toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="/" aria-label="Gå tilbage til forsiden">
                <ArrowLeft className="w-4 h-4" />
                Tilbage til forside
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-white border-b border-fog/30">
        <div className="container-custom py-20">
          <div className="flex flex-wrap gap-12">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              aria-label="Vis alle sessions"
              aria-pressed={filter === 'all'}
            >
              Alle sessions
            </Button>
            <Button
              onClick={() => setFilter('Nordic Flow')}
              variant={filter === 'Nordic Flow' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              aria-label="Filtrer Nordic Flow sessions"
              aria-pressed={filter === 'Nordic Flow'}
            >
              Nordic Flow
            </Button>
            <Button
              onClick={() => setFilter('Power Core')}
              variant={filter === 'Power Core' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              aria-label="Filtrer Power Core sessions"
              aria-pressed={filter === 'Power Core'}
            >
              Power Core
            </Button>
            <Button
              onClick={() => setFilter('Stretch & Restore')}
              variant={filter === 'Stretch & Restore' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              aria-label="Filtrer Stretch & Restore sessions"
              aria-pressed={filter === 'Stretch & Restore'}
            >
              Stretch & Restore
            </Button>
            <Button
              onClick={() => setFilter('Sweat 30')}
              variant={filter === 'Sweat 30' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              aria-label="Filtrer Sweat 30 sessions"
              aria-pressed={filter === 'Sweat 30'}
            >
              Sweat 30
            </Button>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="container-custom py-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {filteredSessions.map((session) => {
            const remaining = spotsRemaining(session)
            const almostFull = remaining <= 2
            const available = remaining > 0

            return (
              <Card key={session.id} className={`overflow-hidden ${!available && 'opacity-60'}`}>
                <CardHeader className="bg-gradient-to-r from-ice-blue/10 to-[#C4A582]/5 p-16 border-b border-fog/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-light text-graphite">{session.time}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4" />
                        {session.duration} min
                      </CardDescription>
                    </div>
                    <div className={`px-12 py-6 rounded-full text-xs font-medium border ${difficultyColors[session.difficulty]}`}>
                      {session.difficulty}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-20">
                  <h3 className="text-lg font-medium text-graphite mb-12">{session.type}</h3>
                  <div className="space-y-8">
                    <div className="flex items-center gap-8 text-sm text-graphite/70">
                      <User className="w-4 h-4 text-[#C4A582]" />
                      <span>{session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <Users className="w-4 h-4 text-[#C4A582]" />
                      <span className={almostFull ? 'text-[#C4A582] font-medium' : 'text-graphite/70'}>
                        {remaining} {remaining === 1 ? 'plads' : 'pladser'} tilbage af {session.spotsTotal}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-20 pt-0 flex-col gap-8">
                  <Button
                    onClick={() => handleBooking(session)}
                    disabled={!available}
                    className="w-full"
                    size="lg"
                    variant={available ? "default" : "outline"}
                    aria-label={available ? `Book ${session.type} kl. ${session.time}` : `Udsolgt - ${session.type} kl. ${session.time}`}
                  >
                    {available ? 'Book nu' : 'Udsolgt'}
                  </Button>
                  
                  {almostFull && available && (
                    <p className="text-xs text-[#C4A582] text-center flex items-center justify-center gap-4">
                      <Zap className="w-3 h-3" />
                      Næsten fyldt op
                    </p>
                  )}
                </CardFooter>
              </Card>
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
      <Dialog open={!!selectedSession} onOpenChange={(open) => !open && setSelectedSession(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Bekræft booking</DialogTitle>
            <DialogDescription>
              Gennemgå detaljerne før du bekræfter din booking
            </DialogDescription>
          </DialogHeader>
          
          {selectedSession && (
            <div className="space-y-16 py-16">
              <Card className="border-none shadow-none bg-porcelain">
                <CardContent className="p-20 space-y-16">
                  <div>
                    <div className="text-sm text-graphite/60 mb-4">Session</div>
                    <div className="text-lg font-medium text-graphite">{selectedSession.type}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-16">
                    <div>
                      <div className="text-sm text-graphite/60 mb-4">Tidspunkt</div>
                      <div className="text-graphite flex items-center gap-4">
                        <Clock className="w-4 h-4 text-[#C4A582]" />
                        {selectedSession.time}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-graphite/60 mb-4">Varighed</div>
                      <div className="text-graphite">{selectedSession.duration} min</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-graphite/60 mb-4">Instruktør</div>
                    <div className="text-graphite flex items-center gap-4">
                      <User className="w-4 h-4 text-[#C4A582]" />
                      {selectedSession.instructor}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-graphite/60 mb-4">Niveau</div>
                    <div className={`inline-block px-12 py-6 rounded-full text-xs font-medium border ${difficultyColors[selectedSession.difficulty]}`}>
                      {selectedSession.difficulty}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <DialogFooter className="flex gap-8 sm:gap-8">
            <Button
              onClick={() => setSelectedSession(null)}
              variant="outline"
              className="flex-1"
              aria-label="Annuller booking og luk dialog"
            >
              Annuller
            </Button>
            <Button
              onClick={confirmBooking}
              className="flex-1"
              aria-label="Bekræft og gennemfør booking"
            >
              Bekræft booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
