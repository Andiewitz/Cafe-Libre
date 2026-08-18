import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { signatureBlends } from '@/data/menu'
import { formatPrice } from '@/utils/formatters'
import { motion } from 'framer-motion'
import latteImage from '@/assets/images/latte-supreme.jpg'
import espressoImage from '@/assets/images/espresso-dark.jpg'
import matchaImage from '@/assets/images/matcha-reserve.jpg'

const blendImages: Record<string, string> = {
  '1': latteImage,
  '2': espressoImage,
  '3': matchaImage,
}

export function SignatureCoffees() {
  const largeCard = signatureBlends[0]
  const smallCards = signatureBlends.slice(1)

  return (
    <section className="py-24 md:py-32 relative bg-[#FFEEE0]" id="signature-blends">
      {/* Wave divider - hero background color (#210e0b) sitting on top of this section */}
      <div className="absolute top-0 left-0 w-full h-16 pointer-events-none z-[9999]">
        <svg
          className="block w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
          style={{ fill: '#210e0b' }}
        >
          <path d="M0,0 L1440,0 L1440,70 C1180,10 1000,50 840,5 C680,-20 500,25 340,5 C160,-15 20,35 0,55 Z" />
        </svg>
      </div>
    
      {/* Background blur circles */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[90px] opacity-25 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <MaterialSymbol name="coffee_maker" filled className="text-secondary mb-4 opacity-50" />
          <h2 className="font-display text-[2rem] md:text-[3rem] font-bold text-primary mb-6">
            Our Signature Coffees
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-center">
            Explore our premium coffee blends, each one carefully crafted to deliver rich, bold
            flavors that will transform your daily coffee experience.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Large feature card */}
          <motion.div
            className="md:col-span-8 md:row-span-2 group relative rounded-3xl overflow-hidden bg-surface-container ambient-shadow flex flex-col justify-end p-8 border border-outline-variant/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <img
                src={blendImages[largeCard.id]}
                alt={largeCard.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90"></div>
            </div>

            <div className="relative z-10 w-full md:w-2/3">
              <div className="flex gap-2 mb-4">
                {largeCard.badges?.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 glass-panel rounded-full text-xs font-label-md text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="font-headline-md text-primary mb-2">{largeCard.name}</h3>
              <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                {largeCard.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-secondary">
                  {formatPrice(largeCard.price)}
                </span>
                <button className="bg-surface text-primary border border-primary/30 w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                  <MaterialSymbol name="add_shopping_cart" className="text-sm" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Small cards */}
          {smallCards.map((item, index) => (
            <motion.div
              key={item.id}
              className="md:col-span-4 md:row-span-1 group relative rounded-3xl overflow-hidden bg-surface-container ambient-shadow p-6 border border-outline-variant/20 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div
                className={`absolute w-48 h-48 rounded-full blur-2xl ${
                  index === 0
                    ? 'right-[-20%] top-[-20%] bg-secondary/10'
                    : 'left-[-20%] bottom-[-20%] bg-primary/10'
                }`}
              />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface">
                  <img
                    src={blendImages[item.id]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <button className="text-on-surface-variant hover:text-secondary">
                  <MaterialSymbol name="favorite_border" className="text-xl" />
                </button>
              </div>

              <div className="relative z-10 mt-4">
                <h4 className="font-headline-sm text-primary mb-1 text-lg">{item.name}</h4>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-secondary">{formatPrice(item.price)}</span>
                  <button className="text-primary font-label-md text-sm uppercase tracking-wider hover:text-secondary">
                    Add +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
