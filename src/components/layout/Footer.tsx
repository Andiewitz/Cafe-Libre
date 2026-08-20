import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'
import { Dialog } from '@/components/ui/Dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/utils/cn'

const newsletterSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (_data: NewsletterFormData) => {
    // Simulate instant secure subscription
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubscribed(true)
    reset()
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <footer className="w-full bg-[#210e0b] text-[#FAF2EA] border-t border-[#3E2113] relative z-10 overflow-hidden font-sans">
      {/* Background ambient glow matching hero palette */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C87D32]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B4513]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Section: Unified Newsletter Subscription */}
      <div className="border-b border-[#3E2113]/80 relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-16 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            {/* Coffee Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-[#1A0C05] border border-[#C87D32]/50 flex items-center justify-center text-[#D6A068] mb-5 shadow-lg shadow-[#C87D32]/10">
              <MaterialSymbol name="mail" className="text-2xl text-[#D6A068]" />
            </div>

            <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl text-[#FAF2EA] leading-tight font-normal">
              Awaken Your Inbox With <br className="hidden sm:inline" />
              <span className="text-[#D6A068] italic">Seasonal Roasts.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#BBA496] max-w-lg leading-relaxed">
              Subscribe to the Roaster’s Circle for private single-origin drops, tasting flight invites, and <strong className="text-[#FAF2EA] font-semibold">15% off</strong> your first beans order.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <div className="relative w-full">
                  <MaterialSymbol
                    name="alternate_email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#D6A068]/80 pointer-events-none"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className={cn(
                      'w-full rounded-full bg-[#1A0C05] border border-[#C87D32]/40 pl-11 pr-4 py-3.5',
                      'text-[#FAF2EA] placeholder-[#FAF2EA]/40 text-sm tracking-wide',
                      'focus:outline-none focus:ring-2 focus:ring-[#C87D32] focus:border-transparent transition-all shadow-inner',
                      errors.email && 'border-red-400 focus:ring-red-400',
                    )}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-300 text-left pl-4 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto shrink-0 bg-[#C87D32] hover:bg-[#D2691E] text-white font-medium px-8 py-3.5 rounded-full transition-all active:scale-95 text-sm shadow-lg shadow-[#C87D32]/25 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Joining...'
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <MaterialSymbol name="arrow_forward" className="text-base" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Feedback Alert */}
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mt-4 px-4 py-2.5 rounded-xl bg-[#2E170C] border border-[#C87D32] text-[#FAF2EA] text-xs sm:text-sm flex items-center gap-2.5 shadow-xl"
                >
                  <span className="w-5 h-5 rounded-full bg-[#C87D32] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>Welcome to the circle! Check your email for your 15% discount code.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-xs text-[#8E7365]">
              Strictly zero spam. Unsubscribe with one click anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Navigation & Brand Section */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-16 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 group select-none"
              aria-label="Café Libre Coffee House Home"
            >
              <div className="w-11 h-11 rounded-full bg-[#1A0C05] border-2 border-[#C87D32] shadow-md flex items-center justify-center text-[#FAF2EA] transition-all group-hover:scale-105 group-hover:border-[#E59E53]">
                <MaterialSymbol name="local_cafe" filled className="text-2xl text-[#D6A068]" />
              </div>
              <div>
                <span className="font-hero text-2xl tracking-wide text-[#FAF2EA] block leading-none">
                  Café Libre
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D6A068] font-bold block mt-1">
                  Artisanal Coffee House
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#BBA496] leading-relaxed max-w-sm font-sans pt-1">
              Ethically sourced, direct-trade single-origin coffees micro-roasted in small batches to awaken the palate.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs sm:text-sm text-[#D6A068]">
              <a
                href="mailto:hello@cafelibre.com"
                className="inline-flex items-center gap-2 text-[#EFE2D4] hover:text-[#D6A068] transition-colors"
              >
                <MaterialSymbol name="mail" className="text-base text-[#C87D32]" />
                <span>hello@cafelibre.com</span>
              </a>
              <a
                href="tel:5035550123"
                className="inline-flex items-center gap-2 text-[#EFE2D4] hover:text-[#D6A068] transition-colors"
              >
                <MaterialSymbol name="phone" className="text-base text-[#C87D32]" />
                <span>(503) 555-0123</span>
              </a>
              <div className="inline-flex items-center gap-2 text-[#BBA496]">
                <MaterialSymbol name="schedule" className="text-base text-[#C87D32]" />
                <span>Daily: 6:30 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Explore */}
          <div className="md:col-span-2 sm:col-span-4 col-span-6 space-y-3.5">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#D6A068] font-sans">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BBA496]">
              <li>
                <Link to="/" className="hover:text-[#FAF2EA] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#signature-blends" className="hover:text-[#FAF2EA] transition-colors">
                  Signature Blends
                </a>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FAF2EA] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <a href="/#community-reviews" className="hover:text-[#FAF2EA] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Coffee & Craft */}
          <div className="md:col-span-2 sm:col-span-4 col-span-6 space-y-3.5">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#D6A068] font-sans">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BBA496]">
              <li>
                <Link to="/about" className="hover:text-[#FAF2EA] transition-colors">
                  Our Roastery
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-[#FAF2EA] transition-colors">
                  Cafe Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FAF2EA] transition-colors">
                  Contact & FAQs
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FAF2EA] transition-colors">
                  Rewards Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Visit */}
          <div className="md:col-span-3 sm:col-span-4 col-span-12 space-y-3.5">
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#D6A068] font-sans">
              Flagship Cafe
            </h3>
            <div className="text-sm text-[#BBA496] space-y-2">
              <p className="text-[#FAF2EA] font-medium">Pearl District Flagship</p>
              <p className="leading-relaxed">
                123 Coffee Street <br />
                Portland, OR 97201
              </p>
              <div className="pt-2">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D6A068] hover:text-white font-medium transition-colors"
                >
                  <span>Get Driving Directions</span>
                  <MaterialSymbol name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Working Legal Dialog Links */}
        <div className="mt-14 pt-8 border-t border-[#3E2113]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7365] gap-4">
          <p>© 2026 Café Libre Artisanal Coffee Co. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-[#FAF2EA] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setTermsOpen(true)}
              className="hover:text-[#FAF2EA] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen} title="Privacy Policy">
        <div className="space-y-4 text-sm text-[#2E170C]">
          <h3 className="font-hero text-2xl text-[#2E170C]">Privacy Policy</h3>
          <p className="text-[#5D4233]">
            At Café Libre, your privacy is deeply respected. We only collect the essential information required to fulfill your coffee orders, manage reward points, and deliver subscription newsletters.
          </p>
          <div className="space-y-2 text-[#5D4233]">
            <h4 className="font-bold text-[#2E170C]">1. Data Collection</h4>
            <p>We do not sell, rent, or distribute your email address or personal details to any third-party advertisers.</p>
            <h4 className="font-bold text-[#2E170C]">2. Payment Security</h4>
            <p>All in-person and digital transactions are encrypted via PCI-compliant industry standard payment gateways.</p>
            <h4 className="font-bold text-[#2E170C]">3. Contact</h4>
            <p>For any privacy requests or inquiries, reach us anytime at privacy@cafelibre.com.</p>
          </div>
        </div>
      </Dialog>

      {/* Terms of Service Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen} title="Terms of Service">
        <div className="space-y-4 text-sm text-[#2E170C]">
          <h3 className="font-hero text-2xl text-[#2E170C]">Terms of Service</h3>
          <p className="text-[#5D4233]">
            Welcome to Café Libre Artisanal Coffee House. By placing an order or using our digital services, you agree to our standard terms.
          </p>
          <div className="space-y-2 text-[#5D4233]">
            <h4 className="font-bold text-[#2E170C]">1. Artisanal Freshness Guarantee</h4>
            <p>All whole-bean and ground coffees are roasted within 48 hours of shipment to maintain maximum freshness and flavor notes.</p>
            <h4 className="font-bold text-[#2E170C]">2. Cafe Pickup & Orders</h4>
            <p>Fresh espresso drinks and pour-overs are prepared fresh upon your designated pickup window.</p>
            <h4 className="font-bold text-[#2E170C]">3. Customer Support</h4>
            <p>Reach out to support@cafelibre.com for order changes, returns, or roast consultations.</p>
          </div>
        </div>
      </Dialog>
    </footer>
  )
}
