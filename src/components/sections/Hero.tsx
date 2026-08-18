import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { WaveDivider } from '@/components/common/WaveDivider'
import heroSplash from '@/assets/images/hero-espresso-splash.jpg'
import avatarBarista from '@/assets/images/avatar-barista.jpg'
import avatarCustomer from '@/assets/images/avatar-customer.jpg'
import avatarHands from '@/assets/images/avatar-hands.jpg'
import coffeeBeansBag from '@/assets/images/coffee-beans-bag.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-surface-container-high rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-primary-container rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left column */}
        <div className="md:col-span-6 flex flex-col items-start space-y-8 z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-outline/30 rounded-full bg-surface-container/50 backdrop-blur-sm">
            <MaterialSymbol name="auto_awesome" className="text-secondary text-sm" />
            <span className="font-label-md uppercase tracking-widest text-xs text-secondary">
              The Art of the Ritual
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-h1 text-primary">
            Awaken Your Senses With <br />
            <span className="text-secondary italic font-light">Every Sip.</span>
          </h1>

          {/* Body text */}
          <p className="font-body-lg text-on-surface-variant max-w-md">
            Discover hand-roasted blends from sustainable farms across the globe. We craft
            experiences, not just beverages.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#signature-blends"
              className="bg-secondary text-on-secondary font-label-md px-8 py-4 rounded-full hover:bg-secondary-fixed transition-colors active:translate-y-[2px] shadow-lg shadow-secondary/20 flex items-center gap-2"
            >
              Explore Blends
              <MaterialSymbol name="arrow_forward" />
            </a>
            <a
              href="#visit"
              className="bg-surface text-secondary border border-secondary/30 font-label-md px-8 py-4 rounded-full hover:border-secondary transition-colors active:translate-y-[2px] flex items-center gap-2"
            >
              Visit Us
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 pt-8 border-t border-outline-variant/30 w-full max-w-md mt-12">
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
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-6 relative mt-16 md:mt-0">
          <div className="relative w-full aspect-square md:aspect-[4/5] max-w-lg mx-auto">
            {/* Background organic shape */}
            <div className="absolute inset-0 bg-surface-container-highest organic-shape transform rotate-12 scale-105 opacity-50"></div>

            {/* Image container */}
            <div className="absolute inset-0 organic-shape overflow-hidden border border-outline/20 ambient-shadow">
              <img
                src={heroSplash}
                alt="Espresso coffee splashing dramatically from ceramic cup"
                className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating element 1 */}
            <div className="absolute -left-8 md:-left-12 top-1/4 glass-panel p-4 rounded-2xl flex items-center gap-4 ambient-shadow animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <MaterialSymbol name="energy_savings_leaf" filled className="text-secondary" />
              </div>
              <div>
                <p className="font-label-md text-primary text-xs uppercase tracking-wider">
                  Origin
                </p>
                <p className="font-headline-sm text-lg text-secondary">Ethiopia Yirgacheffe</p>
              </div>
            </div>

            {/* Floating element 2 */}
            <div className="absolute -right-4 md:-right-8 bottom-1/4 glass-panel p-4 rounded-2xl flex items-center gap-3 ambient-shadow animate-[bounce_7s_ease-in-out_infinite_reverse]">
              <img
                src={coffeeBeansBag}
                alt="Rustic jute bag with freshly roasted coffee beans"
                className="w-16 h-16 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <span className="px-2 py-0.5 border border-primary/30 rounded-full text-[10px] font-label-md text-primary">
                    Nutty
                  </span>
                  <span className="px-2 py-0.5 border border-primary/30 rounded-full text-[10px] font-label-md text-primary">
                    Citrus
                  </span>
                </div>
                <p className="font-label-md text-on-surface text-sm font-bold">$18.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider />
    </section>
  )
}
