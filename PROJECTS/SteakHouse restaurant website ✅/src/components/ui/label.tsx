import * as React from 'react'
import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        'nav-label mb-2 block text-[10px] text-[var(--primary)]',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
