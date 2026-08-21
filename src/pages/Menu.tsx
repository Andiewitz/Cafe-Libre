import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { CoffeeBeanIcon } from '@/components/icons/IconSet'
import { MenuCard } from '@/components/common/MenuCard'
import { menuCategories, getMenuItemsByCategory } from '@/data/menu'
import { cn } from '@/utils/cn'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartToast, setCartToast] = useState<{ name: string; price: number } | null>(null)

  const items = getMenuItemsByCategory(activeCategory)

  const handleAddToCart = (item: { name: string; price: number }) => {
    setCartToast({ name: item.name, price: item.price })
    setTimeout(() => setCartToast(null), 3000)
  }

  return (
    <div className="bg-[#F6EDE2] min-h-screen text-[#210E0B] pt-28 sm:pt-36 pb-24 relative overflow-hidden font-sans">
      {/* Background ambient accents */}
      <div className="absolute top-12 right-10 w-96 h-96 bg-[#C87D32]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8B4513]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cart Toast Notification */}
      <AnimatePresence>
        {cartToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-5 sm:right-8 z-50 bg-[#210E0B] text-[#FAF2EA] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#C87D32]/40 flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <div>
              <p className="font-bold text-sm">Added to your order!</p>
              <p className="text-xs text-[#FAF2EA]/75">
                {cartToast.name} • ${cartToast.price.toFixed(2)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Container size="lg" className="relative z-10">
        {/* Header with Oleo Script Title */}
        <motion.div
          className="mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#E8D9CC] shadow-xs">
            <CoffeeBeanIcon className="h-4 w-4 text-[#C87D32]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B5A3E]">
              Fresh Micro-Roasts
            </span>
          </div>

          {/* Oleo Script Font for "Our Menu" */}
          <h1 className="font-hero text-4xl sm:text-6xl md:text-7xl text-[#210E0B] font-normal tracking-wide leading-tight mt-2">
            Our Menu
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#6E4F3E] max-w-md mx-auto">
            Every cup tells a story. Savor direct-trade single origins and scratch-baked treats.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.nav
          className="mb-10 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          aria-label="Menu categories"
        >
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C87D32]',
                  isActive
                    ? 'bg-[#210E0B] text-[#FAF2EA] shadow-md scale-105'
                    : 'bg-white/80 text-[#5D4233] border border-[#EBDCD0] hover:bg-white hover:text-[#210E0B] hover:border-[#D6A068]',
                )}
              >
                {cat.name}
              </button>
            )
          })}
        </motion.nav>

        {/* Menu Items Grid with Modern Right-Side Card Architecture */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {items.length === 0 ? (
              <div className="col-span-full py-16 text-center text-[#8B5A3E]">
                <p className="text-base font-medium">No items found in this category.</p>
              </div>
            ) : (
              items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <MenuCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    popular={item.popular}
                    badgeText={item.badges?.[0]}
                    category={item.category}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  )
}
