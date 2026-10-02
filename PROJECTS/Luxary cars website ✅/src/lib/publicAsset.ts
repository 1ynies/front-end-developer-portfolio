/** Public folder URL that respects Vite `base` (e.g. /demos/luxury-cars/). */
export function publicAsset(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${clean}`
}
