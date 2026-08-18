import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CoffeeBeanIcon } from '@/components/icons/IconSet'
import { menuCategories, getMenuItemsByCategory, type MenuItem } from '@/data/menu'
import { formatPrice } from '@/utils/formatters'
import { cn } from '@/utils/cn'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const items = getMenuItemsByCategory(activeCategory)

  return (
    <section className="pt-24 pb-20">
      <Container size="lg">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <CoffeeBeanIcon className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-display text-4xl font-bold">Our Menu</h1>
          <p className="mt-3 text-primary-muted">Every cup tells a story. Every bite delights.</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.nav
          className="mb-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50',
                activeCategory === cat.id
                  ? 'bg-espresso text-cream shadow-md'
                  : 'bg-bg-alt text-charcoal hover:bg-primary/5',
              )}
            >
              {cat.name}
            </button>
          ))}
        </motion.nav>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, staggerChildren: 0.1 }}
          >
            {items.length === 0 ? (
              <p className="col-span-full text-center text-primary-dark/50">
                No items in this category yet.
              </p>
            ) : (
              items.map((item, index) => (
                <MenuItemCard key={item.id} item={item} delay={index * 0.05} />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}

function MenuItemCard({ item, delay }: { item: MenuItem; delay: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-bg-alt p-6 shadow-sm',
        'transition-all duration-300 hover:shadow-card-hover',
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-primary">{item.name}</h3>
          <Badge variant="default" className="mt-1">
            {formatPrice(item.price)}
          </Badge>
        </div>
        {item.popular && (
          <Badge variant="secondary" className="bg-accent/10">
            Popular
          </Badge>
        )}
      </div>

      <p className="mt-2 text-sm text-primary-muted">{item.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 text-yellow-400"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.27 2 9.27 8.91 8.26z" />
            </svg>
          ))}
        </div>
        <Button variant="ghost" size="sm">
          Add to order
        </Button>
      </div>
    </motion.div>
  )
}
