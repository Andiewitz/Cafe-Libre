import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ThumbsUp } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { Marquee } from '@/components/ui/marquee'

// Google G mini logo SVG component
function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  )
}

export function Testimonials() {
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({})
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})

  const toggleLike = (id: string) => {
    const isLiked = !!likedMap[id]
    setLikedMap((prev) => ({ ...prev, [id]: !isLiked }))
    setLikeCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + (isLiked ? -1 : 1) }))
  }

  return (
    <section className="py-20 md:py-32 bg-[#F6EDE2] relative overflow-hidden" id="community-reviews">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-16 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl text-[#2E170C] leading-tight font-normal">
              What Coffee Lovers <br />
              <span className="inline-flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-[#8E4D1E] italic">Are Saying</span>
                <span className="inline-flex items-center gap-0.5 text-[#FBBC04] text-xl sm:text-2xl not-italic">
                  <Star className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                  <Star className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                  <Star className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                  <Star className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                  <Star className="w-6 h-6 fill-[#FBBC04] text-[#FBBC04]" />
                </span>
              </span>
            </h2>
          </div>

          {/* Google Reviews rating snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/80 border border-[#E4D5C7] shadow-sm self-start sm:self-auto"
          >
            <GoogleIcon className="w-5 h-5 shrink-0" />
            <div className="text-xs font-sans text-[#2E170C]">
              <span className="font-bold text-sm mr-1">4.9</span>
              <span className="text-[#8E7365]">rating on Google Maps</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Row Carousel Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative"
      >
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F6EDE2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F6EDE2] to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover speed="normal" className="py-4">
          {testimonials.map((testimonial) => {
            const isLiked = !!likedMap[testimonial.id]
            const currentLikes = testimonial.likes + (likeCounts[testimonial.id] || 0)

            return (
              <div
                key={testimonial.id}
                className="w-[340px] sm:w-[380px] shrink-0 mx-3 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(46,23,12,0.06)] border border-[#E5D7CA] hover:shadow-[0_8px_28px_rgba(46,23,12,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Google Reviews User Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#E0D0C0]"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.onerror = null
                          target.src = '/placeholder.svg'
                        }}
                      />
                      <div>
                        <h3 className="font-sans font-bold text-sm text-[#2E170C] leading-snug">
                          {testimonial.name}
                        </h3>
                        <p className="font-sans text-xs text-[#8E7365]">
                          {testimonial.badge}
                        </p>
                      </div>
                    </div>
                    <GoogleIcon className="w-4 h-4 shrink-0 opacity-90 mt-1" />
                  </div>

                  {/* Stars + Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#8E7365] font-sans">• {testimonial.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#3E281C] font-sans leading-relaxed line-clamp-4">
                    {testimonial.content}
                  </p>
                </div>

                {/* Card Footer: Helpful Action */}
                <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between">
                  <button
                    onClick={() => toggleLike(testimonial.id)}
                    className={`flex items-center gap-1.5 text-xs font-sans font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      isLiked
                        ? 'text-[#C87D32] bg-[#FAF2EA]'
                        : 'text-[#8E7365] hover:text-[#2E170C] hover:bg-[#FAF2EA]'
                    }`}
                  >
                    <ThumbsUp
                      className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#C87D32] text-[#C87D32]' : 'text-[#8E7365]'}`}
                    />
                    <span>Helpful ({currentLikes})</span>
                  </button>

                  <span className="text-[11px] text-[#A89080] font-sans">Verified Customer</span>
                </div>
              </div>
            )
          })}
        </Marquee>
      </motion.div>
    </section>
  )
}
