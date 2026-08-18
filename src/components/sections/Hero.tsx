import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import newHeroImage from '@/assets/images/new-hero-image.png'
import heroBackground from '@/assets/images/hero-background.png'
import avatarBarista from '@/assets/images/avatar-barista.jpg'
import avatarCustomer from '@/assets/images/avatar-customer.jpg'
import avatarHands from '@/assets/images/avatar-hands.jpg'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 pt-[160px] overflow-hidden" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Abstract background elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-surface-container-high rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-primary-container rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left column */}
        <div className="md:col-span-6 flex flex-col items-start space-y-5 z-20">
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
          <div className="flex flex-wrap gap-4 pt-3">
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
          <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/30 w-full max-w-md mt-6">
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
        <div className="md:col-span-6 relative mt-10 md:mt-0">
          <div className="relative w-full max-w-none mx-auto">
            {/* Subtle caramel gradient behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D2691E]/40 via-[#F4C28C]/30 to-[#FFF0F5]/20 rounded-full blur-[60px] opacity-70 pointer-events-none"></div>
            {/* Image container with new hero image - larger size */}
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
              <img
                src={newHeroImage}
                alt="Coffee brew being poured"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient at bottom facing upwards to blend with hero background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </section>
  )
}
