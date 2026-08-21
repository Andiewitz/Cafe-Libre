import { motion } from 'framer-motion'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import newHeroImage from '@/assets/images/new-hero-image.webp'
import heroBackground from '@/assets/images/hero-background.webp'
import avatarBarista from '@/assets/images/avatar-barista.jpg'
import avatarCustomer from '@/assets/images/avatar-customer.jpg'
import avatarHands from '@/assets/images/avatar-hands.jpg'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-28 sm:pt-36 md:pt-40 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Abstract background ambient elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-surface-container-high rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-primary-container rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-y-0 gap-x-6 items-center">
        {/* Text column - order-2 on mobile, placed over bottom 1/4 of the image (-mt-20 / -mt-28), order-1 on desktop */}
        <div className="order-2 md:order-1 md:col-span-6 flex flex-col items-start space-y-5 relative z-40 -mt-20 sm:-mt-28 md:mt-0">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-h1 text-primary drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:drop-shadow-none"
          >
            Awaken Your Senses With <br />
            <span className="text-secondary italic font-light">Every Sip.</span>
          </motion.h1>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-on-surface-variant max-w-md"
          >
            Discover hand-roasted blends from sustainable farms across the globe. We craft
            experiences, not just beverages.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-3"
          >
            <a
              href="#signature-blends"
              className="bg-secondary text-on-secondary font-label-md px-8 py-4 rounded-full hover:bg-secondary-fixed transition-colors active:translate-y-[2px] shadow-lg shadow-secondary/20 flex items-center gap-2"
            >
              Explore Blends
              <MaterialSymbol name="arrow_forward" />
            </a>
            <a
              href="https://maps.google.com/?q=123+Coffee+Street,+Portland,+OR+97201"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-secondary border border-secondary/30 font-label-md px-8 py-4 rounded-full hover:border-secondary transition-colors active:translate-y-[2px] flex items-center gap-2"
            >
              <span>Visit Us</span>
              <MaterialSymbol name="location_on" className="text-base" />
            </a>
          </motion.div>

          {/* Social proof / Reviews (z-50) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 pt-6 border-t border-outline-variant/30 w-full max-w-md mt-6 relative z-50"
          >
            <div className="flex -space-x-4">
              <img
                src={avatarBarista}
                alt="Barista portrait"
                className="w-12 h-12 rounded-full border-2 border-background object-cover"
                loading="lazy"
              />
              <img
                src={avatarCustomer}
                alt="Customer enjoying coffee"
                className="w-12 h-12 rounded-full border-2 border-background object-cover"
                loading="lazy"
              />
              <img
                src={avatarHands}
                alt="Hands holding coffee mug"
                className="w-12 h-12 rounded-full border-2 border-background object-cover"
                loading="lazy"
              />
              <div className="w-12 h-12 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center text-xs font-label-md text-primary">
                +2k
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-secondary text-sm">
                <MaterialSymbol name="star" filled className="text-sm" />
                <MaterialSymbol name="star" filled className="text-sm" />
                <MaterialSymbol name="star" filled className="text-sm" />
                <MaterialSymbol name="star" filled className="text-sm" />
                <MaterialSymbol name="star_half" filled className="text-sm" />
              </div>
              <span className="font-label-md uppercase tracking-wider text-[10px] text-on-surface-variant mt-1">
                Loved by coffee enthusiasts
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right column - order-1 on mobile (on top), order-2 on desktop */}
        <div className="order-1 md:order-2 md:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[460px] md:max-w-none mx-auto"
          >
            {/* Subtle caramel gradient behind image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-tr from-[#D2691E]/40 via-[#F4C28C]/30 to-[#FFF0F5]/20 rounded-full blur-[60px] pointer-events-none z-10"
            />
            {/* Image container with animated float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-full aspect-square overflow-hidden rounded-2xl z-20"
            >
              <img
                src={newHeroImage}
                alt="Coffee brew being poured"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Brown gradient facing upwards with higher z-index (z-30) than the caramel gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#210e0b] via-[#210e0b]/80 to-transparent pointer-events-none z-30" />
    </section>
  )
}
