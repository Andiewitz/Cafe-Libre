export function SignatureCoffees() {
  return (
    <section className="py-24 md:py-32 bg-[#F5E6D3]" id="signature-blends">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <h2 className="font-hero text-[2.5rem] md:text-[4rem] font-normal text-charcoal mb-16 text-center">
          Our Most Popular Picks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Product info */}
          <div>
            <h3 className="font-hero text-3xl md:text-4xl text-charcoal mb-4">
              Brew Pod Coffee House
            </h3>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Experience the delicious taste your ears deserve to. Savor for the ears,
              very for the heart. A treat to your ears.
            </p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-charcoal">$5.99</span>
              <span className="text-lg text-charcoal/50 line-through">$6.99</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-charcoal/20 rounded-full px-4 py-2">
                <button className="text-charcoal hover:text-secondary transition-colors">−</button>
                <span className="mx-4 text-charcoal font-medium">03</span>
                <button className="text-charcoal hover:text-secondary transition-colors">+</button>
              </div>
              <button className="bg-[#3D2010] text-white px-6 py-3 rounded-full hover:bg-[#2A150A] transition-colors">
                Buy $17.97
              </button>
            </div>
          </div>

          {/* Right: Right side TALL (top), left side LOWER (down), all 4 corners rounded */}
          <div className="relative">
            <svg viewBox="0 0 500 360" className="w-full h-auto" style={{ maxHeight: '360px' }}>
              <path
                d="M 30 340 Q 0 340 0 310 L 0 100 Q 0 80 30 80 L 470 0 Q 490 0 490 30 L 490 310 Q 490 340 470 340 L 30 340 Z"
                fill="#3D2010"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/30 text-lg font-medium">Image</span>
            </div>
          </div>
        </div>

        {/* Bottom: Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-300 text-sm">Image</span>
            </div>
            <h3 className="font-bold text-charcoal mb-1">Vanilla Bliss</h3>
            <p className="text-charcoal/70 font-medium">$13.49</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-300 text-sm">Image</span>
            </div>
            <h3 className="font-bold text-charcoal mb-1">Medium Roast</h3>
            <p className="text-charcoal/70 font-medium">$11.49</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-gray-300 text-sm">Image</span>
            </div>
            <h3 className="font-bold text-charcoal mb-1">Intense Roast</h3>
            <p className="text-charcoal/70 font-medium">$12.49</p>
          </div>
        </div>
      </div>
    </section>
  )
}
