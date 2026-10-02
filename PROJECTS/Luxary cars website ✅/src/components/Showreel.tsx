import { Play } from 'lucide-react'
import { images, SHOWREEL_URL } from '../lib/images'

export function Showreel() {
  return (
    <section className="bg-black py-8">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <a
          href={SHOWREEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/9] overflow-hidden rounded-sm"
        >
          <img
            src={images.showreel}
            alt="LuxureDetails showreel poster"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div
            className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35"
            aria-hidden="true"
          />

          <div
            className="absolute top-0 right-0 left-0 h-24 bg-gradient-to-b from-black to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
            >
              <Play className="ml-1 text-white" size={28} fill="white" />
            </div>
            <span className="text-sm font-medium tracking-wide text-white">
              Play showreel
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
