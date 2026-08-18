import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

export interface SocialLinkProps {
  href: string
  label: string
  icon: ReactNode
  className?: string
}

export function SocialLink({ href, label, icon, className }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full',
        'text-primary transition-all duration-300',
        'hover:bg-primary hover:text-bg',
        className,
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}
