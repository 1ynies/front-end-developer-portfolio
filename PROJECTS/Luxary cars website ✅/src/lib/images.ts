import { publicAsset } from './publicAsset'

export const images = {
  hero: publicAsset('/images/hero.jpg'),
  serviceEntry: publicAsset('/images/service-entry.jpg'),
  serviceMaintenance: publicAsset('/images/service-maintenance.jpg'),
  serviceFull: publicAsset('/images/service-full.jpg'),
  showreel: publicAsset('/images/showreel.jpg'),
  features: publicAsset('/images/features.jpg'),
  booking: publicAsset('/images/booking.jpg'),
} as const

export const SHOWREEL_URL = 'https://www.youtube.com/watch?v=9V4wHcV1nJ8'
