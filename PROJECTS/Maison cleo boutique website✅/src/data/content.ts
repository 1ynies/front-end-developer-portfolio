export type Product = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  imageAlt: string
  bestseller?: boolean
}

export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Brands', href: '#brands' },
  { label: 'Sale', href: '#sale' },
]

export const hero = {
  collection: 'Spring / Summer 2026',
  headline: 'Curated Style, Effortlessly Yours',
  cta: 'Shop New Arrivals',
  image:
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=80',
}

export const newArrivals: Product[] = [
  {
    id: 'na-1',
    name: 'Silk Drape Blouse',
    brand: 'Vince',
    price: 248,
    image:
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'na-2',
    name: 'Linen Midi Dress',
    brand: 'Ulla Johnson',
    price: 395,
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'na-3',
    name: 'Tailored Wide-Leg Trouser',
    brand: 'Veronica Beard',
    price: 298,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'na-4',
    name: 'Cashmere Crew Sweater',
    brand: 'Rails',
    price: 188,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'na-5',
    name: 'Embroidered Peasant Top',
    brand: 'Free People',
    price: 128,
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
  },
]

export const categories = [
  {
    title: 'Tops & Blouses',
    image:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Dresses & Skirts',
    image:
      'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Outerwear & Layers',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80',
  },
]

export const brands = [
  'Vince',
  'Velvet',
  'Ulla Johnson',
  'Free People',
  'Veronica Beard',
  'Rails',
]

export const looks = [
  {
    title: 'Weekend in Germantown',
    description:
      'Relaxed linen set layered with a cropped denim jacket and tan leather slides — effortless for brunch on the patio.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    items: ['Linen Camp Shirt', 'High-Rise Wide Leg', 'Leather Slide'],
  },
  {
    title: 'Evening on Broadway',
    description:
      'A fluid satin slip dress with statement earrings and a tailored blazer draped over the shoulders for cool Nashville nights.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    items: ['Satin Midi Slip', 'Structured Blazer', 'Gold Hoop Earrings'],
  },
  {
    title: 'Coffee & Gallery Hop',
    description:
      'Soft knit, vintage-wash denim, and pointed flats — polished enough for meetings, easy enough for all day.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    items: ['Ribbed Knit Tank', 'Vintage Straight Jean', 'Pointed Ballet Flat'],
  },
]

export const bestsellers: Product[] = [
  {
    id: 'bs-1',
    name: 'Oversized Trench Coat',
    brand: 'Velvet',
    price: 425,
    bestseller: true,
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bs-2',
    name: 'Pleated Midi Skirt',
    brand: 'Ulla Johnson',
    price: 265,
    bestseller: true,
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bs-3',
    name: 'Classic Button-Down',
    brand: 'Vince',
    price: 198,
    bestseller: true,
    image:
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bs-4',
    name: 'Merino Turtleneck',
    brand: 'Rails',
    price: 168,
    bestseller: true,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
  },
]

export const reviews = [
  {
    name: 'Elena M.',
    text:
      'The most thoughtful edit in Nashville. Every piece feels special without trying too hard — my go-to for events and everyday.',
    rating: 5,
  },
  {
    name: 'Jordan K.',
    text:
      'Impeccable styling help and a warm, unhurried experience. I always leave with something I actually wear on repeat.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    text:
      'Maison Cleo nails that balance of elevated and wearable. The brands are spot-on and the boutique itself is gorgeous.',
    rating: 5,
  },
]

export const instagramPhotos = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80',
]

export const store = {
  address: '4120 Charlotte Ave, Suite 108',
  city: 'Nashville, TN 37209',
  hours: 'Tue–Sat 10am–6pm · Sun 12pm–5pm',
}
