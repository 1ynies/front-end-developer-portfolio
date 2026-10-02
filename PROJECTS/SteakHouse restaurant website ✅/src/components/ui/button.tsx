import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap nav-label transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--primary)] text-[var(--primary-foreground)] hover:shadow-[0_0_24px_rgba(201,151,62,0.3)]',
        outline:
          'border border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)]/10',
        ghost:
          'border border-[var(--foreground)]/40 bg-transparent text-[var(--foreground)] hover:border-[var(--foreground)] hover:bg-white/5',
      },
      size: {
        default: 'h-11 px-8 py-2',
        sm: 'h-9 px-5',
        lg: 'h-12 px-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
