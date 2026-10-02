import { motion } from 'framer-motion'
import type { Product } from '../data/content'

type ProductCardProps = {
  product: Product
  className?: string
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <motion.article
      className={`group shrink-0 ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <a href="#shop" className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-sand/40">
          {product.bestseller && (
            <span
              className="absolute left-3 top-3 z-10 bg-terracotta px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream"
            >
              Bestseller
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={product.imageAlt}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-[11px] uppercase tracking-[0.12em] text-ink/50">{product.brand}</p>
          <h3 className="text-sm font-medium leading-snug text-ink">{product.name}</h3>
          <p className="text-sm tabular-nums text-ink/80">{formatPrice(product.price)}</p>
        </div>
      </a>
    </motion.article>
  )
}
