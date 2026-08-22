import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatPrice } from '@/utils/formatters'
import { CartIcon, HeartIcon } from '@/components/icons/IconSet'
import { cn } from '@/utils/cn'

export interface MenuCardProps {
  id?: string
  name: string
  description: string
  price: number
  image?: string
  popular?: boolean
  badgeText?: string
  category?: string
  onAddToCart?: (item: { name: string; price: number; image?: string }) => void
  className?: string
}

export function MenuCard({
  name,
  description,
  price,
  image,
  popular,
  badgeText,
  category,
  onAddToCart,
  className,
}: MenuCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const defaultBadge =
    badgeText || (popular ? 'Trending' : category === 'coffee' ? 'Signature' : 'Popular')

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    setJustAdded(true)
    onAddToCart?.({ name, price, image })
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'group relative flex flex-col justify-between bg-white',
        'rounded-[28px] sm:rounded-[32px] p-3 sm:p-3.5',
        'shadow-[0_8px_24px_-6px_rgba(46,23,12,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(46,23,12,0.12)]',
        'border border-[#EFE5DC]/90 transition-shadow duration-300',
        className,
      )}
    >
      {/* Top Image Showcase */}
      <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-[#1C130E] via-[#2A1D16] to-[#3E2B21] flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget
              target.onerror = null
              target.src = '/placeholder.svg'
            }}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-[#FAF2EA]/60 font-medium">
            Café Libre Roast
          </div>
        )}

        {/* Studio Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top-Left Pill Badge (Matching 'Trending' green badge in reference) */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-[#10B981] text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md shadow-emerald-950/20">
            {defaultBadge}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-1 pt-3.5 sm:pt-4 pb-1">
        {/* Title and Heart Row */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-base sm:text-lg text-[#1A0C05] leading-snug line-clamp-1 group-hover:text-[#C87D32] transition-colors">
            {name}
          </h3>

          {/* Heart Button next to Title (Matching right card in reference) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className={cn(
              'w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer',
              isFavorite
                ? 'bg-red-50 text-red-500'
                : 'bg-[#FAF5F0] text-[#A0887A] hover:text-red-500 hover:bg-red-50',
            )}
          >
            <HeartIcon
              className={cn(
                'w-4 h-4 transition-all duration-200',
                isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-[#8E7365]',
              )}
            />
          </button>
        </div>

        {/* Description Subtitle */}
        <p className="mt-1 text-xs sm:text-[13px] text-[#7A6052] line-clamp-2 leading-relaxed font-normal">
          {description}
        </p>

        {/* Bottom Row: Price & Cutout Corner with Floating Cart Button */}
        <div className="mt-3.5 sm:mt-4 pt-1 flex items-end justify-between relative">
          {/* Price */}
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg md:text-xl text-[#1A0C05] tracking-tight">
              {formatPrice(price)}
            </span>
          </div>

          {/* Floating Cart Button Container with Inverted Fillet Curve */}
          <div className="relative -mr-1 -mb-1">
            {/* Smooth concave fillet blending into the white card (top) */}
            <div
              className="absolute -top-3.5 right-0 w-3.5 h-3.5 pointer-events-none z-0"
              style={{
                borderBottomRightRadius: '12px',
                boxShadow: '3px 3px 0 3px #FFFFFF',
              }}
            />
            {/* Smooth concave fillet blending into the white card (left) */}
            <div
              className="absolute bottom-0 -left-3.5 w-3.5 h-3.5 pointer-events-none z-0"
              style={{
                borderBottomRightRadius: '12px',
                boxShadow: '3px 3px 0 3px #FFFFFF',
              }}
            />

            {/* Floating Action Cart Button */}
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add ${name} to cart`}
              className={cn(
                'relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-[16px] sm:rounded-[18px]',
                'bg-white border border-[#EFE5DC] shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_18px_rgba(200,125,50,0.25)]',
                'flex items-center justify-center text-[#1A0C05]',
                'hover:bg-[#210E0B] hover:text-white hover:border-[#210E0B]',
                'transition-all duration-200 active:scale-90 cursor-pointer',
                justAdded && 'bg-[#10B981] text-white border-[#10B981]',
              )}
            >
              <AnimatePresence mode="wait">
                {justAdded ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="font-bold text-xs"
                  >
                    ✓
                  </motion.span>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <CartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
