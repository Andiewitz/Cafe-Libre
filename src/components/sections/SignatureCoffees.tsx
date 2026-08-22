import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { TextEffect } from '@/components/ui/text-effect'
// Local signature coffee image assets
const coldBrewCup = '/images/cold-brew.png'
const blackAmericanoImg = '/images/black-americano.png'
const cappuccinoSlideImg = '/images/cappucino.png'
const sierraBlendImg = '/images/new-sierra-blend.png'
const highlandMistImg = '/images/highland-mist-blend.png'
const velvetVanillaMochaImg = '/images/velvet-vanila-mocha.png'

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
      '-top-20 sm:-top-28 md:-top-32 left-3 sm:left-5 md:left-7 w-[72%] sm:w-[70%] md:w-[68%] max-w-[390px]',
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

  // Preload and warm cache for all slide and product imagery
  useEffect(() => {
    const imagesToPreload = [
      coldBrewCup,
      blackAmericanoImg,
      cappuccinoSlideImg,
      sierraBlendImg,
      highlandMistImg,
      velvetVanillaMochaImg,
    ]

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

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
      id: 'sierra-blend',
      name: 'Sierra Blend',
      type: 'High-Altitude Mountain Roast',
      price: '$14.99',
      image: sierraBlendImg,
    },
    {
      id: 'highland-mist',
      name: 'Highland Mist Blend',
      type: 'Single-Origin Medium-Light',
      price: '$15.49',
      image: highlandMistImg,
    },
    {
      id: 'velvet-vanilla-mocha',
      name: 'Velvet Vanilla Mocha',
      type: 'Artisanal Infused Dark Blend',
      price: '$16.29',
      image: velvetVanillaMochaImg,
    },
  ]

  return (
    <section className="pt-40 sm:pt-52 md:pt-64 lg:pt-72 pb-20 md:pb-32 bg-[#F6EDE2] relative overflow-hidden" id="signature-blends">
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

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-16 relative z-10 pt-8 sm:pt-14 md:pt-16">
        {/* Main Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 md:mb-28">
          {/* Left Column: Product info & pricing (order-2 on small screens, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5 xl:col-span-5 flex flex-col items-start space-y-6"
          >
            <div key={activeSlide} className="space-y-4">
              <div className="font-hero text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#2E170C] leading-[1.1] font-normal">
                <TextEffect per="word" preset="slide" as="span" className="inline">
                  {currentSlide.title}
                </TextEffect>
                <br />
                <TextEffect per="word" preset="slide" delay={0.12} as="span" className="text-[#3D2010] inline">
                  {currentSlide.subtitle}
                </TextEffect>
              </div>
              <TextEffect
                per="word"
                preset="fade"
                delay={0.2}
                className="text-[#5D4233] text-base md:text-lg leading-relaxed max-w-md font-sans"
              >
                {currentSlide.description}
              </TextEffect>
            </div>

            {/* Price, Quantity, and Buy Button (beside each other on mobile, stacked on desktop with NO wrapper container) */}
            <div className="flex flex-row flex-wrap lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-6 pt-1 w-full">
              {/* Pricing */}
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E170C] font-sans tracking-tight">
                  ${unitPrice.toFixed(2)}
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl text-[#8E7365] line-through font-sans">
                  ${originalUnitPrice.toFixed(2)}
                </span>
              </div>

              {/* Quantity selector and Buy button */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center bg-[#D6A068]/30 border border-[#C88846]/40 rounded-full px-3 py-1.5 gap-3 shadow-sm">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C87D32] text-white flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-[#B36C25] active:scale-95 transition-all cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-[#2E170C] font-bold text-base sm:text-lg min-w-[24px] sm:min-w-[28px] text-center font-sans select-none">
                    {quantity.toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C87D32] text-white flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-[#B36C25] active:scale-95 transition-all cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleBuyMain}
                  className="bg-[#2E170C] text-white font-medium px-6 sm:px-9 py-3 sm:py-4 rounded-2xl hover:bg-[#1C0D06] active:translate-y-[1px] active:scale-[0.98] transition-all shadow-xl shadow-[#2E170C]/30 text-sm sm:text-base lg:text-lg cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Buy ${totalPrice}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3-picture Carousel Slider & Cup (order-1 on small screens, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-7 xl:col-span-7 relative flex justify-center items-center pt-2 sm:pt-4 lg:pt-12"
          >
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
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = '/placeholder.svg'
                    }}
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
          </motion.div>
        </div>

        {/* Bottom Product Picks: 3 Miniature Brown Shapes with Floating Coffee Bags (No outer box container) */}
        <div className="mt-20 sm:mt-28 md:mt-32">
          <div className="text-center mb-20 sm:mb-28">
            <TextEffect
              as="h3"
              per="word"
              preset="slide"
              className="font-hero text-3xl sm:text-4xl text-[#2E170C] inline-block"
            >
              Featured Packaged Blends
            </TextEffect>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 sm:gap-16 lg:gap-8 max-w-[1060px] mx-auto">
            {products.map((item, idx) => {
              const isAdded = !!addedItems[item.id]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col items-center group w-full max-w-[320px] mx-auto"
                >
                  {/* Miniature Brown Shape Container */}
                  <div className="relative w-full">
                    {/* Taller Miniature Brown Curved Wedge SVG */}
                    <svg
                      viewBox="0 0 620 500"
                      className="w-full h-auto drop-shadow-[0_18px_25px_rgba(46,23,12,0.22)] group-hover:drop-shadow-[0_24px_32px_rgba(46,23,12,0.32)] transition-all duration-300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 50 480 L 560 480 Q 600 480 600 440 L 600 70 Q 600 20 550 35 L 55 195 Q 20 210 20 250 L 20 440 Q 20 480 50 480 Z"
                        fill="#2E170C"
                      />
                      <path
                        d="M 50 480 L 560 480 Q 600 480 600 440 L 600 70 Q 600 20 550 35 L 55 195 Q 20 210 20 250 L 20 440 Q 20 480 50 480 Z"
                        stroke="#4A2818"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Floating Coffee Bag (Uniform position and sizing across all three cards) */}
                    <div className="absolute -top-[62px] sm:-top-[74px] md:-top-[86px] inset-x-0 flex justify-center z-10 pointer-events-none">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          const target = e.currentTarget
                          target.onerror = null
                          target.src = '/placeholder.svg'
                        }}
                        className="w-[61%] sm:w-[63%] max-w-[196px] h-auto object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Lower Details inside the taller miniature brown shape */}
                    <div className="absolute bottom-5 sm:bottom-6 md:bottom-7 inset-x-0 px-4 sm:px-6 text-center flex flex-col items-center z-20">
                      <h4 className="font-hero text-base sm:text-lg lg:text-xl text-[#FAF2EA] tracking-wide leading-tight line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#D6A068] font-sans font-medium mt-1 line-clamp-1">
                        {item.type}
                      </p>

                      <div className="flex items-center justify-between w-full max-w-[210px] mt-3 pt-2.5 border-t border-[#4A2818]/70">
                        <span className="text-[#FAF2EA] font-bold text-base sm:text-lg font-sans">
                          {item.price}
                        </span>

                        <button
                          onClick={() => handleAddToCart(item.id)}
                          className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold shadow-md transition-all cursor-pointer active:scale-95 ${
                            isAdded
                              ? 'bg-green-600 text-white'
                              : 'bg-[#C87D32] hover:bg-[#D2691E] text-white'
                          }`}
                          aria-label={`Add ${item.name} to cart`}
                        >
                          {isAdded ? (
                            <>
                              <span className="text-xs">✓</span>
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <MaterialSymbol name="shopping_bag" className="text-sm" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Hidden image preloader to keep all slide graphics cached and GPU decoded in browser memory */}
      <div className="hidden" aria-hidden="true">
        {BREW_SLIDES.map((slide, i) => (
          <img key={i} src={slide.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>
    </section>
  )
}
