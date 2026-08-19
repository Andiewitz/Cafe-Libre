import { MaterialSymbol } from '@/components/ui/MaterialSymbol'

export function Footer() {
  return (
    <footer className="w-full bg-[#1C0D06] text-[#FAF2EA] border-t border-[#3E2314] relative z-10 py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-16 flex flex-col items-center text-center">
        {/* Brand Emblazon */}
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#C87D32] flex items-center justify-center text-white shadow-sm">
            <MaterialSymbol name="local_cafe" filled className="text-xl" />
          </div>
          <span className="font-hero text-2xl tracking-wide text-[#FAF2EA]">Brew Pod</span>
        </div>

        <p className="max-w-md text-sm text-[#BBA496] leading-relaxed mb-6 font-sans">
          Small-batch artisanal coffee roasting, cold drip extractions, and single-origin beans crafted for true coffee aficionados.
        </p>

        {/* Centered Email Contact Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="mailto:hello@brewpodcoffee.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#D6A068]/30 text-xs sm:text-sm text-[#FAF2EA] transition-all font-sans"
          >
            <MaterialSymbol name="mail" className="text-sm text-[#C87D32]" />
            <span>hello@brewpodcoffee.com</span>
          </a>
          <span className="text-xs text-[#8E7365]">•</span>
          <span className="text-xs text-[#BBA496] font-sans">Open Daily: 6:30 AM – 8:00 PM</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#D6A068] font-sans mb-8">
          <a href="#signature-blends" className="hover:text-white transition-colors">Our Brews</a>
          <a href="#community-reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="/menu" className="hover:text-white transition-colors">Menu</a>
          <a href="/location" className="hover:text-white transition-colors">Locations</a>
          <a href="/about" className="hover:text-white transition-colors">Our Craft</a>
        </div>

        {/* Bottom copyright */}
        <div className="w-full pt-8 border-t border-[#3E2314]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7365] gap-4 font-sans">
          <p>© 2026 Brew Pod Artisanal Coffee Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FAF2EA] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF2EA] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
