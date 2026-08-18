import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, LeafIcon, CoffeeBeanIcon } from '@/components/icons/IconSet'
import coffeeImage from '@/assets/images/coffee-beans.jpg'

export function AboutPreview() {
  return (
    <section className="section-padding bg-bg-alt">
      <Container size="lg">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold">Our Story</h2>
          <p className="mt-3 text-primary-muted">Two years of passion, one perfect cup</p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={coffeeImage}
              alt="Barista pouring coffee"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl text-primary">
              Crafted with care, served with passion
            </h3>
            <p className="text-primary-muted">
              Brew & Bean began in 2019 as a small kiosk with a single mission: to make exceptional
              coffee accessible to everyone. Today, we roast our own beans sourced directly from
              small farms, ensuring every cup tells a story of quality and care.
            </p>

            <div className="space-y-4 pt-2">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <CoffeeBeanIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-primary">Small-Batch Roasting</h4>
                  <p className="text-sm text-primary-muted">
                    Each batch is carefully monitored for optimal flavor profile.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <LeafIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-primary">Ethical Sourcing</h4>
                  <p className="text-sm text-primary-muted">
                    Direct trade relationships with farmers ensuring fair wages.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/about">
                <Button variant="ghost">
                  Our Full Story
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
