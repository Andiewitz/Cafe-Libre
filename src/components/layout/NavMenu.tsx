import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { navItems } from '@/components/layout/navItems'

export function NavMenuDesktop() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <motion.div key={item.href} whileHover={{ y: -2 }}>
          <NavLink
            to={item.href}
            end
            className={cn(
              'relative text-sm font-medium text-charcoal transition-colors hover:text-primary',
              'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300',
              'hover:after:w-full',
            )}
          >
            {item.label}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  )
}
