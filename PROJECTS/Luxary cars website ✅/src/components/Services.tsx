import { motion } from 'motion/react'
import { images } from '../lib/images'

const services = [
  {
    title: 'Entry level detail',
    body: 'Treat your luxury car to a thorough hand wash and wax application.',
    image: images.serviceEntry,
  },
  {
    title: 'Maintenance detail',
    body:
      "Ensure your car's longevity with a periodic exterior protection treatment.",
    image: images.serviceMaintenance,
  },
  {
    title: 'Full detail',
    body:
      'Pamper your vehicle with a complete treatment, leaving no detail overlooked.',
    image: images.serviceFull,
  },
]

const headingMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
}

export function Services() {
  return (
    <section id="services" className="bg-black pt-32 pb-24">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <p className="label-caps mb-8 border-t border-white/10 pt-6 text-white/40">
          Luxury car detailing
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.h2
            className="font-serif text-4xl text-white md:text-5xl"
            {...headingMotion}
          >
            Love in Every Detail
          </motion.h2>
          <motion.p
            className="max-w-[340px] text-base leading-relaxed font-light text-white/60"
            {...headingMotion}
            transition={{ ...headingMotion.transition, delay: 0.1 }}
          >
            Immerse yourself in luxury with our bespoke detailing packages
            tailored to your car&apos;s unique needs.
          </motion.p>
        </div>

        <div
          id="pricing"
          className="mt-16 scroll-mt-28 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group cursor-pointer overflow-hidden rounded-sm bg-[var(--card)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs font-light text-white/50">{service.body}</p>
                <span className="inline-block text-xs font-medium text-white group-hover:underline">
                  Learn more →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
