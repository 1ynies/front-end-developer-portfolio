import { motion, useInView } from 'motion/react'
import { type FormEvent, useRef, useState } from 'react'
import { GoldUnderlineHeading } from '@/components/effects/GoldUnderlineHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const timeSlots = [
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
]

const partySizes = ['2', '3', '4', '5', '6', '7', '8+']

export function Reservations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [time, setTime] = useState('')
  const [partySize, setPartySize] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="reservations"
      className="relative px-6 py-24 md:px-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <GoldUnderlineHeading>Reserve Your Table</GoldUnderlineHeading>
        <p className="mt-6 text-[var(--muted-foreground)]">
          We look forward to welcoming you.
        </p>

        <div
          className="mt-12 rounded-sm p-px"
          style={{
            background:
              'linear-gradient(135deg, rgba(201,151,62,0.5), rgba(201,151,62,0.05) 50%, rgba(201,151,62,0.2))',
          }}
        >
          <div
            className="rounded-sm p-8 text-left md:p-12"
            style={{
              background: 'rgba(13,9,5,0.85)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div>
                  <Label>Time</Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Party Size</Label>
                  <Select value={partySize} onValueChange={setPartySize} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {partySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size} guests
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Confirm Reservation
              </Button>
              <p className="text-center text-xs text-[var(--muted-foreground)]">
                Reservations confirmed via email and phone. Walk-ins always
                welcome at the bar.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
