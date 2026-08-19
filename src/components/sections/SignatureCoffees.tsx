import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import coldBrewCup from '@/assets/images/cold-brew-cup.png'
import blackAmericanoImg from '@/assets/images/black-americano.png'
import cappuccinoSlideImg from '@/assets/images/capuccino.png'
import coffeeBeansBag from '@/assets/images/coffee-beans-bag.jpg'
import heroEspressoSplash from '@/assets/images/hero-espresso-splash.jpg'
import latteImg from '@/assets/images/latte.jpg'
import cappuccinoImg from '@/assets/images/cappuccino.jpg'

interface BrewSlide {
  title: string
  subtitle: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  imageContainerClass: string
  badges: [string, string][]
  sizePrices: {
    Small: number
    Medium: number
    Large: number
  }
}

const BREW_SLIDES: BrewSlide[] = [
  {
    title: 'Obsidian Nitro',
    subtitle: 'Cold Reserve',
    tagline: 'Single-Origin • 24h Cold Drip',
    description:
      'Slow-steeped for 24 continuous hours in pure mountain spring water, our Colombian Huila roast delivers a naturally sweet, silky cascade with notes of dark cacao and roasted hazelnut.',
    image: coldBrewCup,
    imageAlt: 'Obsidian Nitro Cold Brew with splashing coffee crown',
    imageContainerClass:
      '-top-24 sm:-top-32 md:-top-36 -left-4 sm:-left-8 md:-left-10 w-[78%] sm:w-[75%] md:w-[72%] max-w-[420px]',
    badges: [
      ['24-HR', 'COLD DRIP'],
      ['DARK CACAO', 'FINISH'],
      ['ULTRA-LOW', 'ACIDITY'],
    ],
    sizePrices: { Small: 4.99, Medium: 5.99, Large: 6.99 },
  },
  {
    title: 'Highland Ember',
    subtitle: 'Artisan Americano',
    tagline: 'Double Shot Lungo • Wild Honey',
    description:
      'A double shot of roasted Ethiopian Yirgacheffe pulled over crystal-clear artisan hot water, releasing fragrant citrus blossoms, toasted caramel, and a golden, resilient crema.',
    image: blackAmericanoImg,
    imageAlt: 'Highland Ember Americano double extraction',
    imageContainerClass:
      '-top-20 sm:-top-28 md:-top-32 -left-2 sm:-left-6 md:-left-8 w-[74%] sm:w-[72%] md:w-[70%] max-w-[400px]',
    badges: [
      ['DOUBLE SHOT', 'LUNGO'],
      ['ETHIOPIAN', 'YIRGACHEFFE'],
      ['GOLDEN', 'CREMA'],
    ],
    sizePrices: { Small: 4.49, Medium: 5.29, Large: 5.99 },
  },
  {
    title: 'Velvet Silk',
    subtitle: 'Crown Cappuccino',
    tagline: 'Italian Dark Roast • Micro-Foam',
    description:
      'Equal parts intense northern Italian espresso, steamed whole milk, and dense micro-foam crowned with raw Ceylon cinnamon and organic demerara crystals.',
    image: cappuccinoSlideImg,
    imageAlt: 'Velvet Silk Cappuccino with steamed micro-foam',
    imageContainerClass:
      '-top-20 sm:-top-28 md:-top-32 -left-2 sm:-left-6 md:-left-8 w-[75%] sm:w-[72%] md:w-[70%] max-w-[405px]',
    badges: [
      ['MICRO-FOAM', 'SILK HEAD'],
      ['CEYLON', 'CINNAMON'],
      ['ITALIAN', 'DARK ROAST'],
    ],
    sizePrices: { Small: 5.29, Medium: 6.29, Large: 7.19 },
  },
]

export function SignatureCoffees() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [quantity, setQuantity] = useState(3)
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large'>('Medium')
  const [addedMain, setAddedMain] = useState(false)
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({})

  const currentSlide = BREW_SLIDES[activeSlide]
  const unitPrice = currentSlide.sizePrices[selectedSize]
  const originalUnitPrice = unitPrice + 1.0
  const totalPrice = (unitPrice * quantity).toFixed(2)

  const handleAddToCart = (itemId: string) => {
    setAddedItems((prev) => ({ ...prev, [itemId]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [itemId]: false }))
    }, 2000)
  }

  const handleBuyMain = () => {
    setAddedMain(true)
    setTimeout(() => setAddedMain(false), 2500)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev < BREW_SLIDES.length - 1 ? prev + 1 : 0))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : BREW_SLIDES.length - 1))
  }

  const products = [
    {
      id: 'vanilla-bliss',
      name: 'Vanilla Blossom',
      type: 'Madagascar Vanilla Light Roast',
      price: '$13.49',
      image: latteImg,
    },
    {
      id: 'medium-roast',
      name: 'Huila Sunrise Estate',
      type: 'Colombian Single-Origin Medium',
      price: '$11.49',
      image: coffeeBeansBag,
    },
    {
      id: 'intense-roast',
      name: 'Midnight Crema',
      type: 'Italian Dark Espresso Roast',
      price: '$12.49',
      image: cappuccinoImg,
    },
  ]

  return (
    <section className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-32 bg-[#F6EDE2] relative overflow-hidden" id="signature-blends">
      {/* Wavy transition sitting on top of section matching hero background color */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          className="relative block w-full h-[90px] sm:h-[130px] md:h-[175px] lg:h-[220px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1440,0 L1440,90 C1320,170 1140,210 940,170 C700,120 520,30 260,85 C130,115 40,165 0,190 Z"
            fill="#210e0b"
          />
        </svg>
      </div>

      {/* Toast notification for add-to-cart */}
      <AnimatePresence>
        {addedMain && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-5 sm:right-8 z-50 bg-[#2E170C] text-[#FAF2EA] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#C87D32]/40 flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-[#C87D32] text-white flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <div>
              <p className="font-bold text-sm">Added to your order!</p>
              <p className="text-xs text-[#FAF2EA]/70">
                {quantity}x {currentSlide.title} ({selectedSize}) • ${totalPrice}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        {/* Main Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 md:mb-28">
          {/* Left Column: Product info & pricing */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#2E170C] leading-[1.1] font-normal">
                  {currentSlide.title} <br />
                  <span className="text-[#3D2010]">{currentSlide.subtitle}</span>
                </h2>
                <p className="text-[#5D4233] text-base md:text-lg leading-relaxed max-w-md font-sans">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-4xl sm:text-5xl font-bold text-[#2E170C] font-sans tracking-tight">
                ${unitPrice.toFixed(2)}
              </span>
              <span className="text-xl sm:text-2xl text-[#8E7365] line-through font-sans">
                ${originalUnitPrice.toFixed(2)}
              </span>
            </div>

            {/* Quantity selector and Buy button */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <div className="flex items-center bg-[#D6A068]/30 border border-[#C88846]/40 rounded-full px-3.5 py-1.5 gap-3.5 shadow-sm">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-8 h-8 rounded-full bg-[#C87D32] text-white flex items-center justify-center text-xl font-bold hover:bg-[#B36C25] active:scale-95 transition-all cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-[#2E170C] font-bold text-lg min-w-[28px] text-center font-sans select-none">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8 h-8 rounded-full bg-[#C87D32] text-white flex items-center justify-center text-xl font-bold hover:bg-[#B36C25] active:scale-95 transition-all cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleBuyMain}
                className="bg-[#2E170C] text-white font-medium px-9 py-4 rounded-2xl hover:bg-[#1C0D06] active:translate-y-[1px] active:scale-[0.98] transition-all shadow-xl shadow-[#2E170C]/30 text-base sm:text-lg cursor-pointer flex items-center gap-2"
              >
                <span>Buy ${totalPrice}</span>
              </button>
            </div>

            {/* Decorative bottom-left espresso splash */}
            <div className="pt-6 flex items-center gap-4">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md border-2 border-white/70 shrink-0">
                <img
                  src={heroEspressoSplash}
                  alt="Espresso with coffee splash"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-xs sm:text-sm text-[#7A5B4C] max-w-[200px] leading-snug">
                <span className="font-semibold text-[#2E170C] block mb-1">
                  Freshly Hand-Crafted
                </span>
                Every cup roasted & poured to absolute aromatic perfection.
              </div>
            </div>
          </div>

          {/* Right Column: Enlarged Dark Brown Wedge/Triangle SVG + Large Cold Brew Cup */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center items-center pt-20 sm:pt-28 lg:pt-12">
            <div className="relative w-full max-w-[620px]">
              {/* Enlarged SVG Curved Wedge / Soft Triangle Container */}
              <svg
                viewBox="0 0 620 430"
                className="w-full h-auto drop-shadow-[0_25px_35px_rgba(46,23,12,0.35)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 410 L 560 410 Q 600 410 600 370 L 600 70 Q 600 20 550 35 L 55 195 Q 20 210 20 250 L 20 370 Q 20 410 50 410 Z"
                  fill="#2E170C"
                />
              </svg>

              {/* Dynamic Coffee Cup / Brew Image floating over the wedge */}
              <div className={`absolute ${currentSlide.imageContainerClass} pointer-events-none z-10 flex items-center justify-center`}>
                <motion.img
                  key={activeSlide}
                  initial={{ scale: 0.92, rotate: activeSlide === 0 ? -16 : -4, opacity: 0.7 }}
                  animate={{ scale: 1, rotate: activeSlide === 0 ? -12 : 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  src={currentSlide.image}
                  alt={currentSlide.imageAlt}
                  className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] transform object-contain"
                  loading="eager"
                />
              </div>

              {/* Right Side Feature Text Badges */}
              <div className="absolute top-14 sm:top-20 md:top-24 right-4 sm:right-8 md:right-10 flex flex-col gap-4 sm:gap-6 md:gap-7 text-right z-10">
                {currentSlide.badges.map(([topText, btmText], i) => (
                  <div
                    key={i}
                    className="text-[#FAF2EA] tracking-widest text-[10px] sm:text-xs md:text-sm font-bold uppercase leading-tight font-sans drop-shadow-sm"
                  >
                    <div>{topText}</div>
                    <div className="text-[#D6A068]">{btmText}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Controls: Carousel Arrows/Dots and Size Selector */}
              <div className="absolute bottom-5 sm:bottom-8 md:bottom-9 left-0 right-0 px-4 sm:px-8 md:px-12 flex flex-col items-center gap-3.5 sm:gap-4 z-20">
                {/* Carousel navigation */}
                <div className="flex items-center justify-between w-full max-w-[280px] text-white">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C87D32] active:scale-90 text-[#E29A52] hover:text-white transition-all flex items-center justify-center text-xl font-bold cursor-pointer"
                    aria-label="Previous signature brew"
                  >
                    ←
                  </button>
                  <div className="flex items-center gap-2.5">
                    {BREW_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeSlide === idx ? 'bg-[#C87D32] w-6' : 'bg-white/40 hover:bg-white/70 w-2.5'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C87D32] active:scale-90 text-white transition-all flex items-center justify-center text-xl font-bold cursor-pointer"
                    aria-label="Next signature brew"
                  >
                    →
                  </button>
                </div>

                {/* Size Selector Box */}
                <div className="bg-[#C87D32] p-1.5 rounded-2xl flex items-center justify-between gap-1.5 shadow-xl w-full max-w-[300px]">
                  {(['Small', 'Medium', 'Large'] as const).map((sizeOption) => {
                    const isSelected = selectedSize === sizeOption
                    return (
                      <button
                        key={sizeOption}
                        onClick={() => setSelectedSize(sizeOption)}
                        className={`flex-1 flex flex-col items-center justify-center py-2 sm:py-2.5 px-2 rounded-xl transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white text-[#2E170C] font-bold shadow-md scale-[1.02]'
                            : 'text-white/90 hover:text-white hover:bg-white/10 font-medium'
                        }`}
                      >
                        {/* Cup icon */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={isSelected ? '2.2' : '1.5'}
                          className={`mb-0.5 transition-transform ${
                            sizeOption === 'Small'
                              ? 'w-3.5 h-3.5'
                              : sizeOption === 'Medium'
                                ? 'w-4 h-4'
                                : 'w-5 h-5'
                          }`}
                        >
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                          <line x1="6" y1="1" x2="6" y2="4" />
                          <line x1="10" y1="1" x2="10" y2="4" />
                          <line x1="14" y1="1" x2="14" y2="4" />
                        </svg>
                        <span className="text-xs sm:text-sm leading-tight font-sans">
                          {sizeOption}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Product Picks: 3 Cards with dark brown bases */}
        <div className="mt-8">
          <h3 className="font-hero text-3xl sm:text-4xl text-center text-[#2E170C] mb-12">
            Featured Packaged Blends
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 max-w-[960px] mx-auto">
            {products.map((item) => {
              const isAdded = !!addedItems[item.id]
              return (
                <div key={item.id} className="relative flex flex-col items-center group">
                  {/* Coffee Package Artwork protruding from the card */}
                  <div className="relative z-10 -mb-7 w-36 h-40 sm:w-40 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 bg-white group-hover:-translate-y-1 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Dark Brown Card Podium Base */}
                  <div className="bg-[#2E170C] rounded-2xl w-full pt-12 pb-7 px-5 text-center shadow-xl flex flex-col items-center border border-[#3D2010]">
                    <h4 className="font-semibold text-white text-lg tracking-wide">{item.name}</h4>
                    <p className="text-xs text-[#D6A068]/80 mt-0.5">{item.type}</p>
                    <p className="text-[#E6A868] font-bold text-lg mt-2">{item.price}</p>

                    {/* Floating Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(item.id)}
                      className={`mt-3.5 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95 ${
                        isAdded
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-[#2E170C] hover:bg-[#FAF2EA] hover:scale-105'
                      }`}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {isAdded ? (
                        <span className="font-bold text-sm">✓</span>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-4 h-4"
                        >
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
