import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, CoffeeBeanIcon } from '@/components/icons/IconSet'
import { menuItems } from '@/data/menu'
import { formatPrice } from '@/utils/formatters'

const popularItems = menuItems.filter((item) => item.popular)

export function MenuPreview() {
  return (
    <section className="section-padding">
      <Container size="lg">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <CoffeeBeanIcon className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold">Featured Favorites</h2>
          <p className="mt-3 text-primary-muted">Our most-loved drinks, crafted with care</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-bg-alt p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-between">
                <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                <Badge variant="secondary">{formatPrice(item.price)}</Badge>
              </div>
              <p className="mb-4 text-sm text-primary-muted">{item.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-yellow-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.27 2 9.27 8.91 8.26z" />
                    </svg>
                  ))}
                  <span className="text-xs text-primary-muted">(4.9)</span>
                </div>
                <Link
                  to="/menu"
                  className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all group-hover:opacity-100"
                >
                  Details
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              {item.popular && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1 rotate-45">
                  <Badge variant="default" className="bg-accent text-bg">
                    Best Seller
                  </Badge>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/menu">
            <Button variant="primary">
              View Full Menu
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
