export function SignatureCoffees() {
  return (
    <section className="py-24 md:py-32 relative bg-white" id="signature-blends">
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

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 text-center">
        <h2 className="font-hero text-[2.5rem] md:text-[4rem] font-normal text-charcoal mb-6 tracking-tight">
          Our Most Popular Picks
        </h2>
        <p className="font-body-lg text-charcoal/70 max-w-2xl mx-auto">
          Hand-selected favorites loved by our community. Each cup tells a story.
        </p>
      </div>
    </section>
  )
}
