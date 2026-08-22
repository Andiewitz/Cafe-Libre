import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog } from '@/components/ui/Dialog'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { cn } from '@/utils/cn'

interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartToast, setCartToast] = useState(false)
  const location = useLocation()

  const leftNavItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
  ]

  const rightNavItems: NavItem[] = [
    { label: 'MENU', href: '/menu' },
    {
      label: 'VISIT US',
      href: 'https://maps.google.com/?q=123+Coffee+Street,+Portland,+OR+97201',
      isExternal: true,
    },
  ]

  const handleCartClick = () => {
    setCartToast(true)
    setTimeout(() => setCartToast(false), 2500)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-[#231109] border border-[#3E2113] rounded-full shadow-[0_16px_36px_rgba(0,0,0,0.65)] px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 md:gap-8 w-full max-w-[820px]"
        >
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {leftNavItems.map((item, idx) => {
              const isActive = location.pathname === item.href
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'font-sans text-[11px] lg:text-xs font-semibold tracking-wider transition-colors duration-150',
                      isActive ? 'text-[#D6A068]' : 'text-[#EFE2D4]/90 hover:text-[#D6A068]',
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Center Coffee House Badge Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative -my-3 sm:-my-4 shrink-0"
          >
            <Link
              to="/"
              className="group flex items-center justify-center select-none"
              aria-label="Café Libre Coffee House Home"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1A0C05] border-2 border-[#C87D32] shadow-[0_6px_16px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center p-1 relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-[#E59E53] group-hover:shadow-[0_8px_20px_rgba(200,125,50,0.35)]">
                {/* Inner dashed accent ring */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#D6A068]/35 pointer-events-none" />

                <span className="text-[6.5px] sm:text-[7px] font-bold tracking-widest text-[#D6A068] uppercase -mb-0.5 font-sans leading-none">
                  CAFÉ LIBRE
                </span>

                {/* Coffee Cup Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF2EA] my-0.5 transition-transform group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <path d="M6 2v2M10 2v2M14 2v2" strokeLinecap="round" />
                </svg>

                <span className="text-[5.5px] sm:text-[6px] font-bold tracking-wider text-[#D6A068] uppercase -mt-0.5 font-sans leading-none">
                  COFFEE HOUSE
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Right Navigation & Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-6 lg:gap-7">
              {rightNavItems.map((item, idx) => {
                const isActive = location.pathname === item.href
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[11px] lg:text-xs font-semibold tracking-wider transition-colors duration-150 text-[#EFE2D4]/90 hover:text-[#D6A068] flex items-center gap-1"
                      >
                        {item.label}
                        <MaterialSymbol name="north_east" className="text-[12px] opacity-70" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          'font-sans text-[11px] lg:text-xs font-semibold tracking-wider transition-colors duration-150',
                          isActive ? 'text-[#D6A068]' : 'text-[#EFE2D4]/90 hover:text-[#D6A068]',
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </nav>

            {/* Action Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-2.5 sm:gap-3 text-[#FAF2EA]"
            >
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#FAF2EA]/85 hover:text-[#D6A068] hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                aria-label="Search coffee menu"
              >
                <MaterialSymbol name="search" className="text-xl" />
              </button>

              {/* Shopping Bag / Cart Button with Badge */}
              <button
                onClick={handleCartClick}
                className="relative w-8 h-8 rounded-full flex items-center justify-center text-[#FAF2EA]/85 hover:text-[#D6A068] hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                aria-label="View Cart"
              >
                <MaterialSymbol name="shopping_bag" className="text-xl" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C87D32] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  3
                </span>
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#FAF2EA] hover:text-[#D6A068] hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
                aria-label="Open mobile menu"
              >
                <MaterialSymbol name="menu" className="text-2xl" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Cart Quick Toast */}
      <AnimatePresence>
        {cartToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-5 sm:right-8 z-50 bg-[#210E0B] text-[#FAF2EA] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#C87D32]/40 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#C87D32] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <p className="font-bold text-sm">Your Coffee Basket (3 items)</p>
              <p className="text-xs text-[#FAF2EA]/70">Ready for instant roast & pour pickup</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen} title="Search coffee menu">
        <div className="p-2 space-y-4">
          <h3 className="font-serif text-xl text-[#2E170C]">Search Brews & Blends</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cold brew, espresso, beans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#3E2113]/20 rounded-xl px-4 py-2.5 text-sm text-[#2E170C] placeholder-[#8E7365] focus:outline-none focus:border-[#C87D32]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E7365] hover:text-[#2E170C]"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8E7365]">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {['Obsidian Nitro', 'Highland Ember', 'Vanilla Blossom', 'Demerara Cappuccino'].map(
                (term) => (
                  <Link
                    key={term}
                    to="/menu"
                    onClick={() => setSearchOpen(false)}
                    className="text-xs bg-[#FAF2EA] hover:bg-[#C87D32] hover:text-white px-3 py-1.5 rounded-full text-[#2E170C] transition-colors"
                  >
                    {term}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </Dialog>

      {/* Mobile Drawer Navigation */}
      <Dialog
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
        title="Café Libre Navigation Menu"
      >
        <div className="flex flex-col gap-6 pt-4">
          {/* Mobile Badge */}
          <div className="flex items-center gap-3 pb-4 border-b border-[#3E2113]/10">
            <div className="w-12 h-12 rounded-full bg-[#1A0C05] border-2 border-[#C87D32] flex flex-col items-center justify-center p-1">
              <span className="text-[5px] font-bold tracking-widest text-[#D6A068] uppercase leading-none">
                CAFÉ LIBRE
              </span>
              <MaterialSymbol name="local_cafe" className="text-base text-[#FAF2EA]" />
              <span className="text-[4.5px] font-bold tracking-wider text-[#D6A068] uppercase leading-none">
                COFFEE
              </span>
            </div>
            <div>
              <p className="font-bold text-[#2E170C] text-base">Café Libre</p>
              <p className="text-xs text-[#7A5B4C]">Artisanal Coffee & Reserve</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            {[...leftNavItems, ...rightNavItems].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-[#2E170C] hover:text-[#C87D32] transition-colors py-1"
                  >
                    <span>{item.label}</span>
                    <MaterialSymbol name="north_east" className="text-base text-[#8E7365]" />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-[#2E170C] hover:text-[#C87D32] transition-colors py-1"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#3E2113]/10 flex flex-col gap-3">
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#2E170C] text-white py-3 rounded-xl font-medium hover:bg-[#1C0D06] transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </Dialog>
    </>
  )
}
