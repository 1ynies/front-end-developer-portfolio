import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-sand py-14 md:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl tracking-wide md:text-4xl">Be the First to Know</h2>
          <p className="mt-3 text-sm text-ink/70">
            New arrivals, trunk shows, and exclusive offers — delivered to your inbox.
          </p>

          {submitted ? (
            <p className="mt-8 text-sm font-medium text-terracotta">Thank you for subscribing.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-terracotta"
              />
              <button
                type="submit"
                className="bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-ink/90"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
