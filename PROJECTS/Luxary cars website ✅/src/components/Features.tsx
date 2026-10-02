import { ArrowUpRight, Crosshair, ShieldCheck, Star } from 'lucide-react'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { images } from '../lib/images'

const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Crosshair,
    title: 'Precise work',
    body:
      'We uphold the highest standards of professionalism when servicing your vehicles.',
  },
  {
    icon: Star,
    title: 'Premium Products and Services',
    body:
      "Ensure your car's longevity with a periodic exterior protection treatment.",
  },
  {
    icon: ShieldCheck,
    title: 'High-Level Security and Privacy',
    body:
      'We understand the importance of privacy and security for our clients.',
  },
]

export function Features() {
  return (
    <section id="about" className="bg-black py-32">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.h2
            className="font-serif text-4xl text-white md:text-5xl"
            style={{ maxWidth: 420 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            We will take good care of your car
          </motion.h2>
          <motion.div
            className="mt-10 overflow-hidden rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={images.features}
              alt="Detailer polishing a luxury car"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex gap-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20"
              >
                <feature.icon size={18} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-light text-white/50">
                  {feature.body}
                </p>
              </div>
            </motion.div>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-60"
          >
            Get a quote now
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
