import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  icon?: React.ReactNode
}

const buttonVariants = {
  primary:
    'bg-secondary text-on-secondary hover:bg-secondary-fixed transition-colors duration-300 shadow-sm',
  secondary:
    'bg-surface text-secondary border border-secondary/30 hover:border-secondary transition-colors duration-300 shadow-sm',
  ghost:
    'bg-transparent text-on-surface-variant hover:text-secondary transition-colors duration-200',
  outline:
    'border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary transition-colors duration-200',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  icon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50',
        'disabled:cursor-not-allowed disabled:opacity-60',
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : icon ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : null}
      {children}
    </button>
  )
}
