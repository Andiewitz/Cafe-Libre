import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

export interface CardProps {
  className?: string
  children: ReactNode
  image?: ReactNode
  hover?: boolean
}

export function Card({ className, children, image, hover = true }: CardProps) {
  const hoverProps = hover ? { whileHover: { y: -4, scale: 1.01 } } : {}

  return (
    <motion.div
      {...hoverProps}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-bg-alt shadow-sm',
        'hover:shadow-card-hover transition-shadow duration-300',
        className,
      )}
    >
      {image && <div className="relative aspect-[4/3] overflow-hidden">{image}</div>}
      <div className="p-6">{children}</div>
    </motion.div>
  )
}

export interface CardHeaderProps {
  className?: string
  children: ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn('mb-2', className)}>{children}</div>
}

export interface CardTitleProps {
  className?: string
  children: ReactNode
}

export function CardTitle({ className, children }: CardTitleProps) {
  return <h3 className={cn('text-xl font-bold text-primary', className)}>{children}</h3>
}

export interface CardDescriptionProps {
  className?: string
  children: ReactNode
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return <p className={cn('mt-1 text-sm text-primary-muted', className)}>{children}</p>
}

export interface CardFooterProps {
  className?: string
  children: ReactNode
}

export function CardFooter({ className, children }: CardFooterProps) {
  return <div className={cn('mt-4 pt-4 border-t border-border', className)}>{children}</div>
}
