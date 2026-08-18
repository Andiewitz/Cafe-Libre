import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export type BadgeVariant = 'default' | 'outline' | 'secondary'

export interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: ReactNode
}

const badgeVariants = {
  default: 'bg-espresso text-cream',
  outline: 'border border-primary text-primary bg-transparent',
  secondary: 'bg-accent/10 text-accent',
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
