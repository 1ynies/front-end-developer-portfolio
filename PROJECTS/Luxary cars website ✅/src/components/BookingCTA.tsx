import { motion } from 'motion/react'
import { images } from '../lib/images'

export function BookingCTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[500px] items-end overflow-hidden pb-20"
    >
      <img
        src={images.booking}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1120px] px-6">
        <motion.div
          style={{ maxWidth: 520 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Book your luxury car detailing today
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Click the link below. Fill out the details and we&apos;ll get back to
            you in less than 24 hours.
          </p>
          <a href="#contact" className="btn-outline mt-8 inline-block text-white">
            Get a quote now ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
