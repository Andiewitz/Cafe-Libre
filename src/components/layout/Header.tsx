import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dialog } from '@/components/ui/Dialog'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { navItems } from '@/components/layout/navItems'
import { cn } from '@/utils/cn'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const headerBg = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.12)'],
  )
  const headerBorder = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['transparent', 'rgba(255, 255, 255, 0.18)'],
  )

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-16 py-4 transition-all duration-300 ${
        scrollYProgress > 0
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20'
          : 'bg-background'
      }`}
      style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
    >
      <div className="flex items-center gap-2">
        <MaterialSymbol name="local_cafe" filled className="text-primary" />
        <span className="font-headline-sm font-bold text-primary tracking-tight">Café Aura</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'font-label-md text-sm transition-colors duration-150 active:scale-95',
                isActive
                  ? 'text-secondary border-b-2 border-secondary pb-1 font-bold'
                  : 'text-on-surface-variant hover:text-primary rounded-lg px-2 py-1 hover:bg-surface-container/50',
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-4 items-center">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <MaterialSymbol name="shopping_bag" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <MaterialSymbol name="favorite" />
          </button>
        </div>
        <Link
          to="#"
          className="hidden md:inline font-label-md text-primary hover:text-secondary transition-colors"
        >
          Login
        </Link>
        <Link
          to="#"
          className="bg-secondary text-on-secondary font-label-md px-6 py-2 rounded-full hover:bg-secondary-fixed transition-colors active:translate-y-[2px]"
        >
          Sign Up
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-primary"
          aria-label="Open menu"
        >
          <MaterialSymbol name="menu" />
        </button>
      </div>

      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} title="Mobile navigation menu">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-medium text-cream transition-colors hover:text-secondary"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </Dialog>
    </motion.header>
  )
}
