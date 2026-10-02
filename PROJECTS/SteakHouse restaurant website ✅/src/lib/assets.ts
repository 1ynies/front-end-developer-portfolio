function publicAsset(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${clean}`
}

export const assets = {
  /** Close-up sizzling steak on the grill — Pexels #5632313 (Yorjan SERPA) */
  heroVideo: publicAsset('/videos/hero-steak-grill.mp4'),
  heroPoster:
    'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=80',
  philosophyImage:
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
  chefImage:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=2000&q=80',
  privateDiningImage:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
}
