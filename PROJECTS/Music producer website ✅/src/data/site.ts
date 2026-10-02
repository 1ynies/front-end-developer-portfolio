import { publicAsset } from '@/lib/utils'

export const navLinks = [
  { label: 'Beats', href: '#beats' },
  { label: 'Services', href: '#services' },
  { label: 'Credits', href: '#credits' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
] as const

export const marqueeGenres = [
  'Hip-Hop',
  'R&B',
  'Electronic',
  'Trap',
  'Soul',
  'Lo-Fi',
  'Afrobeats',
] as const

export const beats = [
  {
    title: 'Midnight Drive',
    genre: 'Trap',
    bpm: 142,
    cover: publicAsset('/images/covers/midnight-drive.jpg'),
  },
  {
    title: 'Velvet Room',
    genre: 'R&B',
    bpm: 88,
    cover: publicAsset('/images/covers/velvet-room.jpg'),
  },
  {
    title: 'Signal Loss',
    genre: 'Electronic',
    bpm: 128,
    cover: publicAsset('/images/covers/signal-loss.jpg'),
  },
  {
    title: 'Gold Dust',
    genre: 'Soul',
    bpm: 95,
    cover: publicAsset('/images/covers/gold-dust.jpg'),
  },
  {
    title: 'Low Tide',
    genre: 'Lo-Fi',
    bpm: 72,
    cover: publicAsset('/images/covers/low-tide.jpg'),
  },
  {
    title: 'East Side',
    genre: 'Hip-Hop',
    bpm: 96,
    cover: publicAsset('/images/covers/east-side.jpg'),
  },
] as const

export const services = [
  {
    name: 'Beat Licensing',
    description:
      'Exclusive or lease-ready instrumentals tailored to your sound and release timeline.',
    price: 'from $150',
  },
  {
    name: 'Full Production',
    description:
      'End-to-end production from sketch to final record — arrangement, recording, and polish.',
    price: 'from $800',
  },
  {
    name: 'Mixing & Mastering',
    description:
      'Clarity, punch, and loudness that translate on streaming, clubs, and radio.',
    price: 'from $250',
  },
] as const

export const credits = [
  { artist: 'Kai Rivers', role: 'Production · Mix', year: '2025' },
  { artist: 'Nox & The Tide', role: 'Full Production', year: '2025' },
  { artist: 'Mira Sol', role: 'Mixing', year: '2024' },
  { artist: 'Jalen Ortiz', role: 'Beat · Master', year: '2024' },
  { artist: 'Vanta Grey', role: 'Production', year: '2024' },
  { artist: 'The North Line', role: 'Recording · Mix', year: '2023' },
  { artist: 'Sable Knox', role: 'Mastering', year: '2023' },
  { artist: 'Echo Park', role: 'Production · Master', year: '2022' },
] as const

export const gearChips = [
  'SSL',
  'Neve 1073',
  'Pro Tools',
  'Ableton',
  'Adam Audio',
] as const

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'SoundCloud', href: 'https://soundcloud.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
] as const
