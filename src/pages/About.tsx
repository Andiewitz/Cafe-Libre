import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'

// Asset paths
const shopInteriorBanner =
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80'
const avatarBarista =
  'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80'
const coffeeBeans =
  'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80'
const latteArt =
  'https://images.unsplash.com/photo-1534687941688-6a1ae15a2e6f?auto=format&fit=crop&w=800&q=80'
const freshCroissant =
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'

export function About() {
  return (
    <div className="bg-[#F6EDE2] min-h-screen text-[#210E0B] pt-24 sm:pt-28 pb-28 font-sans">
      {/* ========================================================================= */}
      {/* WIDE PANORAMIC SHOP BANNER                                                */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[2.4/1] sm:aspect-[2.8/1] md:aspect-[3.2/1] min-h-[260px] max-h-[440px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-lg border border-[#E8DCD0] bg-[#210E0B]"
        >
          <img
            src={shopInteriorBanner}
            alt="Café Libre Shop Interior"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget
              target.onerror = null
              target.src = '/placeholder.svg'
            }}
            className="w-full h-full object-cover object-center"
          />

          {/* Warm Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#210E0B]/85 via-[#210E0B]/30 to-transparent" />

          {/* Banner Text & Map Link */}
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D6A068] font-bold mb-1">
                Pearl District • Portland, OR
              </p>
              <h1 className="font-hero text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF2EA] tracking-wide">
                Our Story
              </h1>
            </div>

            <a
              href="https://maps.google.com/?q=123+Coffee+Street,+Portland,+OR+97201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#210E0B] hover:bg-[#FAF5F0] text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 self-start sm:self-auto shrink-0"
            >
              <MaterialSymbol name="location_on" className="text-base text-[#C87D32]" />
              <span>Visit Us on Google Maps</span>
              <MaterialSymbol name="north_east" className="text-xs text-[#8E7365]" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* CLEAN UNCONTAINED EDITORIAL BLOG STORY                                    */}
      {/* ========================================================================= */}
      <Container size="md" className="max-w-3xl px-4 sm:px-6">
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* Article Header & Byline */}
          <header className="space-y-4 border-b border-[#E8DCD0] pb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B5A3E] uppercase tracking-wider">
              <span>Origin & Heritage</span>
              <span>•</span>
              <span>4 Min Read</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A0C05] leading-tight tracking-tight">
              Small Batches, Direct Relationships, and the Quiet Art of Great Coffee
            </h2>

            <div className="flex items-center gap-3 pt-3">
              <img
                src={avatarBarista}
                alt="Head Barista"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget
                  target.onerror = null
                  target.src = '/placeholder.svg'
                }}
                className="w-11 h-11 rounded-full object-cover border border-[#E8DCD0]"
              />
              <div>
                <p className="font-bold text-sm text-[#1A0C05]">The Café Libre Roasting Team</p>
                <p className="text-xs text-[#7A6052]">Portland, Oregon</p>
              </div>
            </div>
          </header>

          {/* Blog Story Prose */}
          <div className="text-[#3E2B21] leading-relaxed text-lg sm:text-xl space-y-8 font-normal">
            <p className="first-letter:float-left first-letter:text-6xl sm:first-letter:text-7xl first-letter:font-bold first-letter:text-[#C87D32] first-letter:mr-3 first-letter:font-hero first-letter:leading-none">
              Café Libre began in late 2018 with a secondhand, cast-iron sample drum roaster and a
              stubborn conviction: coffee was never meant to be a hurried commodity swallowed in
              gridlock traffic. It was meant to be an invitation to pause.
            </p>

            <p>
              We spent our earliest months cup-testing hundreds of green coffees imported directly
              from small-holder farming families in Huehuetenango, Guatemala and Yirgacheffe,
              Ethiopia. What we discovered was a tapestry of flavors that most commercial dark
              roasts completely incinerate: delicate notes of bergamot, candied citrus, wild
              blackberry, and raw honeycomb.
            </p>

            {/* Seamless Inline Photo Break */}
            <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#E8DCD0]">
                  <img
                    src={coffeeBeans}
                    alt="Freshly roasted whole beans"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = '/placeholder.svg'
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-[#8E7365] text-center font-medium italic">
                  Micro-batch single origins
                </p>
              </div>
              <div className="space-y-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#E8DCD0]">
                  <img
                    src={latteArt}
                    alt="Precision latte pour"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = '/placeholder.svg'
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-[#8E7365] text-center font-medium italic">
                  Artisanal espresso pours
                </p>
              </div>
              <div className="space-y-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#E8DCD0]">
                  <img
                    src={freshCroissant}
                    alt="Fresh baked pastry"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = '/placeholder.svg'
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-[#8E7365] text-center font-medium italic">
                  Scratch-baked pastries
                </p>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A0C05] pt-4">
              Direct-Trade Partnerships
            </h3>

            <p>
              True flavor begins long before the beans enter our Portland roastery. It begins with
              rich volcanic soil, high-altitude shade canopies, and farmers who are fairly
              compensated for their meticulous stewardship. We bypass broker middlemen to pay on
              average 35% above Fair Trade minimums directly to our grower cooperatives.
            </p>

            {/* Clean Open Pull Quote */}
            <blockquote className="my-8 pl-6 border-l-4 border-[#C87D32] space-y-2">
              <p className="font-hero text-2xl sm:text-3xl text-[#210E0B] leading-snug">
                “Every cup is a bridge between the high mountain farms where the beans are
                hand-picked and the quiet morning conversations in our cafe.”
              </p>
              <footer className="text-xs font-bold text-[#8B5A3E] uppercase tracking-wider">
                — Alex Rodriguez, Co-Founder
              </footer>
            </blockquote>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A0C05] pt-4">
              The 5-Kilogram Rule
            </h3>

            <p>
              While commercial factories roast hundreds of pounds per cycle with automated
              algorithms, we roast in small 5-kilogram batches. Every charge is monitored by ear for
              the first crack, carefully managing airflow and burner temperature curves to highlight
              each harvest’s innate terroir without imparting scorching or bitterness.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A0C05] pt-4">
              A Gathering Place for Portland
            </h3>

            <p>
              Whether you are stopping by for a swift morning espresso, settling in with a good
              book, or joining one of our weekend coffee cupping sessions, our door is always open.
              We designed Café Libre with warm Oregon timber, quiet corners, and natural lighting to
              be your neighborhood sanctuary.
            </p>
          </div>

          {/* Clean Article Footer Actions */}
          <footer className="pt-10 mt-12 border-t border-[#E8DCD0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-[#1A0C05] text-lg">Taste the difference</h4>
              <p className="text-sm text-[#7A6052]">
                Explore our full menu or find us in Portland’s Pearl District.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/menu"
                className="px-6 py-3 rounded-full bg-[#210E0B] text-[#FAF2EA] hover:bg-[#3E2113] text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                View Full Menu
              </Link>
              <a
                href="https://maps.google.com/?q=123+Coffee+Street,+Portland,+OR+97201"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white border border-[#E8DCD0] text-[#210E0B] hover:bg-[#FAF5F0] text-sm font-semibold transition-all active:scale-95 inline-flex items-center gap-1.5"
              >
                <span>Visit Us</span>
                <MaterialSymbol name="north_east" className="text-xs text-[#8E7365]" />
              </a>
            </div>
          </footer>
        </motion.article>
      </Container>
    </div>
  )
}
