import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, CoffeeBeanIcon } from '@/components/icons/IconSet'
import { MenuCard } from '@/components/common/MenuCard'
import { menuItems } from '@/data/menu'

const popularItems = menuItems.filter((item) => item.popular).slice(0, 6)

export function MenuPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#F6EDE2] relative overflow-hidden font-sans">
      <Container size="lg" className="relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-[#E8D9CC] shadow-xs">
            <CoffeeBeanIcon className="h-4 w-4 text-[#C87D32]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B5A3E]">
              Handcrafted Selections
            </span>
          </div>
          <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl text-[#210E0B] font-normal tracking-wide mt-2">
            Our Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E4F3E] max-w-md mx-auto">
            Our most-loved artisanal drinks and fresh bakery favorites, crafted with care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
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
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/menu">
            <Button
              variant="primary"
              className="bg-[#210E0B] hover:bg-[#3E2113] text-[#FAF2EA] px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Explore Full Menu
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
