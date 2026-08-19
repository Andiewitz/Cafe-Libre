import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { MaterialSymbol } from '@/components/ui/MaterialSymbol'

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Cold Brew' | 'Espresso' | 'Whole Beans'>('All')
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({})

  const filters = ['All', 'Cold Brew', 'Espresso', 'Whole Beans'] as const

  const filteredReviews = testimonials.filter((t) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Cold Brew') return t.favoriteBrew.toLowerCase().includes('cold brew') || t.favoriteBrew.toLowerCase().includes('nitro')
    if (activeFilter === 'Espresso') return t.favoriteBrew.toLowerCase().includes('espresso') || t.favoriteBrew.toLowerCase().includes('americano') || t.favoriteBrew.toLowerCase().includes('cappuccino')
    if (activeFilter === 'Whole Beans') return t.favoriteBrew.toLowerCase().includes('beans') || t.favoriteBrew.toLowerCase().includes('blend')
    return true
  })

  const toggleLike = (id: string) => {
    const isLiked = !!likedMap[id]
    setLikedMap((prev) => ({ ...prev, [id]: !isLiked }))
    setLikeCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + (isLiked ? -1 : 1) }))
  }

  return (
    <section className="py-20 md:py-32 bg-[#F6EDE2] relative overflow-hidden" id="community-reviews">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl text-[#2E170C] leading-tight font-normal">
              What Coffee Lovers <br />
              <span className="inline-flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="text-[#8E4D1E] italic">Are Saying</span>
                <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[#C87D32] text-2xl sm:text-3xl not-italic tracking-normal">
                  ★★★★★
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#2E170C] text-white shadow-md'
                  : 'bg-white/80 text-[#5D4233] hover:bg-white hover:text-[#2E170C] border border-[#E0D0C0]'
              }`}
            >
              {filter === 'All' ? 'All Tastings' : filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((testimonial, index) => {
              const isLiked = !!likedMap[testimonial.id]
              const totalLikes = 12 + (likeCounts[testimonial.id] || 0)

              return (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-white rounded-3xl p-7 shadow-[0_8px_24px_rgba(46,23,12,0.06)] border border-[#E4D5C7] flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(46,23,12,0.12)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Header: Stars + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#C87D32]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-base">★</span>
                        ))}
                      </div>
                      <span className="text-xs text-[#8E7365] font-sans">{testimonial.date}</span>
                    </div>

                    {/* Review Quote */}
                    <blockquote className="text-[#3E281C] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      "{testimonial.content}"
                    </blockquote>
                  </div>

                  <div>
                    {/* Favorite Brew Badge */}
                    <div className="mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#FAF2EA] border border-[#E5D2C0] text-[11px] font-semibold text-[#8E4D1E]">
                      <MaterialSymbol name="local_cafe" className="text-xs text-[#C87D32]" />
                      <span>{testimonial.favoriteBrew}</span>
                    </div>

                    {/* Reviewer Profile Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#F2E8DC]">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#C87D32]/30 shadow-sm"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-bold text-sm text-[#2E170C] leading-none mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-[#8E7365] leading-none">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Helpful / Heart Button */}
                      <button
                        onClick={() => toggleLike(testimonial.id)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                          isLiked
                            ? 'bg-[#C87D32]/15 text-[#8E4D1E]'
                            : 'text-[#8E7365] hover:text-[#2E170C] hover:bg-[#FAF2EA]'
                        }`}
                        aria-label="Mark review as helpful"
                      >
                        <MaterialSymbol
                          name="favorite"
                          filled={isLiked}
                          className={`text-sm ${isLiked ? 'text-[#C87D32]' : 'text-[#8E7365]'}`}
                        />
                        <span>{totalLikes}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
